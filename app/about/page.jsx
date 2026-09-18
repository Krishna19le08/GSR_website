import ImagePlaceholder from "../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonSecondary,
  ButtonOnDark,
  TextLink,
  IconTile,
  StatCard,
  Quote,
  Pill,
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
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* 01 — HERO */}
      <section className="relative isolate flex min-h-[50vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ ABOUT HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">About GSR</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Building a World Where Compassion, Equality, and Sustainability
            Are a Way of Life
          </h1>
        </div>
      </section>

      {/* 02 — OUR STORY */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <ImagePlaceholder label="[ IMAGE HOLDER ]" ratio="aspect-[4/3]" />
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Founded in 2026, Built on Belief in People
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
              At Global Social Responsibility Welfare Foundation (GSR), we
              believe that every individual has the power to make a
              difference. By bringing together people, communities,
              organizations, volunteers, institutions, and leaders, we work
              toward a world where compassion, equality, and sustainability
              become a way of life.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
              We are committed to protecting the environment, advancing
              education, empowering communities, reducing poverty, and
              creating opportunities for all — regardless of age, gender,
              religion, nationality, or background.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
              GSR was started from a simple observation: many communities and
              individuals have the potential to create positive change but
              lack access to the knowledge, resources, guidance, networks,
              and opportunities needed to do so. GSR exists to connect
              people and organizations to address these challenges together —
              through environmental protection, education for all, community
              empowerment, justice and welfare, and sustainable
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — MISSION & VISION */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-950">
              <Eyebrow>Our Mission</Eyebrow>
              <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                To connect people, knowledge, opportunities, and
                environmental responsibility to empower communities, protect
                our planet, and build a more sustainable, equitable, and
                inclusive world.
              </p>
            </div>
            <div className="border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-950">
              <Eyebrow>Our Vision</Eyebrow>
              <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                To inspire and unite individuals, communities, and
                organizations to protect our planet, promote social equality,
                expand opportunities, and create a sustainable future where
                every generation can live with dignity, face challenges with
                strength, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — CORE VALUES */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Core Values</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title}>
                <IconTile icon={value.icon} />
                <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — OUR FOCUS AREAS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              What We Want You to Know First
            </h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Protect Our Planet · Educate &amp; Create Awareness · Empower
              People · Promote Justice &amp; Welfare · Build Sustainable
              Communities
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="flex flex-col">
                <IconTile icon={area.icon} tone="amber" />
                <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — LEADERSHIP SPOTLIGHT */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Zehra Fathima
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Founder &amp; Managing Trustee
            </p>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Zehra Fathima is the Founder of Global Social Responsibility
              Welfare Foundation (GSR) and CEO of Iraivi LGBT Charitable
              Trust. A professional hotelier and social activist, she
              advocates for Justice &amp; Welfare for All, environmental
              protection, education, empowerment, and inclusion.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
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
          </div>
          <ImagePlaceholder label="[ FOUNDER PHOTOGRAPH ]" ratio="aspect-[4/5]" />
        </div>
      </section>

      {/* 07 — WHERE IT BEGAN */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Where It Began</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Our Founding Initiatives
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {foundingInitiatives.map((item) => (
              <div key={item.name}>
                <IconTile icon={item.icon} />
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — CURRENT INITIATIVES */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Current Initiatives</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              What We&rsquo;re Working On Right Now
            </h2>
          </div>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] table-auto border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                    Initiative
                  </th>
                  <th className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                    Focus Area
                  </th>
                  <th className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                    Location
                  </th>
                  <th className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                    Beneficiaries
                  </th>
                  <th className="py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {currentInitiatives.map((project) => (
                  <tr key={project.name}>
                    <td className="py-4 pr-4 font-medium text-zinc-900 dark:text-zinc-50">
                      {project.name}
                    </td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {project.area}
                    </td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {project.location}
                    </td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {project.beneficiaries}
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 09 — FUTURE INITIATIVES */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Looking Ahead</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Future Initiatives
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {futureInitiatives.map((project) => (
              <div key={project.name}>
                <ImagePlaceholder
                  label={`[ ${project.name.toUpperCase()} ]`}
                  ratio="aspect-[4/3]"
                />
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                  {project.area} · {project.location} · {project.timeline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — TEAM PREVIEW */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              The People Behind GSR
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              We&rsquo;d rather introduce our team properly, with real names
              and real faces, than fill this space with stand-ins. Here&rsquo;s
              how we&rsquo;re structured while that page comes together.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "shield", title: "Board of Trustees", desc: "6 members setting the long-term direction." },
              { icon: "building", title: "Management Core Committee", desc: "12 members overseeing day-to-day governance." },
              { icon: "users", title: "Functional Committees", desc: "15 committees, 5 members each, driving the work." },
              { icon: "heart", title: "Volunteers & Interns", desc: "Growing every month — perhaps including you next." },
            ].map((item) => (
              <div key={item.title}>
                <IconTile icon={item.icon} />
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/about/team">View Full Governance Structure</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 11 — IMPACT PREVIEW */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Impact</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              A First Year in Motion
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Founded in 2026, GSR&rsquo;s initiatives are in their first
              active cycle. Verified beneficiary and impact numbers will be
              published here as our projects report their first results.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 border-y border-dashed border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-zinc-200 sm:dark:divide-zinc-800 lg:grid-cols-4">
            {[
              { label: "Beneficiaries Supported", note: "Counting starts this cycle" },
              { label: "Communities Reached", note: "Our first sites are underway" },
              { label: "Volunteers Engaged", note: "We're recruiting now" },
              { label: "Partner Organizations", note: "Talk to us — be the first" },
            ].map((stat) => (
              <StatCard key={stat.label} value="Year One" label={stat.label} note={stat.note} />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonSecondary href="/about/impact">See Our Full Impact</ButtonSecondary>
          </div>
        </div>
      </section>

      {/* 12 — GET INVOLVED */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Get Involved</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              There Are Many Ways to Join Us
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Volunteer", href: "/join", icon: "heart", desc: "Give your time to a cause on the ground." },
              { title: "Internship", href: "/join", icon: "graduate", desc: "Learn by doing, alongside our team." },
              { title: "Membership", href: "/join", icon: "users", desc: "Help shape where GSR goes next." },
              { title: "Partner With Us", href: "/partner", icon: "handshake", desc: "Bring your organization into the network." },
            ].map((item) => (
              <div key={item.title}>
                <IconTile icon={item.icon} tone="amber" />
                <div className="mt-5">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                    {item.desc}
                  </p>
                  <div className="mt-3">
                    <TextLink href={item.href}>Learn More →</TextLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — CONTACT */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mt-8 space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              No 15, Ponnappa Lane, Triplicane, Chennai – 600005, Tamil Nadu,
              India
            </p>
            <p>+91 87545 63555 &middot; +91 94441 79215</p>
            <p>info.gsrwf@gmail.com &middot; www.gsrwf.com</p>
          </div>
        </div>
      </section>

      {/* 14 — FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 md:py-32">
        <ImagePlaceholder
          label="[ BACKGROUND IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Be Part of the Change
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Every action counts. Join GSR in protecting our planet, expanding
            education, and empowering communities — together, we can build a
            more equitable future for generations to come.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/join">Join Our Journey</ButtonPrimary>
            <ButtonOnDark href="/donate">Donate</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
