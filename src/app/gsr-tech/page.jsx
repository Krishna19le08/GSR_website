import {
  ActionTiles,
  DarkBand,
  Eyebrow,
  MediaSplit,
  NumberedSteps,
  PageHero,
  PromiseList,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui/ui";
import Icon from "@/components/ui/icons";
import { mailto } from "@/config/org-info";

export const metadata = {
  title: "GSR Tech | Digital Tools for NGOs",
  description:
    "GSR Tech gives registered NGOs a verified digital identity (SDIN), compliance reminders, donor records and a simple website.",
  openGraph: {
    title: "GSR Tech | Digital Tools for NGOs",
    description:
      "A verified digital identity, compliance reminders, donor tools and a website for registered NGOs.",
  },
};

const sdinMail = mailto(
  "Get my SDIN",
  "Hello GSR,\n\nWe'd like to register for an SDIN on GSR Tech.\n\nOrganisation name:\nType (trust / society / Section 8 company / other):\nRegistration number:\nState:\nContact person and phone:\n\nThank you.",
);

const walkthroughMail = mailto(
  "Book a GSR Tech walkthrough",
  "Hello GSR,\n\nWe'd like a walkthrough of GSR Tech before we register.\n\nOrganisation name:\nContact person and phone:\nSuitable days and times:\n\nThank you.",
);

const sdinPoints = [
  "Holds your registration, compliance and project history in one record.",
  "Share the ID with donors and government departments instead of sending the same documents again.",
  "Gives you a profile in the Network Hub, where CSR teams and volunteers can find you.",
];

const features = [
  {
    icon: "users",
    title: "People",
    body: "Registration, attendance and profiles for members, volunteers, interns and beneficiaries.",
  },
  {
    icon: "building",
    title: "Operations",
    body: "Staff records, budgets, donations and field reports, stored securely and shared with the people who need them.",
  },
  {
    icon: "shield",
    title: "Compliance",
    body: "Plain-language reminders for the registrations and filings an NGO has to keep up to date.",
  },
  {
    icon: "wallet",
    title: "Fundraising",
    body: "A donor database, receipts, and alerts when CSR funds and grants open.",
  },
  {
    icon: "book",
    title: "Reporting",
    body: "Templates for proposals, policies and annual reports, using the records you already keep.",
  },
  {
    icon: "globe",
    title: "Website",
    body: "A simple website and gallery you can update yourself, without hiring a developer.",
  },
];

const steps = [
  { title: "Email us", body: "Tell us your organisation's name, type and registration number." },
  { title: "Share your documents", body: "Send your registration papers so we can verify them." },
  { title: "Get your SDIN", body: "Your organisation receives its Social Digital Identity Number." },
  { title: "Use the tools", body: "Start with whichever part you need, from donor records to your website." },
];

const orgTypes = [
  { icon: "scale", label: "Trusts" },
  { icon: "users", label: "Societies" },
  { icon: "building", label: "Section 8 companies" },
  { icon: "heart", label: "Non-profits" },
  { icon: "mapPin", label: "Community groups" },
  { icon: "handshake", label: "Volunteer groups" },
];

const actions = [
  { icon: "network", label: "Get your SDIN", body: "Email us to register your NGO.", href: sdinMail },
  { icon: "laptop", label: "Book a walkthrough", body: "See the platform before you register.", href: walkthroughMail },
  { icon: "search", label: "Visit the Network Hub", body: "The directory of organisations on GSR Tech.", href: "/gsr-tech/network-hub" },
  { icon: "mail", label: "Ask a question", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

// Illustrative SDIN record. Every value on it is made up and labelled so.
function SdinCardExample() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative px-2 pb-8 pt-4 sm:px-6">
        {/* back card for depth */}
        <div
          className="absolute inset-x-6 bottom-2 top-10 rounded-2xl border border-clay bg-paper motion-safe:lg:rotate-3 sm:inset-x-10"
          aria-hidden="true"
        />
        <div className="surface-dark relative overflow-hidden rounded-2xl bg-banyan-deep p-6 text-paper shadow-[0_24px_48px_-28px_rgb(11_38_24/0.6)] sm:p-8 lg:-rotate-1">
          {/* logo-ring echo */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border-2 border-gold-soft/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-4 -top-4 size-32 rounded-full border border-gold-soft/25"
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-eyebrow font-semibold uppercase text-gold-light">GSR Tech</p>
              <p className="mt-1 text-sm text-paper/85">Social Digital Identity Number</p>
            </div>
            <span className="rounded-full bg-marigold px-3 py-1 text-eyebrow font-semibold uppercase text-ink">
              Example
            </span>
          </div>

          <p className="relative mt-6 font-display text-3xl font-medium tracking-wide text-white sm:text-4xl">
            SDIN 0000 0000
          </p>

          <dl className="relative mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-5 text-sm">
            <div className="col-span-2">
              <dt className="text-paper/80">Organisation</dt>
              <dd className="mt-0.5 font-display text-xl font-medium text-paper">Sample Village Trust</dd>
            </div>
            <div>
              <dt className="text-paper/80">Type</dt>
              <dd className="mt-0.5 font-semibold text-paper">Registered trust</dd>
            </div>
            <div>
              <dt className="text-paper/80">State</dt>
              <dd className="mt-0.5 font-semibold text-paper">Tamil Nadu</dd>
            </div>
          </dl>

          <ul className="relative mt-6 space-y-2.5 text-sm text-paper/90">
            {["Registration documents verified", "Compliance reminders on", "Project history on record"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Icon name="checkCircle" className="size-5 shrink-0 text-gold-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm text-ink-muted">
        Example only. The name and number are made up to show what an SDIN record holds.
      </figcaption>
    </figure>
  );
}

export default function GsrTech() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/digital-rural.webp"
        imageAlt="A man in a rural field holding up a basic mobile phone"
        imagePosition="object-[70%_center]"
        breadcrumbs={[{ label: "GSR Tech" }]}
        eyebrow="GSR Tech"
        title="Digital tools for NGOs"
        lede="A verified digital identity, compliance reminders, donor records and a website, in one place, for any registered NGO, trust or society."
        actions={[
          { label: "Get your SDIN", href: sdinMail },
          { label: "Book a walkthrough", href: walkthroughMail },
        ]}
      />

      {/* SDIN */}
      <Section tone="white" labelledBy="sdin-heading">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              id="sdin-heading"
              eyebrow="Social Digital Identity Number"
              title="One verified ID for your organisation"
              lede="Every NGO on GSR Tech gets an SDIN. It is the record donors and departments can check, so you stop re-submitting the same papers."
            />
            <ul className="mt-10 space-y-5">
              {sdinPoints.map((p) => (
                <li key={p} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-banyan/10 text-banyan">
                    <Icon name="checkCircle" className="size-5" />
                  </span>
                  <span className="pt-1 leading-7 text-ink-soft">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <SdinCardExample />
        </div>
      </Section>

      {/* FEATURES */}
      <Section tone="sand" labelledBy="features-heading">
        <SectionHeader
          id="features-heading"
          eyebrow="What's included"
          title="Six tools that come with your SDIN"
          lede="Use one or all of them. They share the same records, so you enter information once."
        />
        <PromiseList tone="light" columns={3} items={features} className="mt-12" />
      </Section>

      {/* WHY */}
      <Section tone="white" labelledBy="why-heading">
        <MediaSplit
          image="/images/causes/community-planning.webp"
          imageAlt="Women at a village meeting, one of them writing notes"
          imagePosition="object-[40%_center]"
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_6fr]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        >
          <Eyebrow>Why we built it</Eyebrow>
          <h2 id="why-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            Small NGOs lose hours to paperwork
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-pretty leading-7 text-ink-soft">
            <p>
              Most nonprofit software is built for large organisations. A small trust running one
              after-school programme on volunteer hours ends up with spreadsheets, missed grant deadlines
              and no easy way to show donors where their donations went.
            </p>
            <p>
              GSR Tech handles identity, compliance and donor records so small teams can spend their time on
              the work itself.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-clay bg-paper px-5 py-2.5 text-sm font-semibold text-banyan">
            <Icon name="sparkles" className="size-5" />
            Built for registered NGOs, trusts and societies
          </div>
        </MediaSplit>
      </Section>

      {/* HOW IT WORKS */}
      <DarkBand image="/images/causes/digital-rural.webp" imagePosition="object-[20%_center]" labelledBy="how-heading">
        <SectionHeader
          id="how-heading"
          tone="dark"
          eyebrow="How it works"
          title="From first email to your SDIN"
          lede="Registration happens by email for now. We can also help in person in Chennai."
        />
        <NumberedSteps tone="dark" items={steps} className="mt-12" />
      </DarkBand>

      {/* WHO CAN USE IT */}
      <Section tone="paper" labelledBy="who-heading">
        <SectionHeader
          id="who-heading"
          eyebrow="Who can use it"
          title="Any registered organisation, of any size"
          lede="If you are legally registered and work on a social or environmental cause, you can use GSR Tech."
          action={<TextLink href="/gsr-tech/network-hub">See the Network Hub</TextLink>}
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {orgTypes.map((t) => (
            <li
              key={t.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-clay bg-surface px-4 py-6 text-center"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-xl bg-banyan/[0.08] text-banyan ring-1 ring-banyan/10"
              >
                <Icon name={t.icon} className="size-6" />
              </span>
              <span className="font-semibold leading-snug text-ink">{t.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* GET STARTED */}
      <Section tone="sand" labelledBy="start-heading">
        <SectionHeader
          id="start-heading"
          eyebrow="Get started"
          title="Register your NGO on GSR Tech"
          lede="Email us to get an SDIN or a walkthrough of the platform."
        />
        <ActionTiles columns={2} items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
