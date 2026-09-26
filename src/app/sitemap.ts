import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path || "/"}`,
    changeFrequency: "weekly",
    priority,
    alternates: { languages: { en: `${site.url}${path || "/"}`, ar: `${site.url}/ar${path}` } },
  });
  return [page("", 1), page("/menu", 0.8), { ...page("", 0.9), url: `${site.url}/ar` }, { ...page("/menu", 0.7), url: `${site.url}/ar/menu` }];
}
