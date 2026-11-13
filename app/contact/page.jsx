"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Loader2,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meeeqonj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0B0C] pt-28 pb-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#CBF432]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* ================= LEFT COLUMN (5 cols) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CBF432]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CBF432] uppercase">
                DIRECT COMMUNICATION
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Let’s build something <span className="text-[#CBF432]">exceptional</span>
            </h1>

            <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Have an idea, engineering challenge, or full-time opportunity in mind?
              I'm open to discussing production-grade web systems, freelance engagements, and engineering roles.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/8 bg-[#141416]">
                <div className="p-2 rounded-lg bg-[#0B0B0C] border border-white/8 text-[#CBF432]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">EMAIL</div>
                  <div className="text-white text-sm font-medium">omshinde0412@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/8 bg-[#141416]">
                <div className="p-2 rounded-lg bg-[#0B0B0C] border border-white/8 text-[#CBF432]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">LOCATION</div>
                  <div className="text-white text-sm font-medium">Pune / Nashik, Maharashtra, India</div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                // EXTERNAL PROFILES
              </div>
              <div className="flex gap-2.5">
                {[
                  { label: "GitHub", href: "https://github.com/omshinde04", icon: Github },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: Linkedin },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                        border border-white/10 bg-[#141416] text-xs font-mono text-zinc-300
                        hover:border-[#CBF432] hover:text-[#CBF432] transition-colors
                      "
                    >
                      <Icon size={14} />
                      <span>{s.label}</span>
                      <ArrowUpRight size={12} className="opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM (7 cols) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="
                relative rounded-2xl
                bg-[#141416] border border-white/10
                p-6 sm:p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            >
              <div className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5 block">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0B0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#CBF432] focus:ring-1 focus:ring-[#CBF432] transition text-sm"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5 block">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0B0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#CBF432] focus:ring-1 focus:ring-[#CBF432] transition text-sm"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5 block">
                    Project or Message Details
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                    <textarea
                      rows="4"
                      name="message"
                      required
                      placeholder="Tell me about your timeline, project requirements, or opportunity..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0B0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#CBF432] focus:ring-1 focus:ring-[#CBF432] transition resize-none text-sm"
                    />
                  </div>
                </div>

                {/* STATUS NOTIFICATIONS */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#CBF432]/10 border border-[#CBF432]/30 text-[#CBF432] text-xs font-mono">
                    <CheckCircle size={16} />
                    Message delivered successfully. I will get back to you shortly!
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                    <XCircle size={16} />
                    Failed to send message. Please try emailing directly at omshinde0412@gmail.com
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group w-full inline-flex items-center justify-center gap-2
                    rounded-xl px-6 py-3.5 text-sm font-bold text-[#0B0B0C]
                    bg-[#CBF432] hover:bg-[#d9f858]
                    shadow-[0_0_24px_rgba(203,244,50,0.25)]
                    transition-all duration-200 cursor-pointer
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin text-[#0B0B0C]" size={16} />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
