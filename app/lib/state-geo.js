// Maps a state/UT name as it appears in the India states GeoJSON
// (public/data/india-states.geojson, source property "ST_NM") to the state
// `id` used across states-data.js. Most names slugify to the same id already
// used there; only the two names GeoJSON spells with "&" need an alias.

const ALIASES = {
  "andaman & nicobar": "andaman-and-nicobar-islands",
  "jammu & kashmir": "jammu-and-kashmir",
};

export function slugifyStateName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function stateIdFromGeoName(geoName) {
  const lower = geoName.toLowerCase();
  if (ALIASES[lower]) return ALIASES[lower];
  return slugifyStateName(geoName);
}
