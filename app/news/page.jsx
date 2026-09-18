import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Icon from "../components/icons";
import Reveal from "../components/Reveal";
import { Eyebrow, TextLink, Card, iconToneAt } from "../components/ui";

export const metadata = {
  title: "News, Stories & Events — GSR",
  description:
    "Updates from GSR, the people behind our work, stories of impact, and the events where you can meet us in person.",
  openGraph: {
    title: "News, Stories & Events — GSR",
    description:
      "Updates from GSR, stories of impact, and upcoming events.",
  },
};

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
    <main className="flex flex-1 flex-col bg-paper">
      {/* HERO */}
      <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-banyan-deep">
        <ImagePlaceholder
          label="[ NEWS HERO IMAGE HOLDER ]"
          ratio=""
          tone="emerald"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep/90 via-banyan-deep/40 to-banyan-deep/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">News &amp; Blogs</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            News, Stories &amp; Events
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            Updates from GSR, the people behind our work, and the events where you
            can meet us in person.
          </p>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>GSR News &amp; Updates</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What&apos;s Happening at GSR
          </h2>
          <div className="mt-8 border border-dashed border-clay p-8">
            <p className="text-base leading-7 text-ink-soft">
              GSR was established in 2026 and our News &amp; Updates hub is just
              getting started. Rather than fill this space with placeholder
              headlines, we&apos;d rather leave it empty until there&apos;s something real to
              share.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Want to be notified the moment we publish our first update?{" "}
              <TextLink href="mailto:info.gsrwf@gmail.com?subject=Notify%20me%20of%20GSR%20updates">
                Ask us to notify you →
              </TextLink>
            </p>
          </div>
        </div>
      </section>

      {/* STORIES OF SUCCESS */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Stories of Success</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              When Opportunity Meets Determination
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Behind every project is a person. A child discovering the
              opportunity to learn. A farmer strengthening a livelihood. A
              community protecting its environment. Impact is not just something
              we measure — it is something people experience.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => {
              const tone = iconToneAt(i);
              const toneClasses = {
                banyan: "bg-banyan/10 text-banyan",
                marigold: "bg-marigold/15 text-marigold-deep",
                ink: "bg-ink/10 text-ink-soft",
              };
              return (
                <Card key={s.title} className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      toneClasses[tone] || toneClasses.banyan
                    }`}
                  >
                    <Icon name={s.icon} className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {s.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm italic leading-6 text-ink-soft/70">
            These are illustrative journeys representing the kind of change we aim
            to create. Named, verified success stories will be added here as our
            projects complete their first cycles.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Events</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              GSR Upcoming Events
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              No events are scheduled yet. As we launch our first environmental
              drives, education programmes and community initiatives, they&apos;ll be
              listed here with dates and registration details.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal className="border border-clay p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                Register Your Interest
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Want to be the first to know about our launch events,
                tree-plantation drives or community health camps?
              </p>
              <div className="mt-5">
                <TextLink href="mailto:info.gsrwf@gmail.com?subject=Register%20interest%20in%20GSR%20events">
                  Register Now →
                </TextLink>
              </div>
            </Reveal>
            <Reveal delay={120} className="border border-clay p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                Sponsorship &amp; Collaboration
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                CSR teams, institutions and businesses interested in sponsoring or
                co-hosting an event with GSR.
              </p>
              <div className="mt-5">
                <TextLink href="mailto:info.gsrwf@gmail.com?subject=Sponsorship%20%26%20Collaboration%20Inquiry">
                  Discuss a Collaboration →
                </TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-paper-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Gallery &amp; Media</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A Glimpse of Our Work
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g} delay={i * 100}>
                <ImagePlaceholder label={`[ ${g.toUpperCase()} ]`} ratio="aspect-[4/3]" />
                <h4 className="mt-4 font-display text-base font-semibold text-ink">
                  {g}
                </h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-banyan-deep px-6 py-16 shadow-[0_24px_60px_rgba(18,49,44,0.35)] sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Be the First to Know
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/70">
              Follow our journey, get notified of new stories and events, or
              reach out directly.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-t border-paper/15">
            {[
              { label: "Subscribe for Updates", detail: "Be notified the moment we publish news.", href: "mailto:info.gsrwf@gmail.com?subject=Subscribe%20to%20GSR%20updates" },
              { label: "Register for Events", detail: "Hear about our launch events first.", href: "mailto:info.gsrwf@gmail.com?subject=Register%20interest%20in%20GSR%20events" },
              { label: "Sponsor an Event", detail: "Co-host or sponsor with GSR.", href: "mailto:info.gsrwf@gmail.com?subject=Sponsorship%20%26%20Collaboration%20Inquiry" },
              { label: "Contact Us", detail: "Reach our team with any question.", href: "/about#contact" },
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
