// One-off script: downloads per-state district boundary topojson from
// guneetnarula/indian-district-boundaries (MIT licensed) and converts each
// to a plain GeoJSON FeatureCollection under public/data/districts/<id>.json,
// keyed by the same state `id` slug used in app/data/states-data.js.
//
// Run once with `node scripts/fetch-district-boundaries.mjs`; not part of
// the app's runtime or build.

import { feature } from "topojson-client";
import { writeFileSync, mkdirSync } from "node:fs";

const BASE =
  "https://raw.githubusercontent.com/guneetnarula/indian-district-boundaries/master/topojson/state-wise/";

// source file name -> state id slug (matches states-data.js STATE_LIST ids)
const FILE_TO_STATE_ID = {
  andamannicobar: "andaman-and-nicobar-islands",
  andhrapradesh: "andhra-pradesh",
  arunachalpradesh: "arunachal-pradesh",
  assam: "assam",
  bihar: "bihar",
  chandigarh: "chandigarh",
  chhattisgarh: "chhattisgarh",
  dadranagarhaveli: "dadra-and-nagar-haveli-and-daman-and-diu",
  delhi: "delhi",
  goa: "goa",
  gujarat: "gujarat",
  haryana: "haryana",
  himachalpradesh: "himachal-pradesh",
  jammukashmir: "jammu-and-kashmir",
  jharkhand: "jharkhand",
  karnataka: "karnataka",
  kerala: "kerala",
  ladakh: "ladakh",
  lakshadweep: "lakshadweep",
  madhyapradesh: "madhya-pradesh",
  maharashtra: "maharashtra",
  manipur: "manipur",
  meghalaya: "meghalaya",
  mizoram: "mizoram",
  nagaland: "nagaland",
  odisha: "odisha",
  puducherry: "puducherry",
  punjab: "punjab",
  rajasthan: "rajasthan",
  sikkim: "sikkim",
  tamilnadu: "tamil-nadu",
  telangana: "telangana",
  tripura: "tripura",
  uttarakhand: "uttarakhand",
  uttarpradesh: "uttar-pradesh",
  westbengal: "west-bengal",
};

mkdirSync("public/data/districts", { recursive: true });

for (const [file, stateId] of Object.entries(FILE_TO_STATE_ID)) {
  const res = await fetch(`${BASE}${file}.json`);
  if (!res.ok) {
    console.error(`FAILED ${file}: ${res.status}`);
    continue;
  }
  const topo = await res.json();
  const objectKey = Object.keys(topo.objects)[0];
  const geojson = feature(topo, topo.objects[objectKey]);

  // Trim to just the fields the map/UI needs. Most sheets key the district
  // name as `district`; a few (jammukashmir, ladakh, andhrapradesh) use
  // `dtname` instead.
  geojson.features = geojson.features.map((f) => ({
    ...f,
    properties: { district: f.properties.district ?? f.properties.dtname },
  }));

  writeFileSync(`public/data/districts/${stateId}.json`, JSON.stringify(geojson));
  console.log(`${stateId}: ${geojson.features.length} districts`);
}
