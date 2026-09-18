import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Icon from "../../components/icons";
import Reveal from "../../components/Reveal";
import {
  Eyebrow,
  TextLink,
  StatCardRounded,
  Card,
  iconToneAt,
} from "../../components/ui";

export const metadata = {
  title: "Our Team & Governance — GSR",
  description:
    "GSR's governance structure: a named Board of Trustees, Management Core Committee, and fifteen functional committees overseeing every area of the foundation's work.",
  openGraph: {
    title: "Our Team & Governance — GSR",
    description:
      "GSR's governance structure: a named Board of Trustees, Management Core Committee, and fifteen functional committees.",
  },
};

const govStats = [
  { fig: "6", label: "Board of Trustees" },
  { fig: "12", label: "Management Core Committee Members" },
  { fig: "15", label: "Functional Committees, 5 Members Each" },
];

const committees = [
  { icon: "compass", title: "Program & Planning", desc: "Shapes GSR's project roadmap and annual programme priorities." },
  { icon: "lightbulb", title: "R&D", desc: "Researches emerging needs and evidence to inform new initiatives." },
  { icon: "shield", title: "Child Protection", desc: "Safeguards children across all GSR programmes and partnerships." },
  { icon: "scale", title: "POSH", desc: "Prevents and addresses sexual harassment in the workplace, per statutory requirements." },
  { icon: "sparkles", title: "Founding", desc: "Preserves GSR's founding vision and institutional values." },
  { icon: "wallet", title: "Audit & Budgeting", desc: "Oversees financial planning, budgeting and internal audit." },
  { icon: "gavel", title: "Legal", desc: "Advises on regulatory compliance and legal matters." },
  { icon: "heart", title: "Health Care", desc: "Guides GSR's community health and well-being programmes." },
  { icon: "target", title: "Project Development", desc: "Designs and appraises new project proposals." },
  { icon: "laptop", title: "Information Technology", desc: "Oversees GSR Tech and the foundation's digital infrastructure." },
  { icon: "megaphone", title: "Media & Communication", desc: "Manages public communication, press and social media." },
  { icon: "users", title: "Volunteer & Internship Management", desc: "Coordinates volunteer and internship placements." },
  { icon: "handshake", title: "Membership & Partnership", desc: "Manages member relations and partner organizations." },
  { icon: "building", title: "CSR", desc: "Coordinates with corporate CSR teams and CSR-funded projects." },
  { icon: "flag", title: "FCRA", desc: "Oversees compliance with foreign contribution regulations." },
];

export default function Team() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="A field team going over programme records"
          src="/images/community-planning.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-paper/70">
            <Link href="/">Home</Link> / <Link href="/about">About Us</Link> / Team
          </p>
          <Eyebrow tone="dark">Who We Are</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            A Structured, Accountable Organization
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            GSR operates under a formal governance structure so that every
            decision, partnership and rupee is overseen responsibly — a foundation
            we believe every CSR partner and donor deserves to see clearly.
          </p>
        </div>
      </section>

      {/* GOV STATS */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {govStats.map((stat) => (
              <StatCardRounded key={stat.label} value={stat.fig} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Committees</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Fifteen committees, one shared responsibility
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Each committee is made up of 5 members and focuses on a distinct area
              of the foundation&apos;s work — from governance and compliance to media,
              health and partnerships.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {committees.map((c, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={c.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={c.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">
                      {c.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* STAFF / VOLUNTEERS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Strong Team</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Management, staff, interns and volunteers
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal className="border border-clay bg-paper p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                Management &amp; Staff
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                Our day-to-day operations are run by a dedicated management and
                staff team, working across every committee area to keep programmes
                moving and commitments met.
              </p>
            </Reveal>
            <Reveal delay={120} className="border border-clay bg-paper p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                Interns &amp; Volunteers
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                Students, professionals and community members contribute time and
                skills across our programmes — from field work to research to
                communications.
              </p>
              <div className="mt-5">
                <TextLink href="/join">Join as an Intern or Volunteer →</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-paper py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Collaboration &amp; Partnership</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We govern responsibly so we can partner confidently
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-soft">
            A clear governance structure is what lets us collaborate openly with
            NGOs, CSR teams, government bodies and communities.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Become Part of GSR
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Whether as a volunteer, intern, committee member, or partner
              organization — there&apos;s a place for you here.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Get Involved", detail: "Join as a volunteer, intern, or committee member.", href: "/join" },
              { label: "Become a Member", detail: "Help shape where GSR goes next.", href: "/join" },
              { label: "Partner With Us", detail: "Bring your organization into the network.", href: "/partner" },
              { label: "Contact Us", detail: "Reach our governance and management teams.", href: "/about#contact" },
            ].map((action) => (
              <li key={action.label}>
                <Link
                  href={action.href}
                  className="group flex items-baseline justify-between gap-4 py-4 text-paper transition-colors hover:text-marigold"
                >
                  <span className="font-display text-lg font-semibold">{action.label}</span>
                  <span className="hidden text-right text-sm text-paper/50 sm:block">
                    {action.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
