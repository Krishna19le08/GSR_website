// State Rating Protocol — scoring engine for the State Rating System.
//
// The presentation this was scoped from described a tiered rating: a state
// crossing a 25% annual income gain earns "Single Star," and continued gains
// carry it up through Gold, Platinum and finally Diamond. This module turns
// that idea into one composite 0-100 score (CSR fund utilization weighted
// higher than income growth, since utilization is the harder number to fake)
// and maps it onto a five-tier ladder.

export const PILLARS = [
  { key: "economicGrowth", label: "Economic Growth", max: 20 },
  { key: "fiscalStrength", label: "Fiscal Strength", max: 20 },
  { key: "monetaryStability", label: "Monetary Stability", max: 16 },
  { key: "externalSector", label: "External Sector", max: 16 },
  { key: "infrastructure", label: "Infrastructure", max: 14 },
  { key: "governance", label: "Governance", max: 14 },
];

export const PILLAR_MAX_TOTAL = PILLARS.reduce((sum, p) => sum + p.max, 0); // 100

// Colors reuse the site's own palette (globals.css --color-banyan* /
// --color-marigold* / --color-clay) rather than introducing a separate
// scale, so the rating map and badges read as part of the same site.
export const TIERS = [
  { id: "diamond", label: "Diamond", min: 85, badge: "💎", color: "#12312c" },
  { id: "platinum", label: "Platinum", min: 70, badge: "◆", color: "#1f4a44" },
  { id: "gold", label: "Gold", min: 50, badge: "★", color: "#a8710b" },
  { id: "single-star", label: "Single Star", min: 25, badge: "☆", color: "#c98a11" },
  { id: "unranked", label: "Unranked", min: 0, badge: "–", color: "#c7b89a" },
];

export function getTier(score) {
  return TIERS.find((tier) => score >= tier.min) ?? TIERS[TIERS.length - 1];
}

// Weighted 60/40 toward fund utilization — a state can't inflate this figure
// with one good year of income growth the way it could a single-metric score.
export function compositeScore({ csrFundUtilizationPct, annualIncomeGrowthPct }) {
  const utilization = clamp(csrFundUtilizationPct, 0, 100);
  const growth = clamp(annualIncomeGrowthPct, 0, 100);
  return Math.round((utilization * 0.6 + growth * 0.4) * 10) / 10;
}

export function pillarTotal(pillars) {
  return PILLARS.reduce((sum, p) => sum + (pillars[p.key] ?? 0), 0);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
