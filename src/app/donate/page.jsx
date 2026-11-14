import {
  ActionTiles,
  Button,
  DarkBand,
  NumberedSteps,
  PageHero,
  PhotoCard,
  PhotoCardRow,
  PromiseList,
  Section,
  SectionHeader,
} from "@/components/ui/ui";
import ContactDetails from "@/components/sections/ContactDetails";
import { mailto, org } from "@/config/org-info";

export const metadata = {
  title: "Donate | GSR",
  description:
    "Support GSR's environment, education and empowerment work in Tamil Nadu. Online giving is being set up; contact us to donate now.",
  openGraph: {
    title: "Donate | GSR",
    description: "Support GSR's work in Tamil Nadu. Contact us to donate while online giving is being set up.",
  },
};

const donateMail = mailto(
  "I'd like to donate to GSR",
  "Hello GSR,\n\nI'd like to make a donation.\n\nName:\nPhone:\nAmount (approx.):\nArea I'd like to support (environment / education / empowerment / wherever needed):\n\nThank you.",
);

const steps = [
  {
    title: "Get in touch",
    body: `Email ${org.email} or call us. Tell us roughly how much you'd like to give.`,
  },
  {
    title: "We confirm the details",
    body: "We tell you how to pay and answer any questions before you give.",
  },
  {
    title: "You get a receipt",
    body: "Every donation gets a written receipt from GSR.",
  },
];

const causes = [
  {
    title: "Environment",
    description: "Native tree planting and land restoration, run with the people who live on that land.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.webp",
    alt: "Tall trees on a forested hillside",
  },
  {
    title: "Education",
    description: "After-school learning and digital skills for children and young people.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.webp",
    alt: "Children sitting at desks in a village classroom",
    position: "object-[center_70%]",
  },
  {
    title: "Empowerment",
    description: "Practical training that leads to work and income, and a voice for families who are ignored.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/community-planning.webp",
    alt: "Women at a village meeting, one of them writing notes",
  },
];

const promises = [
  {
    icon: "receipt",
    title: "A receipt for every gift",
    body: "You get a written receipt for every donation, whatever the amount.",
  },
  {
    icon: "shield",
    title: "A registered non-profit",
    body: `GSR is registered in Chennai. ${org.registration}.`,
  },
  {
    icon: "chart",
    title: "Reports from every project",
    body: "We will publish how many people each project reached, every tree planted, and who volunteered.",
  },
];

const otherWays = [
  { icon: "users", label: "Volunteer", body: "Give a few hours on a project near you.", href: "/join" },
  { icon: "handshake", label: "Partner with us (CSR)", body: "Sponsor or co-run a project.", href: "/partner" },
  { icon: "mail", label: "Ask us a question", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

export default function DonatePage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/empowerment-sewing.webp"
        imageAlt="A woman smiling beside a sewing machine in a small shop"
        imagePosition="object-[70%_center]"
        breadcrumbs={[{ label: "Donate" }]}
        eyebrow="Donate"
        title="Help fund our work in Tamil Nadu"
        lede="Online donations are being set up. To donate now, contact us by email or phone and we will take you through it."
        actions={[
          { label: "Email us to donate", href: donateMail },
          { label: `Call ${org.phones[0].display}`, href: `tel:${org.phones[0].tel}` },
        ]}
      />

      {/* HOW TO GIVE */}
      <Section tone="white" labelledBy="give-heading">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <SectionHeader
              id="give-heading"
              eyebrow="How to give today"
              title="Three steps, by email or phone"
              lede="We are a new foundation and our online payment page is not ready yet. Until it is, every donation is handled by a person on our team."
            />
            <NumberedSteps items={steps} columns={1} className="mt-12 sm:grid-cols-3 lg:grid-cols-1 lg:gap-y-8" />
            <div className="mt-12 rounded-2xl border border-clay bg-paper p-6">
              <h3 className="font-semibold text-ink">About tax exemption</h3>
              <p className="mt-2 leading-7 text-ink-soft">
                Please ask us about tax-exemption status before you give. We will tell you exactly where it
                stands.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-teal">Contact us to donate</h3>
            <ContactDetails className="mt-4" />
            <div className="mt-6">
              <Button href={donateMail} variant="gold" arrow className="w-full sm:w-auto">
                Email us to donate
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT IT FUNDS */}
      <Section tone="sand" labelledBy="funds-heading">
        <SectionHeader
          id="funds-heading"
          eyebrow="What your gift supports"
          title="Three areas of work"
          lede="When you get in touch, tell us if you'd like your gift to go to one of these."
        />
        <PhotoCardRow label="Areas your gift supports" className="mt-12">
          {causes.map((c) => (
            <PhotoCard
              key={c.title}
              href={c.href}
              src={c.src}
              alt={c.alt}
              tag="Cause"
              title={c.title}
              description={c.description}
              imagePosition={c.position}
            />
          ))}
        </PhotoCardRow>
      </Section>

      {/* PROMISES */}
      <DarkBand labelledBy="promise-heading">
        <SectionHeader
          id="promise-heading"
          tone="dark"
          eyebrow="Our promise to donors"
          title="What you can expect from us"
        />
        <PromiseList items={promises} columns={3} className="mt-12" />
      </DarkBand>

      {/* OTHER WAYS */}
      <Section tone="paper" labelledBy="other-heading">
        <SectionHeader id="other-heading" eyebrow="Other ways to help" title="Not ready to give money?" lede="Time, skills and contacts help just as much." />
        <ActionTiles items={otherWays} className="mt-12" />
      </Section>
    </main>
  );
}
