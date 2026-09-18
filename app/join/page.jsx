import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Icon from "../components/icons";
import {
  Eyebrow,
  TextLink,
  Pill,
  Card,
  iconToneAt,
} from "../components/ui";

export const metadata = {
  title: "Join Our Journey — GSR",
  description:
    "Become a member, volunteer, intern, partner or beneficiary of GSR — six ways to become part of the Global Social Responsibility Welfare Foundation.",
  openGraph: {
    title: "Join Our Journey — GSR",
    description:
      "Become a member, volunteer, intern, partner or beneficiary of GSR.",
  },
};

const pathways = [
  {
    icon: "users",
    cat: "Become a Member",
    title: "Help Shape Our Direction",
    lede: "Join GSR as a registered member and take part in shaping our programmes and priorities.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Become%20a%20Member",
    label: "Become a Member →",
  },
  {
    icon: "heart",
    cat: "Volunteer",
    title: "Give Your Time & Skills",
    lede: "Contribute your time and skills to environmental, education or community initiatives — locally or remotely.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Become%20a%20Volunteer",
    label: "Become a Volunteer →",
  },
  {
    icon: "handshake",
    cat: "Partner",
    title: "Bring Your Organization In",
    lede: "NGOs, institutions, businesses and CSR teams can join our growing network of partner organizations.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Partner%20With%20GSR",
    label: "Explore Partnership →",
  },
  {
    icon: "graduate",
    cat: "Internship",
    title: "Learn by Doing",
    lede: "Gain hands-on experience across research, communications, field programmes and GSR Tech.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Apply%20for%20an%20Internship",
    label: "Apply for an Internship →",
  },
  {
    icon: "sprout",
    cat: "GSR Beneficiary",
    title: "Access Our Programmes",
    lede: "Individuals and communities can register to access GSR's education, health, livelihood and environmental programmes.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Register%20as%20a%20GSR%20Beneficiary",
    label: "Register as a Beneficiary →",
  },
  {
    icon: "network",
    cat: "GSR Network",
    title: "Connect Your Organization",
    lede: "Connect your NGO, CSR team, institution or government agency to the wider GSR Network.",
    mail: "mailto:info.gsrwf@gmail.com?subject=Join%20the%20GSR%20Network",
    label: "Join the GSR Network →",
  },
];

const roles = [
  "Volunteer",
  "Student",
  "Intern",
  "Researcher",
  "Educator",
  "Environmentalist",
  "Community Leader",
  "Social Entrepreneur",
  "Partner Organisation",
  "CSR Partner",
  "Donor",
  "Institution",
];

export default function Join() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="[ GET INVOLVED HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Get Involved</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Everyone Has Something to Contribute
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            You can become part of GSR as a member, volunteer, partner, intern,
            beneficiary, or as an organization joining the GSR Network — whatever
            fits how you want to contribute.
          </p>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Join Our Journey</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Six ways to become part of GSR
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((p, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={p.cat} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={p.icon} className="size-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-marigold-deep">
                      {p.cat}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {p.lede}
                    </p>
                    <div className="mt-5">
                      <TextLink href={p.mail}>{p.label}</TextLink>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Every Role Matters</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Find the role that fits you
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {roles.map((r) => (
              <Pill key={r}>{r}</Pill>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft/70">
            You can contribute your time, knowledge, skills, ideas, resources,
            network and experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Join the Global Movement
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Whichever path fits you, your contribution can make a lasting
              difference — one world, one humanity, one shared responsibility.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Become a Member", detail: "Help shape our direction and priorities.", href: "mailto:info.gsrwf@gmail.com?subject=Become%20a%20Member" },
              { label: "Become a Volunteer", detail: "Give your time and skills where they're needed.", href: "mailto:info.gsrwf@gmail.com?subject=Become%20a%20Volunteer" },
              { label: "Donate Now", detail: "Fund the work directly, no middle layer.", href: "/donate" },
              { label: "Contact Us", detail: "Talk to us about how you'd like to help.", href: "mailto:info.gsrwf@gmail.com" },
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
