import ImagePlaceholder from "./components/ImagePlaceholder";
import GlobalMembersGlobe from "./components/GlobalMembersGlobe";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonSecondary,
  ButtonOnDark,
  IconTile,
  Quote,
  Pill,
} from "./components/ui";

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
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* 01 — HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="[ A COMMUNITY MOMENT — HERO PHOTOGRAPH ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="max-w-xl text-sm font-medium text-paper/70">
            Chennai, Tamil Nadu — and every community we get to know after
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl lg:text-6xl">
            We show up for people first, and let the outcomes follow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-paper/80">
            GSR unites people and organizations to protect the environment,
            expand education, and create opportunity for all — starting with
            the communities closest to us.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonPrimary href="/join">Join Our Journey</ButtonPrimary>
            <ButtonOnDark href="/donate">Donate</ButtonOnDark>
          </div>
        </div>
      </section>

      {/* 01b — GLOBAL MEMBERS GLOBE */}
      <GlobalMembersGlobe />

      {/* 02 — A NOTE FROM OUR FOUNDER */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <ImagePlaceholder
            label="[ ZEHRA FATHIMA, FOUNDER — PORTRAIT ]"
            ratio="aspect-[4/3]"
          />
          <div>
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
          </div>
        </div>
      </section>

      {/* 03 — CORE VALUES */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Six beliefs behind everything we build
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title}>
                <IconTile icon={value.icon} />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {value.description}
                </p>
              </div>
            ))}
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
          <div className="mt-14 divide-y divide-clay border-y border-clay">
            {flagshipProjects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <IconTile icon={project.icon} tone="marigold" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-ink-soft">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonSecondary href="/projects">View All Projects</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 05 — ONE PLANET / ONE RESPONSIBILITY */}
      <section className="relative isolate overflow-hidden bg-banyan-deep py-24 md:py-32">
        <ImagePlaceholder
          label="[ FULL-WIDTH LANDSCAPE PHOTOGRAPH ]"
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
            We are guardians of the Earth, not its owners. GSR connects
            people and knowledge to protect our planet and build a more
            equitable world — the same way, every time.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-4 gap-y-10 text-left sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((item, i) => (
              <div key={item.step} className="border-t border-paper/25 pt-5">
                <p className="text-xs font-semibold text-marigold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-paper">
                  {item.step}
                </p>
                <p className="mt-2 text-sm leading-6 text-paper/70">
                  {item.detail}
                </p>
              </div>
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
            label="[ YOUTH LEARNING TOGETHER — PHOTOGRAPH ]"
            ratio="aspect-[21/9]"
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
              <Pill key={p}>{p}</Pill>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/partner">Partner With Us</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-banyan-deep py-28 md:py-36">
        <ImagePlaceholder
          label="[ HANDS AT WORK — BACKGROUND PHOTOGRAPH ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-banyan-deep/85" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Be part of the change
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-paper/75">
            Every action counts. Join GSR in protecting our planet,
            expanding education, and empowering communities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/join">Join Our Journey</ButtonPrimary>
            <ButtonOnDark href="/join/volunteer">Volunteer</ButtonOnDark>
            <ButtonOnDark href="/donate">Donate</ButtonOnDark>
            <ButtonOnDark href="/partner">
              Sponsorship &amp; Collaboration
            </ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
