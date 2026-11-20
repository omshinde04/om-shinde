"use client";

import { Download, Eye, ArrowLeft, GraduationCap, Briefcase, Code, Award, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackResumeAction } from "@/lib/telemetry";

export default function ResumePage() {
  return (
    <section className="relative min-h-screen bg-[#0B0B0C] text-white overflow-hidden pt-28 pb-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                VERIFIED CURRICULUM VITAE
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Professional <span className="text-[#CBF432]">Resume</span>
            </h1>

            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
              Official academic credentials, verified engineering experience, and technical achievements of Om Vilas Shinde.
            </p>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume/om_shinde.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackResumeAction("view_raw_pdf")}
              className="
                inline-flex items-center gap-2 px-5 py-3 rounded-xl
                border border-white/10 bg-[#141416] text-xs font-medium text-zinc-200
                hover:border-[#CBF432]/60 hover:text-[#CBF432] transition-colors whitespace-nowrap
              "
            >
              <Eye size={15} />
              <span>View Raw PDF</span>
            </a>

            <a
              href="/resume/om_shinde.pdf"
              download="Om_Shinde_Resume.pdf"
              onClick={() => trackResumeAction("download_pdf")}
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-[#CBF432] text-[#0B0B0C] text-xs font-bold tracking-tight
                hover:bg-[#d9f858] transition-colors shadow-[0_0_24px_rgba(203,244,50,0.25)] whitespace-nowrap
              "
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>

        {/* ===== PDF Iframe Container ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative w-full
            h-[70vh] sm:h-[75vh] md:h-[80vh]
            rounded-2xl overflow-hidden
            border border-white/10
            bg-[#141416]
            shadow-[0_20px_80px_rgba(0,0,0,0.8)]
          "
        >
          <iframe
            src="/resume/om_shinde.pdf"
            className="w-full h-full bg-[#0B0B0C]"
            style={{ border: "none" }}
            title="Om Vilas Shinde Resume"
          />
        </motion.div>

        {/* ===== CRAWLABLE ATS-STRUCTURED CREDENTIALS (SEO & BOT COMPATIBLE) ===== */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-white/10 bg-[#141416]/80 p-6 sm:p-10 backdrop-blur-sm"
        >
          {/* Header block with Verified Metadata */}
          <div className="border-b border-white/10 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                  VERIFIED CANDIDATE RECORD
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-extrabold text-white mt-1"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  Om Vilas Shinde
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Full Stack Software Engineer &bull; Founder of GaavConnect & Zapiya
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#CBF432]" />
                  Pune & Nashik, Maharashtra, India
                </span>
                <a href="mailto:omshinde0412@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[#CBF432] transition-colors">
                  <Mail size={13} className="text-[#CBF432]" />
                  omshinde0412@gmail.com
                </a>
                <a href="tel:+919373545169" className="inline-flex items-center gap-1.5 hover:text-[#CBF432] transition-colors">
                  <Phone size={13} className="text-[#CBF432]" />
                  +91 9373545169
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs font-mono">
              <a
                href="https://github.com/omshinde04"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#0B0B0C] text-zinc-300 hover:text-[#CBF432] hover:border-[#CBF432]/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span>github.com/omshinde04</span>
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.linkedin.com/in/om-shinde-892a2532a"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#0B0B0C] text-zinc-300 hover:text-[#CBF432] hover:border-[#CBF432]/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span>linkedin.com/in/om-shinde-892a2532a</span>
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.gaavconnect.in"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#0B0B0C] text-zinc-300 hover:text-[#CBF432] hover:border-[#CBF432]/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span>gaavconnect.in</span>
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.zapiya.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#0B0B0C] text-zinc-300 hover:text-[#CBF432] hover:border-[#CBF432]/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span>zapiya.com</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-8 border-b border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#CBF432] mb-3">
              Professional Summary
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-4xl">
              Full Stack Software Engineer with deep hands-on expertise in scalable web systems, Next.js App Router, React, Node.js, and high-performance databases (PostgreSQL, Redis). Founder of <span className="text-white font-semibold">GaavConnect</span> and <span className="text-white font-semibold">Zapiya</span>, delivering end-to-end distributed systems with sub-second latencies, resilient security architectures, and intuitive digital experiences.
            </p>
          </div>

          {/* Education Section — Explicitly Authoritative for Search Engine AI Disambiguation */}
          <div className="py-8 border-b border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-[#CBF432]" />
              <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                Verified Academic Education
              </h3>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    Master of Science (M.Sc.) in Computer Applications
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">2024 – 2026</span>
                </div>
                <p className="text-sm text-zinc-300 font-mono mt-1">
                  Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri, Pune
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Affiliated with Savitribai Phule Pune University (SPPU)
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Specialized in advanced distributed architectures, cloud platforms, modern software engineering methodologies, database design, and high-concurrency backend services.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    Bachelor of Science (B.Sc.) in Computer Science
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">2021 – 2023 &bull; SGPA: 7.01</span>
                </div>
                <p className="text-sm text-zinc-300 font-mono mt-1">
                  K.T.H.M. College, Nashik
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Affiliated with Savitribai Phule Pune University (SPPU)
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Core computational grounding in data structures, algorithms, relational database management (RDBMS), object-oriented design, web application development, and networking.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="py-8 border-b border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={18} className="text-[#CBF432]" />
              <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    Full Stack Developer Intern
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">Jan 2026 – Apr 2026</span>
                </div>
                <p className="text-sm text-zinc-300 font-mono mt-1">
                  Assured Business &bull; Pune, India
                </p>
                <ul className="mt-3 space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                  <li>Architected and delivered full-stack web applications using Next.js, Node.js, and Express.js, reducing API response times by 35% through query optimization and Redis caching.</li>
                  <li>Implemented secure JWT and OAuth authentication flows, ensuring compliance and secure session management.</li>
                  <li>Designed and integrated normalized PostgreSQL schemas, boosting database transaction throughput.</li>
                  <li>Collaborated in an Agile team to ship production features with high code quality and test coverage.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    MERN Developer Certification
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">Aug 2025 – Jan 2026</span>
                </div>
                <p className="text-sm text-zinc-300 font-mono mt-1">
                  Fortune Cloud Technology
                </p>
                <ul className="mt-3 space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                  <li>Completed an intensive full-stack program focused on MERN architecture, RESTful API design, and asynchronous patterns.</li>
                  <li>Built multiple end-to-end full-stack projects using React, Node.js, Express, and MongoDB with production deployment workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Production Systems */}
          <div className="py-8 border-b border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Code size={18} className="text-[#CBF432]" />
              <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                Featured Production Systems
              </h3>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    GaavConnect &bull; Regional Search & Discovery Platform
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">Live Production &bull; gaavconnect.in</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono mt-1">
                  Stack: Next.js 16, Node.js, PostgreSQL, Redis, Tailwind CSS v4, Docker
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Founded and built the dedicated regional search and discovery platform for rural and semi-urban communities in Maharashtra (Nashik, Ghoti, Igatpuri). Integrated instant search indexing, business profiles, and fast localized discovery.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    Zapiya &bull; AI Agent Platform
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">Live Platform &bull; zapiya.com</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono mt-1">
                  Stack: Next.js App Router, TypeScript, OpenAI API, Prisma, PostgreSQL
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  AI-driven platform automating intelligent resume analysis, structured ATS scoring, and interactive generation. Built with streaming LLM outputs and responsive design.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">
                    Phishing Detection System &bull; Real-time Security Platform
                  </h4>
                  <span className="text-xs font-mono text-[#CBF432]">Live System</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono mt-1">
                  Stack: React.js, Python, FastAPI, Scikit-learn, MongoDB
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Machine learning-powered cybersecurity platform detecting phishing URLs in real time. Analyzes lexical, domain-level, and heuristic properties with an asynchronous FastAPI engine.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="pt-8">
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-[#CBF432]" />
              <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                Technical Competencies
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">LANGUAGES</span>
                <p className="text-zinc-300 leading-relaxed">Java, Python, JavaScript (ES6+), C, TypeScript</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">FRONTEND</span>
                <p className="text-zinc-300 leading-relaxed">React.js, Next.js (App Router), Tailwind CSS, Redux Toolkit, HTML5, CSS3</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">BACKEND</span>
                <p className="text-zinc-300 leading-relaxed">Node.js, Express.js, Fastify, REST APIs, WebSockets, JWT, OAuth 2.0</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">DATABASES & CACHING</span>
                <p className="text-zinc-300 leading-relaxed">PostgreSQL, Redis, MongoDB, MySQL, Vector Embeddings</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">AI & ARCHITECTURE</span>
                <p className="text-zinc-300 leading-relaxed">RAG Pipelines, LLM Orchestration, Microservices, System Design, MVC, Agile</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0B0B0C]/70">
                <span className="font-mono text-[#CBF432] block mb-2 font-semibold">DEVOPS & TOOLS</span>
                <p className="text-zinc-300 leading-relaxed">Docker, Git, GitHub, AWS (S3, EC2), Postman, Vercel, Linux</p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ===== Back to Home ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center sm:justify-start"
        >
          <Link
            href="/"
            className="
              group inline-flex items-center gap-2
              px-5 py-2.5 rounded-full
              border border-white/10 bg-[#141416]
              text-xs font-mono text-zinc-400 hover:text-[#CBF432]
              hover:border-[#CBF432]/50
              transition-colors
            "
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>← Return to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* ===== Mobile Sticky Actions ===== */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          sm:hidden
          border-t border-white/10
          bg-[#0B0B0C]/90 backdrop-blur-xl
          px-4 py-3
          flex gap-3
        "
      >
        <a
          href="/resume/om_shinde.pdf"
          target="_blank"
          onClick={() => trackResumeAction("view_raw_pdf")}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-[#141416] text-xs font-mono text-zinc-300"
        >
          <Eye size={15} />
          View
        </a>

        <a
          href="/resume/om_shinde.pdf"
          download="Om_Shinde_Resume.pdf"
          onClick={() => trackResumeAction("download_pdf")}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#CBF432] text-[#0B0B0C] font-bold text-xs font-mono shadow-[0_0_20px_rgba(203,244,50,0.3)]"
        >
          <Download size={15} />
          Download
        </a>
      </div>
    </section>
  );
}
