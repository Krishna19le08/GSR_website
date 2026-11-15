import Image from "@/components/ui/ResponsiveImage";
import {
  ActionTiles,
  Button,
  Container,
  DarkBand,
  Eyebrow,
  MediaSplit,
  NumberedSteps,
  PhotoCard,
  PhotoCardRow,
  PromiseList,
  Quote,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui/ui";
import IndiaStateMapSection from "@/components/maps/IndiaStateMapSection";
import { getStates, toClientState } from "@/content/states-data";
import { org } from "@/config/org-info";

// Photos are illustrative of each project's setting; alt text describes
// what is actually in the picture.
const projects = [
  {
    title: "GSR Tech",
    tag: "Digital",
    description: "Websites and digital tools for grassroots NGOs, so they spend less time on paperwork.",
    href: "/gsr-tech",
    src: "/images/causes/digital-rural.webp",
    alt: "A man in a rural field holding up a basic mobile phone",
    position: "object-[70%_center]",
  },
  {
    title: "Break the Silence Rally",
    tag: "Dignity",
    description: "Community rallies against child trafficking that give survivors and their families a voice.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/hero-community.webp",
    alt: "A large group of women seated together outdoors at a village gathering",
    position: "object-center",
  },
  {
    title: "GSR Academy",
    tag: "Education",
    description: "After-school classes for children who don't have a good school nearby.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.webp",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_70%]",
  },
  {
    title: "Tribal 2 Technology",
    tag: "Empowerment",
    description: "Basic digital literacy classes in tribal communities.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/community-planning.webp",
    alt: "Women at a village meeting, one of them writing notes",
    position: "object-center",
  },
  {
    title: "Connect Nature",
    tag: "Environment",
    description: "Native tree planting and land restoration, run by local communities.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.webp",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
];

const promises = [
  {
    icon: "users",
    title: "Real headcounts",
    body: "How many people each project reached, counted rather than estimated.",
  },
  {
    icon: "sprout",
    title: "Every tree, with a place",
    body: "Every tree planted, and which community planted it.",
  },
  {
    icon: "flag",
    title: "Every volunteer named",
    body: "The name of every volunteer who worked with us.",
  },
  {
    icon: "receipt",
    title: "A receipt for every gift",
    body: "Every donation to GSR gets a written receipt.",
  },
];

const steps = [
  { title: "Connect", body: "We visit a community and listen before proposing anything." },
  { title: "Educate", body: "We teach skills and share tools that people can use without us." },
  { title: "Empower", body: "Local people take over running the project." },
  { title: "Sustain", body: "We stay in touch until the work keeps going on its own." },
];

const actions = [
  { icon: "users", label: "Volunteer", body: "Give a few hours on a project near you.", href: "/join" },
  { icon: "heart", label: "Donate", body: "Fund our work in Tamil Nadu.", href: "/donate", accent: "gold" },
  { icon: "handshake", label: "Partner with us (CSR)", body: "Sponsor or co-run a project.", href: "/partner" },
  { icon: "laptop", label: "GSR Tech and SDIN", body: "Digital tools and a verified ID for NGOs.", href: "/gsr-tech" },
  { icon: "chart", label: "CSR Tracker", body: "See CSR spending by state and company.", href: "/csr-tracker" },
  { icon: "mail", label: "Contact us", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

export default function Home() {
  const states = getStates();

  return (
    <main className="flex flex-1 flex-col">
      {/* HERO */}
      <section className="surface-dark relative isolate flex min-h-[540px] items-end overflow-hidden bg-banyan-deep md:min-h-[calc(100svh-4rem)] lg:min-h-[min(calc(100svh-5rem),880px)]">
        <Image
          src="/images/hero/hero_1.webp"
          alt="Children sitting together on the ground outside a school building"
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/20 md:via-black/35 md:to-black/5" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" aria-hidden="true" />

        <Container className="pb-12 pt-20 md:pb-24 md:pt-32">
          <p lang="ta" className="inline-flex items-center gap-3 text-sm font-medium text-gold-light">
            <span className="h-0.5 w-6 rounded-full bg-gold-light" aria-hidden="true" />
            {org.tagline}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-hero font-medium text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">
            Connecting people who want to help with{" "}
            <span className="text-gold-light">communities that need it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lede text-white/90 [text-shadow:0_1px_12px_rgb(0_0_0/0.4)]">
            GSR is a welfare foundation in Chennai. We work on the environment, education and
            livelihoods, starting with communities in Tamil Nadu.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/join" variant="gold" size="lg" arrow>
              Get involved
            </Button>
            <Button href="#projects" variant="outline-light" size="lg">
              See our projects
            </Button>
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <Section tone="white" id="projects" labelledBy="projects-heading">
        <SectionHeader
          id="projects-heading"
          eyebrow="Our projects"
          title="Five projects, starting close to home"
          lede="Each one is small for now, and we will report on how each one goes."
          action={<TextLink href="/about">About GSR</TextLink>}
        />
        <PhotoCardRow
          label="GSR projects"
          className="mt-12"
          gridClassName="md:grid-cols-2 lg:grid-cols-6"
          itemClassNames={[
            "lg:col-span-3",
            "lg:col-span-3",
            "lg:col-span-2",
            "lg:col-span-2",
            "md:col-span-2 lg:col-span-2",
          ]}
        >
          {projects.map((p, i) => (
            <PhotoCard
              key={p.title}
              href={p.href}
              src={p.src}
              alt={p.alt}
              tag={p.tag}
              title={p.title}
              description={p.description}
              imagePosition={p.position}
              ratio={
                i < 2
                  ? "aspect-[4/5] md:aspect-[4/5] lg:aspect-[16/11]"
                  : i === 4
                    ? "aspect-[4/5] md:aspect-[2/1] lg:aspect-[4/5]"
                    : "aspect-[4/5]"
              }
              sizes={i < 2 ? "(min-width: 1024px) 50vw, 80vw" : "(min-width: 1024px) 33vw, 80vw"}
            />
          ))}
        </PhotoCardRow>
      </Section>

      {/* FOUNDER */}
      <Section tone="sand" labelledBy="founder-heading">
        <MediaSplit
          image="/images/team/zehra-fathima.webp"
          imageAlt="Portrait of Zehra Fathima, founder of GSR"
          imagePosition="object-top"
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_7fr]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        >
          <Eyebrow>Why GSR exists</Eyebrow>
          <h2 id="founder-heading" className="sr-only">
            A word from our founder
          </h2>
          <div className="mt-8">
            <Quote size="lg" cite="Zehra Fathima" role="Founder & Managing Trustee">
              I started GSR because I kept meeting people who were ready to help, and people who badly
              needed it, with nothing connecting the two.
            </Quote>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 pl-7">
            <Button href="/about#founder" variant="secondary" arrow>
              Read her story
            </Button>
          </div>
        </MediaSplit>
      </Section>

      {/* CSR STATE MAP */}
      <Section tone="white" labelledBy="csr-heading">
        <SectionHeader
          id="csr-heading"
          eyebrow="CSR Tracker"
          title={`Where CSR money goes, across ${states.length} states and union territories`}
          lede="Each state is coloured by its rating. The rating looks at CSR spend relative to state GDP and at year-on-year income growth. Click a state to see who received funds."
        />
        <div className="mt-12 overflow-hidden rounded-2xl shadow-[0_24px_48px_-28px_rgb(11_38_24/0.35)]">
          <IndiaStateMapSection states={states.map(toClientState)} />
        </div>
        <div className="mt-10">
          <Button href="/csr-tracker" variant="primary" arrow>
            Open the CSR Tracker
          </Button>
        </div>
      </Section>

      {/* COMMITMENTS */}
      <DarkBand image="/images/causes/landscape-guardians.webp" labelledBy="promises-heading">
        <SectionHeader
          id="promises-heading"
          tone="dark"
          eyebrow="What you can hold us to"
          title="GSR is new. Here is what we will report."
          lede="We don't have impact figures yet, so we won't show any. Starting with our first round of projects, we will publish:"
        />
        <PromiseList items={promises} className="mt-12" />
      </DarkBand>

      {/* HOW WE WORK */}
      <Section tone="paper" labelledBy="steps-heading">
        <SectionHeader
          id="steps-heading"
          eyebrow="How we work"
          title="How we start in a new community"
          lede="Every project follows the same four steps."
        />
        <NumberedSteps items={steps} className="mt-12" />
      </Section>

      {/* GET INVOLVED */}
      <Section tone="sand" labelledBy="involved-heading">
        <SectionHeader
          id="involved-heading"
          eyebrow="Get involved"
          title="You can give time, money, skills or contacts"
          lede="All of it helps. Pick the one that suits you."
        />
        <ActionTiles items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
