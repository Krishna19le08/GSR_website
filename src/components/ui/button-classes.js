// Button class builder (shared by <Button> in ui.jsx and client components).

const BUTTON_VARIANTS = {
  // Main action on light surfaces.
  primary: "bg-banyan text-white hover:bg-banyan-deep",
  // Donate / support, and the main action on photos and dark bands.
  gold: "bg-marigold text-ink hover:bg-gold-hover",
  // Second action on light surfaces.
  secondary:
    "border-2 border-banyan text-banyan hover:bg-banyan hover:text-white",
  // Main action on dark when gold is already used nearby.
  light: "bg-white text-banyan-deep hover:bg-paper",
  // Second action on dark bands and photos.
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-banyan-deep",
};

const BUTTON_SIZES = {
  md: "min-h-12 px-6 text-[0.9375rem]",
  sm: "min-h-10 px-4 text-sm",
  lg: "min-h-14 px-8 text-base",
};

export function buttonClasses(variant = "primary", size = "md") {
  return `group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-colors duration-200 ${
    BUTTON_SIZES[size] || BUTTON_SIZES.md
  } ${BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary}`;
}
