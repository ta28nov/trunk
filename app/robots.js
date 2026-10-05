export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vantaihaunguyen.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/data/", "/*.json$", "/*?*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
