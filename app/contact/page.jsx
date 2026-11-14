import { ActionTiles, PageHero, Section, SectionHeader } from "../components/ui";
import ContactDetails from "../components/ContactDetails";
import { mailto, org } from "../components/org-info";
import MailtoForm from "./MailtoForm";

export const metadata = {
  title: "Contact | GSR",
  description: `Contact GSR in Triplicane, Chennai. Call ${org.phones[0].display} or email ${org.email}.`,
  openGraph: {
    title: "Contact | GSR",
    description: "Write, call or visit GSR in Triplicane, Chennai.",
  },
};

const reasons = [
  { icon: "users", label: "Volunteer or join", body: "Help on a project near you.", href: "/join" },
  { icon: "handshake", label: "Partner with us (CSR)", body: "Sponsor or co-run a project.", href: "/partner" },
  { icon: "heart", label: "Donate", body: "How to give while online giving is set up.", href: "/donate", accent: "gold" },
  { icon: "network", label: "Get your SDIN", body: "Register your organisation on GSR Tech.", href: "/gsr-tech" },
  { icon: "chart", label: "CSR Tracker", body: "See CSR spending by state and company.", href: "/csr-tracker" },
  { icon: "megaphone", label: "News and media", body: "Updates from GSR.", href: "/news" },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/hero-community.jpg"
        imageAlt="A large group of women seated together outdoors at a village gathering"
        imagePosition="object-[center_65%]"
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact us"
        title="Talk to GSR"
        lede="Write, call or visit. Our office is in Triplicane, Chennai."
        actions={[
          { label: "Email us", href: mailto("Hello GSR") },
          { label: `Call ${org.phones[0].display}`, href: `tel:${org.phones[0].tel}` },
        ]}
      />

      <Section tone="white" labelledBy="reach-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              id="reach-heading"
              eyebrow="Reach us"
              title="Address, phone and email"
              lede="Email is the best way to reach us. If you'd like to visit, please call first so someone is there to meet you."
            />
            <ContactDetails className="mt-10" />
          </div>
          <div className="lg:pt-2">
            <MailtoForm />
          </div>
        </div>
      </Section>

      <Section tone="sand" labelledBy="reasons-heading">
        <SectionHeader
          id="reasons-heading"
          eyebrow="Looking for something specific?"
          title="You may find it faster here"
        />
        <ActionTiles items={reasons} className="mt-12" />
      </Section>
    </main>
  );
}
