"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiNextdotjs, SiRedis, SiPostgresql, SiPython,
  SiDocker, SiGit, SiJavascript, SiJsonwebtokens,
} from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   TERMINAL (Obsidian + Lime theme)
───────────────────────────────────────────── */
const LINES = [
  { prefix: "$", text: "node server.js --env production", color: "text-zinc-200" },
  { prefix: "›", text: "Connecting to PostgreSQL…", color: "text-zinc-400" },
  { prefix: "✔", text: "DB connected · pool ready (8ms)", color: "text-[#CBF432]" },
  { prefix: "›", text: "Warming Redis cache…", color: "text-zinc-400" },
  { prefix: "✔", text: "Cache hit ratio: 94.8%", color: "text-[#CBF432]" },
  { prefix: "›", text: "Vector & RAG pipeline ready…", color: "text-zinc-400" },
  { prefix: "✔", text: "Hybrid search index synchronized", color: "text-[#CBF432]" },
  { prefix: "⚡", text: "API cluster listening on :4000", color: "text-[#CBF432]" },
];

function Terminal() {
  const [visible, setVisible] = useState([]);
  const [cur, setCur] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (cur >= LINES.length) {
      const t = setTimeout(() => { setVisible([]); setCur(0); setTyped(""); }, 3500);
      return () => clearTimeout(t);
    }
    const { text } = LINES[cur];
    let i = 0;
    setTyped("");
    const iv = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(iv);
        setTimeout(() => {
          setVisible((p) => [...p, cur]);
          setCur((p) => p + 1);
        }, 320);
      }
    }, 34);
    return () => clearInterval(iv);
  }, [cur]);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0E0E10] overflow-hidden shadow-2xl">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="w-2 h-2 rounded-full bg-red-500/80" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <span className="w-2 h-2 rounded-full bg-[#CBF432]/80" />
        <span className="ml-3 text-[10px] font-mono text-zinc-500 tracking-wider">om@production-env — zsh</span>
        <motion.div
          className="ml-auto w-1.5 h-1.5 rounded-full bg-[#CBF432]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      {/* Log Body */}
      <div className="p-3 font-mono text-[11px] space-y-[3px]" style={{ minHeight: 110 }}>
        {visible.map((li) => {
          const { prefix, text, color } = LINES[li];
          return (
            <motion.div key={li} className={`flex items-start gap-2 ${color}`}
              initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-zinc-600 w-4 shrink-0">{prefix}</span>
              <span>{text}</span>
            </motion.div>
          );
        })}
        {cur < LINES.length && (
          <div className={`flex items-start gap-2 ${LINES[cur].color}`}>
            <span className="text-zinc-600 w-4 shrink-0">{LINES[cur].prefix}</span>
            <span>
              {typed}
              <motion.span
                className="text-[#CBF432]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                ▍
              </motion.span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let n = 0;
    const step = Math.max(1, Math.ceil(to / 25));
    const iv = setInterval(() => {
      n += step;
      if (n >= to) { setVal(to); clearInterval(iv); }
      else setVal(n);
    }, 35);
    return () => clearInterval(iv);
  }, [to]);
  return <>{val}{suffix}</>;
}

/* ─────────────────────────────────────────────
   SKILL PILL
───────────────────────────────────────────── */
function Pill({ icon: Icon, label, delay = 0 }) {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg border border-white/8 bg-[#141416] text-[10px] font-mono text-zinc-300 cursor-default select-none"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={11} className="text-zinc-400" />
      <span>{label}</span>
    </motion.div>
  );
}

export default function MobileHero() {
  return (
    <section className="relative w-full flex flex-col justify-center px-5 overflow-hidden bg-[#0B0B0C] min-h-[100svh]">
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B0B0C]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#CBF432]/8 blur-[120px] pointer-events-none" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-md mx-auto w-full pt-28 pb-14 flex flex-col">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#CBF432] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#CBF432] uppercase">
            FULL STACK SOFTWARE ENGINEER
          </span>
        </motion.div>

        {/* Headline */}
        <div>
          <motion.h1
            className="font-extrabold leading-[0.92] tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(2.8rem, 12vw, 3.8rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block text-zinc-500 font-normal tracking-wide text-sm font-mono mb-1.5">
              HEY, I'M
            </span>
            <span className="block text-white">Om</span>
            <span className="block text-[#CBF432] relative w-fit">
              Shinde
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#CBF432]"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                style={{ width: "100%" }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Status Pill */}
        <motion.div
          className="mt-4 inline-flex self-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#141416]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBF432] animate-ping" />
            <span className="text-[10px] font-mono text-zinc-300">Available for Full-Time & Freelance</span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="mt-4 text-[13px] text-zinc-400 leading-[1.75]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full Stack Software Engineer building scalable, high-performance web applications with
          clean architecture, resilient backend logic, and production-ready UX —{" "}
          <span className="text-white">from distributed systems to pixel-crafted interfaces</span>.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="mt-5 flex flex-wrap gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Pill icon={SiNodedotjs} label="Node.js" delay={0.4} />
          <Pill icon={SiExpress} label="Express" delay={0.42} />
          <Pill icon={SiReact} label="React" delay={0.44} />
          <Pill icon={SiNextdotjs} label="Next.js" delay={0.46} />
          <Pill icon={SiPostgresql} label="PostgreSQL" delay={0.48} />
          <Pill icon={SiMongodb} label="MongoDB" delay={0.5} />
          <Pill icon={SiRedis} label="Redis" delay={0.52} />
          <Pill icon={SiDocker} label="Docker" delay={0.54} />
          <Pill icon={SiPython} label="Python" delay={0.56} />
          <Pill icon={SiJsonwebtokens} label="JWT" delay={0.58} />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-5 grid grid-cols-3 gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { to: 1, suffix: "+", label: "Yrs Exp." },
            { to: 10, suffix: "+", label: "Projects" },
            { to: 100, suffix: "%", label: "Dedication" },
          ].map(({ to, suffix, label }, i) => (
            <div key={i} className="flex flex-col items-center py-2.5 rounded-xl border border-white/10 bg-[#141416]/90 backdrop-blur-xl">
              <span className="text-lg font-extrabold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                <Counter to={to} suffix="" /><span className="text-[#CBF432]">{suffix}</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Terminal />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-6 flex flex-col gap-2.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/resume">
            <div className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#CBF432] text-[#0B0B0C] font-bold text-sm tracking-tight shadow-[0_0_24px_rgba(203,244,50,0.25)]">
              <FileText size={16} />
              <span>View Resume</span>
              <ArrowRight size={15} />
            </div>
          </Link>

          <Link href="/contact">
            <div className="flex items-center justify-center w-full py-3.5 rounded-xl border border-white/12 bg-[#141416] text-white text-sm font-semibold">
              Start A Project
            </div>
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { href: "https://github.com/omshinde04", icon: <Github size={17} /> },
            { href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: <Linkedin size={17} /> },
            { href: "mailto:omshinde0412@gmail.com", icon: <Mail size={17} /> },
          ].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-zinc-400 hover:text-[#CBF432] hover:bg-white/5 transition-all"
            >
              {icon}
            </a>
          ))}
          <span className="ml-2 h-px w-6 bg-white/10" />
          <span className="ml-1 text-[11px] text-zinc-500 font-mono">omshinde04</span>
        </motion.div>

      </div>
    </section>
  );
}
