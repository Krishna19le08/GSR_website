import ImagePlaceholder from "../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  Pill,
  IconTile,
} from "../components/ui";

const whyChoose = [
  { icon: "network", title: "Complete Digital Ecosystem", desc: "Manage every aspect of your organization through one secure platform." },
  { icon: "sparkles", title: "AI-Powered Automation", desc: "Generate proposals, reports, budgets, policies, SOPs and project documents within minutes." },
  { icon: "checkCircle", title: "Compliance Simplified", desc: "Stay updated with statutory registrations, governance documentation and reporting requirements." },
  { icon: "wallet", title: "Fundraising Made Easy", desc: "Discover CSR opportunities, grants, scholarships, awards and donors using intelligent AI search." },
  { icon: "chart", title: "Better Transparency", desc: "Maintain accurate records, reports, financial management and donor accountability." },
  { icon: "lightbulb", title: "Save Time & Paperwork", desc: "Automate repetitive tasks and focus more on creating social impact." },
];

const solutions = [
  {
    num: "01",
    icon: "flag",
    tag: "Digital Identity",
    title: "Social Digital Identity Number (SDIN)",
    lede: "Every registered organization receives a unique SDIN — a verified digital identity for compliance, projects, reports and achievements.",
    bullets: ["Digital NGO identity", "Organization profile", "Registration records", "Compliance records", "Digital verification", "Centralized documentation"],
  },
  {
    num: "02",
    icon: "users",
    tag: "People",
    title: "Member & Beneficiary Management",
    lede: "Digitally manage your entire organization from one dashboard.",
    bullets: ["Member & beneficiary registration", "Volunteer management", "Internship management", "Member & beneficiary database", "Digital member profiles", "Attendance & activity tracking"],
  },
  {
    num: "03",
    icon: "building",
    tag: "Operations",
    title: "Administration & Operations",
    lede: "Simplify everyday organizational management.",
    bullets: ["Staff management", "Secure cloud data storage", "Finance & budget management", "Online & offline donation tracking", "Logbook & field visit reports", "AI-assisted annual reports"],
  },
  {
    num: "04",
    icon: "megaphone",
    tag: "Online Presence",
    title: "Tech & Media",
    lede: "Manage your organization's online presence without additional software.",
    bullets: ["Website management", "Gallery management", "Blog management", "Social media management"],
  },
  {
    num: "05",
    icon: "wallet",
    tag: "Fundraising",
    title: "Donor & Funding Suite",
    lede: "Discover new funding opportunities and manage donor relationships effectively.",
    bullets: ["Donor search engine", "Donation receipt management", "Donor database", "Automated communication", "Smart notifications", "AI funding search engine"],
  },
  {
    num: "06",
    icon: "checkCircle",
    tag: "Compliance",
    title: "AI Compliance & Reporting",
    lede: "Artificial intelligence designed specifically for NGOs.",
    bullets: ["AI proposal generator", "Governance management", "Compliance management", "AI document generator", "Project & report analytics"],
  },
];

const dashboards = [
  "Super Admin Dashboard",
  "Organization Dashboard",
  "Member Dashboard",
  "Volunteer Dashboard",
  "Internship Dashboard",
  "Finance Dashboard",
  "Donor Dashboard",
  "Project Dashboard",
];

const whoCanUse = [
  "NGOs",
  "Non-Profit Organizations",
  "Trusts",
  "Societies",
  "Charitable Foundations",
  "CSR Departments",
  "Educational Institutions",
  "Community Organizations",
  "Volunteer Networks",
  "Social Enterprises",
];

const benefits = [
  "Digital Identity (SDIN)",
  "Smart Donor Management",
  "Compliance Tracking",
  "AI Proposal Writing",
  "Financial Management",
  "Analytics Dashboards",
  "Paperless Administration",
  "Better Governance",
  "Faster Fundraising",
];

export default function GsrTech() {
  return (
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[50vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ GSR TECH HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">GSR Tech — AI-Powered NGO Management &amp; Compliance Platform</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            One Platform. One SDIN. Unlimited Social Impact.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            An AI-powered, cloud-based platform built to save time, strengthen
            transparency and scale social impact — for every NGO, from a small
            community trust to a large international organisation.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Building a Global Network for Social Impact</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Transforming NGOs Through Artificial Intelligence
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The Global Social Responsibility (GSR) Project aims to build an
            international network of nonprofit organizations — NGOs, NPOs, Trusts,
            Societies, Foundations, Corporate CSR teams, institutions and
            development partners — through an intelligent, all-in-one digital
            ecosystem.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            GSR Tech is that ecosystem: an intelligent, cloud-based platform that
            integrates AI-powered tools, compliance management, fundraising,
            governance, project management, reporting, financial tracking,
            volunteer and member management, and organizational collaboration into
            a single secure platform.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Together, we are building a stronger, more connected, and more trusted
            global social sector.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why Choose GSR Tech?</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Everything an NGO needs, in one place
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((v) => (
              <div key={v.title}>
                <IconTile icon={v.icon} />
                <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Solutions</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              One platform, six connected systems
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.num} className="border border-zinc-200 p-8 dark:border-zinc-800">
                <IconTile icon={s.icon} tone="amber" />
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  {s.num} &middot; {s.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {s.lede}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden="true">&middot;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART DASHBOARDS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Smart Dashboards</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Every user receives a customized dashboard
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Real-time analytics help organizations make informed decisions.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {dashboards.map((d) => (
              <Pill key={d}>{d}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN USE / BENEFITS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who Can Use GSR Tech?</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Built for the entire social sector
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {whoCanUse.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl text-center">
            <Eyebrow>Benefits</Eyebrow>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {benefits.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Mission for GSR Tech</Eyebrow>
          <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            To digitally empower every NGO with intelligent technology that
            improves governance, strengthens transparency, enhances compliance,
            simplifies fundraising, and enables organizations to create greater
            social impact.
          </p>
          <Eyebrow>Our Vision for GSR Tech</Eyebrow>
          <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            To become the world&apos;s leading AI-powered social impact platform
            connecting NGOs, donors, volunteers, governments and CSR partners
            through one trusted digital ecosystem.
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
          <Eyebrow tone="dark">India&apos;s First AI-Powered NGO Platform</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bring Your NGO Onto GSR Tech
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Whether you want your own Social Digital Identity Number, a live demo
            of the platform, or to register your NGO with GSR — we&apos;ll walk you
            through it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="mailto:info.gsrwf@gmail.com?subject=Get%20My%20SDIN">
              Get Your SDIN
            </ButtonPrimary>
            <ButtonOnDark href="mailto:info.gsrwf@gmail.com?subject=Book%20a%20Free%20Demo">
              Book a Free Demo
            </ButtonOnDark>
            <ButtonOnDark href="mailto:info.gsrwf@gmail.com?subject=Register%20My%20NGO">
              Register Your NGO
            </ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
