// GSR member directory — data source for the Global Members Globe section.
//
// `getMembers()` is the single seam this section reads from. Swap its body
// for a real request (e.g. `await fetch("/api/members")` or a CMS client
// call) once GSR member data is available; every consumer downstream only
// depends on the shape below, not on where the array comes from.
//
// Member shape:
//   id            string   unique identifier
//   name          string   member's full name
//   organization  string   organization the member represents
//   country       string
//   region        string   continent, used for the region/continent filter
//   state         string   state/province, used for the state filter ("" if not applicable)
//   city          string
//   category      string   primary cause area, used for the category filter (derived from members present)
//   latitude      number   used to place the globe marker
//   longitude     number   used to place the globe marker
//   profileImage  string   profile photo URL, or "" to fall back to initials
//   description   string   short bio / focus area
//   website       string   link to the member's profile or organization site
//
// The entries below are placeholder sample data standing in for that feed.

const sampleMembers = [
  {
    id: "gsr-001",
    name: "Ananya Raghavan",
    organization: "Coimbatore Green Collective",
    country: "India",
    region: "Asia",
    state: "Tamil Nadu",
    city: "Coimbatore",
    category: "Environment & Climate",
    latitude: 11.0168,
    longitude: 76.9558,
    profileImage: "",
    description:
      "Leads community reforestation and clean-water initiatives across the Nilgiris foothills.",
    website: "#",
  },
  {
    id: "gsr-002",
    name: "Imogen Clarke",
    organization: "Thames Youth Trust",
    country: "United Kingdom",
    region: "Europe",
    state: "",
    city: "London",
    category: "Youth Development",
    latitude: 51.5072,
    longitude: -0.1276,
    profileImage: "",
    description:
      "Runs after-school STEM programs for underserved youth across East London.",
    website: "#",
  },
  {
    id: "gsr-003",
    name: "Marcus Bennett",
    organization: "Hudson Valley Renewal Fund",
    country: "United States",
    region: "North America",
    state: "",
    city: "New York",
    category: "Community Development",
    latitude: 40.7128,
    longitude: -74.006,
    profileImage: "",
    description:
      "Coordinates urban sustainability grants for community gardens and solar co-ops.",
    website: "#",
  },
  {
    id: "gsr-004",
    name: "Wanjiru Kamau",
    organization: "Nairobi Water Access Project",
    country: "Kenya",
    region: "Africa",
    state: "",
    city: "Nairobi",
    category: "Water & Sanitation",
    latitude: -1.2921,
    longitude: 36.8219,
    profileImage: "",
    description:
      "Builds low-cost water filtration systems for peri-urban settlements.",
    website: "#",
  },
  {
    id: "gsr-005",
    name: "Beatriz Almeida",
    organization: "Instituto Mata Viva",
    country: "Brazil",
    region: "South America",
    state: "",
    city: "São Paulo",
    category: "Environment & Climate",
    latitude: -23.5505,
    longitude: -46.6333,
    profileImage: "",
    description:
      "Works on Atlantic Forest restoration and environmental education programs.",
    website: "#",
  },
  {
    id: "gsr-006",
    name: "Liam O'Connor",
    organization: "Southern Coast Conservancy",
    country: "Australia",
    region: "Oceania",
    state: "",
    city: "Sydney",
    category: "Environment & Climate",
    latitude: -33.8688,
    longitude: 151.2093,
    profileImage: "",
    description:
      "Leads coastal cleanup and marine habitat monitoring along New South Wales.",
    website: "#",
  },
  {
    id: "gsr-007",
    name: "Haruto Sato",
    organization: "Tokyo Circular Futures",
    country: "Japan",
    region: "Asia",
    state: "",
    city: "Tokyo",
    category: "Technology & Digital Inclusion",
    latitude: 35.6762,
    longitude: 139.6503,
    profileImage: "",
    description:
      "Advises small businesses on transitioning to circular, low-waste operations.",
    website: "#",
  },
  {
    id: "gsr-008",
    name: "Naledi Dube",
    organization: "Cape Youth Empowerment Network",
    country: "South Africa",
    region: "Africa",
    state: "",
    city: "Cape Town",
    category: "Livelihood & Employment",
    latitude: -33.9249,
    longitude: 18.4241,
    profileImage: "",
    description:
      "Mentors first-generation students through vocational and digital-skills training.",
    website: "#",
  },
  {
    id: "gsr-009",
    name: "Sophie Tremblay",
    organization: "Great Lakes Equity Initiative",
    country: "Canada",
    region: "North America",
    state: "",
    city: "Toronto",
    category: "Housing & Homelessness",
    latitude: 43.6532,
    longitude: -79.3832,
    profileImage: "",
    description:
      "Advocates for inclusive housing policy and community land trusts.",
    website: "#",
  },
  {
    id: "gsr-010",
    name: "Jonas Weber",
    organization: "Berlin Klimahaus Coalition",
    country: "Germany",
    region: "Europe",
    state: "",
    city: "Berlin",
    category: "Environment & Climate",
    latitude: 52.52,
    longitude: 13.405,
    profileImage: "",
    description:
      "Organizes neighborhood energy cooperatives and retrofit financing programs.",
    website: "#",
  },
  {
    id: "gsr-011",
    name: "Fatima Al Suwaidi",
    organization: "Gulf Sustainability Forum",
    country: "United Arab Emirates",
    region: "Asia",
    state: "",
    city: "Dubai",
    category: "Governance & Civic Engagement",
    latitude: 25.2048,
    longitude: 55.2708,
    profileImage: "",
    description:
      "Connects regional NGOs on desert ecology research and public awareness campaigns.",
    website: "#",
  },
  {
    id: "gsr-012",
    name: "Carlos Villanueva",
    organization: "Manila Bay Restoration Alliance",
    country: "Philippines",
    region: "Asia",
    state: "",
    city: "Manila",
    category: "Disaster Relief",
    latitude: 14.5995,
    longitude: 120.9842,
    profileImage: "",
    description:
      "Coordinates mangrove replanting and flood-resilience programs around Manila Bay.",
    website: "#",
  },
];

export function getMembers() {
  return sampleMembers;
}
