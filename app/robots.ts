import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://oakvalleycurbing.com/sitemap.xml",
    host: "https://oakvalleycurbing.com",
  };
}
