export const dynamic = "force-static";

const BASE_URL = "https://www.gsrwf.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
