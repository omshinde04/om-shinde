"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What core technologies do you specialize in?",
    answer:
      "I specialize in full-stack JavaScript & TypeScript ecosystems: React.js, Next.js (App Router), Node.js, Express, PostgreSQL, MongoDB, Redis caching, and Docker, with a strong focus on clean architecture and high-performance UX.",
  },
  {
    question: "Are you open to full-time, freelance, or contract roles?",
    answer:
      "Yes. I am actively open to full-time software engineering roles, high-impact freelance projects, and technical collaborations where I can contribute to production systems and scale real-world applications.",
  },
  {
    question: "Do you build both frontend interfaces and backend architectures?",
    answer:
      "Yes, absolutely. I design responsive, accessible user interfaces with refined micro-interactions and build secure, horizontally scalable backend APIs, database models, and authentication workflows.",
  },
  {
    question: "How do you approach performance optimization and scalability?",
    answer:
      "Through systematic engineering: query optimization, Redis caching strategies, server-side caching (ISR/SSR), asset compression, code splitting, memoized state, and asynchronous background worker queues.",
  },
  {
    question: "Can you customize projects based on unique business requirements?",
    answer:
      "Every project is custom-engineered from the ground up to match specific product requirements, performance metrics, and security needs without relying on fragile templates.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0C] scroll-mt-20 border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
            <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
              05 // CLARIFICATIONS
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Frequently asked <span className="text-[#CBF432]">questions</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Direct answers on technical capabilities, project workflow, and engineering philosophy.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const open = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                className={`
                  relative rounded-2xl
                  border transition-all duration-300
                  ${open ? "border-[#CBF432]/60 bg-[#141416] shadow-[0_10px_30px_rgba(203,244,50,0.06)]" : "border-white/10 bg-[#121214] hover:border-white/20"}
                  overflow-hidden
                `}
              >
                {/* Question Button */}
                <motion.button
                  layout
                  onClick={() => setActive(open ? null : index)}
                  className="
                    relative z-10 w-full
                    flex items-center justify-between gap-4
                    px-6 sm:px-7 py-5
                    text-left
                    text-white font-semibold text-base sm:text-lg
                    hover:text-[#CBF432]
                    transition-colors cursor-pointer
                  "
                >
                  <span style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#CBF432] shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </motion.button>

                {/* Answer Accordion */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 sm:px-7 pb-6 overflow-hidden"
                    >
                      <div className="h-px w-full bg-white/10 mb-4" />
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
