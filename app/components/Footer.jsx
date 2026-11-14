import Image from "next/image";
import Link from "next/link";
import { mapsUrl, org, socialLinks } from "./org-info";

// Footer columns. Entries flagged `soon: true` have no page yet and are not
// rendered; remove the flag when the page exists.
const columns = [
  {
    heading: "Our work",
    links: [
      { label: "Environment", href: "/social-responsibility/environmental" },
      { label: "Education", href: "/social-responsibility/education" },
      { label: "Empowerment", href: "/social-responsibility/empowerment" },
      { label: "GSR Tech", href: "/gsr-tech" },
      { label: "CSR Tracker", href: "/csr-tracker" },
      { label: "GSR Agri", href: "/projects/gsr-agri", soon: true },
      { label: "GSR Tribal", href: "/projects/gsr-tribal", soon: true },
      { label: "GSR Academy", href: "/projects/gsr-academy", soon: true },
      { label: "Child Trafficking", href: "/projects/child-trafficking", soon: true },
      { label: "Health & Wellness", href: "/projects/health-wellness", soon: true },
    ],
  },
  {
    heading: "Organisation",
    links: [
      { label: "About GSR", href: "/about" },
      { label: "Team & governance", href: "/about/team" },
      { label: "News", href: "/news" },
      { label: "GSR Network Hub", href: "/gsr-tech/network-hub" },
      { label: "Our Projects", href: "/projects", soon: true },
      { label: "Events", href: "/events", soon: true },
      { label: "Gallery", href: "/gallery", soon: true },
      { label: "Career", href: "/career", soon: true },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { label: "Join or volunteer", href: "/join" },
      { label: "Partner with us (CSR)", href: "/partner" },
      { label: "Donate", href: "/donate" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy", soon: true },
  { label: "Terms of Use", href: "/terms", soon: true },
];

const linkClass =
  "inline-flex min-h-10 items-center text-[0.9375rem] text-paper/85 transition-colors hover:text-gold-light lg:min-h-9";

export default function Footer() {
  const socials = socialLinks.filter((s) => s.href);
  const legal = legalLinks.filter((l) => !l.soon);

  return (
    <footer className="surface-dark border-t-4 border-gold-soft bg-forest-950 text-paper">
      <h2 className="sr-only">Site footer</h2>
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block rounded-md" aria-label="GSR home">
              <Image
                src="/gsr-logo-light.png"
                alt="GSR, Global Social Responsibility Welfare Foundation"
                width={1308}
                height={494}
                sizes="220px"
                className="h-[72px] w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm leading-7 text-paper/85">
              A Chennai welfare foundation working on the environment, education and livelihoods,
              starting with communities in Tamil Nadu.
            </p>
            <p className="mt-6 border-l-2 border-gold-soft pl-4 text-sm leading-6 text-paper/90">
              <span className="block font-semibold text-paper">Registered non-profit</span>
              <span className="block whitespace-nowrap">{org.registration}</span>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-eyebrow font-semibold uppercase text-gold-light">{col.heading}</h3>
              <ul className="mt-5 space-y-1">
                {col.links
                  .filter((l) => !l.soon)
                  .map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-white/15 p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-gold-light">Visit</h3>
            <address className="mt-3 not-italic leading-7 text-paper/90">
              {org.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-10 items-center text-sm font-semibold text-gold-light underline decoration-gold-light/40 underline-offset-4 hover:decoration-gold-light"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-gold-light">Call</h3>
            <ul className="mt-3">
              {org.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className={linkClass}>
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-gold-light">Write</h3>
            <a href={`mailto:${org.email}`} className={`${linkClass} mt-3 break-all`}>
              {org.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-paper/80 md:flex-row md:items-center md:justify-between">
          <p lang="ta" className="font-medium text-paper/90">
            {org.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                {s.label}
              </a>
            ))}
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-gold-light">
                {l.label}
              </Link>
            ))}
            <span>
              © {new Date().getFullYear()} {org.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
