import {
  ActionTiles,
  Button,
  DarkBand,
  Eyebrow,
  IconBadge,
  MediaSplit,
  PageHero,
  PromiseList,
  Section,
  SectionHeader,
} from "../components/ui";
import { mailto, org } from "../components/org-info";

export const metadata = {
  title: "News & Events | GSR",
  description: "Project updates, reports and upcoming events from GSR, a welfare foundation in Chennai.",
  openGraph: {
    title: "News & Events | GSR",
    description: "Project updates, reports and upcoming events from GSR.",
  },
};

const updatesMail = mailto(
  "Send me GSR updates",
  "Hello GSR,\n\nPlease email me when you post news or project updates.\n\nName:\nCity or district:\n\nThank you.",
);

const eventsMail = mailto(
  "Tell me about GSR events",
  "Hello GSR,\n\nPlease tell me about upcoming events.\n\nName:\nCity or district:\nEvents I'm interested in (tree planting / education / health camps / any):\n\nThank you.",
);

const sponsorMail = mailto(
  "Sponsoring or co-hosting a GSR event",
  "Hello GSR,\n\nWe'd like to talk about sponsoring or co-hosting an event.\n\nOrganisation:\nContact person:\nPhone:\nKind of event:\n\nThank you.",
);

const mediaMail = mailto("Media enquiry", "Hello GSR,\n\nPublication or channel:\nWhat it's about:\nDeadline:\n\nThank you.");

const planned = [
  {
    icon: "sprout",
    title: "Project updates",
    body: "Short notes from each project as it starts and moves along: where we are working and what was done.",
  },
  {
    icon: "chart",
    title: "Reports",
    body: "Headcounts, trees planted and volunteers named, published as each project finishes a round of work.",
  },
  {
    icon: "camera",
    title: "Photos from the field",
    body: "Pictures from our own projects, each captioned with the place and date.",
  },
  {
    icon: "clock",
    title: "Event dates",
    body: "Upcoming drives, sessions and camps, with dates, places and how to sign up.",
  },
];

const eventTypes = [
  { icon: "sprout", label: "Tree-planting and clean-up drives" },
  { icon: "book", label: "Education programmes and workshops" },
  { icon: "heart", label: "Health camps" },
  { icon: "megaphone", label: "Project launches and community meetings" },
];

const actions = [
  { icon: "users", label: "Volunteer", body: "Give a few hours on a project near you.", href: "/join" },
  { icon: "heart", label: "Donate", body: "Fund our work in Tamil Nadu.", href: "/donate", accent: "gold" },
  { icon: "mail", label: "Contact us", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

export default function News() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/community-planning.jpg"
        imageAlt="Women at a village meeting, one of them writing notes"
        imagePosition="object-[center_35%]"
        breadcrumbs={[{ label: "News & events" }]}
        eyebrow="News & events"
        title="News and events from GSR"
        lede="GSR was registered in 2026 and our first projects are starting now. Updates, reports and event dates will be posted here."
        actions={[
          { label: "Get updates by email", href: updatesMail },
          { label: "Contact us", href: "/contact" },
        ]}
      />

      {/* WHAT'S COMING */}
      <Section tone="white" labelledBy="coming-heading">
        <SectionHeader
          id="coming-heading"
          eyebrow="What's coming"
          title="What we will post here"
          lede="Nothing is posted yet. These are the four kinds of updates you will find on this page once our first projects are under way."
        />
        <PromiseList items={planned} tone="light" columns={4} className="mt-12" />
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-clay bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-2xl text-lede text-ink">
            Want the first update in your inbox? Email us and we will add you to our list.
          </p>
          <Button href={updatesMail} variant="primary" arrow className="shrink-0">
            Email me updates
          </Button>
        </div>
      </Section>

      {/* EVENTS */}
      <Section tone="sand" labelledBy="events-heading">
        <MediaSplit
          image="/hero_1.jpg"
          imageAlt="Children sitting together on the ground outside a school building"
          imagePosition="object-[30%_center]"
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_7fr]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        >
          <Eyebrow>Events</Eyebrow>
          <h2 id="events-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            Hear about events before they happen
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lede text-ink-soft">
            No events are scheduled yet. When we plan one, we will list it here with the date, place and how to
            sign up. Tell us where you live and we will let you know about events near you.
          </p>
          <h3 className="mt-10 text-eyebrow font-semibold uppercase text-teal">Events we are planning to run</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {eventTypes.map((e) => (
              <li key={e.label} className="flex items-center gap-3 rounded-2xl border border-clay bg-surface p-4">
                <IconBadge icon={e.icon} size="sm" />
                <span className="text-[0.9375rem] font-medium leading-6 text-ink">{e.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={eventsMail} variant="primary" arrow>
              Email me about events
            </Button>
            <Button href={sponsorMail} variant="secondary">
              Sponsor or co-host an event
            </Button>
          </div>
        </MediaSplit>
      </Section>

      {/* MEDIA */}
      <DarkBand image="/images/landscape-guardians.jpg" labelledBy="media-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-20">
          <SectionHeader
            id="media-heading"
            tone="dark"
            eyebrow="Media enquiries"
            title="Writing about GSR?"
            lede="For interviews, information about our projects or a statement, email or call our team in Chennai."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <Button href={mediaMail} variant="gold" arrow>
              Email {org.email}
            </Button>
            <Button href={`tel:${org.phones[0].tel}`} variant="outline-light">
              Call {org.phones[0].display}
            </Button>
          </div>
        </div>
      </DarkBand>

      {/* GET INVOLVED */}
      <Section tone="paper" labelledBy="involved-heading">
        <SectionHeader
          id="involved-heading"
          eyebrow="Get involved now"
          title="You don't have to wait for the first update"
          lede="You can join a project, fund one, or ask us anything today."
        />
        <ActionTiles items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
