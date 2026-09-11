import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  IconCard,
} from "../../components/ui";

const focusAreas = [
  {
    icon: "book",
    category: "Access to Learning",
    title: "Educational Support & Scholarships",
    lede: "Every learner deserves a starting point, whatever their background.",
    bullets: [
      "Educational support",
      "Scholarships",
      "School development",
      "Learning resources",
      "Library programmes",
      "Inclusive education",
      "Adult literacy",
    ],
  },
  {
    icon: "laptop",
    category: "Skills for the Future",
    title: "Digital, Vocational & Financial Literacy",
    lede: "Practical skills that open doors to real opportunity.",
    bullets: [
      "Digital literacy",
      "Vocational learning",
      "Financial literacy",
      "Entrepreneurship education",
      "Career awareness & guidance",
    ],
  },
  {
    icon: "graduate",
    category: "Leadership & Life Skills",
    title: "Confidence to Lead",
    lede: "Learning that builds character alongside capability.",
    bullets: [
      "Life skills education",
      "Youth leadership",
      "Community-service learning",
      "Research & learning programmes",
      "Internships",
    ],
  },
  {
    icon: "leaf",
    category: "Learning About Our Planet",
    title: "Environmental & Digital Learning",
    lede: "Knowledge of sustainability alongside academic learning.",
    bullets: [
      "Environmental education",
      "Climate & sustainability education",
      "Educational workshops",
      "Digital learning resources",
      "Community learning",
    ],
  },
];

const beforeAfter = [
  {
    title: "We listen to what a community's children actually need",
    caption: "Before a single scholarship is offered, we meet families, teachers and students to understand what's really standing between a child and a classroom.",
  },
  {
    title: "We fund, resource and mentor — not just donate",
    caption: "Scholarships, learning materials and school-development support are paired with mentorship, so a single gift becomes a lasting habit of learning.",
  },
  {
    title: "We stay in touch long after enrollment",
    caption: "Attendance, progress and wellbeing are followed up on, because access to education only matters if a child is able to stay in it.",
  },
];

const related = [
  { title: "Impact Stories", href: "/about/impact" },
  { title: "Who We Are", href: "/about/team" },
  { title: "Environmental Protection", href: "/social-responsibility/environmental" },
  { title: "Empowerment & Opportunity", href: "/social-responsibility/empowerment" },
];

export default function Education() {
  return (
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ EDUCATION HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-300">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Education
          </p>
          <Eyebrow tone="dark">Education for All</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Knowledge Creates Opportunity
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            Education is a foundation for sustainable development. We promote
            inclusive learning opportunities for children, students, youth, women,
            and communities who face barriers to education and skills development.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Education Should Do More Than Transfer Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Education should create knowledge, skills, confidence, responsibility
            and opportunity.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Every child deserves access to quality learning, regardless of their
            social or economic background. Education creates opportunities, reduces
            poverty, and empowers future generations — it is not only about
            knowledge, it is about creating hope.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Four ways we support learning
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <IconCard {...area} tone="emerald" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CHANGE HAPPENS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              From a First Conversation to a Habit of Learning
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            GSR is a newly established foundation, so instead of staged
            before-and-after photos, here is the honest process behind every
            scholarship and learning programme we run — documented with real
            stories and photographs as each cohort completes its first year.
          </p>
          <div className="mt-14 divide-y divide-zinc-200 dark:divide-zinc-800">
            {beforeAfter.map((item, i) => (
              <div key={item.title} className="flex gap-6 py-6">
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
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
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
          <Eyebrow tone="dark">Help a Child Learn</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join Our Education Work
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Sponsor a scholarship, volunteer as an educator, or partner with us to
            build a learning resource centre.
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
