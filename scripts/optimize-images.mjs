// Build-time image optimizer (static export has no image server).
//
// Reads originals from data/source/{brand,images}/ (never served) and writes
// optimized files into public/. Writes src/content/image-manifest.json, which
// <ResponsiveImage> uses to build srcset/<picture> markup.
//
//   npm run optimize:images          # incremental (skips up-to-date outputs)
//   npm run optimize:images -- --force
//
// Naming: data/source/images/causes/youth-learning.jpg ->
//   public/images/causes/youth-learning.webp          (default / fallback src)
//   public/images/causes/youth-learning-<w>.webp      (srcset widths)
//   public/images/hero/hero_1-<w>.avif                (AVIF only where listed)
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "data", "source");
const PUB = path.join(ROOT, "public");
const MANIFEST = path.join(ROOT, "src", "content", "image-manifest.json");
const force = process.argv.includes("--force");

// Per-folder rules. `widths` are capped at the original width; `max` is the
// width of the default (non-suffixed) file. Sizes are ~2x the largest rendered
// CSS width in each context.
const RULES = [
  // Full-bleed LCP hero: AVIF + WebP, mobile and desktop widths.
  { dir: "images/hero", widths: [828, 1280, 1920], max: 1920, quality: 64, avif: true, avifQuality: 50 },
  // Photos used as full-bleed page heroes, bands and cards.
  { dir: "images/causes", widths: [640, 1080, 1600], max: 1600, quality: 64 },
  // State landmark photos: full-bleed state page hero + small map preview.
  { dir: "images/states", widths: [640, 1080, 1600], max: 1600, quality: 62 },
  // Team / founder portraits: rendered at most ~560 CSS px wide.
  { dir: "images/team", widths: [400, 800, 1080], max: 1080, quality: 78 },
];
// Logos: single fixed-size WebP with alpha, ~2x display width.
const LOGOS = [
  { file: "brand/gsr-logo.png", width: 360 },
  { file: "brand/gsr-logo-light.png", width: 400 },
];

const isImage = (f) => /\.(png|jpe?g|webp|tiff?)$/i.test(f);
const kb = (n) => `${Math.round(n / 1024)} KB`;
const stale = (src, out) => force || !fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs;
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

const manifest = {};
let written = 0, skipped = 0, inBytes = 0, outBytes = 0;

async function write(pipeline, out, src) {
  if (!stale(src, out)) { skipped++; outBytes += fs.statSync(out).size; return; }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await pipeline.toFile(out);
  written++;
  outBytes += fs.statSync(out).size;
}

for (const rule of RULES) {
  const srcDir = path.join(SRC, rule.dir);
  if (!fs.existsSync(srcDir)) continue;
  for (const name of fs.readdirSync(srcDir).filter(isImage).sort()) {
    const src = path.join(srcDir, name);
    const base = name.replace(/\.[^.]+$/, "");
    const meta = await sharp(src).metadata();
    inBytes += fs.statSync(src).size;
    const widths = [...new Set(rule.widths.map((w) => Math.min(w, meta.width)))].sort((a, b) => a - b);
    const maxW = Math.min(rule.max, meta.width);
    const outDir = path.join(PUB, rule.dir);
    const resize = (w) => sharp(src).rotate().resize({ width: w, withoutEnlargement: true });

    await write(resize(maxW).webp({ quality: rule.quality, effort: 6 }), path.join(outDir, `${base}.webp`), src);
    for (const w of widths)
      await write(resize(w).webp({ quality: rule.quality, effort: 6 }), path.join(outDir, `${base}-${w}.webp`), src);
    if (rule.avif)
      for (const w of widths)
        await write(resize(w).avif({ quality: rule.avifQuality, effort: 5 }), path.join(outDir, `${base}-${w}.avif`), src);

    const key = `/${rule.dir}/${base}.webp`;
    manifest[key] = {
      width: maxW,
      height: Math.round((meta.height * maxW) / meta.width),
      widths,
      ...(rule.avif ? { avif: true } : {}),
    };
  }
}

for (const logo of LOGOS) {
  const src = path.join(SRC, logo.file);
  if (!fs.existsSync(src)) continue;
  inBytes += fs.statSync(src).size;
  const out = path.join(PUB, logo.file.replace(/\.[^.]+$/, ".webp"));
  await write(
    sharp(src).resize({ width: logo.width }).webp({ quality: 72, alphaQuality: 70, effort: 6 }),
    out,
    src,
  );
  const m = await sharp(out).metadata();
  console.log(`  ${rel(out)}  ${m.width}x${m.height}  ${kb(fs.statSync(out).size)}`);
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 0) + "\n");
console.log(
  `optimize-images: ${written} written, ${skipped} up to date, ${Object.keys(manifest).length} responsive images.\n` +
    `  originals ${kb(inBytes)} -> outputs ${kb(outBytes)} (all widths/formats)`,
);
