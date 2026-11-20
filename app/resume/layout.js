export const metadata = {
  title: "Professional Resume & Verified Credentials — Om Vilas Shinde",
  description:
    "Official resume of Om Vilas Shinde — Full Stack Software Engineer & Founder. Education: M.Sc. in Computer Applications (Dr. D. Y. Patil College, Pune, 2024–2026) & B.Sc. in Computer Science (K.T.H.M. College, Nashik, 2021–2023). Founder of GaavConnect & Zapiya.",
  alternates: {
    canonical: "https://omshinde.site/resume",
  },
  openGraph: {
    title: "Professional Resume & Verified Credentials — Om Vilas Shinde",
    description:
      "Official resume of Om Vilas Shinde — Full Stack Software Engineer. Verified Education: M.Sc. in Computer Applications (Dr. D. Y. Patil College, Pune) & B.Sc. in Computer Science (K.T.H.M. College, Nashik).",
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
      "Official resume of Om Vilas Shinde — Full Stack Software Engineer. Education: M.Sc. in Computer Applications & B.Sc. in Computer Science.",
    images: ["/profile.jpeg"],
  },
};

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://omshinde.site/resume#webpage",
  url: "https://omshinde.site/resume",
  name: "Om Vilas Shinde — Official Resume & Credentials",
  description:
    "Official resume and academic credentials of Om Vilas Shinde, Full Stack Software Engineer and founder of GaavConnect and Zapiya.",
  mainEntity: {
    "@type": "Person",
    "@id": "https://omshinde.site/#person",
    name: "Om Vilas Shinde",
    alternateName: ["Om Shinde", "omshinde04"],
    jobTitle: "Full Stack Software Engineer",
    email: "omshinde0412@gmail.com",
    telephone: "+919373545169",
    url: "https://omshinde.site",
    image: "https://omshinde.site/profile.jpeg",
    disambiguatingDescription:
      "Om Vilas Shinde is a Full Stack Software Engineer and founder of GaavConnect and Zapiya, based in Pune and Nashik, Maharashtra. He holds a Master of Science (M.Sc.) in Computer Applications from Dr. D. Y. Patil College, Pimpri, Pune (2024–2026) and a Bachelor of Science (B.Sc.) in Computer Science from K.T.H.M. College, Nashik (2021–2023), affiliated with Savitribai Phule Pune University (SPPU).",
    sameAs: [
      "https://github.com/omshinde04",
      "https://www.linkedin.com/in/om-shinde-892a2532a",
      "https://www.gaavconnect.in",
      "https://www.zapiya.com",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri, Pune",
        url: "https://dypacs.dypvp.edu.in",
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "Savitribai Phule Pune University (SPPU)",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "K.T.H.M. College, Nashik",
        url: "https://kthmcollege.ac.in",
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "Savitribai Phule Pune University (SPPU)",
        },
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Savitribai Phule Pune University (SPPU)",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Master of Science (M.Sc.) in Computer Applications",
        credentialCategory: "degree",
        validIn: {
          "@type": "AdministrativeArea",
          name: "Pune, Maharashtra, India",
        },
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Savitribai Phule Pune University (SPPU)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor of Science (B.Sc.) in Computer Science",
        credentialCategory: "degree",
        validIn: {
          "@type": "AdministrativeArea",
          name: "Nashik, Maharashtra, India",
        },
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Savitribai Phule Pune University (SPPU)",
        },
      },
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "Node.js",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
      "WebSockets",
      "System Design",
      "RAG & Vector Embeddings",
    ],
  },
};

export default function ResumeLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      {children}
    </>
  );
}
