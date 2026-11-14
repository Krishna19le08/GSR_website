// Simplifies oversized district boundary files for the web.
//
// Source (full detail, never served): data/source/geo/districts/<id>.json
// Output:                            public/data/geo/districts/<id>.json
//
//   npm run build:geo
//
// 1. mapshaper -simplify (topology-preserving, so shared district borders
//    stay identical and no gaps/overlaps appear) + coordinate precision
//    reduced to 1e-5 deg (~1 m).
// 2. Simplification collapses tiny coastal islands (mapshaper's keep-shapes
//    only protects a feature's main shape). Any original polygon part that
//    no longer exists is restored from the source, rounded to the same
//    precision. Islands share no borders, so restoring them is safe.
// All properties (district names) are kept unchanged.
import fs from "node:fs";
import path from "node:path";
import mapshaper from "mapshaper";

const SRC_DIR = path.join("data", "source", "geo", "districts");
const OUT_DIR = path.join("public", "data", "geo", "districts");
// Only states whose source is far denser than the rest are simplified.
const FILES = { "tamil-nadu": "15%" };
const PRECISION = 1e-5;

const round = (n) => Math.round(n / PRECISION) * PRECISION;
const roundRing = (ring) => ring.map(([x, y]) => [+round(x).toFixed(5), +round(y).toFixed(5)]);
const polygonsOf = (geom) => (geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates);

function bbox(ring) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of ring) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  return [x0, y0, x1, y1];
}
// A source part counts as kept if a simplified part's bounding box mostly
// matches it (intersection-over-union). Simplification moves outlines by
// only a few metres, so a surviving part always overlaps its original.
function sameShape(a, b) {
  const ix = Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0]));
  const iy = Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));
  const inter = ix * iy;
  const area = (r) => Math.max(r[2] - r[0], 1e-9) * Math.max(r[3] - r[1], 1e-9);
  return inter / (area(a) + area(b) - inter) > 0.5;
}
const stats = (fc) => {
  let parts = 0, vertices = 0;
  const walk = (c) => (typeof c[0] === "number" ? vertices++ : c.forEach(walk));
  for (const f of fc.features) { parts += polygonsOf(f.geometry).length; walk(f.geometry.coordinates); }
  return { features: fc.features.length, parts, vertices };
};

for (const [id, pct] of Object.entries(FILES)) {
  const srcPath = path.join(SRC_DIR, `${id}.json`);
  const source = JSON.parse(fs.readFileSync(srcPath, "utf8"));

  const out = await mapshaper.applyCommands(
    `-i in.json -simplify ${pct} keep-shapes -o out.json format=geojson precision=${PRECISION}`,
    { "in.json": source },
  );
  const simplified = JSON.parse(out["out.json"].toString());

  // Restore polygon parts (islands) that simplification removed.
  let restored = 0;
  const byName = new Map(simplified.features.map((f) => [f.properties.district, f]));
  for (const f of source.features) {
    const target = byName.get(f.properties.district);
    if (!target) throw new Error(`feature lost: ${f.properties.district}`);
    const kept = polygonsOf(target.geometry);
    const keptBoxes = kept.map((k) => bbox(k[0]));
    const add = [];
    for (const poly of polygonsOf(f.geometry)) {
      const b = bbox(poly[0]);
      if (!keptBoxes.some((k) => sameShape(b, k))) add.push(poly.map(roundRing));
    }
    if (add.length) {
      target.geometry = { type: "MultiPolygon", coordinates: [...kept, ...add] };
      restored += add.length;
    }
  }

  // Validate before writing: same features, names and property keys.
  const a = source.features.map((f) => JSON.stringify(f.properties)).sort();
  const b = simplified.features.map((f) => JSON.stringify(f.properties)).sort();
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`${id}: properties changed`);

  const outPath = path.join(OUT_DIR, `${id}.json`);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(simplified));
  const s0 = stats(source), s1 = stats(simplified);
  console.log(
    `${id}: ${Math.round(fs.statSync(srcPath).size / 1024)} KB -> ${Math.round(fs.statSync(outPath).size / 1024)} KB, ` +
      `vertices ${s0.vertices} -> ${s1.vertices}, parts ${s0.parts} -> ${s1.parts} (${restored} islands restored), ` +
      `${s1.features} districts`,
  );
}
