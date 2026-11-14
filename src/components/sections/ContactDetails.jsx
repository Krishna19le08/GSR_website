import Icon from "@/components/ui/icons";
import { mapsUrl, org } from "@/config/org-info";

// GSR's address, phones and email as a list of icon rows. Used on /contact
// and /donate. All values come from org-info.js.
export default function ContactDetails({ showRegistration = true, className = "" }) {
  const rows = [
    {
      icon: "mapPin",
      label: "Office",
      content: (
        <>
          <address className="not-italic">
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
            className="mt-1 inline-flex min-h-10 items-center text-[0.9375rem] font-semibold text-teal underline decoration-marigold/60 decoration-2 underline-offset-4 hover:decoration-marigold"
          >
            Open in Google Maps
          </a>
        </>
      ),
    },
    {
      icon: "phone",
      label: "Phone",
      content: (
        <ul>
          {org.phones.map((p) => (
            <li key={p.tel}>
              <a href={`tel:${p.tel}`} className="inline-flex min-h-10 items-center font-semibold text-ink hover:text-banyan">
                {p.display}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: "mail",
      label: "Email",
      content: (
        <a
          href={`mailto:${org.email}`}
          className="inline-flex min-h-10 items-center break-all font-semibold text-ink hover:text-banyan"
        >
          {org.email}
        </a>
      ),
    },
  ];
  if (showRegistration) {
    rows.push({
      icon: "shield",
      label: "Registration",
      content: (
        <p>
          Registered non-profit · <span className="whitespace-nowrap">{org.registration}</span>
        </p>
      ),
    });
  }

  return (
    <ul className={`divide-y divide-clay rounded-2xl border border-clay bg-surface ${className}`}>
      {rows.map((row) => (
        <li key={row.label} className="flex gap-4 p-5 sm:p-6">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-banyan/10 text-banyan">
            <Icon name={row.icon} className="size-5" />
          </span>
          <div className="min-w-0 leading-7 text-ink-soft">
            <p className="text-eyebrow font-semibold uppercase text-teal">{row.label}</p>
            <div className="mt-1.5">{row.content}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
