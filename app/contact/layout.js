export const metadata = {
  title: "Contact & Collaboration — Om Vilas Shinde",
  description:
    "Direct contact channels for Om Vilas Shinde. Open to discussions regarding full-stack software engineering roles, high-impact freelance projects, and technical collaborations.",
  alternates: {
    canonical: "https://omshinde.site/contact",
  },
  openGraph: {
    title: "Contact & Collaboration — Om Vilas Shinde",
    description:
      "Start a conversation with Om Vilas Shinde regarding software engineering roles and production projects.",
    url: "https://omshinde.site/contact",
    siteName: "Om Shinde Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Om Vilas Shinde",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Collaboration — Om Vilas Shinde",
    description:
      "Start a conversation with Om Vilas Shinde regarding software engineering roles and production projects.",
    images: ["/profile.jpeg"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
