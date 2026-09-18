import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Icon from "../components/icons";
import Reveal from "../components/Reveal";
import {
  Eyebrow,
  Pill,
  TextLink,
  Card,
  iconToneAt,
} from "../components/ui";

export const metadata = {
  title: "Partner With Us — GSR",
  description:
    "GSR gives CSR teams, corporate foundations, government agencies and institutions a documented, governed, technology-tracked way to fund environmental, education and empowerment work in India.",
  openGraph: {
    title: "Partner With Us — GSR",
    description:
      "A documented, governed, technology-tracked way to fund environmental, education and empowerment work in India.",
  },
};

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
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="[ PARTNER HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">For CSR Teams, Foundations &amp; Institutions</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Fund Work You Can Actually See
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            GSR gives CSR teams, corporate foundations, government agencies and
            institutions a documented, governed, technology-tracked way to put
            funds behind environmental, education and empowerment work in India.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Why Fund Through GSR</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Three Things CSR Teams Ask For — Built In From Day One
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Governance you can verify. Documentation you can audit. A platform that
            reports back to you.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            We are a newly registered foundation, and we are upfront about that.
            What we can offer from day one is structure: a named Board of
            Trustees, a Management Core Committee, a dedicated CSR Committee and
            FCRA Committee, and a technology platform — GSR Tech — built
            specifically to track where funds go and what they achieve.
          </p>
        </div>
      </section>

      {/* FOCUS GRID */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={area.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={area.icon} className="size-5" />
                  </div>
                  <div>
                    <Eyebrow>{area.category}</Eyebrow>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                      {area.title}
                    </h3>
                    {area.lede && (
                      <p className="mt-2 text-sm leading-6 text-ink-soft">{area.lede}</p>
                    )}
                    {area.bullets?.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-sm leading-6 text-ink-soft">
                        {area.bullets.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden="true" className="text-banyan">
                              &#10003;
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {area.linkHref && (
                      <div className="mt-5">
                        <TextLink href={area.linkHref}>{area.linkLabel || "Learn more"}</TextLink>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How a Partnership Works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From first conversation to a funded, reported project
            </h2>
          </div>
          <div className="mt-14 divide-y divide-clay">
            {steps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 100}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="sm:w-1/3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold-deep">
                    {s.step}
                  </span>
                  <h4 className="mt-1 font-display text-base font-semibold text-ink">
                    {s.title}
                  </h4>
                </div>
                <p className="text-sm leading-6 text-ink-soft sm:w-2/3">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who We Partner With</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
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
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Related</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Before You Reach Out
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 border border-clay p-5 transition-colors hover:border-banyan"
              >
                <span className="text-marigold-deep" aria-hidden="true">→</span>
                <h4 className="font-display text-base font-semibold text-ink group-hover:text-banyan">
                  {item.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8" id="cta">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Start a Partnership Conversation
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Tell us your CSR focus area and budget range — we&apos;ll come
              back with a project concept that fits, not a generic pitch.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Email Our Partnerships Team", detail: "Start the conversation over email.", href: "mailto:info.gsrwf@gmail.com?subject=CSR%20Partnership%20Inquiry" },
              { label: "Call Us", detail: "+91 87545 63555", href: "tel:+918754563555" },
              { label: "See Our Governance", detail: "Review the structure behind every partnership.", href: "/about/team" },
              { label: "Explore GSR Tech", detail: "The platform that tracks what you fund.", href: "/gsr-tech" },
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
