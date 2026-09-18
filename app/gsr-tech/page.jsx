import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Icon from "../components/icons";
import Reveal from "../components/Reveal";
import {
  Eyebrow,
  Pill,
  Card,
  iconToneAt,
} from "../components/ui";

export const metadata = {
  title: "GSR Tech — Free Digital Tools for NGOs",
  description:
    "GSR Tech gives grassroots NGOs a verified digital identity, simple compliance tracking, and donor tools — so less time goes to paperwork and more goes to people.",
  openGraph: {
    title: "GSR Tech — Free Digital Tools for NGOs",
    description:
      "A verified digital identity, simple compliance tracking, and donor tools for grassroots NGOs — so less time goes to paperwork and more goes to people.",
  },
};

const reasons = [
  {
    icon: "shield",
    title: "One identity, recognized everywhere",
    desc: "Your SDIN is a single verified record of who you are, so you stop re-proving it to every donor and department.",
  },
  {
    icon: "users",
    title: "Your people, in one place",
    desc: "Members, volunteers, and interns tracked without a spreadsheet that only one person understands.",
  },
  {
    icon: "checkCircle",
    title: "Compliance you can actually follow",
    desc: "Plain reminders for the registrations and filings that keep an NGO legally sound, instead of a lawyer's checklist.",
  },
  {
    icon: "wallet",
    title: "Funding you'd otherwise miss",
    desc: "CSR opportunities and grants surfaced as they open, so a small org hears about them at the same time as a large one.",
  },
  {
    icon: "chart",
    title: "Numbers you can show a donor",
    desc: "Straightforward records of funds and impact, kept as you go — not reconstructed the week before an audit.",
  },
  {
    icon: "lightbulb",
    title: "Built to give time back",
    desc: "Every tool here exists to shrink the hours spent on paperwork so more of them go to the community.",
  },
];

const solutions = [
  {
    icon: "flag",
    title: "Digital Identity",
    lede: "A verified SDIN that carries your registration, compliance, and project history in one record.",
  },
  {
    icon: "users",
    title: "People",
    lede: "Registration, attendance, and profiles for every member, volunteer, and beneficiary you work with.",
  },
  {
    icon: "building",
    title: "Operations",
    lede: "Staff, budgets, donations, and field reports, stored securely and shared with whoever needs them.",
  },
  {
    icon: "megaphone",
    title: "Online Presence",
    lede: "A website, gallery, and social presence you can update yourself, without hiring a developer.",
  },
  {
    icon: "wallet",
    title: "Fundraising",
    lede: "A donor database, receipts, and funding leads, so relationships don't live in someone's inbox.",
  },
  {
    icon: "checkCircle",
    title: "Reporting",
    lede: "Draft proposals, policies, and annual reports faster, with the paperwork burden taken off one person's shoulders.",
  },
];

const whoCanUse = [
  "NGOs & Non-Profits",
  "Trusts & Societies",
  "Charitable Foundations",
  "CSR Teams",
  "Educational Institutions",
  "Community Organizations",
  "Volunteer Networks",
];

export default function GsrTech() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[50vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="A first phone, a first connection — rural Odisha"
          src="/images/digital-rural.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">GSR Tech</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Free digital tools, built for NGOs who never had a tech budget
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            A small, community-run trust and a large national NGO carry the
            same paperwork. GSR Tech gives both a verified digital identity,
            simple compliance tracking, and donor tools — free — so more of
            their time goes to people, not forms.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Why we built this</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We kept meeting NGOs doing enormous work with no one to build their tools
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-soft">
            Most software built for the nonprofit sector is priced for the
            largest organizations in it. The community trust running one
            after-school program on volunteer hours gets left with
            spreadsheets, missed grant deadlines, and no easy way to show a
            donor where their money went.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            GSR Tech is our answer: one platform, free to any registered NGO,
            that handles the identity, compliance, and donor-facing work so
            your team doesn&rsquo;t have to invent it from scratch.
          </p>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What it changes</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The parts of running an NGO nobody signed up for
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((v, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={v.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={v.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {v.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* A NOTE ON WHY IT'S FREE */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <ImagePlaceholder
              label="Field team logging a community visit"
              ratio="aspect-[4/3]"
              src="/images/community-planning.jpg"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>No subscription, no tier</Eyebrow>
            <p className="mt-6 max-w-lg font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              &ldquo;An NGO shouldn&rsquo;t have to choose between paying for
              software and funding the program it&rsquo;s meant to run.&rdquo;
            </p>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
              GSR Tech is part of GSR&rsquo;s own mission, not a product line —
              which is why it costs nothing to register, and nothing to keep
              using, for any legitimately registered NGO, trust, or society.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What&rsquo;s inside</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Six things, all in one login
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={s.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={s.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {s.lede}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO CAN USE */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Any registered organization doing the work
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              If you&rsquo;re legally registered and working toward a social
              or environmental cause, GSR Tech is built for you — regardless
              of your size or budget.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {whoCanUse.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Bring your NGO onto GSR Tech
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Whether you want your own Social Digital Identity Number, a
              walk-through of the platform, or to register your NGO with
              GSR — we&rsquo;ll help you through it, by email or in person.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Get Your SDIN", detail: "Register your NGO's verified digital identity.", href: "mailto:info.gsrwf@gmail.com?subject=Get%20My%20SDIN" },
              { label: "Book a Walkthrough", detail: "See the platform before you register.", href: "mailto:info.gsrwf@gmail.com?subject=Book%20a%20Walkthrough" },
              { label: "Explore the Network Hub", detail: "Find partners already on GSR Tech.", href: "/gsr-tech/network-hub" },
              { label: "Talk to Us", detail: "Any question about the platform.", href: "mailto:info.gsrwf@gmail.com" },
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
