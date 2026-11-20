import "./globals.css";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import TelemetryProvider from "@/components/TelemetryProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* ================= WORLD-CLASS SEO + SOCIAL METADATA ================= */

export const metadata = {
  metadataBase: new URL("https://omshinde.site"),

  title: {
    default: "Om Vilas Shinde — Full Stack Software Engineer",
    template: "%s | Om Vilas Shinde",
  },

  description:
    "Om Vilas Shinde — Full Stack Software Engineer specializing in scalable web systems, Next.js, React, Node.js, and high-performance cloud architectures. Founder of GaavConnect and Zapiya.",

  applicationName: "Om Shinde Portfolio",
  authors: [{ name: "Om Vilas Shinde", url: "https://omshinde.site" }],
  generator: "Next.js",
  keywords: [
    "Om Vilas Shinde",
    "Om Shinde",
    "Om Shinde Portfolio",
    "Full Stack Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Backend Engineer",
    "GaavConnect Founder",
    "Zapiya Resume Builder",
    "Software Engineer Pune",
    "Software Engineer Nashik",
    "System Design Engineer",
    "PostgreSQL",
    "MongoDB",
    "Redis Cache",
    "AI RAG Pipelines",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Om Vilas Shinde",
  publisher: "Om Vilas Shinde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://omshinde.site",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Om Vilas Shinde — Full Stack Software Engineer",
    description:
      "Portfolio of Om Vilas Shinde — Full Stack Software Engineer specializing in React, Next.js, Node.js, and high-performance scalable systems. Founder of GaavConnect & Zapiya.",
    url: "https://omshinde.site",
    siteName: "Om Shinde Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Vilas Shinde — Full Stack Software Engineer",
      },
    ],
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Om Vilas Shinde — Full Stack Software Engineer",
    description:
      "Full Stack Engineer portfolio with production projects (GaavConnect, Zapiya), live architecture diagrams, and high-performance design.",
    images: ["/profile.jpeg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "google4fd98efd21827253",
  },
};

/* ================= STRUCTURED DATA (JSON-LD) ================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://omshinde.site/#person",
      name: "Om Vilas Shinde",
      alternateName: ["Om Shinde", "omshinde04"],
      jobTitle: "Full Stack Software Engineer",
      url: "https://omshinde.site",
      image: "https://omshinde.site/profile.jpeg",
      gender: "Male",
      sameAs: [
        "https://github.com/omshinde04",
        "https://www.linkedin.com/in/om-shinde-892a2532a",
        "https://www.gaavconnect.in",
        "https://www.zapiya.com",
      ],
      disambiguatingDescription:
        "Om Vilas Shinde is a Full Stack Software Engineer and founder of GaavConnect and Zapiya, based in Pune and Nashik, Maharashtra. He holds an M.Sc. in Computer Applications from Dr. D. Y. Patil College, Pimpri, Pune (2024–2026) and a B.Sc. in Computer Science from K.T.H.M. College, Nashik (2021–2023).",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri, Pune",
          url: "https://dypacs.dypvp.edu.in",
        },
        {
          "@type": "EducationalOrganization",
          name: "K.T.H.M. College, Nashik",
          url: "https://kthmcollege.ac.in",
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
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Bachelor of Science (B.Sc.) in Computer Science",
          credentialCategory: "degree",
        },
      ],
      knowsAbout: [
        "Full Stack Web Development",
        "MERN Stack",
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "System Design",
        "Clean Architecture",
        "RESTful APIs",
        "RAG AI Pipelines",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://omshinde.site/#website",
      url: "https://omshinde.site",
      name: "Om Vilas Shinde Portfolio",
      description: "Official portfolio of Om Vilas Shinde, Full Stack Software Engineer.",
      publisher: {
        "@id": "https://omshinde.site/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://omshinde.site/#webpage",
      url: "https://omshinde.site",
      name: "Om Vilas Shinde — Full Stack Software Engineer",
      isPartOf: {
        "@id": "https://omshinde.site/#website",
      },
      mainEntity: {
        "@id": "https://omshinde.site/#person",
      },
    },
  ],
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B0B0C] text-white selection:bg-[#CBF432] selection:text-[#0B0B0C] antialiased"
      >
        <TelemetryProvider />

        {/* ===== TOP PROGRESS LOADER ===== */}
        <Loader />

        {/* ===== MAIN CONTENT ===== */}
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
