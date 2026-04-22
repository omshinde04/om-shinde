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
   TERMINAL — real tech from resume
───────────────────────────────────────────── */
const LINES = [
  { prefix: "$", text: "node server.js --env production", color: "text-gray-200" },
  { prefix: "›", text: "Connecting to PostgreSQL…", color: "text-yellow-400" },
  { prefix: "✔", text: "DB connected · pool ready", color: "text-emerald-400" },
  { prefix: "›", text: "Warming Redis cache…", color: "text-yellow-400" },
  { prefix: "✔", text: "Cache hit ratio: 94%", color: "text-emerald-400" },
  { prefix: "›", text: "RAG pipeline initialised…", color: "text-yellow-400" },
  { prefix: "✔", text: "Vector search · Hybrid search ✓", color: "text-emerald-400" },
  { prefix: "🚀", text: "API listening on :4000", color: "text-cyan-400" },
];

function Terminal() {
  const [visible, setVisible] = useState([]);
  const [cur, setCur] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (cur >= LINES.length) {
      const t = setTimeout(() => { setVisible([]); setCur(0); setTyped(""); }, 3000);
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
        }, 340);
      }
    }, 38);
    return () => clearInterval(iv);
  }, [cur]);

  return (
    <div className="rounded-xl border border-white/8 bg-[#030a1a] overflow-hidden shadow-2xl">
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-[10px] font-mono text-gray-600 tracking-wider">om@portfolio — zsh</span>
        <motion.div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"
          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </div>
      {/* log body */}
      <div className="p-3 font-mono text-[11px] space-y-[3px]" style={{ minHeight: 108 }}>
        {visible.map((li) => {
          const { prefix, text, color } = LINES[li];
          return (
            <motion.div key={li} className={`flex items-start gap-2 ${color}`}
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-gray-600 w-4 shrink-0 pt-px">{prefix}</span>
              <span>{text}</span>
            </motion.div>
          );
        })}
        {cur < LINES.length && (
          <div className={`flex items-start gap-2 ${LINES[cur].color}`}>
            <span className="text-gray-600 w-4 shrink-0 pt-px">{LINES[cur].prefix}</span>
            <span>
              {typed}
              <motion.span className="text-cyan-400"
                animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>▍</motion.span>
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
    const step = Math.max(1, Math.ceil(to / 28));
    const iv = setInterval(() => {
      n += step;
      if (n >= to) { setVal(to); clearInterval(iv); }
      else setVal(n);
    }, 38);
    return () => clearInterval(iv);
  }, [to]);
  return <>{val}{suffix}</>;
}

/* ─────────────────────────────────────────────
   SKILL PILL
───────────────────────────────────────────── */
function Pill({ icon: Icon, label, color, delay = 0 }) {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg border text-[10px] font-mono font-medium cursor-default"
      style={{ borderColor: `${color}28`, color, background: `${color}08` }}
      initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.07, borderColor: `${color}55` }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={11} />
      {label}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   GHOST CODE WATERMARK
───────────────────────────────────────────── */
function GhostCode() {
  return (
    <motion.div
      className="absolute right-2 top-4 z-0 pointer-events-none select-none"
      animate={{ y: [0, -10, 0], opacity: [0.04, 0.08, 0.04] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <pre className="text-[8px] font-mono text-cyan-400 leading-[1.5]">
        {`const agent = new AIAgent({
  model: "gpt-4o",
  retriever: hybridSearch,
  cache: redis,
  db: postgres,
});`}
      </pre>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */
export default function MobileHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <section
        className="relative w-full flex flex-col justify-center px-5 overflow-hidden"
        style={{ background: "#020617", minHeight: "100svh" }}
      >

        {/* ── BACKGROUND ── */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#020617]" />
          {/* noise */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundSize: "180px" }} />
          {/* grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          {/* indigo orb left */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 360, height: 360, left: -100, top: 40, background: "rgba(99,102,241,0.15)", filter: "blur(100px)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          {/* cyan orb right */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 280, height: 280, right: -70, bottom: 80, background: "rgba(34,211,238,0.1)", filter: "blur(90px)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          {/* green orb bottom */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 200, height: 200, left: "30%", bottom: -40, background: "rgba(16,185,129,0.09)", filter: "blur(80px)" }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
          {/* diagonal beam */}
          <motion.div className="absolute inset-x-0 h-24 rotate-6 pointer-events-none"
            style={{ top: "38%", background: "linear-gradient(to right,transparent,rgba(34,211,238,0.045),transparent)" }}
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
          {/* watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[5.5rem] font-black tracking-[1.6rem] text-white/[0.018] select-none"
              style={{ fontFamily: "'Syne',sans-serif" }}>
              DEV
            </span>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 max-w-md mx-auto w-full pt-24 pb-10 flex flex-col">

          {/* eyebrow */}
          <motion.div className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="h-px w-6 bg-cyan-400/70" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
              Full Stack Software Engineer
            </span>
            <span className="h-px w-6 bg-cyan-400/70" />
          </motion.div>

          {/* name */}
          <div className="relative">
            <GhostCode />
            <motion.h1
              className="font-black leading-[0.88] tracking-tight"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,13vw,3.8rem)" }}
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-gray-500 font-semibold mb-1"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.36em", letterSpacing: "0.2em" }}>
                HEY, I'M
              </span>
              <span className="block text-white">Om</span>
              <span className="block relative w-fit">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-cyan-400">
                  Shinde
                </span>
                <motion.span className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg,#818cf8,#22d3ee)", width: "100%" }}
                  initial={{ scaleX: 0, transformOrigin: "left" }} animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }} />
              </span>
            </motion.h1>
          </div>

          {/* live badge */}
          <motion.div className="mt-5 inline-flex self-start"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/25 bg-indigo-400/8">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.7, 1], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }} />
              <span className="text-[10px] font-mono text-indigo-200">Node.js · React · PostgreSQL · Redis · AI</span>
            </div>
          </motion.div>

          {/* bio — pulled from actual resume */}
          <motion.p className="mt-4 text-[13px] text-gray-400 leading-[1.8]"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}>
            Software engineer with strong foundations in{" "}
            <span className="text-gray-200 font-medium">DSA & system design</span>. I build
            secure <span className="text-gray-200 font-medium">RESTful APIs</span>, real-time systems
            with <span className="text-gray-200 font-medium">WebSockets & Redis</span>, and{" "}
            <span className="text-gray-200 font-medium">RAG-powered AI pipelines</span> — shipped to production.
          </motion.p>

          {/* SKILLS — exact from resume */}
          <motion.div className="mt-5 flex flex-wrap gap-1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            {/* Backend */}
            <Pill icon={SiNodedotjs} label="Node.js" color="#22c55e" delay={0.56} />
            <Pill icon={SiExpress} label="Express" color="#94a3b8" delay={0.59} />
            <Pill icon={SiJsonwebtokens} label="JWT / OAuth" color="#f59e0b" delay={0.62} />
            <Pill icon={SiRedis} label="Redis" color="#f87171" delay={0.65} />
            {/* Frontend */}
            <Pill icon={SiReact} label="React" color="#22d3ee" delay={0.68} />
            <Pill icon={SiNextdotjs} label="Next.js" color="#e2e8f0" delay={0.71} />
            {/* DB */}
            <Pill icon={SiPostgresql} label="PostgreSQL" color="#818cf8" delay={0.74} />
            <Pill icon={SiMongodb} label="MongoDB" color="#10b981" delay={0.77} />
            {/* Lang / Tools */}
            <Pill icon={SiJavascript} label="JavaScript" color="#fbbf24" delay={0.80} />
            <Pill icon={SiPython} label="Python" color="#60a5fa" delay={0.83} />
            <Pill icon={SiDocker} label="Docker" color="#38bdf8" delay={0.86} />
            <Pill icon={SiGit} label="Git" color="#f97316" delay={0.89} />
          </motion.div>

          {/* STATS */}
          <motion.div className="mt-5 grid grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}>
            {[
              { to: 1, suffix: "+", label: "Yrs Exp." },
              { to: 10, suffix: "+", label: "Projects" },
              { to: 12, suffix: "+", label: "Tech Stack" },
            ].map(({ to, suffix, label }, i) => (
              <div key={i} className="flex flex-col items-center py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
                <span className="text-xl font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                  <Counter to={to} suffix={suffix} />
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* TERMINAL */}
          <motion.div className="mt-5"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}>
            <Terminal />
          </motion.div>

          {/* HIGHLIGHT PROJECTS — from resume */}
          <motion.div className="mt-5 flex flex-col gap-2"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.7 }}>
            {[
              {
                name: "Zapiya — AI Agent Platform",
                stack: "Fastify · Next.js · PostgreSQL · Redis · RAG",
                dot: "#818cf8",
              },
              {
                name: "Phishing Detection System",
                stack: "React · Node.js · Python ML · REST API",
                dot: "#22d3ee",
              },
            ].map(({ name, stack, dot }, i) => (
              <motion.div key={i}
                className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm"
                whileHover={{ borderColor: `${dot}40`, backgroundColor: `${dot}06` }}
                transition={{ duration: 0.2 }}>
                <motion.div className="w-2 h-2 rounded-full mt-1 shrink-0"
                  style={{ background: dot, boxShadow: `0 0 8px ${dot}` }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2 + i, repeat: Infinity }} />
                <div>
                  <div className="text-[11px] font-semibold text-white leading-tight">{name}</div>
                  <div className="text-[10px] font-mono text-gray-500 mt-0.5">{stack}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="mt-6 flex flex-col gap-3"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.7 }}>

            {/* View Resume */}
            <Link href="/resume">
              <motion.div
                className="group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#22d3ee,#818cf8)" }} />
                <motion.div className="absolute inset-0"
                  style={{ background: "linear-gradient(105deg,transparent 36%,rgba(255,255,255,0.22) 50%,transparent 64%)" }}
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }} />
                <FileText size={15} className="relative z-10 text-[#020617]" />
                <span className="relative z-10 text-[#020617] font-bold text-sm">View Resume</span>
                <ArrowRight size={14} className="relative z-10 text-[#020617] group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <motion.div
                className="flex items-center justify-center w-full py-3.5 rounded-xl border border-white/10 text-white text-sm font-medium cursor-pointer backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: "rgba(99,102,241,0.5)", backgroundColor: "rgba(255,255,255,0.04)" }}
                whileTap={{ scale: 0.97 }}>
                Contact Me
              </motion.div>
            </Link>
          </motion.div>

          {/* SOCIALS */}
          <motion.div className="mt-6 flex items-center justify-center gap-1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
            {[
              { href: "https://github.com/omshinde04", icon: <Github size={18} /> },
              { href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: <Linkedin size={18} /> },
              { href: "mailto:oms151567@gmail.com", icon: <Mail size={18} /> },
            ].map(({ href, icon }, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noreferrer"
                className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, color: "#22d3ee" }} whileTap={{ scale: 0.9 }}>
                {icon}
              </motion.a>
            ))}
            <span className="ml-2 h-px w-8 bg-white/10" />
            <span className="ml-2 text-[10px] text-gray-600 font-mono">omshinde04</span>
          </motion.div>

          {/* scroll hint */}
          <motion.div className="mt-6 flex flex-col items-center gap-1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
            <motion.div className="w-px h-7 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
              animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }} />
            <span className="text-[9px] font-mono text-gray-600 tracking-[0.3em] uppercase">Scroll</span>
          </motion.div>

        </div>
      </section>
    </>
  );
}