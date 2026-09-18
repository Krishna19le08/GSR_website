import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Icon from "../../components/icons";
import Reveal from "../../components/Reveal";
import {
  Eyebrow,
  Card,
  iconToneAt,
} from "../../components/ui";

export const metadata = {
  title: "Education for All — GSR",
  description:
    "GSR expands access to education through scholarships, digital and vocational skills training, leadership programmes and environmental learning.",
  openGraph: {
    title: "Education for All — GSR",
    description:
      "GSR expands access to education through scholarships, digital and vocational skills training, and leadership programmes.",
  },
};

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
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="Children in a village classroom"
          src="/images/youth-learning.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-paper/70">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Education
          </p>
          <Eyebrow tone="dark">Education for All</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Knowledge Creates Opportunity
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            Education is a foundation for sustainable development. We promote
            inclusive learning opportunities for children, students, youth, women,
            and communities who face barriers to education and skills development.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Education Should Do More Than Transfer Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Education should create knowledge, skills, confidence, responsibility
            and opportunity.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Every child deserves access to quality learning, regardless of their
            social or economic background. Education creates opportunities, reduces
            poverty, and empowers future generations — it is not only about
            knowledge, it is about creating hope.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Four ways we support learning
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW CHANGE HAPPENS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From a First Conversation to a Habit of Learning
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-ink-soft/70">
            GSR is a newly established foundation, so instead of staged
            before-and-after photos, here is the honest process behind every
            scholarship and learning programme we run — documented with real
            stories and photographs as each cohort completes its first year.
          </p>
          <div className="mt-14 divide-y divide-clay">
            {beforeAfter.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="flex gap-6 py-6">
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
      <section className="bg-paper-deep py-20 md:py-28">
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
              Join Our Education Work
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Sponsor a scholarship, volunteer as an educator, or partner
              with us to build a learning resource centre.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Become a Volunteer", detail: "Teach, mentor, or support a classroom.", href: "/join/volunteer" },
              { label: "Donate Now", detail: "Sponsor a scholarship directly.", href: "/donate" },
              { label: "Partner With Us", detail: "Build a learning resource centre with us.", href: "/partner" },
              { label: "See Our Impact", detail: "Follow learning programmes as they grow.", href: "/about/impact" },
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
