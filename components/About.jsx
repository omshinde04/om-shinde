"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, GraduationCap, ChevronDown } from "lucide-react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="
        relative w-full
        pt-8 sm:pt-12 md:pt-16
        pb-16 sm:pb-20
        overflow-hidden
        scroll-mt-28
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 text-cyan-400 text-base sm:text-lg font-semibold mb-4">
              <User size={20} />
              <span>About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Building modern web experiences with
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                {" "}clarity & purpose
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I’m a MERN Stack Developer focused on building scalable,
              performance-driven web applications with clean architecture and
              intuitive user experiences.
            </p>

            {/* Key points */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Code2 className="text-indigo-400 mt-1" size={18} />
                <p className="text-gray-400 text-sm sm:text-base">
                  Hands-on experience with MongoDB, Express, React, and Node.js
                  in real-world projects.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="text-cyan-400 mt-1" size={18} />
                <p className="text-gray-400 text-sm sm:text-base">
                  Continuously learning and adapting to modern development standards.
                </p>
              </div>
            </div>

            {/* ================= READ MORE (ANIMATED) ================= */}
            <div className="mt-6">
              <button
                onClick={() => setOpen(!open)}
                className="
                  inline-flex items-center gap-2
                  text-indigo-400 text-sm sm:text-base font-semibold
                  hover:text-cyan-400 transition
                "
              >
                {open ? "Read Less" : "Read More"}
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                      I care deeply about writing maintainable code, following best
                      practices, and delivering solutions that scale well in
                      production. I enjoy solving challenging problems and working
                      with teams that value quality and clarity.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 blur-[70px] opacity-25" />

            {/* Image ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-white/5 backdrop-blur">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Om Shinde"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
