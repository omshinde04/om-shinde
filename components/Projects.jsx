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

/* ================= DATA (UNCHANGED) ================= */

const projects = [
  {
    title: "PhishShield – AI Phishing Detection System",
    category: "AI Security Platform • Full Stack",
    description:
      "An AI-driven phishing detection and email threat intelligence system using BERT-based NLP, hybrid risk reasoning, URL analysis, attachment malware detection, and sender authentication to deliver explainable, real-time security decisions.",
    image: "/projects/proj1.png",
    link: "https://phishscan.vercel.app/",
  },
 {
  title: "Smart Certificate Generator",
  category: "Web Application • Automation • Next.js",
  description:
    "A dynamic certificate generation platform that allows users to create, customize, and download professional certificates instantly. Features include real-time preview, custom name input, automated text rendering, and high-quality certificate export—ideal for events, workshops, and academic use.",
  image: "/projects/proj2.png",
  link: "https://certificate-genertor.vercel.app/",
}
,
 {
  title: "Leave Desk — Role-Based Leave Management System",
  category: "Web Application",
  description:
    "A role-based leave management system designed for educational institutions, enabling students, teachers, HODs, and admins to apply, review, and approve leave requests with a smooth and transparent workflow.",
  image: "/projects/proj3.png",
  link: "lms-cyan-gamma.vercel.app",
}
,
 {
  title: "Smart Digital Student ID System",
  category: "College Automation • React / Next.js",
  description:
    "Paid academic automation project featuring student & faculty dashboards, ID approval workflow, automatic enrollment generation, and digital ID card preview with secure downloads.",
  image: "/projects/proj4.png",
  link: "https://smart-id-card-lime.vercel.app/",
}
,
 {
  title: "Virtual Lost & Found System",
  category: "Web Application • AI Integration • Full-Stack",
  description:
    "A smart web-based platform that helps users report and recover lost items efficiently. The system leverages AI-powered image matching using Flask to identify potential matches between lost and found items. Built with a robust PHP & MySQL backend for secure data handling, it includes automated email notifications for matched items and a ‘Contact Finder’ feature to enable direct communication between users.",
  image: "/projects/proj5.png",
  link: "https://smart-id-card-lime.vercel.app/",
}
,
 {
  title: "Personal Portfolio — Om Shinde",
  category: "Portfolio Website • MERN / Next.js",
  description:
    "A premium personal portfolio showcasing projects, blogs, skills, and experience with advanced animations, interactive UI, and a modern dark aesthetic built for performance and scalability.",
  image: "/projects/proj6.png",
  link: "https://omshinde.site", // or Vercel URL if not live yet
},

];

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openIndex, setOpenIndex] = useState(null);

  const isExpanded = visibleCount === projects.length;

  return (
    <section
      id="projects"
      className="relative w-full pt-24 pb-28 overflow-hidden"
    >
      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            All Creative{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Works
            </span>
            .
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Here’s a selection of projects showcasing my approach to modern UI,
            performance, and scalable web development.
          </p>
        </motion.div>

        {/* ===== Toggle Button ===== */}
        <div className="mb-14">
          <button
            onClick={() =>
              setVisibleCount(isExpanded ? INITIAL_COUNT : projects.length)
            }
            className="
              inline-flex items-center gap-2
              rounded-full px-6 py-3
              text-sm font-medium text-white
              bg-linear-to-r from-indigo-500/20 to-cyan-500/20
              border border-white/15 backdrop-blur
              hover:from-indigo-500/30 hover:to-cyan-500/30
              transition-all
            "
          >
            {isExpanded ? "View Less" : "View More"}
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  key={visibleCount}
  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
>
  {projects.slice(0, visibleCount).map((project, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.article
        key={index}
        variants={card}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
        className="
          relative rounded-2xl overflow-hidden
          bg-linear-to-br from-white/5 to-white/2
          border border-white/10 backdrop-blur-xl
          shadow-[0_0_0_rgba(0,0,0,0)]
          hover:shadow-[0_20px_80px_rgba(56,189,248,0.15)]
          transition
        "
      >
        {/* Image */}
        <div className="relative h-56 bg-black/40 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white font-semibold text-base sm:text-lg">
              {project.title}
            </h3>

            <Link
              href={project.link}
              target="_blank"
              className="text-indigo-400 hover:text-cyan-400 transition"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <p className="mt-2 text-gray-400 text-xs sm:text-sm">
            {project.category}
          </p>

          <AnimatePresence>
            {isOpen && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4 text-sm text-gray-300 leading-relaxed"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="
              mt-4 inline-flex items-center gap-2
              text-sm font-medium
              text-indigo-400 hover:text-cyan-400
              transition
            "
          >
            {isOpen ? "Hide Details" : "View Details"}
            {isOpen ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </motion.article>
    );
  })}
</motion.div>

      </div>
    </section>
  );
}
