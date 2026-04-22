"use client";

import { Download, Eye, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* ===== Background Accents ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-105 w-105 bg-indigo-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-16">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
         <div>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
    My{" "}
    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
      Resume
    </span>
  </h2>

  <p className="mt-3 text-gray-400 max-w-md">
    View or download my resume in PDF format. Optimized for recruiters
    and ATS systems.
  </p>
</div>

          {/* ===== Actions (Desktop) ===== */}
          <div className="hidden sm:flex gap-4">
            <a
              href="/resume/om_shinde.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <Eye size={18} />
              View PDF
            </a>

            <a
              href="/resume/om_shinde.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold shadow-[0_12px_50px_rgba(56,189,248,0.4)] hover:brightness-110 transition"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </motion.div>

        {/* ===== PDF Preview ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative w-full
            h-[70vh] sm:h-[75vh] md:h-[80vh]
            rounded-2xl overflow-hidden
            border border-white/10
            bg-black
            shadow-[0_30px_120px_rgba(0,0,0,0.6)]
          "
        >
          <iframe
            src="/resume/om_shinde.pdf"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>

        {/* ===== Back to Home ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center sm:justify-start"
        >
          <Link
            href="/"
            className="
              group inline-flex items-center gap-2
              px-5 py-3 rounded-full
              border border-white/15 bg-white/5
              text-gray-300 hover:text-cyan-400
              hover:bg-white/10
              transition
            "
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition"
            />
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ===== Mobile Sticky Actions ===== */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          sm:hidden
          border-t border-white/10
          bg-[#020617]/90 backdrop-blur-xl
          px-4 py-3
          flex gap-3
        "
      >
        <a
          href="/resume/om_shinde.pdf"
          target="_blank"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-sm"
        >
          <Eye size={16} />
          View
        </a>

        <a
          href="/resume/om_shinde.pdf"
          download
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-sm"
        >
          <Download size={16} />
          Download
        </a>
      </div>
    </section>
  );
}
