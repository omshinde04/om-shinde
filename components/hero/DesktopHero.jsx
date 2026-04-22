"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiNextdotjs, SiRedis, SiPostgresql, SiPython,
  SiDocker, SiGit, SiJavascript, SiJsonwebtokens,
} from "react-icons/si";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─────────────────────────────────────────────
   TERMINAL  (from MobileHero)
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
   COUNTER  (from MobileHero)
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
   SKILL PILL  (from MobileHero)
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
   CURSOR GLOW
───────────────────────────────────────────── */
function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 80, damping: 18 });
  const sy = useSpring(y, { stiffness: 80, damping: 18 });
  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed z-0"
      style={{
        left: sx, top: sy,
        translateX: "-50%", translateY: "-50%",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   GRID LINES
───────────────────────────────────────────── */
function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div key={`v${i}`} className="absolute top-0 bottom-0 w-px"
          style={{ left: `${(i + 1) * (100 / 7)}%`, background: "rgba(255,255,255,0.03)" }}
          initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div key={`h${i}`} className="absolute left-0 right-0 h-px"
          style={{ top: `${(i + 1) * 20}%`, background: "rgba(255,255,255,0.025)" }}
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.12, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ORB
───────────────────────────────────────────── */
function Orb({ cx, cy, r, color, delay = 0 }) {
  return (
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{ width: r * 2, height: r * 2, left: cx - r, top: cy - r, background: color, filter: "blur(90px)" }}
      animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ─────────────────────────────────────────────
   TILT CARD
───────────────────────────────────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMouseMove = (e) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 10 });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });
  return (
    <motion.div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   NODE CARD
───────────────────────────────────────────── */
function NodeCard({ icon, label, sub, left, top, pulse = false, delay = 0 }) {
  return (
    <motion.div className="absolute z-20" style={{ left, top }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#020617]/80 backdrop-blur-2xl text-xs text-gray-300 cursor-default select-none"
        whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.45)" }}
        animate={pulse ? { boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 20px rgba(99,102,241,0.45)", "0 0 0px rgba(99,102,241,0)"] } : {}}
        transition={pulse ? { duration: 2.5, repeat: Infinity } : {}}
      >
        <span className="text-sm leading-none">{icon}</span>
        <div>
          <div className="font-semibold text-white text-[11px]">{label}</div>
          {sub && <div className="text-gray-500 text-[9px] mt-0.5">{sub}</div>}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SVG CONNECTOR
───────────────────────────────────────────── */
function Connector({ d, color }) {
  return (
    <motion.path d={d} stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="6 10"
      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
    />
  );
}

/* ─────────────────────────────────────────────
   PATH PARTICLE
───────────────────────────────────────────── */
function PathParticle({ path, color, duration, delay = 0, size = 7 }) {
  return (
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        offsetPath: `path('${path}')`,
      }}
      animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

/* ─────────────────────────────────────────────
   STAT BADGE  — now uses Counter from MobileHero
───────────────────────────────────────────── */
function StatBadge({ to, suffix = "", label, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center px-4 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-xl"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <span className="text-xl font-black text-white tracking-tight"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        <Counter to={to} suffix={suffix} />
      </span>
      <span className="text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function DesktopHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#020617", height: "100svh" }}
      >
        <CursorGlow />

        {/* ── BACKGROUND ── */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#020617]" />
          {/* noise */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />
          {/* grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* diagonal gradient */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, transparent 50%, rgba(34,211,238,0.3) 100%)" }}
          />
          <Orb cx={180} cy={280} r={280} color="rgba(99,102,241,0.13)" delay={0} />
          <Orb cx={920} cy={450} r={320} color="rgba(34,211,238,0.08)" delay={2} />
          <Orb cx={580} cy={80} r={180} color="rgba(16,185,129,0.07)" delay={1} />
          {/* vignette */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, transparent 0%, rgba(2,6,23,0.8) 100%)" }}
          />
        </div>

        <GridLines />

        {/* ── CONTENT ── */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-[1fr_500px] gap-10 items-center">

            {/* ════════ LEFT ════════ */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">

              {/* eyebrow */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-4">
                <span className="h-px w-7 bg-cyan-400/60" />
                <span className="text-[11px] font-mono font-medium tracking-[0.22em] text-cyan-400 uppercase">
                  FULL STACK SOFTWARE ENGINEER
                </span>
                <span className="h-px w-7 bg-cyan-400/60" />
              </motion.div>

              {/* headline */}
              <motion.div variants={fadeUp}>
                <h1
                  className="font-black leading-[0.93] tracking-tight"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                  }}
                >
                  <span
                    className="block text-gray-400 font-semibold tracking-wider mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.38em" }}
                  >
                    Hey, I'm
                  </span>
                  <span className="block text-white">Om</span>
                  <span className="block relative w-fit">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-cyan-400">
                      Shinde
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #818cf8, #22d3ee)", width: "100%" }}
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>
                </h1>
              </motion.div>

              {/* body */}
              <motion.p variants={fadeUp} className="mt-4 text-[14px] text-gray-400 leading-[1.75] max-w-md">
                I build scalable, high-performance web applications with clean
                architecture, refined motion, and production-ready UX —{" "}
                <span className="text-gray-200">from backend systems to pixel-perfect UI</span>.
              </motion.p>

              {/* ── SKILL PILLS (from MobileHero) replacing TechTags ── */}
              <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-1.5">
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

              {/* CTAs */}
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">

                {/* VIEW RESUME */}
                <Link href="/resume">
                  <motion.div
                    className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  >
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #22d3ee, #818cf8)" }} />
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.2) 50%, transparent 62%)" }}
                      animate={{ x: ["-120%", "220%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                    />
                    <FileText size={15} className="relative z-10 text-[#020617]" />
                    <span className="relative text-[#020617] font-bold text-sm z-10">View Resume</span>
                    <ArrowRight size={14} className="relative z-10 text-[#020617] group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </Link>

                {/* CONTACT ME */}
                <Link href="/contact">
                  <motion.div
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white text-sm font-medium cursor-pointer backdrop-blur-sm"
                    whileHover={{ scale: 1.03, borderColor: "rgba(99,102,241,0.5)", backgroundColor: "rgba(255,255,255,0.04)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact Me
                  </motion.div>
                </Link>
              </motion.div>

              {/* ── STATS using Counter (from MobileHero) ── */}
              <motion.div variants={fadeUp} className="mt-5 flex gap-2.5">
                <StatBadge to={1} suffix="+" label="Years Exp." delay={0.9} />
                <StatBadge to={10} suffix="+" label="Projects" delay={1.0} />
                <StatBadge to={100} suffix="%" label="Passion" delay={1.1} />
              </motion.div>

              {/* socials */}
              <motion.div variants={fadeUp} className="mt-4 flex items-center gap-1">
                {[
                  { href: "https://github.com/omshinde04", icon: <Github size={17} /> },
                  { href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: <Linkedin size={17} /> },
                  { href: "mailto:omshinde0412@gmail.com", icon: <Mail size={17} /> },
                ].map(({ href, icon }, i) => (
                  <motion.a key={i} href={href} target="_blank"
                    className="p-2.5 rounded-lg text-gray-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.18, color: "#22d3ee" }} whileTap={{ scale: 0.9 }}
                  >
                    {icon}
                  </motion.a>
                ))}
                <span className="ml-2 h-px w-10 bg-white/10" />
                <span className="ml-2 text-[11px] text-gray-600 font-mono">omshinde04</span>
              </motion.div>

            </motion.div>

            {/* ════════ RIGHT — BACKEND VISUAL ════════ */}
            <div className="relative hidden lg:flex items-center justify-center">
              <TiltCard className="relative w-[490px] h-[490px]">

                {/* inner glow */}
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: "radial-gradient(ellipse at 40% 35%, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
                />

                {/* glass border */}
                <motion.div className="absolute inset-0 rounded-3xl"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.012)", backdropFilter: "blur(2px)" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                />

                {/* corner brackets */}
                {[
                  "top-0 left-0 border-t-2 border-l-2 rounded-tl-3xl",
                  "top-0 right-0 border-t-2 border-r-2 rounded-tr-3xl",
                  "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-3xl",
                  "bottom-0 right-0 border-b-2 border-r-2 rounded-br-3xl",
                ].map((cls, i) => (
                  <motion.div key={i} className={`absolute w-7 h-7 ${cls} border-indigo-400/40`}
                    initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  />
                ))}

                {/* SVG — connectors + ping rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 490 490" fill="none">
                  <Connector d="M75 420 L180 305 L258 228 L390 128" color="rgba(99,102,241,0.32)" />
                  <Connector d="M180 305 L180 400" color="rgba(34,211,238,0.25)" />
                  <Connector d="M258 228 L362 270" color="rgba(16,185,129,0.25)" />
                  <Connector d="M390 128 L390 188" color="rgba(99,102,241,0.2)" />
                  <Connector d="M258 228 C302 210, 336 246, 310 275" color="rgba(16,185,129,0.2)" />
                  {/* ping rings */}
                  <motion.circle cx="258" cy="228" r="16" stroke="rgba(99,102,241,0.6)" strokeWidth="1" fill="none"
                    animate={{ r: [16, 34, 16], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }} />
                  <motion.circle cx="258" cy="228" r="9" stroke="rgba(99,102,241,0.9)" strokeWidth="1.5" fill="none"
                    animate={{ r: [9, 22, 9], opacity: [0.9, 0, 0.9] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
                </svg>

                {/* flow particles */}
                <PathParticle path="M75 420 L180 305 L258 228 L390 128" color="#818cf8" duration={5} delay={0} size={6} />
                <PathParticle path="M75 420 L180 305 L258 228 L390 128" color="#22d3ee" duration={5} delay={2.5} size={4.5} />
                <PathParticle path="M180 305 L180 400" color="#22d3ee" duration={2.8} delay={1} size={4} />
                <PathParticle path="M258 228 L362 270" color="#10b981" duration={3.2} delay={0.5} size={4} />

                {/* ── TERMINAL (from MobileHero) replaces bottom half of card ── */}
                <motion.div
                  className="absolute z-20"
                  style={{ left: 16, bottom: 44, right: 16 }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                >
                  <Terminal />
                </motion.div>

                {/* node cards (top portion stays intact) */}
                <NodeCard icon="💻" label="Client" sub="Browser / Mobile" left="24px" top="12px" delay={0.4} />
                <NodeCard icon="🧩" label="API Gateway" sub="Rate limit · Auth" left="135px" top="80px" delay={0.5} />

                {/* CORE node */}
                <motion.div className="absolute z-30" style={{ left: 188, top: 138 }}
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold"
                    style={{
                      background: "linear-gradient(135deg, rgba(99,102,241,0.22), rgba(34,211,238,0.1))",
                      border: "1px solid rgba(99,102,241,0.55)",
                      backdropFilter: "blur(20px)",
                      color: "#c7d2fe",
                    }}
                    animate={{ boxShadow: ["0 0 16px rgba(99,102,241,0.2)", "0 0 44px rgba(99,102,241,0.55)", "0 0 16px rgba(99,102,241,0.2)"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <span className="text-sm">⚙️</span>
                    <div>
                      <div className="text-indigo-200 font-bold text-[11px]">Processing Engine</div>
                      <div className="text-indigo-400/60 text-[9px] font-normal mt-0.5">Business Logic · Orchestration</div>
                    </div>
                  </motion.div>
                </motion.div>

                <NodeCard icon="⚡" label="Redis Cache" sub="TTL · Pub/Sub" left="326px" top="148px" delay={0.7} />
                <NodeCard icon="🗄️" label="PostgreSQL" sub="ACID · Replicated" left="310px" top="14px" delay={0.8} />
                <NodeCard icon="🧠" label="AI / RAG" sub="Embeddings · Vector" left="24px" top="200px" pulse delay={1.0} />

                {/* live indicator */}
                <motion.div className="absolute top-4 right-5 flex items-center gap-1.5"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
                >
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }} />
                  <span className="text-[9px] font-mono text-emerald-400/70 tracking-wider">LIVE</span>
                </motion.div>

              </TiltCard>
            </div>

          </div>
        </div>

        {/* ── SCROLL HINT ── */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div className="w-px h-8 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-[9px] font-mono text-gray-600 tracking-[0.3em] uppercase">Scroll</span>
        </motion.div>

      </section>
    </>
  );
}