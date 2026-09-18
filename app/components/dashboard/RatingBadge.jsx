import { getTier } from "../../lib/rating";

export default function RatingBadge({ score, size = "md" }) {
  const tier = getTier(score);
  const sizes = {
    sm: "px-2.5 py-1 text-[11px] gap-1",
    md: "px-3.5 py-1.5 text-sm gap-1.5",
    lg: "px-5 py-2.5 text-base gap-2",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold ${sizes[size]}`}
      style={{ borderColor: tier.color, color: tier.color, backgroundColor: `${tier.color}14` }}
    >
      Score {score}
    </span>
  );
}
