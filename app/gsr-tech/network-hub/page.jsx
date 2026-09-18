import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Icon from "../../components/icons";
import Reveal from "../../components/Reveal";
import {
  Eyebrow,
  ButtonSecondary,
  Pill,
  Card,
  iconToneAt,
} from "../../components/ui";

export const metadata = {
  title: "GSR Network Hub — GSR Tech",
  description:
    "A searchable directory connecting SDIN-verified NGOs, CSR teams, institutions, government agencies and volunteers across the GSR network.",
  openGraph: {
    title: "GSR Network Hub — GSR Tech",
    description:
      "A searchable directory connecting SDIN-verified NGOs, CSR teams, institutions and volunteers across the GSR network.",
  },
};

const memberTypes = [
  { icon: "handshake", title: "NGOs & NPOs", desc: "Get discovered by CSR teams, donors and volunteers actively searching for verified grassroots partners." },
  { icon: "building", title: "CSR Teams", desc: "Find vetted, SDIN-verified organizations working in the cause areas and states your programme targets." },
  { icon: "graduate", title: "Institutions", desc: "Schools, colleges and research bodies looking for community partners for outreach and fieldwork." },
  { icon: "shield", title: "Government Agencies", desc: "Coordinate with registered organizations on schemes, grants and state-level reporting." },
  { icon: "users", title: "Volunteers & Individuals", desc: "Search the network by cause, region or skill to find where your time is most needed." },
];

const features = [
  { icon: "network", title: "One Connected Directory", desc: "Every organization on the GSR platform, searchable by cause area, state, and SDIN verification status." },
  { icon: "compass", title: "Smart Matching", desc: "AI-assisted matching surfaces the partners, donors or volunteers most relevant to your goals." },
  { icon: "handshake", title: "Direct Partner Requests", desc: "Send and track partnership, funding or collaboration requests without leaving the platform." },
  { icon: "chart", title: "Network Analytics", desc: "See how your organization's visibility, connections and partnerships grow over time." },
];

const steps = [
  { step: "01", title: "Get your SDIN", detail: "Register and receive a verified Social Digital Identity Number." },
  { step: "02", title: "Build your profile", detail: "Add your cause areas, regions, projects and impact so far." },
  { step: "03", title: "Get discovered", detail: "Appear in searches from CSR teams, donors, institutions and volunteers." },
  { step: "04", title: "Connect & collaborate", detail: "Send and receive partnership requests directly through the hub." },
];

export default function NetworkHub() {
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
          <Eyebrow tone="dark">GSR Tech — Network Hub</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            One directory connecting every NGO, funder and volunteer on GSR
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            The GSR Network Hub is where SDIN-verified organizations, CSR
            teams, institutions, government agencies and volunteers find each
            other — and start working together.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>What is the Network Hub?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The connective layer of GSR Tech
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-soft">
            Every organization on the GSR platform holds a Social Digital
            Identity Number (SDIN) — a verified digital identity. The Network
            Hub turns that identity into a searchable, connectable profile,
            so the right partners can find each other without cold emails or
            spreadsheets.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Search by cause area, state or region, and send a partnership,
            funding or collaboration request directly — all inside the same
            platform used for compliance, reporting and fundraising.
          </p>
        </div>
      </section>

      {/* WHO IT CONNECTS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who&rsquo;s in the network</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built for every side of the social sector
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memberTypes.map((m, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={m.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={m.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {m.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What you get</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Discovery, matching and outreach in one place
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={f.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={f.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {f.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From SDIN to your first connection
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold-deep">
                  {s.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {s.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-paper py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>See it in numbers</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The network already spans 36 states and union territories
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-soft">
            The CSR Tracker shows live fund flow and instructor coverage
            across every state the network reaches.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["36 States & UTs", "5 Cause Areas", "SDIN-Verified Organizations"].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="mt-8">
            <ButtonSecondary href="/csr-tracker">View the CSR Tracker</ButtonSecondary>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Put your organization on the map
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Get your SDIN, build your profile, and start connecting with
              the CSR teams, institutions and volunteers already on the
              network.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Get Your SDIN", detail: "Register your verified digital identity.", href: "mailto:info.gsrwf@gmail.com?subject=Get%20My%20SDIN" },
              { label: "Join the Network", detail: "Get discovered by CSR teams and volunteers.", href: "mailto:info.gsrwf@gmail.com?subject=Join%20the%20GSR%20Network" },
              { label: "View the CSR Tracker", detail: "See live fund flow across every state.", href: "/csr-tracker" },
              { label: "Explore GSR Tech", detail: "The platform behind the network.", href: "/gsr-tech" },
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
