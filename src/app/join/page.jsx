import {
  ActionTiles,
  Button,
  DarkBand,
  Eyebrow,
  MediaSplit,
  NumberedSteps,
  PageHero,
  PhotoCard,
  PhotoCardRow,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui/ui";
import Icon from "@/components/ui/icons";
import { mailto, org } from "@/config/org-info";

export const metadata = {
  title: "Get Involved | GSR",
  description:
    "Join GSR as a volunteer, intern, member or partner, register for our programmes, or list your organisation in the GSR Network.",
  openGraph: {
    title: "Get Involved | GSR",
    description: "Join GSR as a volunteer, intern, member or partner.",
  },
};

const volunteerMail = mailto(
  "I'd like to volunteer with GSR",
  "Hello GSR,\n\nI'd like to volunteer.\n\nName:\nPhone:\nWhere I live:\nSkills or interests:\nTime I can give (hours per week, in person or remote):\n\nThank you.",
);

const pathways = [
  {
    icon: "users",
    label: "Volunteer",
    body: "Help on environment, education or community projects, in person or remotely.",
    href: volunteerMail,
  },
  {
    icon: "graduate",
    label: "Internship",
    body: "Work in research, communications, field programmes or GSR Tech.",
    href: mailto(
      "Internship application",
      "Hello GSR,\n\nI'd like to apply for an internship.\n\nName:\nPhone:\nCollege or course:\nArea of interest (research / communications / field programmes / GSR Tech):\nDates I'm available:\n\nThank you.",
    ),
  },
  {
    icon: "flag",
    label: "Membership",
    body: "Become a registered member and have a say in our priorities.",
    href: mailto("I'd like to become a GSR member", "Hello GSR,\n\nI'd like to become a member.\n\nName:\nPhone:\nCity:\n\nThank you."),
  },
  {
    icon: "handshake",
    label: "Partner organisation",
    body: "For NGOs, schools, colleges, businesses and CSR teams.",
    href: "/partner",
  },
  {
    icon: "sprout",
    label: "Join a programme",
    body: "Register for our education, health, livelihood or environment programmes.",
    href: mailto(
      "Register for a GSR programme",
      "Hello GSR,\n\nI'd like to register for a programme.\n\nName:\nPhone:\nVillage or town:\nProgramme I'm interested in (education / health / livelihood / environment):\n\nThank you.",
    ),
  },
  {
    icon: "network",
    label: "GSR Network",
    body: "List your organisation in the GSR Tech directory.",
    href: "/gsr-tech/network-hub",
  },
];

const emailChecklist = [
  "Your name and phone number",
  "Where you live, or if you'd prefer to help remotely",
  "Skills you'd like to use, such as teaching, design or field work",
  "How much time you can give each week",
];

const steps = [
  { title: "You write to us", body: "Send a short email, or call us, saying how you'd like to help." },
  { title: "We reply", body: "Someone from our team gets back to you with questions and options." },
  { title: "We find a fit", body: "We match you to a project that suits your time and skills." },
  { title: "You start", body: "You join the project team, in person or remotely." },
];

const areas = [
  {
    title: "Environment",
    description: "Native tree planting and land restoration with local communities.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.webp",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
  {
    title: "Education",
    description: "After-school classes and digital skills for children and young people.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.webp",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_75%]",
  },
  {
    title: "Empowerment",
    description: "Practical training that leads to work and income.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/empowerment-sewing.webp",
    alt: "A woman smiling beside a sewing machine in a small shop",
    position: "object-[70%_center]",
  },
];

export default function Join() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/hero/hero_1.webp"
        imageAlt="Children sitting together on the ground outside a school building"
        imagePosition="object-[center_55%]"
        breadcrumbs={[{ label: "Get involved" }]}
        eyebrow="Get involved"
        title="Ways to work with GSR"
        lede="Pick the option that suits you. Most of them start with a short email to our team."
        actions={[
          { label: "Email us to volunteer", href: volunteerMail },
          { label: "See all six options", href: "#pathways" },
        ]}
      />

      {/* PATHWAYS */}
      <Section tone="white" id="pathways" labelledBy="pathways-heading">
        <SectionHeader
          id="pathways-heading"
          eyebrow="Six ways in"
          title="How would you like to help?"
          lede="Choose a tile. Email options open a message with the details we need already listed."
        />
        <ActionTiles columns={3} items={pathways} className="mt-12" />
      </Section>

      {/* VOLUNTEERING */}
      <Section tone="sand" labelledBy="volunteer-heading">
        <MediaSplit
          image="/images/causes/youth-learning.webp"
          imageAlt="Children sitting at desks in a decorated village classroom"
          imagePosition="object-[center_30%]"
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_6fr]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        >
          <Eyebrow>Volunteering</Eyebrow>
          <h2 id="volunteer-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            What to put in your email
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lede text-ink-soft">
            A few details help us suggest the right project the first time.
          </p>
          <ul className="mt-8 space-y-4">
            {emailChecklist.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-banyan/10 text-banyan">
                  <Icon name="checkCircle" className="size-5" />
                </span>
                <span className="pt-1 leading-7 text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={volunteerMail} variant="primary" arrow>
              Email us to volunteer
            </Button>
          </div>
        </MediaSplit>
      </Section>

      {/* WHAT HAPPENS NEXT */}
      <DarkBand image="/images/causes/landscape-guardians.webp" labelledBy="next-heading">
        <SectionHeader
          id="next-heading"
          tone="dark"
          eyebrow="What happens next"
          title="From your first email to your first day"
          lede="The same four steps apply to volunteers, interns and members."
        />
        <NumberedSteps tone="dark" items={steps} className="mt-12" />
      </DarkBand>

      {/* AREAS */}
      <Section tone="paper" labelledBy="areas-heading">
        <SectionHeader
          id="areas-heading"
          eyebrow="Where your time goes"
          title="Three areas of work"
          lede="Tell us if one of these interests you most."
        />
        <PhotoCardRow label="GSR areas of work" className="mt-12">
          {areas.map((a) => (
            <PhotoCard
              key={a.title}
              href={a.href}
              src={a.src}
              alt={a.alt}
              tag="Our work"
              title={a.title}
              description={a.description}
              imagePosition={a.position}
            />
          ))}
        </PhotoCardRow>
      </Section>

      {/* NOT SURE */}
      <Section tone="sand" labelledBy="unsure-heading">
        <SectionHeader
          id="unsure-heading"
          align="center"
          eyebrow="Not sure where you fit?"
          title="Tell us what you can offer"
          lede="Time, skills, funding, space or contacts. Write to us and we will suggest where it would help most."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={mailto("How can I help GSR?")} variant="primary" size="lg" arrow>
            Email us
          </Button>
          <Button href={`tel:${org.phones[0].tel}`} variant="secondary" size="lg">
            Call {org.phones[0].display}
          </Button>
        </div>
        <div className="mt-6 flex justify-center">
          <TextLink href="/contact">See our address and directions</TextLink>
        </div>
      </Section>
    </main>
  );
}
