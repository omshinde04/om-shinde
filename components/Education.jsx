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
      className="relative w-full pt-24 pb-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-500/12 via-transparent to-cyan-500/12" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Education{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Timeline
            </span>
          </h2>

          <p className="mt-3 text-gray-400">
            A journey of learning, growth, and technical mastery.
          </p>
        </motion.div>

        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden">
          <div className="absolute left-4 top-0 h-full w-px bg-white/15" />

          <div className="space-y-8 pl-12">
            {(showAllMobile ? education : education.slice(0, 1)).map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-12 top-1 w-7 h-7 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 flex items-center justify-center shadow-md">
                    <GraduationCap size={14} className="text-white" />
                  </div>

                  <span className="text-indigo-400 text-sm font-semibold">
                    {item.year}
                  </span>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 text-sm">{item.institute}</p>

                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="flex items-center gap-2 px-6 py-3 rounded-full
              border border-white/15 bg-white/5 backdrop-blur-md
              text-sm font-medium text-gray-300 hover:text-white
              hover:bg-white/10 transition"
            >
              {showAllMobile ? (
                <>
                  Show less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View more <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div ref={timelineRef} className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px origin-top
            bg-linear-to-b from-indigo-400 via-cyan-400 to-indigo-400"
          />

          <div className="space-y-16">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Center Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-lg" />
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                        <GraduationCap size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className={`w-[44%] rounded-xl
                    bg-linear-to-br from-white/6 to-white/2
                    border border-white/15 backdrop-blur-xl
                    p-6 relative overflow-hidden group
                    ${isLeft ? "mr-auto pr-10" : "ml-auto pl-10"}`}
                  >
                    <div className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-indigo-400 to-cyan-400 scale-y-0 group-hover:scale-y-100 transition origin-top" />

                    <span className="text-indigo-400 text-sm font-semibold">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-cyan-400 text-sm font-medium">
                      {item.institute}
                    </p>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
