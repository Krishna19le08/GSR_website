import FounderProfile from "@/components/sections/FounderProfile";
import Icon from "@/components/ui/icons";
import {
  ActionTiles,
  Eyebrow,
  IconBadge,
  MediaSplit,
  PageHero,
  PhotoCard,
  PhotoCardRow,
  Section,
  SectionHeader,
  SmartLink,
  ArrowIcon,
  TextLink,
} from "@/components/ui/ui";

export const metadata = {
  title: "About Us | GSR",
  description:
    "Founded in 2026, Global Social Responsibility Welfare Foundation (GSR) connects people and organizations to protect the environment, advance education, and empower communities across India.",
  openGraph: {
    title: "About Us | GSR",
    description:
      "Founded in 2026, GSR connects people and organizations to protect the environment, advance education, and empower communities across India.",
  },
};

const mission = [
  {
    icon: "target",
    title: "Our mission",
    text: "To connect people, knowledge, opportunities and environmental responsibility to empower communities, protect our planet, and build a more sustainable, equitable and inclusive world.",
  },
  {
    icon: "eye",
    title: "Our vision",
    text: "A world where individuals, communities and organizations work together to protect the planet, promote equality and expand opportunity, so every generation can live with dignity and thrive.",
  },
];

// The three focus areas that have their own cause page get a photo card.
// Photos show the kind of setting; alt text describes only what is in them.
const causeCards = [
  {
    title: "Environmental protection",
    tag: "Environment",
    description: "Protecting nature, wildlife, oceans and natural resources.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.jpg",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
  {
    title: "Education and awareness",
    tag: "Education",
    description: "Wider access to education, including environmental learning.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.jpg",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_70%]",
  },
  {
    title: "Empowerment and livelihoods",
    tag: "Empowerment",
    description: "Skills training, internships and livelihood programmes.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/empowerment-sewing.jpg",
    alt: "A smiling woman standing beside a sewing machine in a small shop",
    position: "object-center",
  },
];

const otherFocus = [
  {
    icon: "scale",
    title: "Equality, justice and welfare",
    text: "Supporting dignity, inclusion and access to justice and welfare for everyone.",
  },
  {
    icon: "network",
    title: "A network for sustainability",
    text: "Bringing together communities, NGOs, schools and colleges, businesses, government and volunteers to work on shared problems.",
    link: { href: "/gsr-tech/network-hub", label: "Visit the Network Hub" },
  },
];

const coreValues = [
  { icon: "leaf", title: "Environmental responsibility", text: "We promote conservation, sustainability and careful use of natural resources." },
  { icon: "book", title: "Education and knowledge", text: "We work to widen access to education, environmental awareness and lifelong learning." },
  { icon: "sprout", title: "Empowerment and opportunity", text: "We help people build skills and confidence so they can take part fully in society." },
  { icon: "scale", title: "Equality and inclusion", text: "We treat everyone with respect, whatever their background or circumstances." },
  { icon: "heart", title: "Compassion and service", text: "We serve with empathy and respect, and we put the people we support first." },
  { icon: "seedling", title: "Future generations", text: "We want the next generation to be able to face hard challenges and live with dignity." },
];

const foundingInitiatives = [
  { icon: "laptop", name: "GSR Tech", desc: "A platform that gives NGOs a verified digital identity.", href: "/gsr-tech" },
  { icon: "megaphone", name: "Break the Silence Rally", desc: "A youth-led campaign speaking out against injustice.", href: "/social-responsibility/empowerment" },
  { icon: "graduate", name: "GSR Academy", desc: "Learning programmes focused on practical, job-ready skills.", href: "/social-responsibility/education" },
  { icon: "network", name: "Tribal 2 Technology", desc: "Digital access and training for tribal communities.", href: "/social-responsibility/empowerment" },
  { icon: "leaf", name: "Connect Nature", desc: "Community-led conservation of local habitats and rivers.", href: "/social-responsibility/environmental" },
];

const currentInitiatives = [
  { name: "Digital Trib", area: "Education & Empowerment", location: "Tamil Nadu", beneficiaries: "Tribal communities", status: "In progress" },
  { name: "Break the Silence Rally", area: "Education", location: "Pan-India", beneficiaries: "Students", status: "Ongoing" },
  { name: "Smart Seed Feed", area: "Environmental", location: "Pan-India", beneficiaries: "General public", status: "In progress" },
  { name: "Tribal Hub Care", area: "Environmental", location: "Tamil Nadu", beneficiaries: "Tribal communities", status: "In progress" },
  { name: "Plastic-Free Communities", area: "Environmental", location: "Tamil Nadu", beneficiaries: "General public", status: "In progress" },
  { name: "Farm Care", area: "Empowerment", location: "Tamil Nadu", beneficiaries: "Farmers", status: "In progress" },
];

const futureInitiatives = [
  { name: "Rehabilitation", area: "Mental health", location: "Tamil Nadu", timeline: "Expected 2027" },
];

const structure = [
  { figure: "6", title: "Board of Trustees", desc: "Six members. Set long-term direction." },
  { figure: "12", title: "Core Committee", desc: "Twelve members. Oversee governance and the sub-committees." },
  { figure: "7", title: "Sub-committees", desc: "From child protection to audit and procurement." },
  { icon: "users", title: "Executive team", desc: "A CEO, a Project Director and six managers run the daily work." },
];

const actions = [
  { icon: "users", label: "Volunteer", body: "Help on a project on the ground.", href: "/join" },
  { icon: "graduate", label: "Internship", body: "Work alongside our team and learn.", href: "/join" },
  { icon: "flag", label: "Membership", body: "Have a say in what GSR does next.", href: "/join" },
  { icon: "handshake", label: "Partner with us", body: "Bring your organization into the network.", href: "/partner" },
  { icon: "heart", label: "Donate", body: "Fund our work in Tamil Nadu.", href: "/donate", accent: "gold" },
  { icon: "mail", label: "Contact us", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

function StatusChip({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-banyan/10 px-3 py-1 text-sm font-medium text-banyan">
      <span className="size-1.5 rounded-full bg-banyan" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function About() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/youth-learning.jpg"
        imageAlt="Children sitting at desks in a decorated village classroom"
        imagePosition="object-[center_62%]"
        breadcrumbs={[{ label: "About us" }]}
        eyebrow="About GSR"
        title="A Chennai welfare foundation, started in 2026"
        lede="We work on environmental protection, education and community empowerment, and we connect the people and organizations who want to help."
        actions={[
          { label: "Read the founder's story", href: "#founder" },
          { label: "See how GSR is run", href: "/about/team" },
        ]}
      />

      {/* STORY + MISSION + VISION */}
      <Section tone="white" labelledBy="story-heading">
        <MediaSplit
          image="/images/causes/community-planning.jpg"
          imageAlt="Women at a village meeting, one of them writing notes"
          imagePosition="object-[30%_center]"
          ratio="4/5"
          className="lg:grid-cols-[5fr_7fr]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        >
          <Eyebrow>Our story</Eyebrow>
          <h2 id="story-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            Why GSR exists
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lede leading-relaxed text-ink-soft">
            <p>
              Many communities have people ready to make change happen, but they lack the knowledge,
              resources, guidance or contacts to do it. Meanwhile, plenty of people and organizations
              want to help but don&rsquo;t know where to start.
            </p>
            <p>
              GSR connects the two. We bring together volunteers, NGOs, schools and colleges,
              businesses and government to protect the environment, improve education, reduce poverty
              and create opportunity, for everyone regardless of age, gender, religion, nationality or
              background.
            </p>
          </div>
        </MediaSplit>

        <ul className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {mission.map((m) => (
            <li key={m.title} className="rounded-2xl bg-paper p-7 lg:p-10">
              <IconBadge icon={m.icon} tone="solid" />
              <h3 className="mt-6 font-display text-h3 font-medium text-ink">{m.title}</h3>
              <p className="mt-3 text-pretty text-lede text-ink-soft">{m.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FOCUS AREAS */}
      <Section tone="sand" labelledBy="focus-heading">
        <SectionHeader
          id="focus-heading"
          eyebrow="What we work on"
          title="Five areas of work"
          lede="Three of them have their own page with the projects running under them."
        />
        <PhotoCardRow label="Focus areas with their own page" className="mt-12">
          {causeCards.map((c) => (
            <PhotoCard
              key={c.title}
              href={c.href}
              src={c.src}
              alt={c.alt}
              tag={c.tag}
              title={c.title}
              description={c.description}
              imagePosition={c.position}
              ratio="4/5"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw"
            />
          ))}
        </PhotoCardRow>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {otherFocus.map((f) => (
            <li key={f.title} className="flex flex-col gap-5 rounded-2xl border border-clay bg-surface p-6 sm:flex-row lg:p-8">
              <IconBadge icon={f.icon} />
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">{f.title}</h3>
                <p className="mt-2 leading-7 text-ink-soft">{f.text}</p>
                {f.link && (
                  <div className="mt-2">
                    <TextLink href={f.link.href}>{f.link.label}</TextLink>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* VALUES */}
      <Section tone="white" labelledBy="values-heading">
        <SectionHeader
          id="values-heading"
          eyebrow="Our values"
          title="Six values behind every project"
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {coreValues.map((v) => (
            <li key={v.title} className="rounded-2xl bg-paper p-6 lg:p-7">
              <IconBadge icon={v.icon} />
              <h3 className="mt-5 font-display text-xl font-medium text-ink">{v.title}</h3>
              <p className="mt-2 text-[0.96875rem] leading-7 text-ink-soft">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FOUNDER: sand spotlight, dark record band, paper journey */}
      <FounderProfile />

      {/* PROGRAMMES */}
      <Section tone="white" labelledBy="programmes-heading">
        <SectionHeader
          id="programmes-heading"
          eyebrow="Programmes"
          title="Five founding programmes"
          lede="The programmes GSR was set up to run. Each links to the page where it is described."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {foundingInitiatives.map((p) => (
            <li key={p.name}>
              <SmartLink
                href={p.href}
                className="group flex h-full flex-col rounded-2xl bg-paper p-6 transition-colors duration-200 hover:bg-banyan"
              >
                <IconBadge icon={p.icon} className="group-hover:bg-white/15 group-hover:text-gold-light" />
                <h3 className="mt-5 font-display text-xl font-medium text-ink group-hover:text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-6 text-ink-soft group-hover:text-white/90">{p.desc}</p>
                <ArrowIcon className="mt-5 size-5 text-banyan transition-transform group-hover:text-gold-light motion-safe:group-hover:translate-x-1" />
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="mt-20 lg:mt-24">
          <h3 id="current-heading" className="font-display text-h3 font-medium text-ink">
            Current initiatives
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-ink-soft">
            These projects are in their first cycle. We will publish verified numbers on who they
            reached once the first results are in.
          </p>

          {/* Phones: one card per initiative */}
          <ul className="mt-8 grid grid-cols-1 gap-3 md:hidden" aria-labelledby="current-heading">
            {currentInitiatives.map((p) => (
              <li key={p.name} className="rounded-2xl border border-clay bg-surface p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-display text-xl font-medium text-ink">{p.name}</p>
                  <StatusChip>{p.status}</StatusChip>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-ink-muted">Focus area</dt>
                    <dd className="mt-0.5 font-medium text-ink">{p.area}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Location</dt>
                    <dd className="mt-0.5 font-medium text-ink">{p.location}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-ink-muted">Who it serves</dt>
                    <dd className="mt-0.5 font-medium text-ink">{p.beneficiaries}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          {/* Tablet and up: table */}
          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-clay md:block">
            <table className="w-full table-auto border-collapse text-left">
              <caption className="sr-only">Current GSR initiatives</caption>
              <thead className="bg-paper text-sm">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold text-ink">Initiative</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-ink">Focus area</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-ink">Location</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-ink">Who it serves</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-ink">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clay bg-surface">
                {currentInitiatives.map((p) => (
                  <tr key={p.name}>
                    <th scope="row" className="px-6 py-4 font-display text-lg font-medium text-ink">{p.name}</th>
                    <td className="px-6 py-4 text-ink-soft">{p.area}</td>
                    <td className="px-6 py-4 text-ink-soft">{p.location}</td>
                    <td className="px-6 py-4 text-ink-soft">{p.beneficiaries}</td>
                    <td className="px-6 py-4"><StatusChip>{p.status}</StatusChip></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {futureInitiatives.map((p) => (
            <div
              key={p.name}
              className="mt-6 flex flex-col gap-4 rounded-2xl border-2 border-dashed border-clay p-6 sm:flex-row sm:items-center"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-marigold/20 text-marigold-deep">
                <Icon name="clock" className="size-6" />
              </span>
              <p className="leading-7 text-ink-soft">
                <span className="font-semibold text-ink">Planned: {p.name}.</span> {p.area}, {p.location}.{" "}
                {p.timeline}.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* GOVERNANCE SUMMARY */}
      <Section tone="paper" labelledBy="run-heading">
        <SectionHeader
          id="run-heading"
          eyebrow="Governance"
          title="How GSR is run"
          lede="A Board of Trustees, a Core Committee with seven sub-committees, and an executive team led by the CEO."
          action={<TextLink href="/about/team">See the full structure</TextLink>}
        />
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {structure.map((s) => (
            <li key={s.title} className="flex flex-col rounded-2xl border border-clay bg-surface p-6 lg:p-7">
              {s.figure ? (
                <span className="font-display text-5xl font-medium text-marigold-deep" aria-hidden="true">
                  {s.figure}
                </span>
              ) : (
                <IconBadge icon={s.icon} />
              )}
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-6 text-ink-soft">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* GET INVOLVED (id kept for older /about#contact links) */}
      <Section tone="sand" id="contact" labelledBy="involved-heading">
        <SectionHeader
          id="involved-heading"
          eyebrow="Get involved"
          title="Ways to work with GSR"
          lede="Volunteer, intern, become a member or bring your organization into the network."
        />
        <ActionTiles items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
