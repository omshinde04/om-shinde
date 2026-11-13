export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://omshinde.site/sitemap.xml",
    host: "https://omshinde.site",
  };
}

