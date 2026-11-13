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
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(4px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#CBF432]/80" />
        <span className="ml-3 text-[10px] font-mono text-zinc-500 tracking-wider">om@production-env — zsh</span>
        <motion.div
          className="ml-auto w-2 h-2 rounded-full bg-[#CBF432]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      {/* Log Body */}
      <div className="p-3 font-mono text-[11px] space-y-[3px]" style={{ minHeight: 112 }}>
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
      className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg border border-white/8 bg-[#141416] text-[10px] font-mono text-zinc-300 cursor-default select-none transition-all duration-200"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, borderColor: "rgba(203, 244, 50, 0.5)", color: "#CBF432" }}
    >
      <Icon size={12} className="text-zinc-400 group-hover:text-[#CBF432]" />
      <span>{label}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CURSOR GLOW
───────────────────────────────────────────── */
function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 90, damping: 20 });
  const sy = useSpring(y, { stiffness: 90, damping: 20 });
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
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(203, 244, 50, 0.045) 0%, transparent 65%)",
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
          style={{ left: `${(i + 1) * (100 / 7)}%`, background: "rgba(255,255,255,0.025)" }}
          initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div key={`h${i}`} className="absolute left-0 right-0 h-px"
          style={{ top: `${(i + 1) * 20}%`, background: "rgba(255,255,255,0.02)" }}
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}
    </div>
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
    setTilt({ rx: py * -8, ry: px * 8 });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });
  return (
    <motion.div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#121214]/90 backdrop-blur-xl text-xs text-zinc-300 cursor-default select-none"
        whileHover={{ scale: 1.05, borderColor: "rgba(203, 244, 50, 0.5)" }}
        animate={pulse ? { boxShadow: ["0 0 0px rgba(203, 244, 50, 0)", "0 0 16px rgba(203, 244, 50, 0.3)", "0 0 0px rgba(203, 244, 50, 0)"] } : {}}
        transition={pulse ? { duration: 2.5, repeat: Infinity } : {}}
      >
        <span className="text-sm leading-none">{icon}</span>
        <div>
          <div className="font-semibold text-white text-[11px]">{label}</div>
          {sub && <div className="text-zinc-500 text-[9px] mt-0.5">{sub}</div>}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SVG CONNECTOR & PARTICLES
───────────────────────────────────────────── */
function Connector({ d, color = "rgba(255,255,255,0.12)" }) {
  return (
    <motion.path d={d} stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="5 7"
      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
    />
  );
}

function PathParticle({ path, color = "#CBF432", duration = 4, delay = 0, size = 6 }) {
  return (
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, background: color,
        boxShadow: `0 0 10px ${color}`,
        offsetPath: `path('${path}')`,
      }}
      animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

/* ─────────────────────────────────────────────
   STAT BADGE
───────────────────────────────────────────── */
function StatBadge({ to, suffix = "", label, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center px-4 py-2.5 rounded-xl border border-white/8 bg-[#141416]/90 backdrop-blur-xl"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <span
        className="text-xl font-extrabold text-white tracking-tight"
        style={{ fontFamily: "var(--font-syne), sans-serif" }}
      >
        <Counter to={to} suffix="" /><span className="text-[#CBF432]">{suffix}</span>
      </span>
      <span className="text-[10px] text-zinc-500 font-mono mt-0.5 whitespace-nowrap uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN DESKTOP HERO
───────────────────────────────────────────── */
export default function DesktopHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0B0B0C]"
      style={{ minHeight: "100vh" }}
    >
      <CursorGlow />

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B0B0C]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Ambient Top Lime Glow */}
        <div
          className="absolute top-0 right-1/4 h-[380px] w-[500px] rounded-full opacity-10 pointer-events-none blur-[140px]"
          style={{ background: "#CBF432" }}
        />
      </div>

      <GridLines />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-[1.1fr_490px] gap-12 items-center">

          {/* ════════ LEFT COLUMN ════════ */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CBF432] animate-pulse" />
              <span className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#CBF432] uppercase">
                FULL STACK SOFTWARE ENGINEER
              </span>
            </motion.div>

            {/* Headline with Syne typography */}
            <motion.div variants={fadeUp}>
              <h1
                className="font-extrabold leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                }}
              >
                <span className="block text-zinc-400 font-normal tracking-wide text-lg sm:text-xl font-mono mb-2">
                  Hey, I'm
                </span>
                <span className="block text-white">Om</span>
                <span className="block text-[#CBF432] relative w-fit">
                  Shinde
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#CBF432]"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "100%" }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p variants={fadeUp} className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
              I architect and engineer scalable, high-performance web applications with clean code,
              resilient backend logic, and production-ready UX —{" "}
              <span className="text-white font-medium">from distributed systems to pixel-crafted interfaces</span>.
            </motion.p>

            {/* Skill Pills */}
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-1.5 max-w-lg">
              <Pill icon={SiNodedotjs} label="Node.js" delay={0.4} />
              <Pill icon={SiExpress} label="Express" delay={0.43} />
              <Pill icon={SiReact} label="React" delay={0.46} />
              <Pill icon={SiNextdotjs} label="Next.js" delay={0.49} />
              <Pill icon={SiPostgresql} label="PostgreSQL" delay={0.52} />
              <Pill icon={SiMongodb} label="MongoDB" delay={0.55} />
              <Pill icon={SiRedis} label="Redis" delay={0.58} />
              <Pill icon={SiDocker} label="Docker" delay={0.61} />
              <Pill icon={SiPython} label="Python" delay={0.64} />
              <Pill icon={SiJsonwebtokens} label="JWT / Auth" delay={0.67} />
              <Pill icon={SiJavascript} label="JavaScript" delay={0.7} />
              <Pill icon={SiGit} label="Git" delay={0.73} />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3.5">
              {/* VIEW RESUME BUTTON */}
              <Link href="/resume">
                <motion.div
                  className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#CBF432] text-[#0B0B0C] font-bold text-sm tracking-tight cursor-pointer shadow-[0_0_30px_rgba(203,244,50,0.25)] hover:bg-[#d9f858] transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={16} className="text-[#0B0B0C]" />
                  <span>View Resume</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </Link>

              {/* CONTACT ME BUTTON */}
              <Link href="/contact">
                <motion.div
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/12 bg-[#141416] text-white text-sm font-semibold cursor-pointer hover:border-[#CBF432]/60 hover:text-[#CBF432] transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start A Project
                </motion.div>
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div variants={fadeUp} className="mt-7 flex gap-3">
              <StatBadge to={1} suffix="+" label="Years Exp." delay={0.8} />
              <StatBadge to={10} suffix="+" label="Projects Built" delay={0.88} />
              <StatBadge to={100} suffix="%" label="Dedication" delay={0.96} />
            </motion.div>

            {/* SOCIALS */}
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-1.5">
              {[
                { href: "https://github.com/omshinde04", icon: <Github size={17} /> },
                { href: "https://www.linkedin.com/in/om-shinde-892a2532a", icon: <Linkedin size={17} /> },
                { href: "mailto:omshinde0412@gmail.com", icon: <Mail size={17} /> },
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-[#CBF432] hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {icon}
                </motion.a>
              ))}
              <span className="ml-2 h-px w-8 bg-white/10" />
              <span className="ml-2 text-xs text-zinc-500 font-mono">github.com/omshinde04</span>
            </motion.div>

          </motion.div>

          {/* ════════ RIGHT COLUMN — SYSTEM ARCHITECTURE ════════ */}
          <div className="relative hidden lg:flex items-center justify-center">
            <TiltCard className="relative w-[490px] h-[490px]">

              {/* Card Container */}
              <div
                className="absolute inset-0 rounded-2xl bg-[#0E0E10] border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Corner accents in lime */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#CBF432]/60 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#CBF432]/60 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#CBF432]/60 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#CBF432]/60 rounded-br-xl" />

                {/* Status Indicator */}
                <div className="absolute top-3.5 right-4 flex items-center gap-1.5 z-30">
                  <span className="w-2 h-2 rounded-full bg-[#CBF432] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#CBF432] font-semibold tracking-wider">SYSTEM ACTIVE</span>
                </div>

                {/* SVG Connectors */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 490 490" fill="none">
                  <Connector d="M75 420 L180 305 L258 228 L390 128" color="rgba(203, 244, 50, 0.25)" />
                  <Connector d="M180 305 L180 400" color="rgba(255, 255, 255, 0.15)" />
                  <Connector d="M258 228 L362 270" color="rgba(203, 244, 50, 0.2)" />
                  <Connector d="M390 128 L390 188" color="rgba(255, 255, 255, 0.15)" />

                  <motion.circle cx="258" cy="228" r="14" stroke="#CBF432" strokeWidth="1" fill="none"
                    animate={{ r: [14, 28, 14], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.2, repeat: Infinity }} />
                </svg>

                {/* Flow Particles */}
                <PathParticle path="M75 420 L180 305 L258 228 L390 128" color="#CBF432" duration={4} delay={0} size={5} />
                <PathParticle path="M75 420 L180 305 L258 228 L390 128" color="#FFFFFF" duration={4} delay={2} size={4} />

                {/* Node Cards */}
                <NodeCard icon="💻" label="Client App" sub="Web / Mobile" left="24px" top="16px" delay={0.3} />
                <NodeCard icon="🧩" label="API Gateway" sub="Auth · Rate Limit" left="135px" top="82px" delay={0.4} />

                {/* CORE Processing Engine Node */}
                <motion.div className="absolute z-30" style={{ left: 185, top: 140 }}
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-[#CBF432]/60 bg-[#161619] shadow-[0_0_24px_rgba(203,244,50,0.2)]"
                    animate={{ boxShadow: ["0 0 14px rgba(203,244,50,0.15)", "0 0 30px rgba(203,244,50,0.35)", "0 0 14px rgba(203,244,50,0.15)"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <span className="text-base">⚙️</span>
                    <div>
                      <div className="text-white font-bold text-[11px] tracking-tight">Core Processing Engine</div>
                      <div className="text-[#CBF432] text-[9px] font-mono mt-0.5">Async Workers · Event Bus</div>
                    </div>
                  </motion.div>
                </motion.div>

                <NodeCard icon="⚡" label="Redis Cluster" sub="Sub-ms Cache" left="328px" top="146px" delay={0.6} />
                <NodeCard icon="🗄️" label="PostgreSQL" sub="ACID Storage" left="312px" top="16px" delay={0.7} />
                <NodeCard icon="🧠" label="AI Vector Store" sub="Embeddings · RAG" left="24px" top="195px" pulse delay={0.8} />

                {/* Embedded Terminal */}
                <motion.div
                  className="absolute z-20"
                  style={{ left: 16, bottom: 20, right: 16 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Terminal />
                </motion.div>
              </div>

            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
