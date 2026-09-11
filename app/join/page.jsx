import ImagePlaceholder from "../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  TextLink,
  Pill,
  IconTile,
} from "../components/ui";

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
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ GET INVOLVED HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Get Involved</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Everyone Has Something to Contribute
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            You can become part of GSR as a member, volunteer, partner, intern,
            beneficiary, or as an organization joining the GSR Network — whatever
            fits how you want to contribute.
          </p>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Join Our Journey</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Six ways to become part of GSR
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((p) => (
              <div key={p.cat} className="border border-zinc-200 p-8 dark:border-zinc-800">
                <IconTile icon={p.icon} tone="amber" />
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  {p.cat}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.lede}
                </p>
                <div className="mt-5">
                  <TextLink href={p.mail}>{p.label}</TextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Every Role Matters</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Find the role that fits you
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {roles.map((r) => (
              <Pill key={r}>{r}</Pill>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-500">
            You can contribute your time, knowledge, skills, ideas, resources,
            network and experience.
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
          <Eyebrow tone="dark">One World · One Humanity · One Shared Responsibility</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join the Global Movement
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Whichever path fits you, your contribution can make a lasting
            difference.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/donate">Donate Now</ButtonPrimary>
            <ButtonOnDark href="/contact">Contact Us</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
