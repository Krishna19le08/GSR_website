import Image from "next/image";
import Icon from "@/components/ui/icons";
import {
  ActionTiles,
  Button,
  DarkBand,
  IconBadge,
  PageHero,
  PhotoCard,
  PhotoCardRow,
  PromiseList,
  Section,
  SectionHeader,
} from "@/components/ui/ui";

export const metadata = {
  title: "Team & Governance | GSR",
  description:
    "How GSR is organised: a 6-member Board of Trustees, a 12-member Core Committee with 7 sub-committees, and an executive team led by the CEO.",
  openGraph: {
    title: "Team & Governance | GSR",
    description:
      "How GSR is organised: a Board of Trustees, a Core Committee with 7 sub-committees, and an executive team led by the CEO.",
  },
};

// Named team members. Add a person by adding an entry here; put the photo in
// public/images/team/. `link` is optional (LinkedIn or an on-site page).
const people = [
  {
    name: "Zehra Fathima",
    role: "Founder & Managing Trustee",
    photo: "/images/team/zehra-fathima-white.jpg",
    position: "object-top",
    // Hidden for now. To show it again, uncomment:
    // link: { href: "/about#founder", label: "Read her story", icon: null },
  },
  {
    name: "Victoria Selvi",
    role: "Secretary",
    photo: "/images/team/victoria-selvi.jpg",
    position: "object-[center_15%]",
  },
  {
    name: "Kesavan Venugopal",
    role: "Treasurer",
    photo: "/images/team/kesavan-venugopal-white-v3.jpg",
    position: "object-[center_20%]",
    // LinkedIn hidden for now. To show it again, uncomment:
    // link: { href: "https://www.linkedin.com/in/kesavan-v-7544b1306", label: "LinkedIn", icon: "linkedin" },
  },
  {
    name: "T. Senthilkumar",
    role: "Trustee",
    photo: "/images/team/t-senthilkumar-white.jpg",
    position: "object-[60%_20%]",
  },
  {
    name: "Dr. Clement Winsly",
    role: "Trustee",
    photo: "/images/team/clement-winsly.jpg",
    position: "object-top",
  },
];

// Organisation structure (from GSR's official org chart).
// `holder` shows the name under a Board seat when it is filled publicly.
const boardSeats = [
  { role: "Founder & Managing Trustee", holder: "Zehra Fathima" },
  { role: "Secretary", holder: "Victoria Selvi" },
  { role: "Joint Secretary" },
  { role: "Treasurer", holder: "Kesavan Venugopal" },
  { role: "Trustee", holder: "T. Senthilkumar" },
  { role: "Trustee", holder: "Dr. Clement Winsly" },
];

const committees = [
  { icon: "lightbulb", title: "Advisory Committee", desc: "Advises the Board on strategy and new programmes." },
  { icon: "scale", title: "PoSH Committee", desc: "Prevents and handles workplace sexual harassment, as required by law." },
  { icon: "shield", title: "Child Protection Committee", desc: "Keeps children safe across all programmes and partnerships." },
  { icon: "compass", title: "Program & Development Committee", desc: "Plans programmes and reviews new project proposals." },
  { icon: "heart", title: "Fundraising Committee", desc: "Plans fundraising and looks after donor relations." },
  { icon: "chart", title: "Audit & Finance Committee", desc: "Budgets, accounts and internal audit." },
  { icon: "receipt", title: "Procurement Committee", desc: "Oversees purchasing so spending is fair and documented." },
];

const managers = [
  { icon: "users", title: "HR Manager", body: "Hiring, staff records and volunteer coordination." },
  { icon: "compass", title: "Program Manager", body: "Runs projects day to day and tracks their progress." },
  { icon: "wallet", title: "Finance Manager", body: "Accounts, payments and financial reports." },
  { icon: "megaphone", title: "Public Relationship Manager", body: "Media, communications and public relations." },
  { icon: "handshake", title: "Community Development Manager", body: "Works with the communities where projects run." },
  { icon: "heart", title: "Fundraising Manager", body: "Donors, CSR partners and fundraising campaigns." },
];

function OrgBox({ title, figure, icon, dark = false, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl px-5 py-5 text-left ${
        dark ? "surface-dark bg-banyan-deep text-paper" : "border border-clay bg-paper"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon && <IconBadge icon={icon} tone={dark ? "dark" : "light"} size="sm" />}
        <h3 className={`font-display text-xl font-medium leading-snug ${dark ? "text-paper" : "text-ink"}`}>
          {title}
          {figure && (
            <span className={`ml-2 font-sans text-base font-semibold ${dark ? "text-gold-light" : "text-marigold-deep"}`}>
              ({figure})
            </span>
          )}
        </h3>
      </div>
      {children}
    </div>
  );
}

const causes = [
  {
    title: "Education",
    description: "Classes and learning programmes for children and young people.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.jpg",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_70%]",
  },
  {
    title: "Environment",
    description: "Conservation of local habitats, trees and rivers.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.jpg",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
  {
    title: "Empowerment",
    description: "Skills, livelihoods and digital access for communities.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/empowerment-sewing.jpg",
    alt: "A smiling woman standing beside a sewing machine in a small shop",
    position: "object-center",
  },
];

const actions = [
  { icon: "users", label: "Volunteer or intern", body: "Help on the ground or with our team.", href: "/join" },
  { icon: "flag", label: "Become a member", body: "Have a say in what GSR does next.", href: "/join" },
  { icon: "handshake", label: "Partner with us", body: "Bring your organization into the network.", href: "/partner" },
  { icon: "mail", label: "Contact us", body: "Write, call or visit us in Chennai.", href: "/contact" },
];

function Connector({ className = "" }) {
  return <span className={`mx-auto block h-8 w-0.5 bg-clay ${className}`} aria-hidden="true" />;
}

export default function Team() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image="/images/causes/community-planning.jpg"
        imageAlt="Women at a village meeting, one of them writing notes"
        imagePosition="object-[center_30%]"
        breadcrumbs={[{ label: "About us", href: "/about" }, { label: "Team & governance" }]}
        eyebrow="Team & governance"
        title="How GSR is run"
        lede="How decisions are made at GSR, and who oversees the money, partnerships and projects."
        actions={[
          { label: "Join GSR", href: "/join" },
          { label: "See the structure", href: "#structure" },
        ]}
      />

      {/* PEOPLE */}
      <Section tone="paper" labelledBy="people-heading">
        <SectionHeader
          id="people-heading"
          eyebrow="Our people"
          title="Board of Trustees"
          lede="The trustees set GSR's direction and oversee its money, partnerships and projects."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
          {people.map((p) => {
            const external = p.link?.href.startsWith("http");
            return (
              <li key={p.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={p.photo}
                    alt={`Portrait of ${p.name}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className={`object-cover transition duration-500 motion-safe:group-hover:scale-[1.03] ${p.position}`}
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">{p.name}</h3>
                  <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-marigold" />
                  <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-marigold-deep">
                    {p.role}
                  </p>
                  {p.link?.icon ? (
                    <a
                      href={p.link.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`${p.name} on ${p.link.label}${external ? " (opens in a new tab)" : ""}`}
                      title={p.link.label}
                      className="mx-auto mt-3 flex size-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                    >
                      <Icon name={p.link.icon} className="size-[18px]" strokeWidth={2} />
                    </a>
                  ) : (
                    p.link && (
                      <a
                        href={p.link.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-banyan underline-offset-4 hover:underline"
                      >
                        {p.link.label}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    )
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ORG STRUCTURE */}
      <Section tone="white" id="structure" labelledBy="structure-heading">
        <SectionHeader
          id="structure-heading"
          eyebrow="Organisation structure"
          title="How GSR is organised"
          lede="The Board of Trustees oversees two branches: the Core Committee and its sub-committees, and the executive team led by the CEO."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-6xl">
          {/* Board */}
          <OrgBox title="Board of Trustees" figure="6 members" icon="users" dark>
            <ol className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {boardSeats.map((s, i) => (
                <li key={`${s.role}-${i}`} className="rounded-xl bg-white/[0.07] px-3 py-3 ring-1 ring-white/10">
                  <p className="text-sm font-semibold leading-snug text-paper">
                    <span className="text-gold-light">{i + 1}.</span> {s.role}
                  </p>
                  {s.holder && <p className="mt-1 text-sm leading-snug text-paper/80">{s.holder}</p>}
                </li>
              ))}
            </ol>
          </OrgBox>

          <Connector />

          {/* Two branches */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.35fr]">
            {/* Governance branch */}
            <div>
              <OrgBox title="Core Committee" figure="12 members" icon="users">
                <p className="mt-2 text-[0.96875rem] leading-6 text-ink-soft">
                  Oversees governance and the work of the sub-committees.
                </p>
              </OrgBox>
              <Connector />
              <OrgBox title="Sub-committees" figure="7" icon="network" className="bg-sand">
                <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {committees.map((c, i) => (
                    <li key={c.title} className="rounded-xl border border-clay bg-surface px-3 py-2.5 text-sm font-semibold leading-snug text-ink">
                      <span className="text-marigold-deep">{i + 1}.</span> {c.title}
                    </li>
                  ))}
                </ol>
              </OrgBox>
            </div>

            {/* Executive branch */}
            <div>
              <OrgBox title="Chief Executive Officer (CEO)" icon="network" dark />
              <Connector />
              <OrgBox title="Project Director" icon="target" dark />
              <Connector />
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {managers.map((m) => (
                  <li
                    key={m.title}
                    className="flex flex-col items-center gap-2 rounded-xl border border-clay bg-paper px-3 py-4 text-center"
                  >
                    <IconBadge icon={m.icon} size="sm" />
                    <span className="text-sm font-semibold leading-snug text-ink">{m.title}</span>
                  </li>
                ))}
              </ul>
              <Connector />
              <div className="mx-auto flex w-fit items-center gap-3 rounded-2xl border border-clay bg-paper px-5 py-3">
                <IconBadge icon="building" size="sm" />
                <span className="font-semibold text-ink">Admin &amp; Office Staff</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SUB-COMMITTEES */}
      <Section tone="sand" id="committees" labelledBy="committees-heading">
        <SectionHeader
          id="committees-heading"
          eyebrow="Sub-committees"
          title="The seven sub-committees"
          lede="Each sub-committee owns one area of GSR's work, from child protection to the accounts."
        />
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committees.map((c, i) => (
            <li key={c.title} className="flex gap-4 rounded-2xl border border-clay bg-surface p-5 lg:p-6">
              <IconBadge icon={c.icon} />
              <div className="min-w-0">
                <p className="font-display text-sm font-medium text-marigold-deep" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-0.5 font-display text-xl font-medium leading-snug text-ink">{c.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-6 text-ink-soft">{c.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* EXECUTIVE TEAM */}
      <DarkBand image="/images/causes/landscape-guardians.jpg" imagePosition="object-[center_70%]" labelledBy="daily-heading">
        <SectionHeader
          id="daily-heading"
          tone="dark"
          eyebrow="Executive team"
          title="Who runs the daily work"
          lede="The CEO and Project Director lead six managers, supported by admin and office staff, volunteers and interns."
        />
        <PromiseList items={managers} columns={3} className="mt-12" />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/join" variant="gold" arrow>
            Volunteer or intern with us
          </Button>
        </div>
      </DarkBand>

      {/* CAUSES */}
      <Section tone="white" labelledBy="causes-heading">
        <SectionHeader
          id="causes-heading"
          eyebrow="Our work"
          title="The causes the committees serve"
          lede="GSR's projects sit under three causes. Each has its own page."
        />
        <PhotoCardRow label="GSR causes" className="mt-12">
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
              ratio="aspect-[4/5] lg:aspect-[4/3]"
            />
          ))}
        </PhotoCardRow>
      </Section>

      {/* JOIN */}
      <Section tone="sand" labelledBy="join-heading">
        <SectionHeader
          id="join-heading"
          eyebrow="Join us"
          title="Volunteer, intern, or join as a member or partner"
          lede="We take volunteers, interns, committee members and partner organizations."
        />
        <ActionTiles items={actions} columns={4} className="mt-12" />
      </Section>
    </main>
  );
}
