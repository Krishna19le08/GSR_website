import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/ui";
import LiveCounter from "../components/dashboard/LiveCounter";
import InstructorDirectory from "../components/dashboard/InstructorDirectory";
import IndiaStateMapSection from "../components/dashboard/IndiaStateMapSection";
import StateRatingExplorer from "../components/dashboard/StateRatingExplorer";
import { getStates, DEPARTMENTS } from "../data/states-data";
import { getInstructors } from "../data/instructors-data";

const DEPT_COLORS = [
  "#1f4a44", "#c98a11", "#5b7b74", "#a8710b", "#8a8371",
  "#3f6e63", "#e0a736", "#7a5c3e", "#2f5f56",
];

export const metadata = {
  title: "CSR Tracker & State Rating — GSR",
  description:
    "Live GSDP and CSR fund tracking, plus the State Rating Protocol scores, across 36 Indian states and union territories.",
};

export default function CsrTracker() {
  const states = getStates();
  const instructors = getInstructors();
  const statesById = new Map(states.map((s) => [s.id, s]));

  const totalGsdpCr = states.reduce((sum, s) => sum + s.gsdpCr, 0);
  const totalPopulation = states.reduce((sum, s) => sum + s.population, 0);
  const avgUtilization =
    Math.round((states.reduce((sum, s) => sum + s.csrFundUtilizationPct, 0) / states.length) * 10) / 10;

  const deptTotals = DEPARTMENTS.map((dept) => ({
    ...dept,
    totalCr: states.reduce((sum, s) => sum + s.departmentFundsCr[dept.key], 0),
  }));
  const deptGrandTotal = deptTotals.reduce((sum, d) => sum + d.totalCr, 0);

  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder label="[ CSR TRACKER HERO ]" ratio="" tone="emerald" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/95 via-banyan-deep/50 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Platform features &amp; CSR tracker</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Every rupee of CSR spend, mapped to the state it lands in
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            One dashboard for 36 states and union territories: fund flow
            across nine development sectors, the State Rating Protocol
            score behind every state, and the instructor network that keeps
            the numbers honest.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-paper/15 pt-6">
            <div>
              <p className="font-mono text-2xl font-semibold text-marigold">36</p>
              <p className="mt-1 text-xs text-paper/60">States &amp; UTs tracked</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-marigold">9</p>
              <p className="mt-1 text-xs text-paper/60">Development sectors</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-marigold">{instructors.length}</p>
              <p className="mt-1 text-xs text-paper/60">Field instructors</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-marigold">6</p>
              <p className="mt-1 text-xs text-paper/60">Regions covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="flex items-center justify-center gap-2 border-b border-clay bg-paper-deep px-4 py-2.5 text-center text-xs text-ink-soft sm:px-6 lg:px-8">
        <span className="inline-flex size-1.5 shrink-0 rounded-full bg-marigold-deep" aria-hidden="true" />
        Demo dataset — illustrative figures generated for this preview, not official government statistics.
      </div>

      {/* LIVE COUNTERS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Live tracker</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            National snapshot
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <LiveCounter
              tone="dark"
              className="lg:col-span-3"
              label="Total GSDP tracked, all states &amp; UTs"
              startValue={totalGsdpCr}
              prefix="₹"
              suffix=" Cr"
              note="Combined GSDP across all tracked states and union territories."
            />
            <LiveCounter
              label="Net population covered"
              startValue={totalPopulation}
              note="Combined population across all tracked states and union territories."
            />
            <LiveCounter
              label="Avg. CSR fund utilization"
              startValue={avgUtilization}
              decimals={1}
              suffix="%"
              note="Share of allocated CSR funds deployed, averaged across states."
            />
            <LiveCounter
              label="Instructors on the ground"
              startValue={instructors.length}
              note="Assigned across six state regions."
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENT BREAKDOWN */}
      <section className="bg-paper-deep py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Cause-area breakdown</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Where the CSR rupee goes
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Every fund is routed through one of nine development sectors.
            Together they account for ₹{deptGrandTotal.toLocaleString("en-IN")} Cr tracked nationally.
          </p>

          <div className="mt-10 flex h-4 w-full overflow-hidden rounded-full border border-clay/60">
            {deptTotals.map((dept, i) => {
              const pct = (dept.totalCr / deptGrandTotal) * 100;
              return (
                <div
                  key={dept.key}
                  style={{ width: `${pct}%`, backgroundColor: DEPT_COLORS[i % DEPT_COLORS.length] }}
                  title={`${dept.label} — ${Math.round(pct)}%`}
                />
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {deptTotals.map((dept, i) => {
              const pct = Math.round((dept.totalCr / deptGrandTotal) * 100);
              return (
                <Reveal key={dept.key} delay={i * 80}>
                  <div className="border-t-2 pt-4" style={{ borderColor: DEPT_COLORS[i % DEPT_COLORS.length] }}>
                    <p className="font-mono text-2xl font-semibold text-ink">{pct}%</p>
                    <p className="mt-2 text-sm font-semibold text-ink">{dept.label}</p>
                    <p className="mt-1 font-mono text-xs text-ink-soft">
                      ₹{dept.totalCr.toLocaleString("en-IN")} Cr &middot; {dept.agency}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Bharat map</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Filter by tier, hover to preview, click to open a dashboard
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Each state and union territory is colored by its State Rating
            Protocol tier. Use the filters above the map to isolate a tier,
            hover a state to preview its numbers, or click through to its
            full fund allocation and grantee record.
          </p>
          <div className="mt-8">
            <IndiaStateMapSection states={states} />
          </div>
        </div>
      </section>

      {/* EXPLORER */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Explore every state</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            36 states and union territories, ranked
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Filter by tier or search a state to see its full pillar
            breakdown and its score trend from 2020 through the 2026
            projection.
          </p>
          <div className="mt-8">
            <StateRatingExplorer states={states} />
          </div>
        </div>
      </section>

      {/* INSTRUCTOR DIRECTORY */}
      <section className="bg-paper-deep py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Instructor network</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            25 instructors, assigned by region
          </h2>
          <div className="mt-8">
            <InstructorDirectory instructors={instructors} statesById={statesById} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Want the fuller picture?
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              See how this tracker fits into GSR&rsquo;s wider mission, or
              meet the instructors keeping every state&rsquo;s numbers
              current.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Back to Home", detail: "See GSR's wider mission and work.", href: "/" },
              { label: "Who We Are", detail: "Meet the team behind the tracker.", href: "/about" },
              { label: "Explore GSR Tech", detail: "The platform behind this data.", href: "/gsr-tech" },
              { label: "Partner With Us", detail: "Fund work you can actually see.", href: "/partner" },
            ].map((action) => (
              <li key={action.label}>
                <Link
                  href={action.href}
                  className="group flex items-baseline justify-between gap-4 py-4 text-paper transition-colors hover:text-marigold"
                >
                  <span className="font-display text-lg font-semibold">{action.label}</span>
                  <span className="hidden text-right text-sm text-paper/50 sm:block">
                    {action.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
