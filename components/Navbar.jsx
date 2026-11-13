"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* ================= NAV LINKS ================= */

const navLinks = [
  { name: "Home", href: "/", icon: Home, type: "home" },
  { name: "About", href: "#about", icon: User, type: "section" },
  { name: "Work", href: "#projects", icon: Briefcase, type: "section" },
  { name: "Blog", href: "/blogs", icon: BookOpen, type: "page" },
  { name: "Resume", href: "/resume", icon: FileText, type: "page" },
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
      }, 150);
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

      if (currentY < 60) setShow(true);
      else if (diff > 10) setShow(false);
      else if (diff < -8) setShow(true);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= ACTIVE SECTION SPY ================= */
  useEffect(() => {
    if (pathname === "/blogs") {
      setActive(3);
      return;
    }
    if (pathname === "/resume") {
      setActive(4);
      return;
    }
    if (pathname === "/contact") {
      setActive(5);
      return;
    }

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
        if (rect.top <= 160 && rect.bottom >= 160) {
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-4 max-w-full"
    >
      <motion.nav
        style={{ x, y }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left - rect.width / 2) * 0.015);
          y.set((e.clientY - rect.top - rect.height / 2) * 0.015);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="
          relative flex items-center gap-1 sm:gap-1.5
          p-1.5 rounded-full
          bg-[#0B0B0C]/85 backdrop-blur-2xl
          border border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.85)]
        "
      >
        {/* Subtle ambient lime aura */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#CBF432]/5 blur-lg" />

        {navLinks.map(({ name, href, icon: Icon, type }, index) => {
          const isCurrent = active === index;

          const inner = (
            <span className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors">
              {isCurrent && (
                <motion.span
                  layoutId="activeNavBackground"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#CBF432] shadow-[0_0_18px_rgba(203,244,50,0.4)]"
                />
              )}
              <Icon
                size={14}
                className={`relative z-10 ${
                  isCurrent ? "text-[#0B0B0C]" : "text-zinc-400 group-hover:text-white"
                }`}
              />
              <span
                className={`relative z-10 hidden sm:inline tracking-tight font-medium ${
                  isCurrent ? "text-[#0B0B0C] font-semibold" : "text-zinc-300 group-hover:text-white"
                }`}
              >
                {name}
              </span>
            </span>
          );

          if (type === "home") {
            return (
              <button
                key={name}
                onClick={handleHomeClick}
                className="group relative cursor-pointer focus:outline-none"
              >
                {inner}
              </button>
            );
          }

          if (type === "section") {
            return (
              <button
                key={name}
                onClick={() => handleSectionClick(href, index)}
                className="group relative cursor-pointer focus:outline-none"
              >
                {inner}
              </button>
            );
          }

          return (
            <Link
              key={name}
              href={href}
              className="group relative cursor-pointer focus:outline-none"
            >
              {inner}
            </Link>
          );
        })}
      </motion.nav>
    </motion.header>
  );
}
