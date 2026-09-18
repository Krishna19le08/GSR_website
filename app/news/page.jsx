import ImagePlaceholder from "../components/ImagePlaceholder";
import { Eyebrow, ButtonPrimary, ButtonOnDark, TextLink, IconTile } from "../components/ui";

const stories = [
  {
    icon: "graduate",
    title: "From Learner to Achiever",
    desc: "A child who once struggled to stay in school finds the support to not just attend, but excel.",
  },
  {
    icon: "users",
    title: "From Community to Change-Maker",
    desc: "A neighbourhood comes together to solve a problem no one outside had noticed, let alone fixed.",
  },
  {
    icon: "leaf",
    title: "From Awareness to Action",
    desc: "Understanding a local environmental risk turns into a community-led clean-up or restoration effort.",
  },
  {
    icon: "sprout",
    title: "From Support to Independence",
    desc: "A first loan, a first training, a first client — the early steps of a livelihood that becomes self-sustaining.",
  },
  {
    icon: "heart",
    title: "From Dependence to Self-Reliance",
    desc: "A family that once relied entirely on aid builds the skills and income to stand on its own.",
  },
  {
    icon: "handshake",
    title: "From Isolation to Inclusion",
    desc: "A person or community once left out of decisions finds a seat at the table, and a voice that is heard.",
  },
];

const gallery = [
  "Our Journey",
  "Leadership in the Field",
  "Partners & Volunteers",
  "Community Landscapes",
];

export default function News() {
  return (
    <main className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-zinc-900">
        <ImagePlaceholder
          label="[ NEWS HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">News &amp; Blogs</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            News, Stories &amp; Events
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200">
            Updates from GSR, the people behind our work, and the events where you
            can meet us in person.
          </p>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>GSR News &amp; Updates</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            What&apos;s Happening at GSR
          </h2>
          <div className="mt-8 border border-dashed border-zinc-300 p-8 dark:border-zinc-700">
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              GSR was established in 2026 and our News &amp; Updates hub is just
              getting started. Rather than fill this space with placeholder
              headlines, we&apos;d rather leave it empty until there&apos;s something real to
              share.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Want to be notified the moment we publish our first update?{" "}
              <TextLink href="mailto:info.gsrwf@gmail.com?subject=Notify%20me%20of%20GSR%20updates">
                Ask us to notify you →
              </TextLink>
            </p>
          </div>
        </div>
      </section>

      {/* STORIES OF SUCCESS */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Stories of Success</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              When Opportunity Meets Determination
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Behind every project is a person. A child discovering the
              opportunity to learn. A farmer strengthening a livelihood. A
              community protecting its environment. Impact is not just something
              we measure — it is something people experience.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <div key={s.title} className="border border-zinc-200 p-6 dark:border-zinc-800">
                <IconTile icon={s.icon} />
                <h4 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm italic leading-6 text-zinc-500 dark:text-zinc-500">
            These are illustrative journeys representing the kind of change we aim
            to create. Named, verified success stories will be added here as our
            projects complete their first cycles.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Events</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              GSR Upcoming Events
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              No events are scheduled yet. As we launch our first environmental
              drives, education programmes and community initiatives, they&apos;ll be
              listed here with dates and registration details.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="border border-zinc-200 p-8 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Register Your Interest
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Want to be the first to know about our launch events,
                tree-plantation drives or community health camps?
              </p>
              <div className="mt-5">
                <TextLink href="mailto:info.gsrwf@gmail.com?subject=Register%20interest%20in%20GSR%20events">
                  Register Now →
                </TextLink>
              </div>
            </div>
            <div className="border border-zinc-200 p-8 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Sponsorship &amp; Collaboration
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                CSR teams, institutions and businesses interested in sponsoring or
                co-hosting an event with GSR.
              </p>
              <div className="mt-5">
                <TextLink href="mailto:info.gsrwf@gmail.com?subject=Sponsorship%20%26%20Collaboration%20Inquiry">
                  Discuss a Collaboration →
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-stone-50 py-20 dark:bg-zinc-900 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Gallery &amp; Media</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              A Glimpse of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <div key={g}>
                <ImagePlaceholder label={`[ ${g.toUpperCase()} ]`} ratio="aspect-[4/3]" />
                <h4 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {g}
                </h4>
              </div>
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
          <Eyebrow tone="dark">Stay Connected</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Be the First to Know
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300">
            Follow our journey, get notified of new stories and events, or reach
            out directly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="mailto:info.gsrwf@gmail.com?subject=Subscribe%20to%20GSR%20updates">
              Subscribe for Updates
            </ButtonPrimary>
            <ButtonOnDark href="/contact">Contact Us</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
