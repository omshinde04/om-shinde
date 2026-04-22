import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader"; // ✅ ADDED

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* ================= SEO + SOCIAL METADATA ================= */

export const metadata = {
  title: "Om Vilas Shinde | MERN Stack Developer",
  description:
    "Om Vilas Shinde – MERN Stack Developer building scalable, high-performance web applications with modern UI, clean architecture, and refined animations.",

  metadataBase: new URL("https://omshinde.site"),

  openGraph: {
    title: "Om Vilas Shinde | MERN Stack Developer",
    description:
      "Portfolio of Om Vilas Shinde – MERN Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern UI/UX.",
    url: "https://omshinde.site",
    siteName: "Om Shinde Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Vilas Shinde – MERN Stack Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Om Vilas Shinde | MERN Stack Developer",
    description:
      "MERN Stack Developer portfolio with projects, blogs, and premium animations.",
    images: ["/profile.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-background text-textPrimary`}
      >
        {/* ===== LOADER ===== */}
        <Loader />

        {/* ===== WEBSITE ===== */}
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
