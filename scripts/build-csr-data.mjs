// Generates the compact JSON the CSR Tracker fetches on demand, from the
// same server-side code that renders the page (src/lib/csr), so the page and
// the fetched data always agree.
//
//   npm run build:data      (also runs automatically before dev and build)
//
// Outputs (generated, gitignored):
//   public/data/csr/companies.json          full company table (company-codec.js)
//   public/data/csr/districts/<key>.json    per-state district breakdown
import fs from "node:fs";
import path from "node:path";
import { getCsrCompanyAnalytics } from "@/lib/csr/company-analytics";
import { encodeCompanies } from "@/lib/csr/company-codec";
import { getCsrStateProjects } from "@/lib/csr/state-projects";

const OUT = path.join("public", "data", "csr");
const started = performance.now();

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "districts"), { recursive: true });

const write = (file, data) => {
  const p = path.join(OUT, file);
  fs.writeFileSync(p, JSON.stringify(data));
  return fs.statSync(p).size;
};

const companies = getCsrCompanyAnalytics().companies;
const companyBytes = write("companies.json", encodeCompanies(companies));

let districtFiles = 0, districtBytes = 0;
for (const state of getCsrStateProjects()) {
  if (!state.districts.length) continue;
  districtBytes += write(path.join("districts", `${state.key}.json`), state.districts);
  districtFiles++;
}

console.log(
  `build-csr-data: companies.json ${companies.length} rows, ${Math.round(companyBytes / 1024)} KB; ` +
    `${districtFiles} district files, ${Math.round(districtBytes / 1024)} KB total ` +
    `(${Math.round(performance.now() - started)} ms)`,
);
