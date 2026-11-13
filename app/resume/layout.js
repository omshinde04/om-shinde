export const metadata = {
  title: "Professional Resume & Verified Credentials — Om Vilas Shinde",
  description:
    "View and download the verified curriculum vitae of Om Vilas Shinde — Full Stack Software Engineer. Formatted for recruiters and Applicant Tracking Systems (ATS).",
  alternates: {
    canonical: "https://omshinde.site/resume",
  },
  openGraph: {
    title: "Professional Resume & Verified Credentials — Om Vilas Shinde",
    description:
      "Verified curriculum vitae of Om Vilas Shinde — Full Stack Software Engineer.",
    url: "https://omshinde.site/resume",
    siteName: "Om Shinde Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Vilas Shinde Resume",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Resume & Verified Credentials — Om Vilas Shinde",
    description:
      "Verified curriculum vitae of Om Vilas Shinde — Full Stack Software Engineer.",
    images: ["/profile.jpeg"],
  },
};

export default function ResumeLayout({ children }) {
  return children;
}
