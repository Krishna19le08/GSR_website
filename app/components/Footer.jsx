import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "News & Blogs", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
];

const projectLinks = [
  { label: "GSR Agri", href: "/projects/gsr-agri" },
  { label: "GSR Tribal", href: "/projects/gsr-tribal" },
  { label: "GSR Academy", href: "/projects/gsr-academy" },
  { label: "Child Trafficking", href: "/projects/child-trafficking" },
  { label: "Health & Wellness", href: "/projects/health-wellness" },
];

const socialLinks = ["Facebook", "Instagram", "LinkedIn", "YouTube"];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-banyan-deep bg-banyan-deep text-paper/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block bg-paper px-3 py-2">
              <Image
                src="/GSR_v7.png"
                alt="GSR"
                width={160}
                height={54}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-paper/60">
              Connecting people, communities, and organizations to protect
              the environment, expand education, and empower communities for
              a more equitable, sustainable future.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/60 transition-colors hover:text-marigold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">
              Our Projects
            </h3>
            <ul className="mt-4 space-y-3">
              {projectLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/60 transition-colors hover:text-marigold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
              <li>
                No 15, Ponnappa Lane, Triplicane,
                <br />
                Chennai – 600005, Tamil Nadu, India
              </li>
              <li>+91 87545 63555 &middot; +91 94441 79215</li>
              <li>info.gsrwf@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs font-medium text-paper/50 transition-colors hover:text-marigold"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-paper/50 transition-colors hover:text-marigold"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-xs text-paper/40">
              © {new Date().getFullYear()} Global Social Responsibility
              Welfare Foundation. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
