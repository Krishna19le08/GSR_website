import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./icons";

// Cycled across a grid of IconTile/IconCard entries so a row of cards
// reads as the brand's banyan/marigold two-accent system plus a neutral
// ink option, not one flat repeated color.
const ICON_TONE_CYCLE = ["banyan", "marigold", "ink"];

export function iconToneAt(index) {
  return ICON_TONE_CYCLE[index % ICON_TONE_CYCLE.length];
}

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

export function ButtonPrimary({ children, href = "#", rounded = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center bg-marigold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-deep hover:text-paper ${
        rounded ? "rounded-full" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export function ButtonSecondary({ children, href = "#", rounded = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-banyan hover:text-banyan ${
        rounded ? "rounded-full" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export function ButtonOnDark({ children, href = "#", rounded = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border border-paper/50 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10 ${
        rounded ? "rounded-full" : ""
      }`}
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

export function Pill({ children, rounded = false }) {
  return (
    <span
      className={`inline-flex items-center border border-clay bg-paper px-4 py-2 text-xs font-medium text-ink-soft ${
        rounded ? "rounded-full" : ""
      }`}
    >
      {children}
    </span>
  );
}

// Rounded, shadowed card shell — the Kindora-style feature/program card unit.
// Opt-in (not used by the flat, bordered default components above) so
// existing pages keep their editorial look; sections that want the
// charity-template treatment wrap content in this instead.
export function Card({ children, className = "", hover = true, padded = true }) {
  return (
    <div
      className={`rounded-2xl border border-clay/60 bg-paper shadow-[0_1px_2px_rgba(38,33,23,0.06)] ${
        padded ? "p-6" : ""
      } ${hover ? "transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(38,33,23,0.1)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Rounded-card variant of StatCard, for stat strips styled after the
// charity-template's "impact metrics" grid.
export function StatCardRounded({ value, label }) {
  return (
    <Card className="flex flex-col items-start gap-1 text-left" hover>
      <p className="font-display text-3xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </Card>
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

export function IconCard({ category, title, lede, bullets, linkHref, linkLabel }) {
  return (
    <div className="flex flex-col">
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
