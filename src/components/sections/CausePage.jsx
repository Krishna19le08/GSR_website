import Image from "next/image";
import Icon from "@/components/ui/icons";
import {
  ActionTiles,
  DarkBand,
  Eyebrow,
  MediaSplit,
  NumberedSteps,
  PageHero,
  PhotoCard,
  PhotoCardRow,
  PromiseList,
  Section,
  SectionHeader,
} from "@/components/ui/ui";

// Shared programme-page template for the three cause pages
// (environmental, education, empowerment). Each page passes its own data.

const CAUSES = [
  {
    key: "environmental",
    title: "Environmental protection",
    description: "Forests, rivers, wetlands, birds, wildlife and the coast, looked after with local communities.",
    href: "/social-responsibility/environmental",
    src: "/images/causes/landscape-guardians.jpg",
    alt: "Tall trees on a forested hillside",
    position: "object-center",
  },
  {
    key: "education",
    title: "Education for all",
    description: "Scholarships, learning materials and practical skills for children, young people and adults.",
    href: "/social-responsibility/education",
    src: "/images/causes/youth-learning.jpg",
    alt: "Children sitting at desks in a decorated village classroom",
    position: "object-[center_70%]",
  },
  {
    key: "empowerment",
    title: "Empowerment & opportunity",
    description: "Training, tools and market links that help farmers, women and tribal communities earn a steady income.",
    href: "/social-responsibility/empowerment",
    src: "/images/causes/empowerment-sewing.jpg",
    alt: "A woman smiling beside a sewing machine in a small shop",
    position: "object-[70%_center]",
  },
];

const NUMBER_WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six"];

function FocusArea({ area, index }) {
  return (
    <details className="group border-b border-clay" open={index === 0}>
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-4 py-5 sm:gap-5 sm:py-6 [&::-webkit-details-marker]:hidden">
        <span className="w-8 shrink-0 font-display text-2xl font-medium text-marigold-deep" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-banyan/[0.08] text-banyan ring-1 ring-banyan/10 transition-colors group-open:bg-banyan group-open:text-white"
        >
          <Icon name={area.icon} className="size-5" />
        </span>
        <h3 className="min-w-0 flex-1 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
          {area.title}
        </h3>
        <span
          className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-clay text-banyan transition-colors group-hover:border-banyan"
          aria-hidden="true"
        >
          <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
          <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-200 group-open:scale-y-0" />
        </span>
      </summary>
      <div className="pb-8 sm:pl-[6.5rem]">
        {area.lede && <p className="max-w-2xl leading-7 text-ink-soft">{area.lede}</p>}
        <ul className={`grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 ${area.lede ? "mt-4" : ""}`}>
          {area.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-7 text-ink-soft">
              <Icon name="checkCircle" className="mt-1 size-5 shrink-0 text-banyan" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default function CausePage({
  cause,
  eyebrow,
  title,
  intro,
  hero,
  overview,
  focus,
  pathways,
  steps,
  reporting,
  cta,
}) {
  const related = CAUSES.filter((c) => c.key !== cause);
  const areaCount = NUMBER_WORDS[focus.areas.length] || focus.areas.length;

  const actions = [
    { icon: "users", label: "Volunteer", body: cta.volunteer, href: "/join" },
    { icon: "heart", label: "Donate", body: cta.donate, href: "/donate", accent: "gold" },
    { icon: "handshake", label: "Partner with us", body: cta.partner, href: "/partner" },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        image={hero.src}
        imageAlt={hero.alt}
        imagePosition={hero.position}
        breadcrumbs={[{ label: "Our work" }, { label: eyebrow }]}
        eyebrow={eyebrow}
        title={title}
        lede={intro}
        actions={[
          { label: "Volunteer with us", href: "/join" },
          { label: "Partner with us", href: "/partner" },
        ]}
      />

      {/* OVERVIEW */}
      <Section tone="white" labelledBy="overview-heading">
        <MediaSplit
          image={overview.image.src}
          imageAlt={overview.image.alt}
          imagePosition={overview.image.position}
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_7fr]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        >
          <Eyebrow>Our approach</Eyebrow>
          <h2 id="overview-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            {overview.heading}
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-pretty text-lede text-ink-soft">
            {overview.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </MediaSplit>
      </Section>

      {/* FOCUS AREAS */}
      <Section tone="sand" labelledBy="focus-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                id="focus-heading"
                eyebrow="What we work on"
                title={`${areaCount} areas of work`}
                lede={focus.lede}
              />
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl bg-paper shadow-[0_24px_48px_-28px_rgb(11_38_24/0.35)] lg:block">
                <Image
                  src={focus.image.src}
                  alt={focus.image.alt}
                  fill
                  sizes="40vw"
                  className={`object-cover ${focus.image.position || "object-center"}`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="border-t border-clay">
              {focus.areas.map((area, i) => (
                <FocusArea key={area.title} area={area} index={i} />
              ))}
            </div>

            {pathways && (
              <div className="mt-12 rounded-2xl border border-clay bg-surface p-6 sm:p-8">
                <h3 className="font-display text-h3 font-medium text-ink">{pathways.heading}</h3>
                {pathways.lede && <p className="mt-2 leading-7 text-ink-soft">{pathways.lede}</p>}
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {pathways.items.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center rounded-full bg-paper px-4 py-2 text-[0.9375rem] font-medium text-ink"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* HOW A PROJECT RUNS */}
      <Section tone="white" labelledBy="steps-heading">
        <SectionHeader
          id="steps-heading"
          eyebrow="How a project runs"
          title={steps.heading}
          lede={steps.lede}
        />
        <NumberedSteps items={steps.items} columns={3} className="mt-12" />
      </Section>

      {/* WHAT WE WILL REPORT */}
      <DarkBand image={reporting.image} imagePosition={reporting.imagePosition} labelledBy="report-heading">
        <SectionHeader
          id="report-heading"
          tone="dark"
          eyebrow="What we will report"
          title={reporting.heading}
          lede={reporting.lede}
        />
        <PromiseList items={reporting.items} columns={3} className="mt-12" />
      </DarkBand>

      {/* RELATED CAUSES */}
      <Section tone="paper" labelledBy="related-heading">
        <SectionHeader
          id="related-heading"
          eyebrow="Our other work"
          title="Two more areas we work on"
        />
        <PhotoCardRow label="Other areas of GSR's work" gridClassName="md:grid-cols-2" className="mt-12">
          {related.map((c) => (
            <PhotoCard
              key={c.key}
              href={c.href}
              src={c.src}
              alt={c.alt}
              tag="Our work"
              title={c.title}
              description={c.description}
              imagePosition={c.position}
              ratio="aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/10]"
              sizes="(min-width: 768px) 50vw, 80vw"
            />
          ))}
        </PhotoCardRow>
      </Section>

      {/* GET INVOLVED */}
      <Section tone="sand" labelledBy="involved-heading">
        <SectionHeader
          id="involved-heading"
          eyebrow="Get involved"
          title={cta.heading}
          lede={cta.lede}
        />
        <ActionTiles items={actions} className="mt-12" />
      </Section>
    </main>
  );
}
