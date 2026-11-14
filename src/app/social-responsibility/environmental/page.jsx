import CausePage from "@/components/sections/CausePage";

export const metadata = {
  title: "Environmental Protection | GSR",
  description:
    "GSR works with communities to protect forests, rivers, wetlands, birds, wildlife and oceans through conservation, restoration and awareness.",
  openGraph: {
    title: "Environmental Protection | GSR",
    description:
      "GSR works with communities to protect forests, rivers, wetlands, birds, wildlife and oceans.",
  },
};

export default function Environmental() {
  return (
    <CausePage
      cause="environmental"
      eyebrow="Environment"
      title="Environmental protection"
      intro="We work with local communities on conservation, restoration and environmental awareness, covering forests, rivers, wetlands, wildlife and the coast."
      hero={{
        src: "/images/causes/landscape-guardians.webp",
        alt: "Tall trees on a forested hillside",
        position: "object-[center_40%]",
      }}
      overview={{
        heading: "Conservation run with the people who live on the land",
        image: {
          src: "/images/causes/community-planning.webp",
          alt: "Women at a village meeting, one of them writing notes",
          position: "object-[30%_center]",
        },
        paragraphs: [
          "Forests, rivers, wildlife, oceans and the people who live near them all depend on each other, so we treat them as one system.",
          "Our projects are run with the communities who live on the land. They know it best, and they will be the ones looking after it once a project ends.",
        ],
      }}
      focus={{
        lede: "Open each area to see the work it covers.",
        image: {
          src: "/images/causes/landscape-guardians.webp",
          alt: "Tree trunks and green undergrowth on a forest slope",
          position: "object-[75%_center]",
        },
        areas: [
          {
            title: "Forests, rivers & habitats",
            icon: "sprout",
            bullets: [
              "Tree and forest conservation",
              "Native planting and habitat restoration",
              "Wetland and river protection",
              "Sustainable land use",
              "Climate and ecology education",
              "Environmental monitoring",
            ],
          },
          {
            title: "Birds",
            icon: "bird",
            lede: "Bird populations are one of the clearest signs of a healthy ecosystem.",
            bullets: [
              "Protecting nesting and feeding sites",
              "Awareness of local and migratory birds",
              "Bird counts and documentation",
              "Citizen-science projects",
              "Student biodiversity programmes",
            ],
          },
          {
            title: "Wildlife",
            icon: "paw",
            bullets: [
              "Wildlife conservation awareness",
              "Habitat protection",
              "Reducing human–wildlife conflict",
              "Animal welfare awareness",
              "Wildlife education for young people",
            ],
          },
          {
            title: "Oceans & coasts",
            icon: "wave",
            bullets: [
              "Coastal ecosystem protection",
              "Reducing plastic and marine pollution",
              "Beach clean-ups",
              "Sustainable use of marine resources",
              "Coral reef and marine habitat awareness",
              "Ocean education",
            ],
          },
        ],
      }}
      steps={{
        heading: "From site visit to monitoring",
        lede: "Every environmental project follows the same three steps.",
        items: [
          {
            title: "Assess the site",
            body: "We visit the site with local residents and agree on what the land and water actually need before anything is planted.",
          },
          {
            title: "Restore and clean up",
            body: "Tree planting, habitat restoration and clean-up drives, carried out with local volunteers.",
          },
          {
            title: "Monitor",
            body: "We track tree survival, water quality and community involvement for months after the first planting.",
          },
        ],
      }}
      reporting={{
        image: "/images/causes/community-planning.webp",
        imagePosition: "object-[70%_center]",
        heading: "What we will publish from each project",
        lede: "GSR was registered in 2026. As our first environmental projects run, we will publish:",
        items: [
          {
            icon: "sprout",
            title: "Every tree, with a place",
            body: "Each tree planted, where it was planted and which community planted it.",
          },
          {
            icon: "eye",
            title: "Survival over time",
            body: "How many of those trees are still alive in the months after planting.",
          },
          {
            icon: "water",
            title: "Water and site checks",
            body: "Water quality and site condition, measured on return visits.",
          },
        ],
      }}
      cta={{
        heading: "Help with our environmental work",
        lede: "Give a few hours, fund a project, or run one with us.",
        volunteer: "Join a tree-planting or clean-up drive.",
        donate: "Fund conservation work.",
        partner: "Sponsor a clean-water or habitat project.",
      }}
    />
  );
}
