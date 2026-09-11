import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./icons";

export function Eyebrow({ children, tone = "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold ${
        tone === "light" ? "text-marigold-deep" : "text-marigold"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "light" ? "bg-marigold-deep" : "bg-marigold"
        }`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function ButtonPrimary({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center bg-marigold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-deep hover:text-paper"
    >
      {children}
    </Link>
  );
}

export function ButtonSecondary({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-banyan hover:text-banyan"
    >
      {children}
    </Link>
  );
}

export function ButtonOnDark({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center border border-paper/50 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
    >
      {children}
    </Link>
  );
}

export function TextLink({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm font-semibold text-banyan underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-marigold-deep hover:decoration-marigold"
    >
      {children}
    </Link>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center border border-clay bg-paper px-4 py-2 text-xs font-medium text-ink-soft">
      {children}
    </span>
  );
}

export function FocusCard({ category, title, lede, bullets, ratio = "aspect-[4/3]", linkHref, linkLabel }) {
  return (
    <div className="flex flex-col">
      <ImagePlaceholder label={`[ ${(category || title).toUpperCase()} ]`} ratio={ratio} />
      {category && <Eyebrow>{category}</Eyebrow>}
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h3>
      {lede && <p className="mt-2 text-sm leading-6 text-ink-soft">{lede}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm leading-6 text-ink-soft">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">&middot;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {linkHref && (
        <div className="mt-5">
          <TextLink href={linkHref}>{linkLabel || "Learn more"}</TextLink>
        </div>
      )}
    </div>
  );
}

export function IconTile({ icon, tone = "banyan" }) {
  const tones = {
    banyan: "border-banyan/35 text-banyan",
    marigold: "border-marigold/45 text-marigold-deep",
    ink: "border-ink/20 text-ink-soft",
  };
  return (
    <div
      className={`flex size-14 shrink-0 items-center justify-center rounded-md border ${tones[tone] || tones.banyan}`}
    >
      <Icon name={icon} className="size-6" />
    </div>
  );
}

export function IconCard({ icon, category, title, lede, bullets, tone, linkHref, linkLabel }) {
  return (
    <div className="flex flex-col">
      <IconTile icon={icon} tone={tone} />
      {category && <Eyebrow>{category}</Eyebrow>}
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h3>
      {lede && <p className="mt-2 text-sm leading-6 text-ink-soft">{lede}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm leading-6 text-ink-soft">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-banyan">
                &#10003;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {linkHref && (
        <div className="mt-5">
          <TextLink href={linkHref}>{linkLabel || "Learn more"}</TextLink>
        </div>
      )}
    </div>
  );
}

export function StatCard({ value, label, note }) {
  return (
    <div className="px-4 py-8">
      <p className="font-display text-4xl font-semibold tracking-tight text-banyan sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-ink">{label}</p>
      {note && <p className="mt-1 text-xs text-ink-soft/80">{note}</p>}
    </div>
  );
}

export function Quote({ children, cite }) {
  return (
    <blockquote className="relative border-l-4 border-marigold pl-6">
      <p className="font-display text-xl font-medium leading-8 text-ink sm:text-2xl">
        {children}
      </p>
      {cite && <footer className="mt-4 text-sm font-medium text-ink-soft">— {cite}</footer>}
    </blockquote>
  );
}
