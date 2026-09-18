// A stat tile for the national snapshot — shows a fixed total, not a live feed.

export default function LiveCounter({
  label,
  startValue,
  prefix = "",
  suffix = "",
  decimals = 0,
  note,
  tone = "light",
  className = "",
}) {
  const formatted = startValue.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const isDark = tone === "dark";

  return (
    <div
      className={`h-full px-6 py-7 sm:px-8 sm:py-8 ${
        isDark
          ? "border-t-2 border-marigold bg-banyan-deep"
          : "border border-clay bg-paper"
      } ${className}`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-wide ${
          isDark ? "text-paper/60" : "text-ink-soft/70"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-3 font-mono font-semibold tabular-nums tracking-tight ${
          isDark ? "text-4xl text-marigold sm:text-6xl" : "text-3xl text-banyan sm:text-4xl"
        }`}
      >
        {prefix}
        {formatted}
        {suffix}
      </p>
      {note && (
        <p className={`mt-3 text-xs leading-5 ${isDark ? "text-paper/50" : "text-ink-soft/80"}`}>
          {note}
        </p>
      )}
    </div>
  );
}
