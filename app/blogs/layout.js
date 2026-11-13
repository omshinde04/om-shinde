export const metadata = {
  title: "Technical Articles & Engineering Architecture — Om Vilas Shinde",
  description:
    "Read in-depth technical blogs on Next.js 16, React 19 architecture, database optimization, AI pipeline integration, and modern DevOps practices by Om Vilas Shinde.",
  alternates: {
    canonical: "https://omshinde.site/blogs",
  },
  openGraph: {
    title: "Technical Articles & Engineering Architecture — Om Vilas Shinde",
    description:
      "In-depth articles covering Next.js, modern React systems, AI pipelines, and database scaling.",
    url: "https://omshinde.site/blogs",
    siteName: "Om Shinde Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Vilas Shinde Technical Articles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Articles & Engineering Architecture — Om Vilas Shinde",
    description:
      "In-depth articles covering Next.js, modern React systems, AI pipelines, and database scaling.",
    images: ["/profile.jpeg"],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
