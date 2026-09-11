import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import {
  Eyebrow,
  ButtonPrimary,
  ButtonOnDark,
  IconCard,
} from "../../components/ui";

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
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ ENVIRONMENTAL HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-300">
            <Link href="/">Home</Link> / <Link href="/#mission">Social Responsibility</Link> / Environmental
          </p>
          <Eyebrow tone="dark">Environmental Protection</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Protecting Nature, Wildlife &amp; Oceans
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            Forests, rivers, wetlands, birds, animals, oceans and communities depend
            upon one another. We promote environmental awareness, conservation,
            research and sustainable community action to protect the natural world.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            A Healthy Environment Is Essential for Healthy Communities
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Environmental protection cannot be treated as separate subjects — nature,
            biodiversity, wildlife, oceans and people are all part of one connected,
            living system.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We are committed to protecting forests, rivers, oceans, wildlife,
            biodiversity and natural ecosystems through community participation and
            environmental awareness. Together, every tree planted, every river
            protected, and every act of conservation brings us closer to a healthier
            planet.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Focus Areas</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Four connected areas of protection
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <IconCard {...area} tone="emerald" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CHANGE HAPPENS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How Change Happens</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              From a Site Visit to a Living Ecosystem
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            GSR is a newly established foundation, so we won&rsquo;t show you
            staged before-and-after photos of work we haven&rsquo;t done yet.
            Here is the honest process every environmental project follows —
            and we&rsquo;ll document it in full, with real photographs, as
            each site completes its first cycle.
          </p>
          <div className="mt-14 divide-y divide-zinc-200 dark:divide-zinc-800">
            {beforeAfter.map((item, i) => (
              <div key={item.title} className="flex gap-6 py-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-emerald-600 text-sm font-semibold text-emerald-700 dark:border-emerald-500 dark:text-emerald-400">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Related</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Explore More of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 border border-zinc-200 p-5 transition-colors hover:border-emerald-600 dark:border-zinc-800 dark:hover:border-emerald-500"
              >
                <span className="text-emerald-700 dark:text-emerald-400" aria-hidden="true">→</span>
                <h4 className="text-base font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-400">
                  {item.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 md:py-32">
        <ImagePlaceholder
          label="[ BACKGROUND IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Protect Nature With Us</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join Our Environmental Work
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Volunteer for a tree-plantation drive, support bird and wildlife
            conservation, or partner with us on a clean-water initiative.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/join/volunteer">Become a Volunteer</ButtonPrimary>
            <ButtonOnDark href="/donate">Donate Now</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
