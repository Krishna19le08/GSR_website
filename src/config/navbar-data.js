// Site navigation, shared by Navbar.jsx and Footer.jsx.
//
// Flags:
//   soon: true      -> the route doesn't exist yet. The entry is NOT rendered
//                      anywhere. Remove the flag once the page is built.
//   pageSoon: true  -> (parents only) the parent's own href doesn't exist yet,
//                      so the parent renders as a menu toggle, not a link.
//                      Its children still render.
//
// Keep it to two visible levels (parent > child). A third level only shows
// in the mobile drawer.

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About GSR", href: "/about" },
      { label: "Team & governance", href: "/about/team" },
      { label: "Impact", href: "/about/impact", soon: true },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    label: "Our Social Responsibility",
    href: "/social-responsibility",
    pageSoon: true,
    children: [
      {
        label: "Environmental",
        href: "/social-responsibility/environmental",
        children: [
          {
            label: "GSR Agri",
            href: "/social-responsibility/environmental/gsr-agri",
            soon: true,
            children: [
              {
                label: "Project Names",
                href: "/social-responsibility/environmental/gsr-agri/project-names",
                soon: true,
              },
            ],
          },
          {
            label: "GSR Tribal",
            href: "/social-responsibility/environmental/gsr-tribal",
            soon: true,
            children: [
              {
                label: "Project Names",
                href: "/social-responsibility/environmental/gsr-tribal/project-names",
                soon: true,
              },
            ],
          },
        ],
      },
      { label: "Education", href: "/social-responsibility/education" },
      { label: "Empowerment", href: "/social-responsibility/empowerment" },
      { label: "Research", href: "/social-responsibility/research", soon: true },
    ],
  },
  {
    label: "GSR Tech",
    href: "/gsr-tech",
    children: [
      { label: "GSR Tech", href: "/gsr-tech" },
      { label: "Naas (NGO-as-a-Service)", href: "/gsr-tech/naas", soon: true },
      { label: "GSR Network Hub", href: "/gsr-tech/network-hub" },
      { label: "CSR Tracker", href: "/csr-tracker" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Get involved",
    href: "/join",
    children: [
      { label: "Join or volunteer", href: "/join" },
      { label: "Partner with us (CSR)", href: "/partner" },
    ],
  },
];

export const authNav = { label: "Login / Register", href: "/login", soon: true };
export const donateNav = { label: "Donate", href: "/donate" };

// Recursively drop `soon` entries. Use this before rendering any nav list.
export function visibleNav(items = []) {
  return items
    .filter((item) => !item.soon)
    .map((item) =>
      item.children ? { ...item, children: visibleNav(item.children) } : item,
    );
}

// True when `pathname` is this item's page or one of its descendants' pages.
export function isActive(item, pathname) {
  if (!pathname) return false;
  if (item.href && !item.pageSoon) {
    if (item.href === "/") {
      if (pathname === "/") return true;
    } else if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return true;
    }
  }
  return (item.children || []).some((child) => isActive(child, pathname));
}
