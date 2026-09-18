// One hand-drawn glyph per state/UT, keyed by the `id` slug from
// ../../data/states-data.js. Each hints at a landmark, animal or motif
// associated with that state/UT — simplified line art in the same stroke
// style as ../icons.jsx, not a photoreal illustration.

export const STATE_ICON_PATHS = {
  "jammu-and-kashmir": "M4 16 8 8l4 8M13 16l3-6 3 6M2 19c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0",
  ladakh: "M4 18h16M9 18V13a3 3 0 0 1 6 0v5M12 13V4M10 6h4",
  "himachal-pradesh": "M2 18 8 8l4 6M12 18h8M14 18v-4h4v4M14 14l2-3 2 3",
  punjab:
    "M12 21V9M12 9c-2 0-3-2-3-4M12 9c2 0 3-2 3-4M12 13c-2 0-3-2-3-4M12 13c2 0 3-2 3-4M12 17c-2 0-3-1-3-3M12 17c2 0 3-1 3-3",
  haryana: "M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm12 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM5 17h6l2-5h4l2 3M9 12V8h4",
  uttarakhand: "M3 18 9 8l3 5M12 18h9M14 18v-3h3v3M2 20c2-1 4-1 6 0",
  delhi: "M6 20V10a6 6 0 0 1 12 0v10M4 20h16M9 20v-6M15 20v-6",
  rajasthan: "M3 18h2l1-5 2-2 1 4 2-3 1 3 2-1 1 4h4M9 11V8",
  "uttar-pradesh": "M12 4a3 3 0 0 1 3 3c1 .5 2 2 2 4v7H7v-7c0-2 1-3.5 2-4a3 3 0 0 1 3-3ZM5 11v7M19 11v7",
  bihar: "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-5 14c0-3 2-5 5-5s5 2 5 5M7 18h10M9 18v-3M15 18v-3",
  sikkim: "M8 17V10l4-4 4 4v7M6 17h12M4 20c2-1 4-1 6 0s4 1 6 0 4-1 4 0",
  "arunachal-pradesh": "M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 19 8 11l3 4 3-5 8 9H2Z",
  nagaland:
    "M4 14c2-3 5-4 8-3 3-3 6-2 8 1-2 0-3 1-3 2 2 1 3 3 3 5-3-1-5-3-6-5-3 3-7 4-10 2 1-1 1-2 0-2Z",
  manipur: "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 4v5m0 0-4 6m4-6 4 6m-6-9-3 2m9-2 3 2",
  mizoram: "M9 21V3M9 6h2M9 10h2M9 14h2M9 18h2M15 21V7M15 10h2M15 14h2M15 18h2",
  tripura: "M4 20V12h16v8M4 20h16M8 12V9a4 4 0 0 1 8 0v3M12 5V3",
  meghalaya: "M3 14c3-4 15-4 18 0M5 14v3c0 2 2 3 2 5M19 14v3c0 2-2 3-2 5M10 4v4M14 4v4",
  assam: "M3 17c0-2 2-3 4-3l2-3 2 1v2c2 0 4 1 5 3l3-1v3H3ZM8 11l1-3 2 1-1 3",
  "west-bengal": "M2 16h20M4 16V9l4 3M20 16V9l-4 3M8 16V9M16 16V9M8 9h8",
  jharkhand: "M3 20c3-6 6-9 9-9s6 3 9 9M12 11V4M9 20c1-3 2-5 3-5s2 2 3 5",
  odisha: "M12 12m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7",
  chhattisgarh: "M6 3v6c0 4 2 7 2 11M18 3v6c0 4-2 7-2 11M6 9h12",
  "madhya-pradesh": "M12 4v3M6 20h12M8 20v-6a4 4 0 0 1 8 0v6M5 20h14",
  gujarat:
    "M8 10a3 3 0 1 1 6 0c1 0 2 1 2 2l2 1-2 1c0 2-1 3-3 4l1 2H8l1-2c-2-1-3-2-3-4l-2-1 2-1c0-1 1-2 2-2Z",
  maharashtra: "M5 20V9a7 7 0 0 1 14 0v11M3 20h18M8 20V11M16 20V11",
  goa: "M6 20V10l3-3 3 3v10M9 5V3M4 20h16M14 20 17 8l3 12",
  karnataka: "M12 12m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0M12 6v12M6 12h12M4 20h16M8 20v-3M16 20v-3",
  telangana: "M4 20V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11M9 20V13a3 3 0 0 1 6 0v7M2 20h20M6 9V6M18 9V6",
  "andhra-pradesh": "M12 3 8 9h8L12 3ZM6 9h12v3H6V9Zm2 3v8h8v-8",
  "tamil-nadu": "M12 2 9 6h6l-3-4ZM7 6h10v3H7V6Zm1 3h8v3H8V9Zm-1 3h10v9H7v-9Z",
  kerala: "M3 15c2 1 4 1 6 0h6c2 1 4 1 6 0l-2 5H5l-2-5ZM7 15V9h8l3 3v3M9 9V6h3v3",
  lakshadweep: "M4 19c4-3 12-3 16 0M9 19V9c0-2 2-3 2-5-2 0-4 2-4 4M9 9c2 0 3-1 3-3",
  puducherry: "M10 20h4M9 20 10 6h4l1 14M8 10h8M9 6l1-2h4l1 2",
  "andaman-and-nicobar-islands":
    "M2 18c4-2 16-2 20 0M9 18V8c0-2 2-3 2-5-2 0-4 2-4 4M9 8c2 0 3-1 3-3M16 15l4-2v3l-4 2Z",
  chandigarh:
    "M12 21v-8M8 13V6a1 1 0 0 1 2 0v4M10 10V4a1 1 0 0 1 2 0v6M12 10V5a1 1 0 0 1 2 0v5M14 10V6a1 1 0 0 1 2 0v6M8 13c-2 1-2 3-2 5h12c0-2 0-4-2-5",
  "dadra-and-nagar-haveli-and-daman-and-diu": "M4 20h16M6 20V13l3-3 3 3v7M15 20V15h5v5M17 5V9c-2 0-3-1-3-3",
};

export const DEFAULT_STATE_ICON = "M4 21V9l6-4v16M14 21V9l6-4v16M2 21h20M9 12h1M9 16h1M17 12h1M17 16h1";
