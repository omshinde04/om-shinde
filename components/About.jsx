"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, GraduationCap, ChevronDown, Sparkles } from "lucide-react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0C] scroll-mt-20 border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-14 items-center">

          {/* ================= LEFT CONTENT (7 cols) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 flex flex-col"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                01 // ABOUT ME
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Building modern web systems with{" "}
              <span className="text-[#CBF432]">clarity & precision</span>
            </h2>

            {/* Intro */}
            <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I’m a Full Stack Software Engineer focused on architecting resilient,
              high-performance web applications with clean design patterns and intuitive user journeys.
            </p>

            {/* Key Value Cards */}
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-white/8 bg-[#141416]/70">
                <div className="p-2 rounded-lg bg-[#CBF432]/10 text-[#CBF432] shrink-0 mt-0.5">
                  <Code2 size={17} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Full-Stack Architecture</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    End-to-end expertise spanning Node.js, Express, Next.js, PostgreSQL, and MongoDB with production-grade security and state isolation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-white/8 bg-[#141416]/70">
                <div className="p-2 rounded-lg bg-[#CBF432]/10 text-[#CBF432] shrink-0 mt-0.5">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Academic Rigor & Innovation</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Master’s candidate in Computer Applications with a focus on data structures, algorithms, and distributed systems design.
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Read More */}
            <div className="mt-6">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#CBF432] hover:text-[#d9f858] transition-colors focus:outline-none cursor-pointer"
              >
                <span>{open ? "Read Less" : "Read Philosophy"}</span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={15} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 rounded-xl border border-white/10 bg-[#141416] text-zinc-300 text-sm leading-relaxed max-w-xl space-y-2">
                      <p>
                        I believe that great software lives at the intersection of mathematical clarity and empathetic user experience. Code should be readable, tests should provide confidence, and interfaces should respond with zero friction.
                      </p>
                      <p className="text-zinc-400 text-xs">
                        Whether tuning database query indexes, setting up Redis caching layers, or orchestrating micro-interactions in Framer Motion, every layer is built to production standards.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE (5 cols) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5 relative flex justify-center"
          >
            {/* Ambient Lime Aura */}
            <div className="absolute w-72 h-72 rounded-full bg-[#CBF432]/10 blur-[80px] pointer-events-none" />

            {/* Card Frame */}
            <div className="relative p-2.5 rounded-3xl bg-[#141416] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#CBF432]/70 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#CBF432]/70 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#CBF432]/70 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#CBF432]/70 rounded-br-lg" />

              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-[#0B0B0C]">
                <img
                  src="/profile.jpeg"
                  alt="Om Vilas Shinde"
                  className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Status Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#0B0B0C] border border-white/15 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#CBF432] animate-pulse" />
                <span className="text-[10px] font-mono font-medium text-white tracking-wider">OM VILAS SHINDE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
