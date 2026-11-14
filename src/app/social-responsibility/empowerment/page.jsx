import CausePage from "@/components/sections/CausePage";

export const metadata = {
  title: "Empowerment & Opportunity | GSR",
  description:
    "GSR helps farmers, tribal and indigenous communities, women and families build skills and steady livelihoods.",
  openGraph: {
    title: "Empowerment & Opportunity | GSR",
    description:
      "GSR helps farmers, tribal communities and women build skills and steady livelihoods.",
  },
};

export default function Empowerment() {
  return (
    <CausePage
      cause="empowerment"
      eyebrow="Empowerment"
      title="Empowerment & opportunity"
      intro="We help farmers, tribal communities, women and families turn skills and knowledge into steady income."
      hero={{
        src: "/images/causes/empowerment-sewing.jpg",
        alt: "A woman smiling beside a sewing machine in a small shop",
        position: "object-[70%_center]",
      }}
      overview={{
        heading: "From skills to a steady income",
        image: {
          src: "/images/causes/community-planning.jpg",
          alt: "Women at a village meeting, one of them writing notes",
          position: "object-[30%_center]",
        },
        paragraphs: [
          "Training only helps if it leads somewhere. We follow the path from knowledge to skills, then to confidence, real opportunities and finally a livelihood that lasts.",
          "We start from the skills a community already has, and add training, tools and access to markets.",
        ],
      }}
      focus={{
        lede: "Open each area to see the work it covers.",
        image: {
          src: "/images/causes/digital-rural.jpg",
          alt: "A man in a rural field holding up a basic mobile phone",
          position: "object-[60%_center]",
        },
        areas: [
          {
            title: "Farmers",
            icon: "seedling",
            bullets: [
              "Sustainable and organic farming",
              "Water management",
              "Farmer welfare",
              "Agricultural training",
              "Market access",
              "Farmer cooperatives",
              "Young people in agriculture",
            ],
          },
          {
            title: "Tribal & indigenous communities",
            icon: "users",
            bullets: [
              "Education",
              "Healthcare",
              "Livelihoods",
              "Women's empowerment",
              "Youth leadership",
              "Cultural preservation",
              "Safe drinking water",
            ],
          },
          {
            title: "Women & girls",
            icon: "sparkles",
            bullets: [
              "Girls' education",
              "Women's leadership",
              "Starting a business",
              "Financial independence",
              "Health and well-being",
              "Safety and dignity",
            ],
          },
          {
            title: "Community health",
            icon: "heart",
            bullets: [
              "Health awareness",
              "Nutrition",
              "Clean water and sanitation",
              "Hygiene",
              "Maternal and child care",
              "Mental well-being",
              "Health camps",
            ],
          },
        ],
      }}
      pathways={{
        heading: "Other support we offer",
        items: [
          "Skill development",
          "Green skills",
          "Digital jobs",
          "Entrepreneurship",
          "Social enterprise",
          "Mentorship",
          "Networking",
          "Leadership training",
          "Career guidance",
          "Internships",
          "Volunteering",
        ],
      }}
      steps={{
        heading: "From existing skills to a group that runs itself",
        lede: "Every livelihood project follows the same three steps.",
        items: [
          {
            title: "Start from existing skills",
            body: "Farmer groups and women's collectives already have skills and experience. We build on them.",
          },
          {
            title: "Train and connect to markets",
            body: "Farming techniques, business training and links to buyers, so work turns into income.",
          },
          {
            title: "Stay until it runs on its own",
            body: "We keep mentoring after the first harvest or sale, until the group can carry on without us.",
          },
        ],
      }}
      reporting={{
        image: "/images/causes/empowerment-sewing.jpg",
        imagePosition: "object-[20%_center]",
        heading: "What we will publish from each project",
        lede: "GSR was registered in 2026. As our first livelihood projects run, we will publish:",
        items: [
          {
            icon: "users",
            title: "Real headcounts",
            body: "How many people each programme trained, counted rather than estimated.",
          },
          {
            icon: "handshake",
            title: "Groups we work with",
            body: "Which farmer groups, collectives and communities took part, and where they are.",
          },
          {
            icon: "flag",
            title: "Every volunteer named",
            body: "The name of every volunteer and mentor who worked on the project.",
          },
        ],
      }}
      cta={{
        heading: "Help with our livelihood work",
        lede: "Mentor a group, fund a programme, or back one as a partner.",
        volunteer: "Mentor a cooperative or a new business owner.",
        donate: "Fund a livelihood programme.",
        partner: "Back a women's leadership programme.",
      }}
    />
  );
}
