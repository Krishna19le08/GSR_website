// Instructor directory — data source for the CSR Tracker's instructor
// assignment view. The presentation this was scoped from mentioned a
// platform "supported by 25 instructors" spread across state regions.
//
// `getInstructors()` is the single seam this view reads from. Swap its body
// for a real request once GSR has an actual instructor roster; every
// consumer downstream only depends on the shape below.
//
// The names below are fictional placeholders standing in for that feed.
//
// Instructor shape:
//   id            string
//   name          string
//   region        string   matches a state `region` in states-data.js
//   statesCovered string[] state ids (see states-data.js) this instructor is assigned to
//   focusArea     string   department they specialize in, matches a DEPARTMENTS label
//   email         string   placeholder contact

const FIRST_NAMES = [
  "Ananya", "Ravi", "Priya", "Arjun", "Meera", "Vikram", "Divya", "Karthik",
  "Lakshmi", "Rahul", "Sneha", "Aditya", "Pooja", "Suresh", "Kavya", "Rohan",
  "Anjali", "Deepak", "Nisha", "Manoj", "Shreya", "Vivek", "Radha", "Sanjay", "Neha",
];

const LAST_NAMES = [
  "Krishnan", "Sharma", "Iyer", "Reddy", "Menon", "Gupta", "Nair", "Verma",
  "Pillai", "Rao", "Chatterjee", "Desai", "Joshi", "Bhat", "Naidu", "Mehta",
  "Bose", "Singh", "Pandey", "Kulkarni", "Shetty", "Trivedi", "Agarwal", "Das", "Kapoor",
];

const REGION_STATE_IDS = {
  North: ["haryana", "himachal-pradesh", "punjab", "rajasthan", "uttar-pradesh", "uttarakhand", "delhi", "chandigarh", "jammu-and-kashmir", "ladakh"],
  South: ["andhra-pradesh", "karnataka", "kerala", "tamil-nadu", "telangana", "puducherry", "lakshadweep", "andaman-and-nicobar-islands"],
  East: ["bihar", "jharkhand", "odisha", "west-bengal"],
  West: ["goa", "gujarat", "maharashtra", "dadra-and-nagar-haveli-and-daman-and-diu"],
  Central: ["chhattisgarh", "madhya-pradesh"],
  Northeast: ["arunachal-pradesh", "assam", "manipur", "meghalaya", "mizoram", "nagaland", "sikkim", "tripura"],
};

const FOCUS_AREAS = ["Social Welfare", "Health", "Education", "Environment", "Art & Culture"];

const REGIONS = Object.keys(REGION_STATE_IDS);

function buildInstructor(index) {
  const region = REGIONS[index % REGIONS.length];
  const pool = REGION_STATE_IDS[region];
  const statesCovered = [pool[index % pool.length], pool[(index + 1) % pool.length]].filter(
    (v, i, arr) => arr.indexOf(v) === i,
  );
  const first = FIRST_NAMES[index % FIRST_NAMES.length];
  const last = LAST_NAMES[(index * 3) % LAST_NAMES.length];
  const name = `${first} ${last}`;

  return {
    id: `instr-${String(index + 1).padStart(2, "0")}`,
    name,
    region,
    statesCovered,
    focusArea: FOCUS_AREAS[index % FOCUS_AREAS.length],
    email: `${first.toLowerCase()}.${last.toLowerCase()}@gsrwf.org`,
  };
}

const sampleInstructors = Array.from({ length: 25 }, (_, i) => buildInstructor(i));

export function getInstructors() {
  return sampleInstructors;
}
