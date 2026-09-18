import Image from "next/image";
import Icon from "./icons";

// Photography isn't shot yet for every slot. Where a real photo has been
// sourced (`src`), it renders normally. Where it hasn't, this reads more
// like a contact sheet frame waiting for a print — crop marks at the
// corners and a woven paper texture standing in for the missing image —
// rather than a generic "gradient card + centered icon" placeholder.

const TEXTURES = {
  default: "text-ink/[0.05]",
  emerald: "text-paper/[0.08]",
};

function cleanLabel(label) {
  return label.replace(/[[\]]/g, "").trim();
}

export default function ImagePlaceholder({
  label = "Photograph pending",
  ratio = "aspect-[4/3]",
  tone = "default",
  className = "",
  src,
  alt,
  rounded = "",
}) {
  const hasPosition = /\b(absolute|fixed|sticky|static)\b/.test(className);
  const isDark = tone === "emerald";

  return (
    <figure className={hasPosition ? className : `${ratio} ${className}`}>
      <div
        className={`relative h-full w-full overflow-hidden ${rounded} ${
          isDark ? "bg-banyan-deep" : "bg-paper-deep"
        }`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || cleanLabel(label)}
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <>
            {/* woven texture standing in for the missing photograph */}
            <svg
              className={`absolute inset-0 h-full w-full ${TEXTURES[tone] ?? TEXTURES.default}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <pattern id={`weave-${tone}`} width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M0 9h18M9 0v18" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#weave-${tone})`} />
            </svg>

            {/* corner crop marks — a print waiting to be dropped in */}
            {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map(
              (pos) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`absolute size-4 ${pos} ${isDark ? "border-paper/25" : "border-ink/20"}`}
                />
              )
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                name="sprout"
                className={`size-8 ${isDark ? "text-paper/20" : "text-ink/15"}`}
              />
            </div>
          </>
        )}
      </div>
    </figure>
  );
}
