import { notFound } from "next/navigation";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Reveal from "../../components/Reveal";
import { Eyebrow, ButtonSecondary, TextLink, StatCardRounded } from "../../components/ui";
import PillarBreakdown from "../../components/dashboard/PillarBreakdown";
import ScoreTrendChart from "../../components/dashboard/ScoreTrendChart";
import DistrictMapSection from "../../components/dashboard/DistrictMapSection";
import DistrictBreakdown from "../../components/dashboard/DistrictBreakdown";
import { getStates, getStateById, TREND_YEARS } from "../../data/states-data";
import { getDistrictsForState } from "../../data/districts-data";
import { compositeScore, pillarTotal, PILLAR_MAX_TOTAL } from "../../lib/rating";

export function generateStaticParams() {
  return getStates().map((state) => ({ stateId: state.id }));
}

export async function generateMetadata({ params }) {
  const { stateId } = await params;
  const state = getStateById(stateId);
  if (!state) return {};
  return {
    title: `${state.name} — CSR Fund Grantee Details — GSR`,
    description: `CSR fund allocation, grantees and State Rating Protocol score for ${state.name}.`,
  };
}

const inr = (n) => `₹${n.toLocaleString("en-IN")} Cr`;

export default async function StateDetail({ params }) {
  const { stateId } = await params;
  const state = getStateById(stateId);
  if (!state) notFound();

  const score = compositeScore(state);
  const totalGranteeCr = state.grantees.reduce((sum, g) => sum + g.amountCr, 0);
  const districts = getDistrictsForState(state.id);

  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HEADER */}
      <section className="relative isolate overflow-hidden bg-banyan-deep py-16 md:py-20">
        <ImagePlaceholder
          label={`[ ${state.name} ]`}
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
          src={state.photoUrl}
          alt={state.name}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TextLink href="/csr-tracker">← All states</TextLink>
          <div className="mt-6">
            <Eyebrow tone="dark">
              {state.type} &middot; {state.region} &middot; {state.abbr}
            </Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {state.name}
            </h1>
          </div>
        </div>
      </section>

      <div className="border-b border-clay bg-paper-deep px-4 py-3 text-center text-xs text-ink-soft sm:px-6 lg:px-8">
        Demo dataset — illustrative figures generated for this preview, not official government statistics.
      </div>

      {/* DISTRICT BREAKDOWN */}
      {districts.length > 0 && (
        <section className="bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>District-wise CSR spend</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {districts.length} districts in {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
              Click a district on the map, or in the list below, to see its
              spend by development sector, FY2014-15 through{" "}
              <span className="text-base font-semibold text-banyan">FY2025-26</span>{" "}
              combined.
            </p>
            <div className="mt-8">
              <Reveal>
                <DistrictMapSection stateId={state.id} districts={districts} />
              </Reveal>
            </div>
            <div className="mt-10">
              <DistrictBreakdown districts={districts} />
            </div>
          </div>
        </section>
      )}

      {/* SUMMARY STATS */}
      <section className="bg-paper-deep py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            <StatCardRounded label="Government Grant" value={inr(totalGranteeCr)} />
            <StatCardRounded label="TRP Score" value={`${score}/100`} />
            <StatCardRounded label="CSR Fund Utilization" value={`${state.csrFundUtilizationPct}%`} />
            <StatCardRounded label="Annual Income Growth" value={`${state.annualIncomeGrowthPct}%`} />
            <StatCardRounded label="Pillar Total" value={`${pillarTotal(state.pillars)}/${PILLAR_MAX_TOTAL}`} />
          </div>
        </div>
      </section>

      {/* GRANTEE DETAILS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Partner NGO grantee details</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {inr(totalGranteeCr)} tracked across five partner NGOs
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-clay text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
                  <th className="py-3 pr-4">Cause area</th>
                  <th className="py-3 pr-4">Partner NGO</th>
                  <th className="py-3 pr-4">Project focus</th>
                  <th className="py-3 pr-4">Fund allocation</th>
                  <th className="py-3 pr-4">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clay">
                {state.grantees.map((grantee) => (
                  <tr key={grantee.department}>
                    <td className="py-3 pr-4 font-medium text-ink">{grantee.department}</td>
                    <td className="py-3 pr-4 text-ink-soft">{grantee.agency}</td>
                    <td className="py-3 pr-4 text-ink-soft">{grantee.project}</td>
                    <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">{inr(grantee.amountCr)}</td>
                    <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">
                      {Math.round((grantee.amountCr / totalGranteeCr) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RATING BREAKDOWN */}
      <section className="bg-paper-deep py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>State Rating Protocol</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Score breakdown for {state.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold text-ink">Rating pillars</p>
              <div className="mt-4">
                <PillarBreakdown pillars={state.pillars} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-semibold text-ink">
                Score trend, {TREND_YEARS[0]}–{TREND_YEARS[TREND_YEARS.length - 1]}
              </p>
              <div className="mt-4">
                <ScoreTrendChart years={TREND_YEARS} values={state.scoreTrend} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 text-center md:py-20">
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
          <ButtonSecondary href="/csr-tracker">Back to the CSR Tracker</ButtonSecondary>
        </div>
      </section>
    </main>
  );
}
