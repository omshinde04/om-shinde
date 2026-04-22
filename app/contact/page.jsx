"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  ArrowUpRight,
  Loader2,
  CheckCircle,
  XCircle,
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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-95 w-95 bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 pt-28 pb-24">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
              <Mail size={16} />
              Contact
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Let’s create something{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                impactful
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Have an idea, project, or opportunity in mind?  
              I’m open to freelance work, collaborations, and full-time roles.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-indigo-400" size={16} />
                oms151567@gmail.com
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-cyan-400" size={16} />
                Pune, Maharashtra
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#form"
                className="
                  inline-flex items-center gap-2
                  rounded-full px-6 py-3
                  text-sm font-medium text-white
                  bg-linear-to-r from-indigo-500/30 to-cyan-500/30
                  border border-white/15 backdrop-blur
                  hover:from-indigo-500/40 hover:to-cyan-500/40
                  transition
                "
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            id="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative rounded-2xl
              bg-white/5
              border border-white/15
              backdrop-blur-xl
              p-6 sm:p-8
            "
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500/10 to-cyan-500/10 blur-xl" />

            <div className="relative space-y-5">
              {/* NAME */}
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full pl-9 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/60 transition"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 transition"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Message</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    rows="4"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full pl-9 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/60 transition resize-none"
                  />
                </div>
              </div>

              {/* STATUS MESSAGE */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <XCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group w-full inline-flex items-center justify-center gap-2
                  rounded-lg px-6 py-3 text-sm font-medium text-white
                  bg-linear-to-r from-indigo-500 to-cyan-500
                  hover:from-indigo-400 hover:to-cyan-400
                  transition disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
