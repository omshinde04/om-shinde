"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";

const education = [
  {
    year: "2024 – 2026",
    degree: "Master of Science (M.Sc.) in Computer Applications",
    institute: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri, Pune",
    description:
      "Pursuing advanced studies in computer applications with a focus on software engineering, advanced programming, database systems, cloud computing, and modern application development under Savitribai Phule Pune University (SPPU).",
  },
  {
    year: "2021 – 2024",
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institute: "K.T.H.M. College, Nashik",
    description:
      "Completed undergraduate studies covering core computer science subjects including data structures, algorithms, operating systems, web development, database management systems, and programming fundamentals.",
  },
  {
    year: "2019 – 2021",
    degree: "Higher Secondary Certificate (HSC) – Science",
    institute: "K.T.H.M. College, Nashik",
    description:
      "Completed higher secondary education in the science faculty with subjects including mathematics, computer science, and physics, building a strong foundation in analytical and logical thinking.",
  },
];

export default function Education() {
  const timelineRef = useRef(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 85%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0C] scroll-mt-20 border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
            <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
              04 // ACADEMIC BACKGROUND
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Academic rigor & <span className="text-[#CBF432]">theoretical depth</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            A solid computational foundation in algorithmic design, data structures, and distributed systems.
          </p>
        </motion.div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="relative md:hidden">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          <div className="space-y-8 pl-12">
            {(showAllMobile ? education : education.slice(0, 1)).map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative p-5 rounded-xl border border-white/10 bg-[#141416]"
                >
                  <div className="absolute -left-12 top-4 w-6 h-6 rounded-full bg-[#0B0B0C] border border-[#CBF432] flex items-center justify-center text-[#CBF432]">
                    <GraduationCap size={12} />
                  </div>

                  <span className="text-[#CBF432] font-mono text-xs font-semibold">
                    {item.year}
                  </span>

                  <h3
                    className="mt-1 text-base font-bold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {item.degree}
                  </h3>

                  <p className="text-zinc-300 text-xs font-mono mt-1">{item.institute}</p>

                  <p className="mt-3 text-zinc-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                border border-white/10 bg-[#141416] text-xs font-medium text-zinc-300
                hover:border-[#CBF432]/60 hover:text-[#CBF432] transition-colors cursor-pointer
              "
            >
              {showAllMobile ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  <span>View Full Timeline</span>
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div ref={timelineRef} className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px origin-top bg-[#CBF432] shadow-[0_0_12px_rgba(203,244,50,0.6)]"
          />

          <div className="space-y-16">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#0B0B0C] border-2 border-[#CBF432] flex items-center justify-center text-[#CBF432] shadow-[0_0_16px_rgba(203,244,50,0.3)]">
                      <GraduationCap size={16} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-[44%] rounded-2xl
                    bg-[#141416] border border-white/10
                    p-6 relative overflow-hidden group
                    hover:border-[#CBF432]/60 hover:shadow-[0_10px_30px_rgba(203,244,50,0.06)]
                    transition-all duration-300
                    ${isLeft ? "mr-auto" : "ml-auto"}`}
                  >
                    <span className="text-[#CBF432] font-mono text-xs font-semibold">
                      // {item.year}
                    </span>

                    <h3
                      className="mt-2 text-lg font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-zinc-300 text-xs font-mono">
                      {item.institute}
                    </p>

                    <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
