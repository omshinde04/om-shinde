"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { trackContactClick } from "@/lib/telemetry";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0C] border-t border-white/10">
      {/* ===== SUBTLE AMBIENT ACCENTS ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#CBF432]/5 blur-[120px]" />
      </div>

      {/* ===== CONTENT ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-5 sm:px-6 pt-16 pb-12"
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 items-start">
          {/* ===== BRAND (col 1-5) ===== */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CBF432] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Om Vilas Shinde
            </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Full Stack Software Engineer specializing in MERN, Next.js, and high-performance
              web architecture. Turning complex logic into fast, fluid digital experiences.
            </p>
          </motion.div>

          {/* ===== QUICK LINKS (col 6-8) ===== */}
          <motion.div variants={item} className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-500 mb-4 tracking-widest uppercase">
              // NAVIGATION
            </h4>

            <ul className="space-y-2.5 text-sm">
              {[
                ["Home", "/"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Education", "#education"],
                ["Blog Articles", "/blogs"],
                ["Resume (PDF)", "/resume"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="text-zinc-600 group-hover:text-[#CBF432] transition-colors font-mono text-xs">
                      →
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== CONNECT / SOCIAL (col 9-12) ===== */}
          <motion.div variants={item} className="lg:col-span-4">
            <h4 className="text-xs font-mono font-semibold text-zinc-500 mb-4 tracking-widest uppercase">
              // CONNECT
            </h4>

            <p className="text-xs text-zinc-400 mb-4">
              Have a project, freelance query, or role in mind? Feel free to reach out directly.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                { label: "GitHub", href: "https://github.com/omshinde04", icon: Github },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: Linkedin },
                { label: "Email", href: "mailto:omshinde0412@gmail.com", icon: Mail },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackContactClick(s.label.toLowerCase())}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
                      bg-[#141416] border border-white/10
                      text-xs font-medium text-zinc-300
                      hover:bg-[#CBF432] hover:text-[#0B0B0C] hover:border-[#CBF432]
                      transition-all duration-200
                    "
                  >
                    <Icon size={14} />
                    <span>{s.label}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </motion.a>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2 px-4 py-2.5 rounded-lg
                bg-[#CBF432] text-[#0B0B0C] text-xs font-bold tracking-tight
                hover:bg-[#d9f858] transition-colors shadow-[0_0_20px_rgba(203,244,50,0.25)]
              "
            >
              Start A Project
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* ===== BOTTOM STRIP ===== */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <span>© {currentYear} Om Vilas Shinde. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            Engineered with <span className="text-[#CBF432]">Next.js</span> & <span className="text-[#CBF432]">Framer Motion</span>
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
