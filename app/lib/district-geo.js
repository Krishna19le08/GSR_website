// Matches a district name from the CSR spend report (app/data/district-csr-data.json)
// against a district name from the boundary geojson (public/data/districts/*.json).
// The two sources spell some districts differently (transliteration variants
// like "Ahmedabad"/"Ahmadabad", "Koderma"/"Kodarma", or "Saraikela Kharsawan"/
// "Saraikela-kharsawan"), so exact string equality misses real matches.
//
// `districtSkeleton` reduces a name to lowercase consonants only — collapsing
// case, spacing, punctuation, a leading "The", doubled letters and vowels —
// so those spelling variants collapse to the same key. It's intentionally
// lossy: a few genuinely different names (e.g. "East Singhbhum" vs the
// report's "Purbi Singhbhum") still won't match, and a handful of districts
// created/renamed after the boundary data was captured (e.g. Vijayanagara,
// Sribhumi) have no polygon at all. Those are expected gaps in a demo
// dataset, not bugs — callers should treat "no match" as "no data available"
// rather than an error.
export function districtSkeleton(name) {
  if (!name) return "";
  let s = name.toLowerCase().trim();
  s = s.replace(/^the\s+/, "");
  s = s.replace(/[^a-z]/g, "");
  s = s.replace(/(.)\1+/g, "$1");
  return s.replace(/[aeiou]/g, "");
}

// Finds the best match for `geoDistrictName` among the keys of `csrByName`
// (a Map or plain object keyed by the CSR report's district name). Tries an
// exact skeleton match first, then falls back to a skeleton prefix match in
// either direction (handles "Kamrup Metro" vs "Kamrup Metropolitan").
export function matchDistrictKey(geoDistrictName, candidateNames) {
  const target = districtSkeleton(geoDistrictName);
  if (!target) return null;

  let prefixMatch = null;
  for (const candidate of candidateNames) {
    const key = districtSkeleton(candidate);
    if (key === target) return candidate;
    if (!prefixMatch && (key.startsWith(target) || target.startsWith(key))) {
      prefixMatch = candidate;
    }
  }
  return prefixMatch;
}
