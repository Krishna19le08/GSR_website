import { Children } from "react";
import Image from "./ResponsiveImage";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./icons";
import { buttonClasses } from "./button-classes";

/* ==========================================================================
   GSR UI kit (v2). Every page builds from these pieces. The rules for when
   to use which piece live in the design-system.md handed to page builders.
   Server-compatible: no hooks except React's useId inside <Icon>.
   ========================================================================== */

// Cycled across a grid of IconTile/IconCard entries.
const ICON_TONE_CYCLE = ["banyan", "marigold", "ink"];

export function iconToneAt(index) {
  return ICON_TONE_CYCLE[index % ICON_TONE_CYCLE.length];
}

function isExternal(href = "") {
  return /^(https?:|mailto:|tel:)/.test(href);
}

// Link that picks <a> for mailto/tel/http and next/link for internal routes.
export function SmartLink({ href, children, ...rest }) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "size-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------- layout */

export function Container({ children, className = "", size = "default" }) {
  const widths = {
    default: "max-w-7xl",
    narrow: "max-w-3xl",
    wide: "max-w-[90rem]",
  };
  return (
    <div className={`mx-auto w-full ${widths[size] || widths.default} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

const SECTION_TONES = {
  white: "bg-surface text-ink",
  paper: "bg-paper text-ink",
  sand: "bg-paper-deep text-ink",
  dark: "surface-dark bg-banyan-deep text-paper",
  forest: "surface-dark bg-banyan text-white",
};

const SECTION_PADDING = {
  default: "py-20 md:py-28",
  tight: "py-14 md:py-20",
  none: "",
};

// One full-width band of the page. `tone` picks the background; follow the
// rhythm rules (never two of the same tone in a row).
export function Section({
  children,
  tone = "white",
  padding = "default",
  id,
  className = "",
  containerSize = "default",
  contained = true,
  labelledBy,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${SECTION_TONES[tone] || SECTION_TONES.white} ${SECTION_PADDING[padding] ?? SECTION_PADDING.default} ${id ? "scroll-mt-24" : ""} ${className}`}
    >
      {contained ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}

/* ------------------------------------------------------------ typography */

// Small uppercase label above a heading. tone="light" for light surfaces,
// tone="dark" on dark green or photos.
export function Eyebrow({ children, tone = "light", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-eyebrow font-semibold uppercase ${
        tone === "light" ? "text-teal" : "text-gold-light"
      } ${className}`}
    >
      <span
        className={`h-0.5 w-6 rounded-full ${tone === "light" ? "bg-marigold" : "bg-gold-light"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

// Eyebrow + heading + optional lede, left aligned or centered.
// `action` (e.g. a TextLink) sits to the right of a left-aligned header.
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  id,
  action,
  className = "",
}) {
  const centered = align === "center";
  const dark = tone === "dark";
  const block = (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={`${eyebrow ? "mt-4" : ""} text-balance font-display text-h2 font-medium ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </Heading>
      {lede && (
        <p
          className={`mt-5 text-pretty text-lede ${centered ? "mx-auto" : ""} max-w-2xl ${
            dark ? "text-paper/85" : "text-ink-soft"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );

  if (!action || centered) {
    return (
      <div className={className}>
        {block}
        {action && centered && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    );
  }
  return (
    <div className={`flex flex-wrap items-end justify-between gap-6 ${className}`}>
      {block}
      <div className="shrink-0">{action}</div>
    </div>
  );
}

/* --------------------------------------------------------------- buttons */

// Class builder lives in its own module so client components can import it
// without pulling in the rest of this file (icons, image manifest).
export { buttonClasses };

// The one button. `href` makes it a link (internal, mailto:, tel:, http).
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `${buttonClasses(variant, size)} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowIcon className="size-4 transition-transform duration-200 motion-safe:group-hover/btn:translate-x-0.5" />
      )}
    </>
  );
  if (!href) {
    return (
      <button type={type} className={classes} {...rest}>
        {content}
      </button>
    );
  }
  return (
    <SmartLink href={href} className={classes} {...rest}>
      {content}
    </SmartLink>
  );
}

// Legacy exports, kept so existing pages render. `rounded` is ignored: all
// buttons are pills now.
export function ButtonPrimary({ children, href = "#" }) {
  return (
    <Button href={href} variant="gold">
      {children}
    </Button>
  );
}

export function ButtonSecondary({ children, href = "#" }) {
  return (
    <Button href={href} variant="secondary">
      {children}
    </Button>
  );
}

export function ButtonOnDark({ children, href = "#" }) {
  return (
    <Button href={href} variant="outline-light">
      {children}
    </Button>
  );
}

// Inline text link with an arrow. tone="dark" on dark surfaces.
export function TextLink({ children, href = "#", tone = "light", arrow = true }) {
  return (
    <SmartLink
      href={href}
      className={`group/link inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-2 underline-offset-[6px] transition-colors ${
        tone === "dark"
          ? "text-gold-light decoration-gold-light/40 hover:decoration-gold-light"
          : "text-teal decoration-marigold/60 hover:text-banyan hover:decoration-marigold"
      }`}
    >
      {children}
      {arrow && (
        <ArrowIcon className="size-4 transition-transform motion-safe:group-hover/link:translate-x-1" />
      )}
    </SmartLink>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-clay bg-surface px-4 py-2 text-sm font-medium text-ink-soft">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- page hero */

// Full-bleed photo hero used by every interior page (and /donate, /contact).
// breadcrumbs: [{ label, href }] — "Home" is added automatically; the last
// item (usually without href) is the current page.
// actions: up to 2 [{ label, href, variant? }]; first defaults to gold, second
// to outline-light.
export function PageHero({
  image,
  imageAlt = "",
  imagePosition = "object-center",
  eyebrow,
  title,
  lede,
  breadcrumbs = [],
  actions = [],
  size = "default",
}) {
  const heights = {
    default: "min-h-[440px] lg:min-h-[540px]",
    tall: "min-h-[calc(100svh-4rem)] lg:min-h-[min(calc(100svh-5rem),860px)]",
  };
  const crumbs = breadcrumbs.length ? [{ label: "Home", href: "/" }, ...breadcrumbs] : [];
  const HeadingSize = size === "tall" ? "text-hero" : "text-h1";

  return (
    <section
      className={`surface-dark relative isolate flex items-end overflow-hidden bg-banyan-deep ${
        heights[size] || heights.default
      }`}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          sizes="100vw"
          className={`-z-10 object-cover ${imagePosition}`}
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/15 to-transparent"
        aria-hidden="true"
      />

      <Container className="pb-14 pt-28 md:pb-20">
        {crumbs.length > 0 && (
          // Visually hidden by request; kept for screen readers.
          <nav aria-label="Breadcrumb" className="sr-only">
            {/* No pill background: over dark photos its edge vanished and the
                inset text looked misaligned with the heading below. Plain text
                on the same left edge, with a shadow for legibility. */}
            <ol className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
                    {c.href && !last ? (
                      <Link
                        href={c.href}
                        className="-my-2 inline-flex min-h-9 items-center py-2 text-white/90 underline-offset-4 hover:text-white hover:underline"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current={last ? "page" : undefined} className="font-semibold text-white">
                        {c.label}
                      </span>
                    )}
                    {!last && (
                      <span aria-hidden="true" className="text-white/70">
                        /
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
        <h1
          className={`${eyebrow ? "mt-4" : ""} max-w-4xl text-balance font-display ${HeadingSize} font-medium text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]`}
        >
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-pretty text-lede text-white/90 [text-shadow:0_1px_12px_rgb(0_0_0/0.4)]">
            {lede}
          </p>
        )}
        {actions.length > 0 && (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.slice(0, 2).map((a, i) => (
              <Button
                key={a.label}
                href={a.href}
                variant={a.variant || (i === 0 ? "gold" : "outline-light")}
                arrow={i === 0}
              >
                {a.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- photo card */

const RATIOS = {
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

// Photo-led link card: whole card is the link. Tag + title + one line + arrow
// sit over a bottom gradient. `ratio` is a key above or a raw aspect class
// string (e.g. "aspect-[4/5] lg:aspect-[16/10]").
export function PhotoCard({
  href,
  src,
  alt,
  tag,
  title,
  description,
  ratio = "4/5",
  imagePosition = "object-center",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw",
  as: Heading = "h3",
  className = "",
}) {
  const ratioClass = RATIOS[ratio] || ratio;
  return (
    <SmartLink
      href={href}
      className={`group relative isolate block overflow-hidden rounded-2xl bg-banyan-deep shadow-[0_1px_2px_rgb(0_0_0/0.08)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgb(11_38_24/0.45)] ${ratioClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`-z-10 object-cover ${imagePosition} transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]`}
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
        aria-hidden="true"
      />
      <div className="flex h-full flex-col justify-end p-5 sm:p-6">
        {tag && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-eyebrow font-semibold uppercase text-white backdrop-blur-sm">
            {tag}
          </span>
        )}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <Heading className="font-display text-2xl font-medium leading-tight text-white">{title}</Heading>
            {description && (
              <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-6 text-white/90">{description}</p>
            )}
          </div>
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-marigold text-ink transition-transform duration-300 motion-safe:group-hover:translate-x-1"
            aria-hidden="true"
          >
            <ArrowIcon className="size-4" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

// Lays PhotoCards out as a horizontal scroll-snap row on phones and a grid
// from md up. gridClassName sets the md+ grid columns; itemClassNames can
// give individual items col-spans (index-matched).
export function PhotoCardRow({
  children,
  gridClassName = "md:grid-cols-2 lg:grid-cols-3",
  itemClassNames = [],
  className = "",
  label,
}) {
  const items = Children.toArray(children);
  return (
    <ul
      aria-label={label}
      className={`gsr-snap-row -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 ${gridClassName} ${className}`}
    >
      {items.map((child, i) => (
        <li
          key={child.key ?? i}
          className={`w-[82%] shrink-0 snap-start sm:w-[58%] md:w-auto ${itemClassNames[i] || ""}`}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------------------------------------- dark band */

// The one deep-forest band per page. Optional background photo is shown
// heavily tinted (decorative, alt="").
export function DarkBand({ children, image, imagePosition = "object-center", id, className = "", labelledBy }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`surface-dark relative isolate overflow-hidden bg-banyan-deep py-20 text-paper md:py-28 ${className}`}
    >
      {image && (
        <>
          <Image src={image} alt="" fill sizes="100vw" className={`-z-20 object-cover ${imagePosition}`} />
          <div className="absolute inset-0 -z-10 bg-banyan-deep/90" aria-hidden="true" />
        </>
      )}
      <Container>{children}</Container>
    </section>
  );
}

// Commitment / promise tiles. items: [{ icon, title, body }]. Use tone="dark"
// inside DarkBand, tone="light" on white/paper/sand.
export function PromiseList({ items, tone = "dark", columns = 4, className = "" }) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  const dark = tone === "dark";
  return (
    <ul className={`grid grid-cols-1 gap-4 lg:gap-5 ${cols[columns] || cols[4]} ${className}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`flex flex-col rounded-2xl p-6 lg:p-7 ${
            dark ? "border border-white/15 bg-white/[0.05]" : "border border-clay bg-surface"
          }`}
        >
          {item.icon ? (
            <IconBadge icon={item.icon} tone={dark ? "dark" : "light"} />
          ) : (
            <span
              aria-hidden="true"
              className={`flex items-center gap-3 font-display text-3xl font-medium leading-none ${
                dark ? "text-gold-light" : "text-marigold-deep"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
              <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-clay"}`} />
            </span>
          )}
          <h3 className={`mt-5 font-display text-xl font-medium leading-snug ${dark ? "text-paper" : "text-ink"}`}>
            {item.title}
          </h3>
          <p className={`mt-2 text-[0.96875rem] leading-7 ${dark ? "text-paper/85" : "text-ink-soft"}`}>
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------ action tiles */

// "Ways to help" grid. Whole tile is the link. items: [{ icon, label, body,
// href, accent? }] — accent: "gold" marks the Donate tile.
export function ActionTiles({ items, columns = 3, className = "" }) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <ul className={`grid grid-cols-1 gap-4 ${cols[columns] || cols[3]} ${className}`}>
      {items.map((item) => (
        <li key={item.label}>
          <SmartLink
            href={item.href}
            className="group flex h-full items-center gap-4 rounded-2xl border border-clay bg-surface p-5 transition-[background-color,border-color,transform,box-shadow] duration-200 hover:border-banyan hover:bg-banyan hover:shadow-[0_14px_30px_-14px_rgb(11_38_24/0.55)] motion-safe:hover:-translate-y-0.5 sm:p-6"
          >
            <span
              aria-hidden="true"
              className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                item.accent === "gold"
                  ? "bg-marigold text-banyan-deep"
                  : "bg-banyan/[0.08] text-banyan ring-1 ring-banyan/10 group-hover:bg-white group-hover:ring-white"
              }`}
            >
              <Icon name={item.icon} className="size-6" strokeWidth={2} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-semibold leading-snug text-ink group-hover:text-white">
                {item.label}
              </span>
              {item.body && (
                <span className="mt-1 block text-[0.9375rem] leading-6 text-ink-soft group-hover:text-white/90">
                  {item.body}
                </span>
              )}
            </span>
            <ArrowIcon className="size-5 shrink-0 text-banyan transition-transform group-hover:text-white motion-safe:group-hover:translate-x-1" />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------ media split */

// 50/50 photo + text block. `frame` adds the gold offset outline (echo of
// the logo ring); use it once per page at most.
export function MediaSplit({
  image,
  imageAlt,
  imagePosition = "object-center",
  ratio = "4/5",
  reverse = false,
  frame = false,
  children,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}) {
  const ratioClass = RATIOS[ratio] || ratio;
  return (
    <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${className}`}>
      <div className={`relative w-full max-w-md justify-self-center lg:max-w-none ${reverse ? "lg:order-2" : ""} ${frame ? "pr-3 pb-3 sm:pr-4 sm:pb-4" : ""}`}>
        {frame && (
          <div
            className="absolute bottom-0 right-0 left-3 top-3 rounded-2xl border-2 border-gold-soft sm:left-4 sm:top-4"
            aria-hidden="true"
          />
        )}
        <div className={`relative overflow-hidden rounded-2xl bg-paper-deep shadow-[0_24px_48px_-28px_rgb(11_38_24/0.45)] ${ratioClass}`}>
          <Image src={image} alt={imageAlt} fill sizes={sizes} className={`object-cover ${imagePosition}`} />
        </div>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

/* --------------------------------------------------------- numbered steps */

// 01 / 02 / 03 steps with gold serif numerals. items: [{ title, body }].
export function NumberedSteps({ items, tone = "light", columns = 4, className = "" }) {
  const dark = tone === "dark";
  const cols = {
    1: "",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <ol className={`grid grid-cols-1 gap-x-8 gap-y-10 ${cols[columns] ?? cols[4]} ${className}`}>
      {items.map((item, i) => (
        <li key={item.title} className={`border-t-2 pt-6 ${dark ? "border-white/20" : "border-clay"}`}>
          <span
            className={`font-display text-4xl font-medium ${dark ? "text-gold-light" : "text-marigold-deep"}`}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-3 font-display text-h3 font-medium ${dark ? "text-paper" : "text-ink"}`}>
            {item.title}
          </h3>
          <p className={`mt-2 leading-7 ${dark ? "text-paper/85" : "text-ink-soft"}`}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------- legacy / misc */

export function Card({ children, className = "", hover = true, padded = true }) {
  return (
    <div
      className={`rounded-2xl border border-clay bg-surface shadow-[0_1px_2px_rgba(23,32,27,0.06)] ${
        padded ? "p-6" : ""
      } ${hover ? "transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(23,32,27,0.1)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

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
      <ImagePlaceholder label={`[ ${(category || title).toUpperCase()} ]`} ratio={ratio} rounded="rounded-2xl" />
      {category && <Eyebrow className="mt-5">{category}</Eyebrow>}
      <h3 className="mt-3 font-display text-xl font-medium text-ink">{title}</h3>
      {lede && <p className="mt-2 leading-7 text-ink-soft">{lede}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-1.5 leading-7 text-ink-soft">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">&middot;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {linkHref && (
        <div className="mt-4">
          <TextLink href={linkHref}>{linkLabel || "Learn more"}</TextLink>
        </div>
      )}
    </div>
  );
}

// Standard Lucide icon badge for cards. tone: "light" (green on soft green),
// "dark" (gold on dark bands), "solid" (white on green), size: "md" | "sm".
export function IconBadge({ icon, tone = "light", size = "md", className = "" }) {
  const tones = {
    light: "bg-banyan/[0.08] text-banyan ring-1 ring-banyan/10",
    dark: "bg-white/[0.08] text-gold-light ring-1 ring-gold-light/30",
    solid: "bg-banyan text-white",
  };
  const sizes = {
    md: ["size-12 rounded-xl", "size-6"],
    sm: ["size-10 rounded-lg", "size-5"],
  };
  const [box, glyph] = sizes[size] || sizes.md;
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center transition-colors ${box} ${tones[tone] || tones.light} ${className}`}
    >
      <Icon name={icon} className={glyph} />
    </span>
  );
}

export function IconTile({ icon, tone = "banyan" }) {
  const tones = {
    banyan: "bg-banyan/10 text-banyan",
    marigold: "bg-marigold/20 text-marigold-deep",
    ink: "bg-ink/[0.06] text-ink-soft",
  };
  return (
    <div className={`flex size-14 shrink-0 items-center justify-center rounded-full ${tones[tone] || tones.banyan}`}>
      <Icon name={icon} className="size-7" />
    </div>
  );
}

export function IconCard({ category, title, lede, bullets, linkHref, linkLabel }) {
  return (
    <div className="flex flex-col">
      {category && <Eyebrow>{category}</Eyebrow>}
      <h3 className="mt-3 font-display text-xl font-medium text-ink">{title}</h3>
      {lede && <p className="mt-2 leading-7 text-ink-soft">{lede}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-1.5 leading-7 text-ink-soft">
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
        <div className="mt-4">
          <TextLink href={linkHref}>{linkLabel || "Learn more"}</TextLink>
        </div>
      )}
    </div>
  );
}

export function StatCard({ value, label, note }) {
  return (
    <div className="px-4 py-8">
      <p className="font-display text-4xl font-medium tracking-tight text-banyan sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-ink">{label}</p>
      {note && <p className="mt-1 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

// Pull quote. tone="dark" inside dark bands.
export function Quote({ children, cite, role, tone = "light", size = "md" }) {
  const dark = tone === "dark";
  const sizes = {
    md: "text-xl leading-8 sm:text-2xl sm:leading-9",
    lg: "text-2xl leading-snug sm:text-[2rem] sm:leading-[1.3]",
  };
  return (
    <figure>
      <blockquote className={`border-l-4 pl-6 ${dark ? "border-gold-light" : "border-marigold"}`}>
        <p className={`font-display font-normal italic ${sizes[size] || sizes.md} ${dark ? "text-paper" : "text-ink"}`}>
          {children}
        </p>
      </blockquote>
      {cite && (
        <figcaption className="mt-5 pl-7">
          <span className={`block font-semibold ${dark ? "text-paper" : "text-ink"}`}>{cite}</span>
          {role && <span className={`block text-sm ${dark ? "text-paper/80" : "text-ink-muted"}`}>{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
