import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Icon from "../../components/icons";
import Reveal from "../../components/Reveal";
import {
  Eyebrow,
  Card,
  iconToneAt,
} from "../../components/ui";

export const metadata = {
  title: "Environmental Protection — GSR",
  description:
    "GSR protects forests, rivers, wetlands, birds, wildlife and oceans through community-led conservation, restoration and environmental awareness.",
  openGraph: {
    title: "Environmental Protection — GSR",
    description:
      "GSR protects forests, rivers, wetlands, birds, wildlife and oceans through community-led conservation and restoration.",
  },
};

const focusAreas = [
  {
    icon: "sprout",
    category: "Nature & Ecosystems",
    title: "Forests, Rivers & Habitats",
    lede: "A forest supports biodiversity. Rivers connect communities and ecosystems.",
    bullets: [
      "Forest and tree conservation",
      "Biodiversity protection",
      "Native plants & habitat restoration",
      "Wetland & river ecosystem protection",
      "Sustainable land use",
      "Climate awareness",
      "Ecological education",
      "Community conservation",
      "Nature-based solutions",
      "Environmental monitoring",
    ],
  },
  {
    icon: "bird",
    category: "Birds & Avian Conservation",
    title: "Indicators of a Healthy Ecosystem",
    lede: "Birds are among the clearest signs of ecological health.",
    bullets: [
      "Bird habitat protection",
      "Awareness of local & migratory birds",
      "Protection of nesting & feeding habitats",
      "Community bird conservation programmes",
      "Bird observation & documentation",
      "Citizen-science initiatives",
      "Student biodiversity programmes",
      "Youth participation in bird conservation",
    ],
  },
  {
    icon: "paw",
    category: "Animals & Wildlife",
    title: "Coexistence, Not Conflict",
    lede: "We promote responsible conservation awareness and positive coexistence between people and wildlife.",
    bullets: [
      "Wildlife conservation awareness",
      "Habitat protection",
      "Human–wildlife coexistence",
      "Animal welfare awareness",
      "Biodiversity education",
      "Community conservation",
      "Youth wildlife education",
      "Responsible conservation initiatives",
    ],
  },
  {
    icon: "wave",
    category: "Oceans & Marine Environment",
    title: "Protecting Our Blue Planet",
    lede: "Healthy oceans are essential to life, climate, biodiversity and communities.",
    bullets: [
      "Ocean conservation",
      "Marine biodiversity",
      "Coastal ecosystem protection",
      "Plastic & marine pollution reduction",
      "Beach & coastal cleanliness",
      "Sustainable use of marine resources",
      "Coral reef awareness",
      "Marine habitat conservation",
      "Ocean education",
      "Responsible consumption & waste reduction",
    ],
  },
];

const beforeAfter = [
  {
    title: "We assess the site with the community that lives there",
    caption: "No project begins on paper alone — we walk the land, talk to the people who know it best, and understand what the ecosystem actually needs before we plant a single tree.",
  },
  {
    title: "We restore, plant, and clean up alongside local volunteers",
    caption: "Tree plantation, habitat restoration and clean-up drives are carried out hand-in-hand with the community, not done to them from a distance.",
  },
  {
    title: "We monitor and document, month after month",
    caption: "Growth takes time. We track survival rates, water quality, and community participation long after the first day of planting.",
  },
];

const related = [
  { title: "Impact Stories", href: "/about/impact" },
  { title: "Who We Are", href: "/about/team" },
  { title: "Education for All", href: "/social-responsibility/education" },
  { title: "Empowerment & Opportunity", href: "/social-responsibility/empowerment" },
];

export default function Environmental() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="Forest, seen from a hillside in the Nilgiris"
          src="/images/landscape-guardians.jpg"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-paper/70">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Environmental
          </p>
          <Eyebrow tone="dark">Environmental Protection</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Protecting Nature, Wildlife &amp; Oceans
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            Forests, rivers, wetlands, birds, animals, oceans and communities depend
            upon one another. We promote environmental awareness, conservation,
            research and sustainable community action to protect the natural world.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Healthy Environment Is Essential for Healthy Communities
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Environmental protection cannot be treated as separate subjects — nature,
            biodiversity, wildlife, oceans and people are all part of one connected,
            living system.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            We are committed to protecting forests, rivers, oceans, wildlife,
            biodiversity and natural ecosystems through community participation and
            environmental awareness. Together, every tree planted, every river
            protected, and every act of conservation brings us closer to a healthier
            planet.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Four connected areas of protection
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={area.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={area.icon} className="size-5" />
                  </div>
                  <div>
                    <Eyebrow>{area.category}</Eyebrow>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{area.lede}</p>
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm leading-6 text-ink-soft sm:grid-cols-2">
                      {area.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="text-banyan">
                            &#10003;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW CHANGE HAPPENS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From a Site Visit to a Living Ecosystem
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-ink-soft/70">
            GSR is a newly established foundation, so we won&rsquo;t show you
            staged before-and-after photos of work we haven&rsquo;t done yet.
            Here is the honest process every environmental project follows —
            and we&rsquo;ll document it in full, with real photographs, as
            each site completes its first cycle.
          </p>
          <div className="mt-14 divide-y divide-clay">
            {beforeAfter.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="flex gap-6 py-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-banyan text-sm font-semibold text-banyan">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">
                    {item.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Related</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Explore More of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 border border-clay p-5 transition-colors hover:border-banyan"
              >
                <span className="text-marigold-deep" aria-hidden="true">→</span>
                <h4 className="font-display text-base font-semibold text-ink group-hover:text-banyan">
                  {item.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Join Our Environmental Work
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Volunteer for a tree-plantation drive, support bird and
              wildlife conservation, or partner with us on a clean-water
              initiative.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Become a Volunteer", detail: "Join a tree-plantation or clean-up drive.", href: "/join/volunteer" },
              { label: "Donate Now", detail: "Fund conservation work directly.", href: "/donate" },
              { label: "Partner With Us", detail: "Sponsor a clean-water or habitat initiative.", href: "/partner" },
              { label: "See Our Impact", detail: "Follow environmental projects as they progress.", href: "/about/impact" },
            ].map((action) => (
              <li key={action.label}>
                <Link
                  href={action.href}
                  className="group flex items-baseline justify-between gap-4 py-4 text-paper transition-colors hover:text-marigold"
                >
                  <span className="font-display text-lg font-semibold">{action.label}</span>
                  <span className="hidden text-right text-sm text-paper/50 sm:block">
                    {action.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
