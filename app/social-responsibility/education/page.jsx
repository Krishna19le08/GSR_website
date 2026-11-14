import CausePage from "../../components/CausePage";

export const metadata = {
  title: "Education for All | GSR",
  description:
    "GSR widens access to education through scholarships, digital and vocational skills training, leadership programmes and environmental learning.",
  openGraph: {
    title: "Education for All | GSR",
    description:
      "Scholarships, digital and vocational skills training, and leadership programmes from GSR.",
  },
};

export default function Education() {
  return (
    <CausePage
      cause="education"
      eyebrow="Education"
      title="Education for all"
      intro="We support children, students, young people, women and communities who face barriers to education and skills training."
      hero={{
        src: "/images/youth-learning.jpg",
        alt: "Children sitting at desks in a decorated village classroom",
        position: "object-[center_55%]",
      }}
      overview={{
        heading: "Learning that leads to real opportunities",
        image: {
          src: "/hero_1.jpg",
          alt: "Children sitting together on the ground outside a school building",
          position: "object-[35%_center]",
        },
        paragraphs: [
          "Every child should be able to get a good education, whatever their family's income or background. In many places, cost, distance or a lack of materials stands in the way.",
          "We want education to give people practical skills and the confidence to use them, so that it leads to work and real opportunities.",
        ],
      }}
      focus={{
        lede: "Open each area to see the work it covers.",
        image: {
          src: "/images/youth-learning.jpg",
          alt: "Children reading at desks under paper bunting in a classroom",
          position: "object-[center_80%]",
        },
        areas: [
          {
            title: "Access to learning",
            icon: "book",
            bullets: [
              "Scholarships",
              "Educational support",
              "School development",
              "Learning materials",
              "Library programmes",
              "Inclusive education",
              "Adult literacy",
            ],
          },
          {
            title: "Practical skills",
            icon: "laptop",
            bullets: [
              "Digital literacy",
              "Vocational training",
              "Financial literacy",
              "Entrepreneurship",
              "Career guidance",
            ],
          },
          {
            title: "Leadership & life skills",
            icon: "graduate",
            bullets: [
              "Life skills",
              "Youth leadership",
              "Community-service learning",
              "Research programmes",
              "Internships",
            ],
          },
          {
            title: "Environmental learning",
            icon: "leaf",
            bullets: [
              "Environmental education",
              "Climate and sustainability",
              "Workshops",
              "Digital learning resources",
              "Community learning",
            ],
          },
        ],
      }}
      steps={{
        heading: "From first meeting to follow-up",
        lede: "Every education project follows the same three steps.",
        items: [
          {
            title: "Listen first",
            body: "We meet families, teachers and students to find out what is keeping children out of school or behind.",
          },
          {
            title: "Fund and mentor",
            body: "Scholarships, materials and school support come with a mentor, so help continues after the money is given.",
          },
          {
            title: "Follow up",
            body: "We keep track of attendance, progress and wellbeing, because getting into school is only the first step.",
          },
        ],
      }}
      reporting={{
        image: "/hero_1.jpg",
        imagePosition: "object-[center_70%]",
        heading: "What we will publish from each project",
        lede: "GSR was registered in 2026. As our first education projects run, we will publish:",
        items: [
          {
            icon: "users",
            title: "Real headcounts",
            body: "How many children and adults each project reached, counted rather than estimated.",
          },
          {
            icon: "graduate",
            title: "Where support went",
            body: "Scholarships and learning materials given, and to which schools and communities.",
          },
          {
            icon: "chart",
            title: "Attendance and progress",
            body: "What our follow-up visits find about attendance and progress over the year.",
          },
        ],
      }}
      cta={{
        heading: "Help with our education work",
        lede: "Teach, fund a scholarship, or open a learning centre with us.",
        volunteer: "Teach, mentor or help in a classroom.",
        donate: "Sponsor a scholarship.",
        partner: "Set up a learning centre with us.",
      }}
    />
  );
}
