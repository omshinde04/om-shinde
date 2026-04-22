"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack, Next.js, Tailwind CSS, and modern UI/UX systems for scalable, production-ready applications.",
  },
  {
    question: "Are you open to freelance or internship opportunities?",
    answer:
      "Yes. I’m open to freelance projects, internships, and entry-level roles where I can grow while delivering quality work.",
  },
  {
    question: "Do you work on both frontend and backend?",
    answer:
      "Absolutely. I design responsive user interfaces and build secure, optimized backend systems.",
  },
  {
    question: "How do you approach performance and scalability?",
    answer:
      "Through clean architecture, optimized queries, code splitting, lazy loading, and efficient state management.",
  },
  {
    question: "Can you customize projects based on requirements?",
    answer:
      "Yes. Every solution is tailored around project goals, user experience, and long-term scalability.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="
        relative w-full
        pt-20 sm:pt-24 md:pt-28
        pb-20 sm:pb-24
        overflow-hidden
      "
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-4">
            <HelpCircle size={18} />
            FAQs
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Everything You{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Need to Know
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Clear answers crafted with precision and experience.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const open = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
                className="
                  relative rounded-3xl
                  border border-white/10
                  bg-white/[0.035]
                  backdrop-blur-xl
                  overflow-hidden
                "
              >
                {/* Active Glow */}
                {open && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-cyan-500/10 blur-xl"
                  />
                )}

                {/* Question */}
                <motion.button
                  layout
                  onClick={() => setActive(open ? null : index)}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="
                    relative z-10 w-full
                    flex items-center justify-between
                    px-6 sm:px-8 py-6
                    text-left
                    text-white font-medium
                    hover:text-cyan-300
                    transition-colors
                  "
                >
                  <span className="text-base sm:text-lg">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    className="text-cyan-400"
                  >
                    <ChevronDown size={22} />
                  </motion.span>
                </motion.button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative z-10 px-6 sm:px-8 pb-6"
                    >
                      <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mb-5" />
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
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
