import {
  ActionTiles,
  Button,
  DarkBand,
  IconBadge,
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
  title: "Partner With Us | GSR",
  description:
    "How CSR teams, corporate foundations, government agencies and institutions can fund environment, education and empowerment projects through GSR.",
  openGraph: {
    title: "Partner With Us | GSR",
    description:
      "How CSR teams, foundations and institutions can fund environment, education and empowerment projects through GSR.",
  },
};

const csrMail = mailto(
  "CSR partnership enquiry",
  "Hello GSR,\n\nWe'd like to discuss a CSR partnership.\n\nOrganisation:\nContact person and role:\nPhone:\nFocus area (environment / education / empowerment / health):\nRegion:\nBudget range:\nTimeline:\n\nThank you.",
);

const areas = [
  {
    title: "Environment",
    description: "Native tree planting and land restoration, run with the people who live on that land.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.webp",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
  {
    title: "Education",
    description: "After-school learning and digital skills for children and young people.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.webp",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_70%]",
  },
  {
    title: "Empowerment and livelihoods",
    description: "Practical training that leads to work and income.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/empowerment-sewing.webp",
    alt: "A woman smiling beside a sewing machine in a small shop",
    position: "object-[70%_center]",
  },
];

const partnerTypes = [
  { icon: "building", label: "Corporate CSR teams" },
  { icon: "wallet", label: "Corporate foundations" },
  { icon: "flag", label: "Government agencies" },
  { icon: "graduate", label: "Educational institutions" },
  { icon: "globe", label: "International development organisations" },
  { icon: "heart", label: "Philanthropic trusts" },
  { icon: "handshake", label: "Other NGOs and NPOs" },
  { icon: "users", label: "Individual donors" },
];

const governance = [
  { fig: "6", label: "member Board of Trustees" },
  { fig: "12", label: "member Core Committee" },
  { fig: "7", label: "sub-committees, including Audit & Finance and Procurement" },
];

const documentation = [
  <>
    Registered non-profit, <span className="whitespace-nowrap">{org.registration}</span>
  </>,
  "Governance charter available on request",
  "Annual report and audited statement from FY 2026–27",
  "Project monitoring and impact reports",
];

const tracking = [
  "Project and budget-use reports from GSR Tech",
  "Dashboards for donors and CSR partners",
  "Compliance and governance records",
];

const steps = [
  { title: "Initial call", body: "We discuss focus area, region and budget, by phone or a short written brief." },
  { title: "Project scoping", body: "We draft a project plan and budget around your CSR objectives." },
  { title: "Agreement", body: "An MoU or partnership agreement with a set disbursement and reporting schedule." },
  { title: "Reporting", body: "Progress, spending and people reached, reported through GSR Tech." },
];

const more = [
  { icon: "users", label: "See who governs GSR", body: "Trustees and committees.", href: "/about/team" },
  { icon: "laptop", label: "How projects are tracked", body: "The GSR Tech platform.", href: "/gsr-tech" },
  { icon: "chart", label: "Open the CSR Tracker", body: "CSR spending by state and company.", href: "/csr-tracker" },
];

function CheckList({ items }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-7 text-paper/90">
          <Icon name="checkCircle" className="mt-0.5 size-6 shrink-0 text-gold-light" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TrustPanel({ icon, title, children }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.05] p-6 lg:p-8">
      <div className="flex items-center gap-4">
        <IconBadge icon={icon} tone="dark" />
        <h3 className="font-display text-h3 font-medium text-paper">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function Partner() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/community-planning.webp"
        imageAlt="Women at a village meeting, one of them writing notes"
        imagePosition="object-[center_40%]"
        breadcrumbs={[{ label: "Partner with us" }]}
        eyebrow="For CSR teams, foundations and institutions"
        title="Partner with GSR"
        lede="Fund environment, education and empowerment projects in India, with clear governance and regular reports on how the money is used."
        actions={[
          { label: "Email us about CSR", href: csrMail },
          { label: `Call ${org.phones[0].display}`, href: `tel:${org.phones[0].tel}` },
        ]}
      />

      {/* AREAS */}
      <Section tone="white" labelledBy="areas-heading">
        <SectionHeader
          id="areas-heading"
          eyebrow="What you can fund"
          title="Projects in three areas, plus community health"
          lede="GSR was registered in 2026. Every partnership runs through a Board of Trustees, a Core Committee and an Audit & Finance Committee, and is tracked on GSR Tech."
        />
        <PhotoCardRow label="Areas partners can fund" className="mt-12">
          {areas.map((a) => (
            <PhotoCard
              key={a.title}
              href={a.href}
              src={a.src}
              alt={a.alt}
              tag="Fund"
              title={a.title}
              description={a.description}
              imagePosition={a.position}
            />
          ))}
        </PhotoCardRow>
        <p className="mt-8 flex items-start gap-3 text-ink-soft">
          <Icon name="heart" className="mt-0.5 size-6 shrink-0 text-banyan" />
          <span>We also take on community health and well-being projects. Tell us what you have in mind.</span>
        </p>
      </Section>

      {/* WHO */}
      <Section tone="sand" labelledBy="who-heading">
        <SectionHeader
          id="who-heading"
          eyebrow="Who we work with"
          title="Partners of every size"
          lede="We work with organisations and individuals who want to fund or co-run projects."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTypes.map((p) => (
            <li key={p.label} className="flex items-center gap-4 rounded-2xl border border-clay bg-surface p-5">
              <IconBadge icon={p.icon} />
              <span className="font-semibold leading-snug text-ink">{p.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* TRUST */}
      <DarkBand image="/images/causes/landscape-guardians.webp" imagePosition="object-[center_30%]" labelledBy="trust-heading">
        <SectionHeader
          id="trust-heading"
          tone="dark"
          eyebrow="Governance and reporting"
          title="How your funds are overseen"
          lede="Three things every partner can check: who makes decisions, what we put in writing, and how spending is tracked."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <TrustPanel icon="scale" title="Governance">
            <dl className="mt-6 space-y-5">
              {governance.map((g) => (
                <div key={g.fig} className="flex items-baseline gap-4 border-t border-white/15 pt-4">
                  <dt className="w-12 shrink-0 font-display text-4xl font-medium text-gold-light">{g.fig}</dt>
                  <dd className="leading-7 text-paper/90">{g.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto pt-6">
              <TextLink href="/about/team" tone="dark">
                Full governance structure
              </TextLink>
            </div>
          </TrustPanel>
          <TrustPanel icon="receipt" title="Documentation">
            <CheckList items={documentation} />
          </TrustPanel>
          <TrustPanel icon="chart" title="Tracking">
            <CheckList items={tracking} />
            <div className="mt-auto pt-6">
              <TextLink href="/gsr-tech" tone="dark">
                About GSR Tech
              </TextLink>
            </div>
          </TrustPanel>
        </div>
      </DarkBand>

      {/* HOW IT WORKS */}
      <Section tone="paper" labelledBy="steps-heading">
        <SectionHeader
          id="steps-heading"
          eyebrow="How a partnership works"
          title="Four steps from first call to reports"
          lede="You agree the plan, budget and reporting schedule before any money moves."
        />
        <NumberedSteps items={steps} className="mt-12" />
      </Section>

      {/* TALK TO US */}
      <Section tone="sand" labelledBy="talk-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader
              id="talk-heading"
              eyebrow="Talk to us"
              title="Tell us your focus area and budget"
              lede="We will send you a project proposal built around them. Please ask us about tax-exemption status."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={csrMail} variant="primary" size="lg" arrow>
                Email us about CSR
              </Button>
              <Button href={`tel:${org.phones[0].tel}`} variant="secondary" size="lg">
                Call {org.phones[0].display}
              </Button>
            </div>
          </div>
          <ActionTiles columns={2} items={more} className="lg:grid-cols-1" />
        </div>
      </Section>
    </main>
  );
}
