"use client";

import { Download, Eye, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
                ATS-OPTIMIZED CURRICULUM VITAE
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Professional <span className="text-[#CBF432]">Resume</span>
            </h1>

            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
              Verified technical credentials, architectural achievements, and education history formatted for recruiters and ATS scanners.
            </p>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume/om_shinde.pdf"
              target="_blank"
              rel="noreferrer"
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
            title="Om Shinde Resume"
          />
        </motion.div>

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
            <span>← RETURN TO PORTFOLIO</span>
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
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-[#141416] text-xs font-mono text-zinc-300"
        >
          <Eye size={15} />
          View
        </a>

        <a
          href="/resume/om_shinde.pdf"
          download="Om_Shinde_Resume.pdf"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#CBF432] text-[#0B0B0C] font-bold text-xs font-mono shadow-[0_0_20px_rgba(203,244,50,0.3)]"
        >
          <Download size={15} />
          Download
        </a>
      </div>
    </section>
  );
}
