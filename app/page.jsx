import Link from "next/link";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Icon from "./components/icons";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonSecondary,
  Quote,
  Pill,
  Card,
  StatCardRounded,
  iconToneAt,
} from "./components/ui";
import IndiaStateMapSection from "./components/dashboard/IndiaStateMapSection";
import Reveal from "./components/Reveal";
import { getStates } from "./data/states-data";

const coreValues = [
  {
    icon: "leaf",
    title: "Environmental Responsibility",
    description: "The Earth is not ours to own, but ours to protect — for the sake of every generation still to come.",
  },
  {
    icon: "book",
    title: "Education & Knowledge",
    description: "We believe a child's future should never be limited by their address, income, or circumstance.",
  },
  {
    icon: "sprout",
    title: "Empowerment & Opportunity",
    description: "Real change happens when people are given the tools, not just the sympathy, to lift themselves up.",
  },
  {
    icon: "scale",
    title: "Equality & Inclusion",
    description: "Every person deserves dignity and a fair chance, regardless of who they are or where they come from.",
  },
  {
    icon: "heart",
    title: "Compassion & Service",
    description: "We show up for people with empathy first — because behind every statistic is a life, not a number.",
  },
  {
    icon: "sparkles",
    title: "Future Generations",
    description: "We work today so that the children of tomorrow inherit a kinder, safer, more sustainable world.",
  },
];

const flagshipProjects = [
  {
    name: "GSR Tech",
    icon: "laptop",
    description: "Free digital tools and websites so grassroots NGOs can spend less time on paperwork and more time with people.",
  },
  {
    name: "Break The Silence — Rally",
    icon: "megaphone",
    description: "Community rallies that give survivors and families a voice in the fight against child trafficking.",
  },
  {
    name: "GSR Academy",
    icon: "graduate",
    description: "After-school learning support for children whose nearest school is often their biggest obstacle.",
  },
  {
    name: "Tribal 2 Technology",
    icon: "network",
    description: "Bringing basic digital literacy to tribal communities who are too often left off the map entirely.",
  },
  {
    name: "Connect Nature",
    icon: "leaf",
    description: "Native tree planting and land restoration led by the communities who will live alongside it.",
  },
];

const journeySteps = [
  { step: "Connect", detail: "We meet communities where they are, and listen first." },
  { step: "Educate", detail: "We share knowledge and tools that people can carry forward on their own." },
  { step: "Empower", detail: "We hand over ownership, not just aid." },
  { step: "Sustain", detail: "We stay long enough to see the work outlive us." },
];

const trackingCommitments = [
  "Every beneficiary we reach, named and counted — not estimated.",
  "Every tree planted, with the community that planted it.",
  "Every volunteer who joins us, credited by name.",
];

const partnerTypes = [
  "NGOs & NPOs",
  "CSR Organizations",
  "Educational Institutions",
  "Government Agencies",
  "Volunteers & Philanthropists",
];

export default function Home() {
  const states = getStates();

  const impactStats = [
    { value: coreValues.length, label: "Core values we hold ourselves to" },
    { value: flagshipProjects.length, label: "Flagship projects running today" },
    { value: journeySteps.length, label: "Steps in every community we join" },
    { value: states.length, label: "States tracked in our Rating Protocol" },
  ];

  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* 01 — HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="A community meeting under a banyan tree"
          src="/hero_1.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-paper/70">
            Chennai, Tamil Nadu — and every community we get to know after
          </p>
          <Eyebrow tone="dark">Our Mission</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl lg:text-6xl">
            We show up for people first, and let the outcomes follow.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            GSR unites people and organizations to protect the environment,
            expand education, and create opportunity for all — starting with
            the communities closest to us.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonPrimary href="/join" rounded>Join Our Journey</ButtonPrimary>
          </div>
        </div>
      </section>

      {/* 01a — IMPACT AT A GLANCE + STATE RATING MAP */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <StatCardRounded key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <Eyebrow>State Rating Protocol</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Click any state for its fund grantee details
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
              Every state and union territory is colored by its State
              Rating Protocol tier, scored on CSR fund utilization and
              year-on-year income growth.
            </p>
            <div className="mt-8">
              <IndiaStateMapSection states={states} />
            </div>
            <div className="mt-8 flex justify-center">
              <ButtonSecondary href="/csr-tracker">View Full State Rating</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — A NOTE FROM OUR FOUNDER */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <ImagePlaceholder
              label="[ ZEHRA FATHIMA, FOUNDER — PORTRAIT ]"
              ratio="aspect-[4/3]"
              rounded="rounded-3xl"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>A note from our founder</Eyebrow>
            <p className="mt-6 max-w-lg font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              &ldquo;I started GSR because I kept meeting people who were
              ready to help, and people who badly needed it — with nothing
              connecting the two.&rdquo;
            </p>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
              GSR brings people and organizations together to protect the
              environment, advance education, and empower communities. We are
              young as an organization, but the need we&rsquo;re responding
              to has waited long enough.
            </p>
            <p className="mt-4 max-w-lg text-sm font-medium text-ink-soft">
              Zehra Fathima, Founder &amp; Managing Trustee
            </p>
            <div className="mt-8">
              <ButtonSecondary href="/about">Learn More About Us</ButtonSecondary>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — CORE VALUES */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16">
            <div>
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.25rem]">
                Six beliefs behind everything we build
              </h2>
              <p className="mt-4 text-sm leading-6 text-ink-soft">
                Not a mission statement — the things we actually check
                ourselves against before saying yes to new work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {coreValues.map((value, i) => {
                const tone = iconToneAt(i);
                const toneClasses = {
                  banyan: "bg-banyan/10 text-banyan",
                  marigold: "bg-marigold/15 text-marigold-deep",
                  ink: "bg-ink/10 text-ink-soft",
                };
                return (
                  <Card key={value.title} className="flex items-start gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                        toneClasses[tone] || toneClasses.banyan
                      }`}
                    >
                      <Icon name={value.icon} className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink-soft">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — OUR PROJECTS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Five projects, one reason: people asked us to start them
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flagshipProjects.map((project) => {
              return (
                <Card key={project.name} className="flex flex-col overflow-hidden" padded={false} hover>
                  <ImagePlaceholder
                    label={project.name}
                    ratio="aspect-[16/10]"
                    className="rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">
                      {project.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonSecondary href="/projects">View All Projects</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 05 — ONE PLANET / ONE RESPONSIBILITY */}
      <section className="relative isolate overflow-hidden bg-banyan-deep py-24 md:py-32">
        <ImagePlaceholder
          label="Forest, seen from a hillside in the Nilgiris"
          src="/images/landscape-guardians.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-banyan-deep/80" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">One planet, one responsibility</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            The Earth is not ours — we are its guardians
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/75">
            No project starts with us arriving with a plan already decided.
            It starts with the same four steps, in the same order, everywhere
            we go.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 100}
                className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-marigold/20 font-display text-sm italic text-marigold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-paper">
                  {item.step}
                </p>
                <p className="mt-2 text-sm leading-6 text-paper/70">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — HONESTY OVER OPTICS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Quote cite="The GSR team">
            We would rather tell you the truth — that our numbers are still
            being written — than show you figures that aren&rsquo;t real.
          </Quote>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft">
            GSR is a newly founded organization, and we&rsquo;d rather earn
            your trust slowly than borrow it with numbers we haven&rsquo;t
            lived up to yet. Here&rsquo;s what we&rsquo;re committing to
            track and publish, from day one of our first cycle of work:
          </p>
          <ul className="mt-6 space-y-3">
            {trackingCommitments.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-ink-soft">
                <span className="text-marigold-deep" aria-hidden="true">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 07 — YOUTH */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImagePlaceholder
            label="Children in a village classroom"
            src="/images/youth-learning.jpg"
            ratio="aspect-[21/9]"
            rounded="rounded-3xl"
          />
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <Eyebrow>Youth</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A generation shouldn&rsquo;t have to wait its turn
            </h2>
            <p className="mt-6 text-base leading-7 text-ink-soft">
              GSR creates spaces for young people to learn, lead, and build a
              stronger, more compassionate future — for themselves first, and
              their communities next.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonSecondary href="/join">Get Involved</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — PARTNERSHIPS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our partners</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              We can&rsquo;t do this work alone — and we&rsquo;re not trying to
            </h2>
            <p className="mt-4 text-sm text-ink-soft">
              As a newly founded organization, we&rsquo;re building this list
              with real names, not placeholders — here&rsquo;s who we&rsquo;re
              already welcoming to the table.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {partnerTypes.map((p) => (
              <Pill key={p} rounded>{p}</Pill>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/partner" rounded>Partner With Us</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CALL TO ACTION */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              There&rsquo;s a place for you in this, whoever you are
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Time, money, a classroom, a contact who can open a door —
              GSR runs on whatever people are able to give.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Join Our Journey", detail: "Become a member and shape where we go next.", href: "/join" },
              { label: "Volunteer", detail: "Give your time to a project near you.", href: "/join/volunteer" },
              { label: "Donate", detail: "Fund the work directly, no middle layer.", href: "/donate" },
              { label: "Sponsorship & Collaboration", detail: "Bring your organization in as a partner.", href: "/partner" },
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
