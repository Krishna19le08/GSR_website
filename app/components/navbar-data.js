export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Impact", href: "/about/impact" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Our Social Responsibility",
    href: "/social-responsibility",
    children: [
      {
        label: "Environmental",
        href: "/social-responsibility/environmental",
        children: [
          {
            label: "GSR Agri",
            href: "/social-responsibility/environmental/gsr-agri",
            children: [
              {
                label: "Project Names",
                href: "/social-responsibility/environmental/gsr-agri/project-names",
              },
            ],
          },
          {
            label: "GSR Tribal",
            href: "/social-responsibility/environmental/gsr-tribal",
            children: [
              {
                label: "Project Names",
                href: "/social-responsibility/environmental/gsr-tribal/project-names",
              },
            ],
          },
        ],
      },
      { label: "Education", href: "/social-responsibility/education" },
      { label: "Empowerment", href: "/social-responsibility/empowerment" },
      { label: "Research", href: "/social-responsibility/research" },
    ],
  },
  {
    label: "GSR Tech",
    href: "/gsr-tech",
    children: [
      { label: "GSR Tech", href: "/gsr-tech" },
      { label: "Naas (NGO-as-a-Service)", href: "/gsr-tech/naas" },
      { label: "GSR Network Hub", href: "/gsr-tech/network-hub" },
      { label: "CSR Tracker", href: "/csr-tracker" },
    ],
  },
  { label: "News/Media", href: "/news-media" },
];

export const authNav = { label: "Login / Register", href: "/login" };
export const donateNav = { label: "Donate", href: "/donate" };
