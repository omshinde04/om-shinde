"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black/40 backdrop-blur-xl">
      {/* ===== FLOATING ORBS ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* ===== TOP DIVIDER ===== */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* ===== CONTENT ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-5 sm:px-6 py-16"
      >
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* ===== BRAND ===== */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Om Shinde
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              MERN Stack Developer crafting scalable, high-performance &
              visually refined web experiences.
            </p>
          </motion.div>

          {/* ===== LINKS ===== */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wider">
              QUICK LINKS
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Education", "#education"],
                ["FAQs", "#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="relative text-gray-400 transition hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== SOCIAL ===== */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wider">
              CONNECT
            </h4>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/" },
                { icon: Linkedin, href: "https://linkedin.com/" },
                { icon: Mail, href: "mailto:your@email.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      className="
                        group relative
                        w-11 h-11
                        flex items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-linear-to-r from-indigo-500/20 to-cyan-500/20
                        overflow-hidden
                      "
                    >
                      {/* glow */}
                      <span className="absolute inset-0 bg-linear-to-r from-indigo-500/40 to-cyan-500/40 opacity-0 group-hover:opacity-100 blur-md transition" />

                      <Icon
                        size={18}
                        className="relative z-10 text-gray-200 group-hover:text-white transition"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-16 pt-6
            border-t border-white/10
            flex flex-col sm:flex-row
            items-center justify-between
            gap-3
            text-xs sm:text-sm text-gray-400
          "
        >
          <span>
            © {new Date().getFullYear()} Om Shinde. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Crafted with <Heart size={14} className="text-red-400 animate-pulse" /> using
            Next.js & Framer Motion
          </span>
        </motion.div>
      </motion.div>
    </footer>
  );
}
