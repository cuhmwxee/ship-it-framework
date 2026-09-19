import type { MetadataRoute } from "next";

const baseUrl = "https://www.shipitframe.work";

const routes = ["", "/about", "/examples", "/faq", "/framework", "/in-practice", "/manifesto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
