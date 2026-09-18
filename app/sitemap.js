import { getStates } from "./data/states-data";

export const dynamic = "force-static";

const BASE_URL = "https://www.gsrwf.com";

export default function sitemap() {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/team", priority: 0.6, changeFrequency: "monthly" },
    { path: "/social-responsibility/environmental", priority: 0.8, changeFrequency: "monthly" },
    { path: "/social-responsibility/education", priority: 0.8, changeFrequency: "monthly" },
    { path: "/social-responsibility/empowerment", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gsr-tech", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gsr-tech/network-hub", priority: 0.6, changeFrequency: "monthly" },
    { path: "/csr-tracker", priority: 0.9, changeFrequency: "weekly" },
    { path: "/join", priority: 0.7, changeFrequency: "monthly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
    { path: "/partner", priority: 0.7, changeFrequency: "monthly" },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const stateRoutes = getStates().map((state) => ({
    url: `${BASE_URL}/csr-tracker/${state.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...stateRoutes];
}
