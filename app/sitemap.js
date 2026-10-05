export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vantaihaunguyen.com";
  const currentDate = new Date().toISOString();

  const routes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/fleet`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/routes`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
  ];

  return routes;
}
