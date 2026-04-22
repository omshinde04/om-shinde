"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

/* ================= BLOG DATA ================= */

const blogs = [
  {
    title: "Why Next.js Defines the Future of Web Applications",
    tag: "Next.js",
    date: "Jan 12, 2026",
    image: "/blogs/blog1.png",
    excerpt:
      "Next.js combines performance, scalability, and developer experience through server rendering, routing, and edge-ready architecture.",
    content:
      "Next.js enables hybrid rendering strategies such as SSR, ISR, and static generation, combined with intelligent caching and edge functions—making it a strong foundation for production-grade applications.",
  },
  {
    title: "Building Scalable React Applications in Modern Stacks",
    tag: "React",
    date: "Jan 05, 2026",
    image: "/blogs/blog2.png",
    excerpt:
      "Modern React emphasizes composition, predictable data flow, and performance optimization for scalable applications.",
    content:
      "Scalable React systems rely on component composition, memoization, server components, and clean state boundaries to maintain performance as applications grow.",
  },
  {
    title: "How AI Is Reshaping Full-Stack Development",
    tag: "AI",
    date: "Dec 28, 2025",
    image: "/blogs/blog3.png",
    excerpt:
      "Artificial intelligence is changing how developers design, build, and optimize modern applications.",
    content:
      "AI-powered tooling improves productivity through code generation, automated testing, intelligent UX personalization, and data-driven architectural decisions.",
  },
  {
    title: "MongoDB vs SQL: Choosing the Right Database",
    tag: "Databases",
    date: "Dec 18, 2025",
    image: "/blogs/blog4.png",
    excerpt:
      "Understanding trade-offs between relational and NoSQL databases is key to building scalable systems.",
    content:
      "MongoDB offers schema flexibility and horizontal scaling, while SQL databases provide strong consistency and relational integrity.",
  },
  {
    title: "Professional GitHub Workflows for Developers",
    tag: "GitHub",
    date: "Dec 10, 2025",
    image: "/blogs/blog5.png",
    excerpt:
      "Professional GitHub usage goes beyond commits—covering workflows, reviews, and automation.",
    content:
      "Effective GitHub workflows include meaningful commits, pull request reviews, CI pipelines, and clear documentation.",
  },
  {
    title: "Designing Clean & Scalable Web Architectures",
    tag: "Architecture",
    date: "Dec 02, 2025",
    image: "/blogs/blog6.png",
    excerpt:
      "Clean architecture helps teams build systems that scale without becoming fragile.",
    content:
      "A clean architecture separates concerns, improves maintainability, and ensures adaptability.",
  },
];

/* ================= ANIMATION VARIANTS ================= */

const grid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
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

export default function Blog() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openIndex, setOpenIndex] = useState(null);

  const isExpanded = visibleCount === blogs.length;

  return (
    <section
      id="blog"
      className="relative w-full pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Blogs
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Insights on modern web development, AI systems, databases, and scalable architectures.
          </p>
        </motion.div>

        {/* View More */}
        <div className="mb-14">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setVisibleCount(isExpanded ? INITIAL_COUNT : blogs.length)
            }
            className="
              inline-flex items-center gap-2
              rounded-full px-6 py-3
              text-sm font-medium text-white
              bg-linear-to-r from-indigo-500/20 to-cyan-500/20
              border border-white/15 backdrop-blur
              hover:from-indigo-500/30 hover:to-cyan-500/30
              transition
            "
          >
            {isExpanded ? "View Less" : "View More"}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.span>
          </motion.button>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          animate="show"
          key={visibleCount}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.slice(0, visibleCount).map((blog, index) => {
            const open = openIndex === index;

            return (
              <motion.article
                key={index}
                variants={card}
                whileHover={{ y: -10 }}
                className="
                  group relative rounded-2xl overflow-hidden
                  bg-linear-to-br from-white/4 to-white/1
                  border border-white/10 backdrop-blur-xl
                  transition
                "
              >
                {/* Image */}
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300">
                      {blog.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm">
                    {blog.excerpt}
                  </p>

                  <AnimatePresence>
                    {open && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mt-4 text-gray-300 text-sm leading-relaxed"
                      >
                        {blog.content}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-cyan-400 transition"
                  >
                    {open ? "Hide Article" : "Read More"}
                    {open ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-cyan-500/10 blur-xl" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
