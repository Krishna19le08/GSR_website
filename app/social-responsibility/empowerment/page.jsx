import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  Pill,
  IconCard,
} from "../../components/ui";

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
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ EMPOWERMENT HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-300">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Empowerment
          </p>
          <Eyebrow tone="dark">Empowerment &amp; Opportunity</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Turning Potential Into Possibility
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            Education becomes more meaningful when it creates opportunities. We
            support individuals and communities in transforming knowledge into
            sustainable, dignified livelihoods.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            No One Should Be Limited by a Lack of Opportunity
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            GSR seeks to support individuals and communities in transforming:
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {flowSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-zinc-300 px-4 py-2 dark:border-zinc-700">
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Four communities we work alongside
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <IconCard {...area} tone="emerald" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pathways We Support</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
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
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              From Potential to a Sustainable Livelihood
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            GSR is a newly established foundation, so rather than staged
            before-and-after photos, here is the honest process behind every
            livelihood and empowerment programme — documented in full as each
            group completes its first cycle.
          </p>
          <div className="mt-14 divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {beforeAfter.map((item, i) => (
              <div key={item.title} className="flex gap-6 p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-emerald-600 text-sm font-semibold text-emerald-700 dark:border-emerald-500 dark:text-emerald-400">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.caption}
                  </p>
                </div>
              </div>
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
              Explore More of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 md:py-32">
        <ImagePlaceholder
          label="[ BACKGROUND IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Help Build Sustainable Livelihoods</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join Our Empowerment Work
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Mentor a young entrepreneur, support a farmer cooperative, or partner
            with us on a women&apos;s leadership programme.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/join/volunteer">Become a Volunteer</ButtonPrimary>
            <ButtonOnDark href="/donate">Donate Now</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
