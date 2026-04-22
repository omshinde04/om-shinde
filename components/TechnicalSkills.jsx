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
    items: ["JavaScript", "Java", "Python", "C", "C++"],
  },
  {
    title: "Front-end Development",
    icon: Layers,
    items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    title: "Back-end Development",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "SQL", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "Vercel", "Figma"],
  },
  {
    title: "Additional Skills",
    icon: Sparkles,
    items: [
      "Responsive Design",
      "Full-Stack Development",
      "Web App Architecture",
      "Problem Solving",
      "Technical Writing",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="
        relative w-full
        pt-16 sm:pt-20 md:pt-24
        pb-20 sm:pb-24
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Skills
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            A modern, production-focused skill set built around scalability,
            performance, and clean architecture.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: fromLeft ? -80 : 80,
                    y: 24,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                    },
                  },
                }}
                className="
                  group
                  relative
                  rounded-2xl
                  border border-white/10
                  bg-linear-to-br from-white/4 to-white/1
                  backdrop-blur-xl
                  p-5
                  md:hover:border-indigo-400/40
                  group-active:border-indigo-400/40
                  transition
                "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        font-medium
                        text-gray-200
                        bg-linear-to-r from-indigo-500/20 to-cyan-500/20
                        border border-white/10
                        transition
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover / Tap Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-2xl
                    opacity-0
                    md:group-hover:opacity-100
                    group-active:opacity-100
                    transition
                  "
                >
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-cyan-500/10 blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
