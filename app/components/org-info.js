// Single source for GSR's public contact and registration details.
// Used by the Footer, /contact and /donate. Edit here, not in pages.
// Do NOT add 80G / 12A / FCRA / PAN claims until they are confirmed.

export const org = {
  name: "Global Social Responsibility Welfare Foundation",
  shortName: "GSR",
  tagline: "பகுத்துண்டு பல்லுயிர் ஓம்புதல்",
  registration: "Reg. No. B-4/105/2026",
  registrationLine: "Registered non-profit · Reg. No. B-4/105/2026",
  founded: 2026,
  email: "info.gsrwf@gmail.com",
  phones: [
    { display: "+91 87545 63555", tel: "+918754563555" },
    { display: "+91 94441 79215", tel: "+919444179215" },
  ],
  address: {
    lines: ["No 15, Ponnappa Lane, Triplicane", "Chennai 600005, Tamil Nadu, India"],
    oneLine: "No 15, Ponnappa Lane, Triplicane, Chennai 600005, Tamil Nadu, India",
  },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  org.address.oneLine,
)}`;

export function mailto(subject, body) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString().replace(/\+/g, "%20");
  return `mailto:${org.email}${q ? `?${q}` : ""}`;
}

// Social profiles: leave href null until a real URL exists; null entries
// are not rendered anywhere.
export const socialLinks = [
  { label: "Facebook", href: null },
  { label: "Instagram", href: null },
  { label: "LinkedIn", href: null },
  { label: "YouTube", href: null },
];
