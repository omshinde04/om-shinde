"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* ================= NAV LINKS ================= */

const navLinks = [
  { name: "Home", href: "/", icon: Home, type: "home" },
  { name: "About", href: "#about", icon: User, type: "section" },
  { name: "Work", href: "#projects", icon: Briefcase, type: "section" },
  { name: "Blog", href: "/blogs", icon: BookOpen, type: "page" },
  { name: "Contact", href: "/contact", icon: Mail, type: "page" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  /* ================= HOME CLICK ================= */
  const handleHomeClick = async () => {
    setActive(0);

    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* ================= SECTION CLICK ================= */
  const handleSectionClick = async (id, index) => {
    setActive(index);

    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    } else {
      document.querySelector(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ================= SHOW / HIDE ON SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY < 80) setShow(true);
      else if (diff > 12) setShow(false);
      else if (diff < -8) setShow(true);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= ACTIVE SECTION SPY ================= */
  useEffect(() => {
    if (pathname !== "/") return;

    const spy = () => {
      if (window.scrollY < 120) {
        setActive(0);
        return;
      }

      navLinks.forEach((link, index) => {
        if (link.type !== "section") return;

        const el = document.querySelector(link.href);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", spy, { passive: true });
    spy();

    return () => window.removeEventListener("scroll", spy);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: show ? 0 : -120, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-4"
    >
      <motion.nav
        style={{ x, y }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left - rect.width / 2) * 0.02);
          y.set((e.clientY - rect.top - rect.height / 2) * 0.02);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="
          relative flex items-center gap-1
          px-2 sm:px-3 py-2 rounded-full
          bg-background/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_15px_50px_rgba(0,0,0,0.45)]
        "
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-cyan-400/10 to-indigo-500/10 blur-xl" />
        </div>

        {navLinks.map(({ name, href, icon: Icon, type }, index) => {
          const content = (
            <>
              <Icon size={16} />
              <span className="hidden sm:inline">{name}</span>
            </>
          );

          if (type === "home") {
            return (
              <button
                key={name}
                onClick={handleHomeClick}
                className={`relative z-10 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition ${active === 0
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {content}
              </button>
            );
          }

          if (type === "section") {
            return (
              <button
                key={name}
                onClick={() => handleSectionClick(href, index)}
                className={`relative z-10 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition ${active === index
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={name}
              href={href}
              className="relative z-10 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition"
            >
              {content}
            </Link>
          );
        })}
      </motion.nav>
    </motion.header>
  );
}