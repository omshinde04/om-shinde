"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    code: "01",
    items: ["JavaScript (ES6+)", "Java", "Python", "C", "C++", "SQL"],
  },
  {
    title: "Front-end Architecture",
    icon: Layers,
    code: "02",
    items: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "State Management"],
  },
  {
    title: "Back-end & Systems",
    icon: Server,
    code: "03",
    items: ["Node.js", "Express.js", "REST APIs", "Redis (Cache)", "JWT Authentication", "WebSockets"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    code: "04",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Firebase", "Query Optimization"],
  },
  {
    title: "DevOps & Tooling",
    icon: Wrench,
    code: "05",
    items: ["Git / GitHub", "Docker", "Vercel", "Postman", "Linux / CLI", "Figma"],
  },
  {
    title: "Core Competencies",
    icon: Sparkles,
    code: "06",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "Clean Architecture",
      "Performance Tuning",
      "API Security",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0C] scroll-mt-20 border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
            <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
              02 // TECHNICAL ARSENAL
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Engineered for{" "}
            <span className="text-[#CBF432]">scale & reliability</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            A production-grade stack curated around low latency, predictable data flow, and modern engineering standards.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="
                  group relative rounded-2xl
                  border border-white/10
                  bg-[#141416]
                  p-6
                  hover:border-[#CBF432]/50
                  hover:shadow-[0_10px_30px_rgba(203,244,50,0.06)]
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                {/* Top index & icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-[#0B0B0C] border border-white/8 text-[#CBF432] group-hover:bg-[#CBF432] group-hover:text-[#0B0B0C] transition-colors duration-200">
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-semibold tracking-wider">
                      // {skill.code}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-4 tracking-tight"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {skill.title}
                  </h3>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="
                          px-2.5 py-1
                          rounded-lg
                          text-xs
                          font-mono
                          text-zinc-300
                          bg-[#0B0B0C]
                          border border-white/8
                          group-hover:border-white/15
                          hover:!border-[#CBF432]/60 hover:!text-[#CBF432]
                          transition-all duration-150
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
