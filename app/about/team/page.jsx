import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  TextLink,
  IconTile,
} from "../../components/ui";

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
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ TEAM HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-300">
            <Link href="/">Home</Link> / <Link href="/about">About Us</Link> / Team
          </p>
          <Eyebrow tone="dark">Who We Are</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            A Structured, Accountable Organization
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            GSR operates under a formal governance structure so that every
            decision, partnership and rupee is overseen responsibly — a foundation
            we believe every CSR partner and donor deserves to see clearly.
          </p>
        </div>
      </section>

      {/* GOV STATS */}
      <section className="bg-white py-16 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-zinc-200 border-y border-zinc-200 px-4 dark:divide-zinc-800 dark:border-zinc-800 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:px-6 lg:px-8">
          {govStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              <p className="text-4xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400 sm:text-5xl">
                {stat.fig}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Committees</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Fifteen committees, one shared responsibility
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Each committee is made up of 5 members and focuses on a distinct area
              of the foundation&apos;s work — from governance and compliance to media,
              health and partnerships.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {committees.map((c) => (
              <div key={c.title} className="flex gap-4">
                <IconTile icon={c.icon} tone="stone" />
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF / VOLUNTEERS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Strong Team</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Management, staff, interns and volunteers
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Management &amp; Staff
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Our day-to-day operations are run by a dedicated management and
                staff team, working across every committee area to keep programmes
                moving and commitments met.
              </p>
            </div>
            <div className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Interns &amp; Volunteers
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Students, professionals and community members contribute time and
                skills across our programmes — from field work to research to
                communications.
              </p>
              <div className="mt-5">
                <TextLink href="/join">Join as an Intern or Volunteer →</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Collaboration &amp; Partnership</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            We govern responsibly so we can partner confidently
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A clear governance structure is what lets us collaborate openly with
            NGOs, CSR teams, government bodies and communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 md:py-32">
        <ImagePlaceholder
          label="[ BACKGROUND IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Join Our Team</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Become Part of GSR
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Whether as a volunteer, intern, committee member, or partner
            organization — there&apos;s a place for you here.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/join">Get Involved</ButtonPrimary>
            <ButtonOnDark href="/contact">Contact Us</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
