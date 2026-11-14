import { DarkBand, Eyebrow, IconBadge, MediaSplit, Quote, Section, SectionHeader } from "./ui";

// Founder profile for the About page (anchored at /about#founder).
// Renders three bands: spotlight (sand), her Iraivi record (dark band) and
// journey + honours (paper). Every figure below is from her work at Iraivi
// LGBT Charitable Trust and is labelled that way on the page.

const roles = [
  { icon: "globe", title: "Founder", org: "Global Social Responsibility Welfare Foundation" },
  { icon: "heart", title: "Chief Executive Officer", org: "Iraivi LGBT Charitable Trust, Chennai" },
  { icon: "building", title: "Managing Director", org: "TNI Project" },
];

const facts = [
  { label: "Origin", value: "Chennai, Tamil Nadu" },
  { label: "Education", value: "Degree in Hotel Management" },
  { label: "Experience", value: "10+ years executive leadership" },
];

const impact = [
  { value: "1,220+", label: "Crisis cases counselled" },
  { value: "80+", label: "LGBTQ+ jobs placed" },
  { value: "35", label: "Transgender rescues" },
  { value: "1,450+", label: "Children reached through awareness drives" },
  { value: "165+", label: "Shelter and rehab residents supported" },
  { value: "20+", label: "Global investors onboarded" },
];

const roadmap = [
  {
    year: "2025",
    items: [
      { title: "International Women's Day", text: "Achievers Award ceremony hosted at Raj Bhavan." },
      {
        title: "Welfare footprint",
        text: "Directed counselling for 350+ individuals, safely rescued 8 transgender persons, achieved 13 job placements and convened 75 delegates at the Pride Conference.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Corporate PoSH alliances", text: "Led compliance and training engagements for Ashok Leyland and GSH India Pvt Ltd." },
      { title: "Advocacy and media", text: "Secured 5 YouTube features and a News 7 TV spotlight." },
      { title: "Operations", text: "Managed 350 counselling sessions, 27 job placements, 12 rescues and 30 medical aids." },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Equality Pride Marathon",
        text: "Launched in Bangalore alongside Thiru. Dinesh Gundu Rao, Hon. Health Minister of Karnataka, with 350+ participants.",
      },
      {
        title: "Strategic ecosystems",
        text: "Onboarded 20+ investor partners through the Global Investors Meet. Directed civic drives at Saidapet Court and Jain College with 150 volunteers.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "DCCI International Cricket Match",
        text: "Organised a 3-day India vs Sri Lanka match at Ramachandra University, recognised by the Governor of Tamil Nadu, Thiru. R.N. Ravi.",
      },
      { title: "Expansion", text: "Established the Bangalore branch office and initiated the Mysore Pride Wall (300+ attendees)." },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Institutional outreach",
        text: "Organised a Maid Wellness Campaign at New Puzhal Prison (500+ beneficiaries) and an LGBT Pride Festival presenting 20 Transgender Awards and 5 NGO Awards.",
      },
    ],
  },
  {
    year: "2019 to 2020",
    items: [
      {
        title: "Foundation",
        text: "Incorporated Iraivi LGBT Charitable Trust (Registration No. 89/2019) with 80G, 12A and NITI Aayog compliance.",
      },
      {
        title: "Grassroots",
        text: "Ran a child safety drive at Sankara High School (1,300 children, 150 parents), launched an LGBTQ+ rehab and shelter supporting 145 beneficiaries, and ran a Covid Zero Hunger slum kitchen.",
      },
    ],
  },
];

// Most recent years show by default; the rest sit behind a native toggle
// so the About page stays scannable.
const RECENT_YEARS = 3;

const honors = [
  { year: "2025", award: "State Commendation", by: "Governor of Tamil Nadu", featured: true },
  { year: "2022", award: "Best NGO Pride Award" },
  { year: "2022", award: "DCCI Cricket Best Organizer Award" },
  { year: "2022", award: "Best Social Worker Award", by: "Rotary Club" },
  { year: "2021", award: "Best Social Worker", by: "Global Achievers" },
  { year: "2021", award: "Best Social Worker", by: "Media Chamber" },
  { year: "2021", award: "Best NGO Award", by: "Geetham Cultural" },
  { year: "2020", award: "Best Social Worker", by: "Chennai Lions Club" },
  { year: "2020", award: "Best Performer", by: "Shivaji Welfare" },
];

// One year on the vertical timeline. The parent <ol> draws the line; the dot
// sits centred on it.
function TimelineEntry({ entry }) {
  return (
    <li className="relative pb-12 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[41px] top-2.5 size-4 rounded-full border-4 border-paper bg-marigold"
      />
      <p className="font-display text-3xl font-medium text-marigold-deep">{entry.year}</p>
      <ul className="mt-4 space-y-5">
        {entry.items.map((item) => (
          <li key={item.title}>
            <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
            <p className="mt-1 max-w-2xl leading-7 text-ink-soft">{item.text}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function FounderProfile() {
  return (
    <>
      {/* FOUNDER SPOTLIGHT */}
      <Section tone="sand" id="founder" labelledBy="founder-heading">
        <MediaSplit
          image="/images/zehra-fathima.png"
          imageAlt="Portrait of Zehra Fathima"
          imagePosition="object-top"
          ratio="4/5"
          frame
          className="lg:grid-cols-[5fr_7fr]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        >
          <Eyebrow>Our founder</Eyebrow>
          <h2 id="founder-heading" className="mt-4 text-balance font-display text-h2 font-medium text-ink">
            Zehra Fathima
          </h2>
          <p className="mt-3 text-eyebrow font-semibold uppercase text-marigold-deep">
            Founder &amp; Managing Trustee
          </p>
          <p className="mt-2 font-medium text-ink">Social activist &middot; Former hospitality executive</p>

          <div className="mt-6 max-w-2xl space-y-4 leading-7 text-ink-soft">
            <p>
              Zehra was born in Chennai and studied Hotel Management. She spent over ten years in
              hospitality leadership, running operations and managing teams, before moving into
              social work. She runs GSR with the same focus on organisation and follow-through.
            </p>
            <p>
              She names her mother as her main role model, and says that is where she learned
              empathy and resilience. Her aim is to leave the next generation better placed than her
              own, in India and abroad.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {roles.map((r) => (
              <li key={r.title} className="flex gap-3 rounded-2xl border border-clay bg-surface p-4 sm:flex-col">
                <IconBadge icon={r.icon} size="sm" />
                <span className="text-sm leading-5">
                  <span className="block font-semibold text-ink">{r.title}</span>
                  <span className="mt-0.5 block text-ink-soft">{r.org}</span>
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-clay pt-6 text-sm sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-ink-muted">{f.label}</dt>
                <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 max-w-xl">
            <Quote cite="Zehra Fathima" role="Founder & Managing Trustee">
              The Earth does not belong to us; we are its guardians for generations to come.
            </Quote>
          </div>
        </MediaSplit>
      </Section>

      {/* HER RECORD AT IRAIVI */}
      <DarkBand image="/images/landscape-guardians.jpg" imagePosition="object-[center_30%]" labelledBy="record-heading">
        <SectionHeader
          id="record-heading"
          tone="dark"
          eyebrow="Her record before GSR"
          title="Six years leading Iraivi LGBT Charitable Trust"
          lede="Cumulative figures from Zehra's leadership of Iraivi LGBT Charitable Trust, Chennai, since 2019. They are Iraivi's results. GSR will report its own once its first projects finish."
        />
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 lg:gap-x-10">
          {impact.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end border-t border-white/20 pt-5">
              <dt className="mt-2 text-[0.9375rem] leading-6 text-paper/85">{s.label}</dt>
              <dd className="font-display text-4xl font-medium text-gold-light sm:text-5xl lg:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/[0.05] p-6 sm:flex-row sm:items-start sm:p-8">
          <IconBadge icon="flag" tone="dark" />
          <div>
            <p className="text-eyebrow font-semibold uppercase text-gold-light">State commendation &middot; 2025</p>
            <p className="mt-3 max-w-3xl font-display text-xl leading-relaxed text-paper">
              The Governor of Tamil Nadu, Thiru. R.N. Ravi, commemorated Iraivi LGBT Charitable
              Trust at Raj Bhavan, presenting four Iraivi members with the International
              Women&rsquo;s Day Achievers Award and recognising its &ldquo;Auto Iraivi Member
              Support&rdquo; livelihood model.
            </p>
          </div>
        </div>
      </DarkBand>

      {/* JOURNEY + HONOURS */}
      <Section tone="paper" labelledBy="journey-heading">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <SectionHeader
              id="journey-heading"
              eyebrow="Journey"
              title="Year by year, 2019 to 2025"
              lede="The main milestones of her work at Iraivi LGBT Charitable Trust."
            />
            <div className="mt-12 border-l-2 border-clay pl-8">
              <ol>
                {roadmap.slice(0, RECENT_YEARS).map((entry) => (
                  <TimelineEntry key={entry.year} entry={entry} />
                ))}
              </ol>
              <details className="group/more mt-12">
                <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-full border-2 border-banyan px-5 text-sm font-semibold text-banyan transition-colors hover:bg-banyan hover:text-white [&::-webkit-details-marker]:hidden">
                  <span className="group-open/more:hidden">Show earlier years (2019 to 2022)</span>
                  <span className="hidden group-open/more:inline">Hide earlier years</span>
                </summary>
                <ol className="mt-12">
                  {roadmap.slice(RECENT_YEARS).map((entry) => (
                    <TimelineEntry key={entry.year} entry={entry} />
                  ))}
                </ol>
              </details>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Honours and awards</Eyebrow>
            <h3 className="mt-4 font-display text-h3 font-medium text-ink">Recognised for service</h3>
            <p className="mt-3 leading-7 text-ink-soft">Awarded to Zehra and to Iraivi LGBT Charitable Trust.</p>
            <ul className="mt-8 space-y-3">
              {honors.map((h) => (
                <li
                  key={`${h.year}-${h.award}-${h.by || ""}`}
                  className={`flex items-center gap-4 rounded-2xl border p-4 ${
                    h.featured ? "border-marigold bg-marigold/15" : "border-clay bg-surface"
                  }`}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper font-display text-sm font-medium text-marigold-deep">
                    {h.year}
                  </span>
                  <span className="min-w-0 leading-6">
                    <span className="block font-semibold text-ink">{h.award}</span>
                    {h.by && <span className="block text-sm text-ink-muted">{h.by}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
