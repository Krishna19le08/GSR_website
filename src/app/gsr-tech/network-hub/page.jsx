import Image from "@/components/ui/ResponsiveImage";
import {
  ActionTiles,
  DarkBand,
  IconBadge,
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
  title: "Network Hub | GSR Tech",
  description:
    "A searchable directory of SDIN-verified NGOs, CSR teams, institutions, government agencies and volunteers on GSR Tech.",
  openGraph: {
    title: "Network Hub | GSR Tech",
    description:
      "A searchable directory of SDIN-verified NGOs, CSR teams, institutions and volunteers on GSR Tech.",
  },
};

const listMail = mailto(
  "Join the GSR Network",
  "Hello GSR,\n\nWe'd like to be listed in the GSR Network Hub.\n\nOrganisation name:\nWe are (NGO / CSR team / institution / government agency / other):\nCause areas:\nState or region:\nContact person and phone:\n\nThank you.",
);

const sdinMail = mailto(
  "Get my SDIN",
  "Hello GSR,\n\nWe'd like to register for an SDIN on GSR Tech.\n\nOrganisation name:\nType (trust / society / Section 8 company / other):\nRegistration number:\nState:\nContact person and phone:\n\nThank you.",
);

const audiences = [
  {
    icon: "heart",
    title: "NGOs and NPOs",
    body: "Get found by CSR teams, donors and volunteers looking for verified local partners.",
  },
  {
    icon: "building",
    title: "CSR teams",
    body: "Find SDIN-verified organisations by cause area and state.",
  },
  {
    icon: "graduate",
    title: "Institutions",
    body: "Schools, colleges and research bodies looking for community partners for outreach and fieldwork.",
  },
  {
    icon: "flag",
    title: "Government agencies",
    body: "Work with registered organisations on schemes, grants and state reporting.",
  },
  {
    icon: "users",
    title: "Volunteers",
    body: "Search by cause, region or skill to find where you can help.",
  },
];

const features = [
  {
    icon: "search",
    title: "Directory",
    body: "Every organisation on GSR Tech, searchable by cause area, state and verification status.",
  },
  {
    icon: "target",
    title: "Matching",
    body: "Suggestions for partners, donors or volunteers that fit your work.",
  },
  {
    icon: "handshake",
    title: "Partner requests",
    body: "Send and track partnership, funding and collaboration requests on the platform.",
  },
  {
    icon: "chart",
    title: "Analytics",
    body: "See how often your profile is viewed and how many connections you've made.",
  },
];

const steps = [
  { title: "Get your SDIN", body: "Register and receive a verified Social Digital Identity Number." },
  { title: "Build your profile", body: "Add your cause areas, regions and projects." },
  { title: "Get found", body: "Show up in searches by CSR teams, donors, institutions and volunteers." },
  { title: "Connect", body: "Send and receive partnership requests through the hub." },
];

const tools = ["Compliance reminders", "Donor records and receipts", "Reports and proposals", "Your own website"];

const actions = [
  { icon: "network", label: "List your organisation", body: "Email us to be added to the hub.", href: listMail },
  { icon: "shield", label: "Get your SDIN", body: "The first step for any NGO.", href: sdinMail },
  { icon: "chart", label: "Open the CSR Tracker", body: "CSR spending by state and company.", href: "/csr-tracker" },
  { icon: "handshake", label: "Partner with GSR", body: "Fund or co-run a project with us.", href: "/partner" },
];

export default function NetworkHub() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/community-planning.webp"
        imageAlt="Women at a village meeting, one of them writing notes"
        imagePosition="object-[center_40%]"
        breadcrumbs={[{ label: "GSR Tech", href: "/gsr-tech" }, { label: "Network Hub" }]}
        eyebrow="Network Hub"
        title="Find the right partner for your work"
        lede="A directory where verified NGOs, CSR teams, institutions, government agencies and volunteers can find each other and start working together."
        actions={[
          { label: "List your organisation", href: listMail },
          { label: "About GSR Tech", href: "/gsr-tech" },
        ]}
      />

      {/* WHO IT'S FOR */}
      <Section tone="white" labelledBy="who-heading">
        <SectionHeader
          id="who-heading"
          eyebrow="Who it's for"
          title="Five kinds of members, one directory"
          lede="Every organisation on GSR Tech has an SDIN. The hub turns it into a public profile that others can search."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <li className="relative min-h-64 overflow-hidden rounded-2xl bg-banyan-deep sm:col-span-2 lg:col-span-1 lg:row-span-1">
            <Image
              src="/images/causes/digital-rural.webp"
              alt="A man in a rural field holding up a basic mobile phone"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[65%_center]"
            />
          </li>
          {audiences.map((a) => (
            <li key={a.title} className="flex flex-col rounded-2xl border border-clay bg-paper p-6 lg:p-7">
              <IconBadge icon={a.icon} tone="solid" />
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink">{a.title}</h3>
              <p className="mt-2 text-[0.96875rem] leading-7 text-ink-soft">{a.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FEATURES */}
      <Section tone="sand" labelledBy="features-heading">
        <SectionHeader
          id="features-heading"
          eyebrow="What the hub does"
          title="Search, match and send requests in one place"
          lede="You can search by cause area, state or region and contact an organisation directly."
        />
        <PromiseList tone="light" columns={4} items={features} className="mt-12" />
      </Section>

      {/* HOW TO JOIN */}
      <DarkBand image="/images/causes/community-planning.webp" imagePosition="object-[center_80%]" labelledBy="steps-heading">
        <SectionHeader
          id="steps-heading"
          tone="dark"
          eyebrow="How to join"
          title="Four steps to a listed profile"
          lede="Partners can find you as soon as your profile is filled in."
        />
        <NumberedSteps tone="dark" items={steps} className="mt-12" />
      </DarkBand>

      {/* PART OF GSR TECH */}
      <Section tone="paper" labelledBy="fit-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-20">
          <SectionHeader
            id="fit-heading"
            eyebrow="Part of GSR Tech"
            title="The same platform you use for everyday work"
            lede="Your hub profile sits next to the tools you already use on GSR Tech, so your records and your public profile stay in step."
            action={<TextLink href="/gsr-tech">See all GSR Tech tools</TextLink>}
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {tools.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl border border-clay bg-surface px-5 py-4">
                <Icon name="checkCircle" className="size-5 shrink-0 text-banyan" />
                <span className="font-semibold text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* GET LISTED */}
      <Section tone="sand" labelledBy="listed-heading">
        <SectionHeader
          id="listed-heading"
          eyebrow="Get listed"
          title="Add your organisation to the hub"
          lede="Get your SDIN, fill in your profile, and you will appear in searches."
        />
        <ActionTiles columns={2} items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
