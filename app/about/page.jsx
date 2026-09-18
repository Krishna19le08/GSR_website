import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Icon from "../components/icons";
import Reveal from "../components/Reveal";
import {
  Eyebrow,
  ButtonSecondary,
  TextLink,
  StatCardRounded,
  Quote,
  Card,
  iconToneAt,
} from "../components/ui";

const coreValues = [
  {
    icon: "leaf",
    title: "Environmental Responsibility",
    description:
      "The Earth is not ours to own, but our responsibility to protect. We promote conservation, sustainability, and responsible use of natural resources.",
  },
  {
    icon: "book",
    title: "Education & Knowledge",
    description:
      "Education is the foundation for progress. We promote access to knowledge, environmental awareness, and lifelong learning.",
  },
  {
    icon: "sprout",
    title: "Empowerment & Opportunity",
    description:
      "We create opportunities for individuals and communities to develop their potential, build confidence, and become active contributors to society.",
  },
  {
    icon: "scale",
    title: "Equality & Inclusion",
    description:
      "We respect every individual and strive to ensure everyone has the opportunity to live with dignity, regardless of background or circumstances.",
  },
  {
    icon: "heart",
    title: "Compassion & Service",
    description:
      "We serve with empathy, respect, and a genuine commitment to improving human well-being and supporting those in need.",
  },
  {
    icon: "sparkles",
    title: "Future Generations",
    description:
      "We work to create a better future where the next generation is strong enough to face challenges, live with dignity, and thrive.",
  },
];

const focusAreas = [
  {
    icon: "leaf",
    title: "Environmental Protection & Sustainability",
    description:
      "Protecting nature, biodiversity, oceans, birds, animals, and natural resources while promoting sustainable living and responsible environmental practices.",
  },
  {
    icon: "book",
    title: "Education & Environmental Awareness",
    description:
      "Expanding access to education, knowledge, and environmental learning to help people understand today's challenges and prepare for tomorrow.",
  },
  {
    icon: "sprout",
    title: "Empowerment & Opportunities",
    description:
      "Creating opportunities for individuals and communities through skills, capacity building, volunteering, internships, livelihoods, and social development.",
  },
  {
    icon: "scale",
    title: "Social Equality, Justice & Welfare For All",
    description:
      "Promoting dignity, equality, inclusion, justice, and welfare so that everyone has the opportunity to live a safe, meaningful, and dignified life.",
  },
  {
    icon: "network",
    title: "Uniting for a Sustainable Network",
    description:
      "Connecting communities, NGOs, educational institutions, businesses, governments, and volunteers to develop practical solutions and create lasting social and environmental impact.",
  },
];

const foundingInitiatives = [
  { name: "GSR Tech", icon: "laptop", desc: "Our AI-powered platform giving every NGO a verified digital identity." },
  { name: "Break The Silence — Rally", icon: "megaphone", desc: "A youth-led movement raising its voice against injustice and silence." },
  { name: "GSR Academy", icon: "graduate", desc: "Learning programmes built around real skills and real opportunity." },
  { name: "Tribal 2 Technology", icon: "network", desc: "Bringing digital access and opportunity to tribal communities." },
  { name: "Connect Nature", icon: "leaf", desc: "Community-led conservation, one habitat and one river at a time." },
];

const currentInitiatives = [
  {
    name: "Digital Trib",
    area: "Education & Empowerment",
    location: "Tamil Nadu",
    beneficiaries: "Tribal Communities",
    status: "In Progress",
  },
  {
    name: "Break The Silence — Rally",
    area: "Education",
    location: "Pan-India",
    beneficiaries: "Students",
    status: "Ongoing",
  },
  {
    name: "Smart Seed Feed",
    area: "Environmental",
    location: "Pan-India",
    beneficiaries: "General Public",
    status: "In Progress",
  },
  {
    name: "Tribal Hub Care",
    area: "Environmental",
    location: "Tamil Nadu",
    beneficiaries: "Tribal Communities",
    status: "In Progress",
  },
  {
    name: "Plastic-Free Communities",
    area: "Environmental",
    location: "Tamil Nadu",
    beneficiaries: "General Public",
    status: "In Progress",
  },
  {
    name: "Farm Care",
    area: "Empowerment",
    location: "Tamil Nadu",
    beneficiaries: "Farmers",
    status: "In Progress",
  },
];

export const metadata = {
  title: "About Us — GSR",
  description:
    "Founded in 2026, Global Social Responsibility Welfare Foundation (GSR) connects people and organizations to protect the environment, advance education, and empower communities across India.",
  openGraph: {
    title: "About Us — GSR",
    description:
      "Founded in 2026, GSR connects people and organizations to protect the environment, advance education, and empower communities across India.",
  },
};

const futureInitiatives = [
  {
    name: "Rehabilitation",
    area: "Mental Health",
    location: "Tamil Nadu",
    timeline: "Expected 2027",
  },
];

export default function About() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* 01 — HERO */}
      <section className="relative isolate flex min-h-[50vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="Community members reviewing a distribution ledger together"
          src="/images/community-planning.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">About GSR</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Building a World Where Compassion, Equality, and Sustainability
            Are a Way of Life
          </h1>
        </div>
      </section>

      {/* 02 — OUR STORY */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <ImagePlaceholder label="[ IMAGE HOLDER ]" ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Founded in 2026, Built on Belief in People
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
              At Global Social Responsibility Welfare Foundation (GSR), we
              believe that every individual has the power to make a
              difference. By bringing together people, communities,
              organizations, volunteers, institutions, and leaders, we work
              toward a world where compassion, equality, and sustainability
              become a way of life.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
              We are committed to protecting the environment, advancing
              education, empowering communities, reducing poverty, and
              creating opportunities for all — regardless of age, gender,
              religion, nationality, or background.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
              GSR was started from a simple observation: many communities and
              individuals have the potential to create positive change but
              lack access to the knowledge, resources, guidance, networks,
              and opportunities needed to do so. GSR exists to connect
              people and organizations to address these challenges together —
              through environmental protection, education for all, community
              empowerment, justice and welfare, and sustainable
              opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — MISSION & VISION */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal className="border border-clay bg-paper p-10">
              <Eyebrow>Our Mission</Eyebrow>
              <p className="mt-6 text-base leading-7 text-ink-soft">
                To connect people, knowledge, opportunities, and
                environmental responsibility to empower communities, protect
                our planet, and build a more sustainable, equitable, and
                inclusive world.
              </p>
            </Reveal>
            <Reveal delay={120} className="border border-clay bg-paper p-10">
              <Eyebrow>Our Vision</Eyebrow>
              <p className="mt-6 text-base leading-7 text-ink-soft">
                To inspire and unite individuals, communities, and
                organizations to protect our planet, promote social equality,
                expand opportunities, and create a sustainable future where
                every generation can live with dignity, face challenges with
                strength, and thrive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — CORE VALUES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Core Values</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* 05 — OUR FOCUS AREAS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What We Want You to Know First
            </h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-marigold-deep">
              Protect Our Planet · Educate &amp; Create Awareness · Empower
              People · Promote Justice &amp; Welfare · Build Sustainable
              Communities
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {area.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — LEADERSHIP SPOTLIGHT */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Zehra Fathima
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ink-soft/70">
              Founder &amp; Managing Trustee
            </p>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
              Zehra Fathima is the Founder of Global Social Responsibility
              Welfare Foundation (GSR) and CEO of Iraivi LGBT Charitable
              Trust. A professional hotelier and social activist, she
              advocates for Justice &amp; Welfare for All, environmental
              protection, education, empowerment, and inclusion.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
              Her vision is to give back to the next generation by building a
              stronger, more compassionate, and sustainable future — and to
              make sure young people face the future with resilience,
              purpose, and humanity, rather than growing up disconnected from
              the people and planet around them.
            </p>
            <div className="mt-6 max-w-lg">
              <Quote cite="Zehra Fathima, Founder & Managing Trustee">
                The Earth does not belong to us; we are its guardians for
                generations to come.
              </Quote>
            </div>
            <div className="mt-8">
              <TextLink href="/about/team">Meet the Full Team →</TextLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder label="[ FOUNDER PHOTOGRAPH ]" ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      {/* 07 — WHERE IT BEGAN */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Where It Began</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Our Founding Initiatives
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foundingInitiatives.map((item, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={item.name} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={item.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 — CURRENT INITIATIVES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Current Initiatives</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What We&rsquo;re Working On Right Now
            </h2>
          </div>
          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] table-auto border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-clay">
                  <th className="py-3 pr-4 font-semibold text-ink">
                    Initiative
                  </th>
                  <th className="py-3 pr-4 font-semibold text-ink">
                    Focus Area
                  </th>
                  <th className="py-3 pr-4 font-semibold text-ink">
                    Location
                  </th>
                  <th className="py-3 pr-4 font-semibold text-ink">
                    Beneficiaries
                  </th>
                  <th className="py-3 font-semibold text-ink">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clay">
                {currentInitiatives.map((project) => (
                  <tr key={project.name}>
                    <td className="py-4 pr-4 font-medium text-ink">
                      {project.name}
                    </td>
                    <td className="py-4 pr-4 text-ink-soft">
                      {project.area}
                    </td>
                    <td className="py-4 pr-4 text-ink-soft">
                      {project.location}
                    </td>
                    <td className="py-4 pr-4 text-ink-soft">
                      {project.beneficiaries}
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center rounded-full bg-marigold/15 px-3 py-1 text-xs font-medium text-marigold-deep">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* 09 — FUTURE INITIATIVES */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Looking Ahead</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Future Initiatives
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {futureInitiatives.map((project, i) => (
              <Reveal key={project.name} delay={i * 100}>
                <ImagePlaceholder
                  label={`[ ${project.name.toUpperCase()} ]`}
                  ratio="aspect-[4/3]"
                />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft/70">
                  {project.area} · {project.location} · {project.timeline}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — TEAM PREVIEW */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The People Behind GSR
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              We&rsquo;d rather introduce our team properly, with real names
              and real faces, than fill this space with stand-ins. Here&rsquo;s
              how we&rsquo;re structured while that page comes together.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "shield", title: "Board of Trustees", desc: "6 members setting the long-term direction." },
              { icon: "building", title: "Management Core Committee", desc: "12 members overseeing day-to-day governance." },
              { icon: "users", title: "Functional Committees", desc: "15 committees, 5 members each, driving the work." },
              { icon: "heart", title: "Volunteers & Interns", desc: "Growing every month — perhaps including you next." },
            ].map((item, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={item.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={item.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink-soft/70">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/about/team">View Full Governance Structure</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 11 — IMPACT PREVIEW */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Impact</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A First Year in Motion
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Founded in 2026, GSR&rsquo;s initiatives are in their first
              active cycle. Verified beneficiary and impact numbers will be
              published here as our projects report their first results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              { label: "Beneficiaries Supported — counting starts this cycle" },
              { label: "Communities Reached — our first sites are underway" },
              { label: "Volunteers Engaged — we're recruiting now" },
              { label: "Partner Organizations — talk to us, be the first" },
            ].map((stat) => (
              <StatCardRounded key={stat.label} value="Year One" label={stat.label} />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/about/impact">See Our Full Impact</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 12 — GET INVOLVED */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Get Involved</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              There Are Many Ways to Join Us
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Volunteer", href: "/join", icon: "heart", desc: "Give your time to a cause on the ground." },
              { title: "Internship", href: "/join", icon: "graduate", desc: "Learn by doing, alongside our team." },
              { title: "Membership", href: "/join", icon: "users", desc: "Help shape where GSR goes next." },
              { title: "Partner With Us", href: "/partner", icon: "handshake", desc: "Bring your organization into the network." },
            ].map((item, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={item.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={item.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink-soft/70">
                      {item.desc}
                    </p>
                    <div className="mt-3">
                      <TextLink href={item.href}>Learn More →</TextLink>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13 — CONTACT */}
      <section className="bg-paper-deep py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mt-8 space-y-2 text-base leading-7 text-ink-soft">
            <p>
              No 15, Ponnappa Lane, Triplicane, Chennai – 600005, Tamil Nadu,
              India
            </p>
            <p>+91 87545 63555 &middot; +91 94441 79215</p>
            <p>info.gsrwf@gmail.com &middot; www.gsrwf.com</p>
          </div>
        </Reveal>
      </section>

      {/* 14 — FINAL CALL TO ACTION */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Be Part of the Change
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Every action counts. Join GSR in protecting our planet,
              expanding education, and empowering communities — together, we
              can build a more equitable future for generations to come.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Join Our Journey", detail: "Become a member and shape where we go next.", href: "/join" },
              { label: "Donate", detail: "Fund the work directly, no middle layer.", href: "/donate" },
              { label: "Partner With Us", detail: "Bring your organization into the network.", href: "/partner" },
              { label: "Get in Touch", detail: "Reach our team directly with questions.", href: "/about#contact" },
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
