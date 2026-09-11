import ImagePlaceholder from "../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  Pill,
  IconCard,
} from "../components/ui";

const focusAreas = [
  {
    icon: "shield",
    category: "Governance",
    title: "A Named, Structured Board",
    lede: "Not a single founder making unilateral decisions.",
    bullets: [
      "6-member Board of Trustees",
      "12-member Management Core Committee",
      "Dedicated CSR Committee",
      "Dedicated FCRA Committee",
      "15 functional committees in total",
    ],
    linkHref: "/about/team",
    linkLabel: "See the Full Governance Structure →",
  },
  {
    icon: "checkCircle",
    category: "Transparency",
    title: "Documentation, Not Just Promises",
    lede: "We publish what we have — and are direct about what's still in progress.",
    bullets: [
      "Registered Non-Profit · Reg. No. B-4/105/2026",
      "Governance charter available on request",
      "Annual report & audited statement from FY 2026–27",
      "Project monitoring & impact reporting",
    ],
  },
  {
    icon: "laptop",
    category: "Technology",
    title: "GSR Tech Tracks What You Fund",
    lede: "Every project logged, every rupee documented, every report generated from the same system.",
    bullets: [
      "Project & budget-utilization analytics",
      "Interactive reports built for CSR partners",
      "Donor & CSR dashboards",
      "Compliance & governance tracking",
    ],
    linkHref: "/gsr-tech",
    linkLabel: "Explore GSR Tech →",
  },
  {
    icon: "target",
    category: "Focus Areas",
    title: "Fund a Pillar, Not a Guess",
    lede: "Choose where your funding goes.",
    bullets: [
      "Environmental Protection",
      "Education for All",
      "Empowerment & Opportunity",
      "Community Health & Well-being",
    ],
    linkHref: "/#mission",
    linkLabel: "See Our Three Pillars →",
  },
];

const steps = [
  { step: "Step 1", title: "We talk about fit", desc: "Which pillar, which region, what scale of funding — a short call or written brief." },
  { step: "Step 2", title: "We scope a project together", desc: "A concrete project concept, budget and logical framework, built with your CSR objectives in mind." },
  { step: "Step 3", title: "You fund it", desc: "Formalized through an MoU or partnership agreement, with a clear disbursement and reporting schedule." },
  { step: "Step 4", title: "We report back through GSR Tech", desc: "Project progress, budget utilization and beneficiary impact — documented, not just described." },
];

const partners = [
  "Corporate CSR Teams",
  "Corporate Foundations",
  "Government Agencies",
  "Educational Institutions",
  "International Development Organisations",
  "Philanthropic Trusts",
  "Other NGOs & NPOs",
  "Individual Major Donors",
];

const related = [
  { title: "Who We Are", href: "/about/team" },
  { title: "GSR Tech Platform", href: "/gsr-tech" },
  { title: "Other Ways to Get Involved", href: "/join" },
];

export default function Partner() {
  return (
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ PARTNER HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">For CSR Teams, Foundations &amp; Institutions</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Fund Work You Can Actually See
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            GSR gives CSR teams, corporate foundations, government agencies and
            institutions a documented, governed, technology-tracked way to put
            funds behind environmental, education and empowerment work in India.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Why Fund Through GSR</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Three Things CSR Teams Ask For — Built In From Day One
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Governance you can verify. Documentation you can audit. A platform that
            reports back to you.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We are a newly registered foundation, and we are upfront about that.
            What we can offer from day one is structure: a named Board of
            Trustees, a Management Core Committee, a dedicated CSR Committee and
            FCRA Committee, and a technology platform — GSR Tech — built
            specifically to track where funds go and what they achieve.
          </p>
        </div>
      </section>

      {/* FOCUS GRID */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <IconCard {...area} tone="emerald" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How a Partnership Works</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              From first conversation to a funded, reported project
            </h2>
          </div>
          <div className="mt-14 divide-y divide-zinc-200 dark:divide-zinc-800">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div className="sm:w-1/3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                    {s.step}
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {s.title}
                  </h4>
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:w-2/3">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who We Partner With</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Built for the whole ecosystem around CSR giving
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Related</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Before You Reach Out
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 border border-zinc-200 p-5 transition-colors hover:border-emerald-600 dark:border-zinc-800 dark:hover:border-emerald-500"
              >
                <span className="text-emerald-700 dark:text-emerald-400" aria-hidden="true">→</span>
                <h4 className="text-base font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-400">
                  {item.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 md:py-32" id="cta">
        <ImagePlaceholder
          label="[ BACKGROUND IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Let&apos;s Talk</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start a Partnership Conversation
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Tell us your CSR focus area and budget range — we&apos;ll come back with a
            project concept that fits, not a generic pitch.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="mailto:info.gsrwf@gmail.com?subject=CSR%20Partnership%20Inquiry">
              Email Our Partnerships Team
            </ButtonPrimary>
            <ButtonOnDark href="tel:+918754563555">
              Call +91 87545 63555
            </ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
