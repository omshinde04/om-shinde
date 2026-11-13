"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "GaavConnect — Hyper-Local Discovery & Commerce Engine",
    category: "Live Production Platform • Next.js • Turbopack",
    description:
      "A high-performance hyper-local discovery platform and rural commerce suite connecting local businesses, highway dhabas along NH-160, farmstays, clinics, and agro-centers directly with travelers and customers without commission middlemen. Features real-time WhatsApp inquiry dispatch, verified merchant dashboards, multi-location taxonomy (Igatpuri, Ghoti, Nashik), and sub-second page performance serving 15,000+ views.",
    image: "/projects/gaavconnect.png",
    link: "https://www.gaavconnect.in",
    code: "01",
  },
  {
    title: "Zapiya — Privacy-First Free ATS Resume Builder",
    category: "Live Web Platform • Vector PDF • Client-Side Engine",
    description:
      "A 100% free, privacy-first ATS resume generation platform built with zero login walls, zero watermarks, and zero paywalls. Engineered with Harvard single-column and tech-standard formats, instant vector PDF compilation, live scoring, and client-side private state management designed to help freshers and developers pass modern ATS recruitment filters.",
    image: "/projects/zapiya.png",
    link: "https://www.zapiya.com",
    code: "02",
  },
  {
    title: "PhishShield — AI Phishing Detection System",
    category: "AI Security Platform • Full Stack • BERT NLP",
    description:
      "An AI-driven phishing detection and email threat intelligence system using BERT-based NLP, hybrid risk reasoning, URL analysis, attachment malware detection, and sender authentication to deliver explainable, real-time security decisions.",
    image: "/projects/proj1.png",
    link: "https://phishscan.vercel.app/",
    code: "03",
  },
  {
    title: "Smart Certificate Generator",
    category: "Automation • Next.js • Canvas API",
    description:
      "A dynamic certificate generation platform that allows users to create, customize, and download professional certificates instantly. Features include real-time preview, custom name input, automated text rendering, and high-quality certificate export.",
    image: "/projects/proj2.png",
    link: "https://certificate-genertor.vercel.app/",
    code: "04",
  },
  {
    title: "Leave Desk — Role-Based LMS",
    category: "Web Application • Enterprise Workflow",
    description:
      "A role-based leave management system designed for educational institutions, enabling students, teachers, HODs, and admins to apply, review, and approve leave requests with a smooth and transparent workflow.",
    image: "/projects/proj3.png",
    link: "https://lms-cyan-gamma.vercel.app",
    code: "05",
  },
  {
    title: "Smart Digital Student ID System",
    category: "Campus Automation • React / Next.js",
    description:
      "Paid academic automation project featuring student & faculty dashboards, ID approval workflow, automatic enrollment generation, and digital ID card preview with secure downloads.",
    image: "/projects/proj4.png",
    link: "https://smart-id-card-lime.vercel.app/",
    code: "06",
  },
  {
    title: "Virtual Lost & Found System",
    category: "AI Integration • Flask • PHP / MySQL",
    description:
      "A smart web-based platform that helps users report and recover lost items efficiently. Leverages AI-powered image matching using Flask to identify potential matches between lost and found items, with automated email notifications.",
    image: "/projects/proj5.png",
    link: "https://smart-id-card-lime.vercel.app/",
    code: "07",
  },
  {
    title: "Personal Portfolio — Om Shinde",
    category: "Bespoke Portfolio • Next.js & Framer Motion",
    description:
      "A luxury bespoke personal portfolio showcasing projects, blogs, skills, and experience with advanced animations, interactive system architecture visualizations, and an obsidian/electric-lime aesthetic.",
    image: "/projects/proj6.png",
    link: "https://omshinde.site",
    code: "08",
  },
];

export default function Projects() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openIndex, setOpenIndex] = useState(null);

  const isExpanded = visibleCount === projects.length;

  return (
    <section
      id="projects"
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0C] scroll-mt-20 border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* ===== Header ===== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                03 // SELECTED WORKS
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Engineered with <span className="text-[#CBF432]">purpose & impact</span>
            </h2>

            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Production platforms, rural commerce engines, and developer utilities built with high scalability and zero friction.
            </p>
          </motion.div>

          {/* Toggle View Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setVisibleCount(isExpanded ? INITIAL_COUNT : projects.length)}
            className="
              self-start sm:self-auto inline-flex items-center gap-2
              px-5 py-2.5 rounded-xl
              text-xs font-medium tracking-wide
              bg-[#141416] border border-white/10 text-zinc-300
              hover:border-[#CBF432]/60 hover:text-[#CBF432]
              transition-all duration-200 cursor-pointer whitespace-nowrap
            "
          >
            <span>{isExpanded ? "Show Less" : `View All (${projects.length})`}</span>
            {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </motion.button>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="
                  group relative rounded-2xl overflow-hidden
                  bg-[#141416] border border-white/10
                  hover:border-[#CBF432]/50 hover:shadow-[0_15px_40px_rgba(203,244,50,0.08)]
                  transition-all duration-300 flex flex-col justify-between
                "
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-52 bg-[#0E0E10] border-b border-white/5 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur border border-white/10 text-[10px] font-mono text-[#CBF432]">
                      // {project.code}
                    </div>

                    <Link href={project.link} target="_blank" className="block w-full h-full">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full p-4 flex items-center justify-center"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain p-3"
                        />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono tracking-wider text-[#CBF432] uppercase font-semibold">
                          {project.category}
                        </span>
                        <h3
                          className="mt-1 text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-[#CBF432] transition-colors"
                          style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <Link
                        href={project.link}
                        target="_blank"
                        className="
                          p-2 rounded-lg bg-[#0B0B0C] border border-white/10
                          text-zinc-400 hover:text-[#0B0B0C] hover:bg-[#CBF432] hover:border-[#CBF432]
                          transition-all duration-200 shrink-0
                        "
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed overflow-hidden"
                        >
                          {project.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="
                      inline-flex items-center gap-1.5
                      text-xs font-medium
                      text-zinc-400 hover:text-[#CBF432]
                      transition-colors cursor-pointer
                    "
                  >
                    <span>{isOpen ? "Close Brief" : "Read Architecture Brief"}</span>
                    {isOpen ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
