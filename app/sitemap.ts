import { MetadataRoute } from "next";
import { site } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/resume", "/writing", "/now", "/case/lighthouse", "/case/growth-gym"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.6,
  }));
}
