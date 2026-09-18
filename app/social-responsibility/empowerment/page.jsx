import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Icon from "../../components/icons";
import Reveal from "../../components/Reveal";
import {
  Eyebrow,
  Pill,
  Card,
  iconToneAt,
} from "../../components/ui";

export const metadata = {
  title: "Empowerment & Opportunity — GSR",
  description:
    "GSR supports farmers, tribal and indigenous communities, women and families in transforming knowledge into sustainable, dignified livelihoods.",
  openGraph: {
    title: "Empowerment & Opportunity — GSR",
    description:
      "GSR supports farmers, tribal communities and women in transforming knowledge into sustainable, dignified livelihoods.",
  },
};

const flowSteps = [
  "Knowledge",
  "Skills",
  "Confidence",
  "Opportunity",
  "Sustainable Livelihood",
];

const focusAreas = [
  {
    icon: "seedling",
    category: "Farmers Development",
    title: "Supporting Those Who Feed the World",
    lede: "Farmers are the backbone of every nation.",
    bullets: [
      "Sustainable agriculture",
      "Water resource management",
      "Organic farming",
      "Farmer welfare",
      "Community farming",
      "Agricultural education",
      "Rural development",
      "Market access",
      "Farmer cooperatives",
      "Youth in agriculture",
    ],
  },
  {
    icon: "compass",
    category: "Tribal & Indigenous Communities",
    title: "Preserving Heritage, Promoting Progress",
    lede: "Indigenous communities carry knowledge, culture and traditions that enrich our world.",
    bullets: [
      "Education",
      "Healthcare",
      "Livelihood development",
      "Women's empowerment",
      "Youth leadership",
      "Community development",
      "Cultural preservation",
      "Safe drinking water",
    ],
  },
  {
    icon: "users",
    category: "Women Empowerment & Gender Equality",
    title: "Equal Rights. Equal Opportunities.",
    lede: "An inclusive society is only possible when women and girls have equal access to opportunity.",
    bullets: [
      "Girls' education",
      "Women's leadership",
      "Entrepreneurship",
      "Health & well-being",
      "Financial independence",
      "Community leadership",
      "Safety & dignity",
      "Family well-being",
    ],
  },
  {
    icon: "heart",
    category: "Community Health & Well-being",
    title: "Good Health Is the Foundation of a Better Life",
    lede: "Healthy communities create sustainable societies.",
    bullets: [
      "Health awareness",
      "Nutrition",
      "Clean water & sanitation",
      "Hygiene",
      "Maternal & child care",
      "Mental well-being",
      "Community health camps",
    ],
  },
];

const pathways = [
  "Skill Development",
  "Green Skills",
  "Digital Opportunities",
  "Entrepreneurship",
  "Social Entrepreneurship",
  "Mentorship",
  "Networking",
  "Leadership Development",
  "Community Enterprise",
  "Career Guidance",
  "Internships",
  "Volunteering",
];

const beforeAfter = [
  {
    title: "We start with what a community already knows",
    caption: "A farmer cooperative or a women's collective already carries real skill and resilience — we build from that strength, not around it.",
  },
  {
    title: "We invest in training, tools and market access",
    caption: "Sustainable agriculture techniques, entrepreneurship training and pathways to real markets, so effort translates into income.",
  },
  {
    title: "We stay invested until it's self-sustaining",
    caption: "A livelihood programme isn't finished at the first harvest or the first sale — we mentor until a family can stand on its own.",
  },
];

const related = [
  { title: "Impact Stories", href: "/about/impact" },
  { title: "Who We Are", href: "/about/team" },
  { title: "Environmental Protection", href: "/social-responsibility/environmental" },
  { title: "Education for All", href: "/social-responsibility/education" },
];

export default function Empowerment() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="A tailor at her sewing machine, Rajasthan"
          src="/images/empowerment-sewing.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-paper/70">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Empowerment
          </p>
          <Eyebrow tone="dark">Empowerment &amp; Opportunity</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Turning Potential Into Possibility
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            Education becomes more meaningful when it creates opportunities. We
            support individuals and communities in transforming knowledge into
            sustainable, dignified livelihoods.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            No One Should Be Limited by a Lack of Opportunity
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-soft">
            GSR seeks to support individuals and communities in transforming:
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-ink">
            {flowSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-clay px-4 py-2">
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-marigold-deep" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Four communities we work alongside
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{area.lede}</p>
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm leading-6 text-ink-soft sm:grid-cols-2">
                      {area.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="text-banyan">
                            &#10003;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pathways We Support</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Beyond livelihoods: leadership, enterprise &amp; skills
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pathways.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CHANGE HAPPENS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From Potential to a Sustainable Livelihood
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-ink-soft/70">
            GSR is a newly established foundation, so rather than staged
            before-and-after photos, here is the honest process behind every
            livelihood and empowerment programme — documented in full as each
            group completes its first cycle.
          </p>
          <div className="mt-14 divide-y divide-clay bg-paper">
            {beforeAfter.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="flex gap-6 p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-banyan text-sm font-semibold text-banyan">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">
                    {item.caption}
                  </p>
                </div>
              </Reveal>
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
              Explore More of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Join Our Empowerment Work
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Mentor a young entrepreneur, support a farmer cooperative, or
              partner with us on a women&apos;s leadership programme.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Become a Volunteer", detail: "Mentor a cooperative or a young entrepreneur.", href: "/join/volunteer" },
              { label: "Donate Now", detail: "Fund a livelihood programme directly.", href: "/donate" },
              { label: "Partner With Us", detail: "Back a women's leadership programme.", href: "/partner" },
              { label: "See Our Impact", detail: "Follow livelihood programmes as they grow.", href: "/about/impact" },
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
