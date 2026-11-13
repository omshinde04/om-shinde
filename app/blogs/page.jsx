"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

/* ================= BLOG DATA ================= */

const blogs = [
  {
    title: "Why Next.js Defines the Future of Web Applications",
    tag: "Next.js",
    date: "Jan 12, 2026",
    image: "/blogs/blog1.png",
    code: "01",
    excerpt:
      "Next.js combines performance, scalability, and developer experience through server rendering, routing, and edge-ready architecture.",
    content:
      "Next.js enables hybrid rendering strategies such as SSR, ISR, and static generation, combined with intelligent caching and edge functions—making it a strong foundation for production-grade applications that demand sub-second load times.",
  },
  {
    title: "Building Scalable React Applications in Modern Stacks",
    tag: "React 19",
    date: "Jan 05, 2026",
    image: "/blogs/blog2.png",
    code: "02",
    excerpt:
      "Modern React emphasizes composition, predictable data flow, and performance optimization for scalable applications.",
    content:
      "Scalable React systems rely on component composition, memoization, server components, and clean state boundaries to maintain high performance as applications grow in complexity and surface area.",
  },
  {
    title: "How AI Is Reshaping Full-Stack Development",
    tag: "AI Systems",
    date: "Dec 28, 2025",
    image: "/blogs/blog3.png",
    code: "03",
    excerpt:
      "Artificial intelligence is changing how developers design, build, and optimize modern applications.",
    content:
      "AI-powered tooling improves productivity through code generation, automated testing, intelligent UX personalization, and data-driven architectural decisions. Embedding RAG pipelines into web applications is quickly becoming standard practice.",
  },
  {
    title: "MongoDB vs SQL: Choosing the Right Database",
    tag: "Databases",
    date: "Dec 18, 2025",
    image: "/blogs/blog4.png",
    code: "04",
    excerpt:
      "Understanding trade-offs between relational and NoSQL databases is key to building scalable systems.",
    content:
      "MongoDB offers schema flexibility and rapid horizontal scaling, while SQL databases provide ACID guarantees and relational integrity. In modern microservices, hybrid polyglot persistence often yields the best architectural outcomes.",
  },
  {
    title: "Professional GitHub Workflows for Developers",
    tag: "DevOps",
    date: "Dec 10, 2025",
    image: "/blogs/blog5.png",
    code: "05",
    excerpt:
      "Professional GitHub usage goes beyond commits—covering workflows, reviews, and automation.",
    content:
      "Effective GitHub workflows include conventional commits, automated GitHub Actions pipelines, pull request reviews, and semantic release tagging to enforce quality and reduce regressions.",
  },
  {
    title: "Designing Clean & Scalable Web Architectures",
    tag: "Architecture",
    date: "Dec 02, 2025",
    image: "/blogs/blog6.png",
    code: "06",
    excerpt:
      "Clean architecture helps teams build systems that scale without becoming fragile.",
    content:
      "A clean architecture separates concerns, defines clear domain boundaries, and isolates framework-specific code from core business logic to ensure longevity and adaptability.",
  },
];

export default function Blog() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openIndex, setOpenIndex] = useState(null);

  const isExpanded = visibleCount === blogs.length;

  return (
    <section
      id="blog"
      className="relative w-full pt-28 pb-24 sm:pb-28 overflow-hidden bg-[#0B0B0C] min-h-screen"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                EDITORIAL & ARCHITECTURE
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Technical thoughts & <span className="text-[#CBF432]">perspectives</span>
            </h1>

            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              In-depth articles covering modern web development, scalable database strategies, and AI integration.
            </p>
          </motion.div>

          {/* Toggle View */}
          <button
            onClick={() => setVisibleCount(isExpanded ? INITIAL_COUNT : blogs.length)}
            className="
              self-start sm:self-auto inline-flex items-center gap-2
              px-5 py-2.5 rounded-xl
              text-xs font-medium tracking-wide
              bg-[#141416] border border-white/10 text-zinc-300
              hover:border-[#CBF432]/60 hover:text-[#CBF432]
              transition-all duration-200 cursor-pointer whitespace-nowrap
            "
          >
            <span>{isExpanded ? "Show Less" : `All Articles (${blogs.length})`}</span>
            {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, visibleCount).map((blog, index) => {
            const open = openIndex === index;

            return (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="
                  group relative rounded-2xl overflow-hidden
                  bg-[#141416] border border-white/10
                  hover:border-[#CBF432]/50 hover:shadow-[0_15px_40px_rgba(203,244,50,0.06)]
                  transition-all duration-300 flex flex-col justify-between
                "
              >
                <div>
                  {/* Image banner */}
                  <div className="relative w-full aspect-[16/10] bg-[#0E0E10] border-b border-white/5 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur border border-white/10 text-[10px] font-mono text-[#CBF432]">
                      // {blog.code}
                    </div>

                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-xs mb-3 font-mono">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#0B0B0C] border border-[#CBF432]/30 text-[#CBF432] text-[11px] font-semibold">
                        {blog.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
                        <Calendar size={13} className="text-zinc-500" />
                        {blog.date}
                      </span>
                    </div>

                    <h2
                      className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-[#CBF432] transition-colors"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {blog.title}
                    </h2>

                    <p className="mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 p-4 rounded-xl bg-[#0B0B0C] border border-white/8 text-zinc-300 text-xs sm:text-sm leading-relaxed overflow-hidden"
                        >
                          {blog.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="
                      inline-flex items-center gap-1.5
                      text-xs font-medium
                      text-zinc-400 hover:text-[#CBF432]
                      transition-colors cursor-pointer
                    "
                  >
                    <span>{open ? "Close Article" : "Read Insights"}</span>
                    {open ? <EyeOff size={13} /> : <Eye size={13} />}
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
