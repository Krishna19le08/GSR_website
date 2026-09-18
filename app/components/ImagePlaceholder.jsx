import Icon from "./icons";

const GRADIENTS = {
  default: "from-paper-deep via-paper to-clay/40",
  emerald: "from-banyan/20 via-paper-deep to-paper",
};

function cleanLabel(label) {
  return label.replace(/[[\]]/g, "").trim();
}

export default function ImagePlaceholder({
  label = "Photograph coming soon",
  ratio = "aspect-[4/3]",
  tone = "default",
  className = "",
}) {
  const hasPosition = /\b(absolute|fixed|sticky|static)\b/.test(className);

  return (
    <div
      className={`${hasPosition ? "" : "relative "}overflow-hidden bg-gradient-to-br ${GRADIENTS[tone] ?? GRADIENTS.default} ${ratio} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="flex size-11 items-center justify-center rounded-full bg-paper/80 text-banyan shadow-sm">
          <Icon name="sprout" className="size-5" />
        </div>
        <span className="max-w-[24ch] text-xs font-medium text-ink-soft/70">
          {cleanLabel(label)}
        </span>
      </div>
    </div>
  );
}
