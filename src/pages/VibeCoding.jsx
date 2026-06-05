import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Zap, Globe, Rocket, ChevronDown, ChevronRight,
  Lightbulb, Users, BookOpen, Star, ExternalLink, CheckCircle,
  Monitor, Database, Server, Play, ArrowRight, Sparkles,
  PenTool, Eye, Terminal, Cpu, Shield, Layout, Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const fadeUpChild = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ═══════════════════════════════════════════
   REUSABLE: SECTION HEADING
   ═══════════════════════════════════════════ */

function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-14">
      {badge && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="badge-blue inline-flex mb-4"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-100 mb-4 leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            {highlight}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   REUSABLE: ACCORDION STEP
   ═══════════════════════════════════════════ */

function AccordionStep({ number, title, description, isOpen, onToggle, accent = 'violet' }) {
  const accentMap = {
    violet: {
      bg: 'bg-violet-500',
      border: 'border-violet-500/40',
      glow: 'shadow-violet-500/20',
      text: 'text-violet-400',
      light: 'bg-violet-500/10',
    },
    cyan: {
      bg: 'bg-cyan-500',
      border: 'border-cyan-500/40',
      glow: 'shadow-cyan-500/20',
      text: 'text-cyan-400',
      light: 'bg-cyan-500/10',
    },
    emerald: {
      bg: 'bg-emerald-500',
      border: 'border-emerald-500/40',
      glow: 'shadow-emerald-500/20',
      text: 'text-emerald-400',
      light: 'bg-emerald-500/10',
    },
    amber: {
      bg: 'bg-amber-500',
      border: 'border-amber-500/40',
      glow: 'shadow-amber-500/20',
      text: 'text-amber-400',
      light: 'bg-amber-500/10',
    },
    pink: {
      bg: 'bg-pink-500',
      border: 'border-pink-500/40',
      glow: 'shadow-pink-500/20',
      text: 'text-pink-400',
      light: 'bg-pink-500/10',
    },
  };
  const c = accentMap[accent] || accentMap.violet;

  return (
    <motion.div
      layout
      className={`rounded-2xl border ${isOpen ? `${c.border} shadow-lg ${c.glow}` : 'border-slate-200 dark:border-slate-800'} bg-white dark:bg-slate-900 overflow-hidden transition-shadow duration-300`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      >
        <div className={`w-8 h-8 rounded-full ${c.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg ${c.glow}`}>
          {number}
        </div>
        <span className={`font-heading font-semibold text-base flex-1 ${isOpen ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
          {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className={`flex-shrink-0 ${c.text}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={`px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 ${c.light} rounded-b-2xl`}>
              <p className="mt-3">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-6 border border-violet-200 dark:border-violet-700/40"
        >
          <Sparkles size={14} />
          Day 2 Workshop
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 text-slate-900 dark:text-slate-100 leading-none"
        >
          Vibe Coding &{' '}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400">
            AI Web Creation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Stop staring at a blank screen. Describe what you want — let AI write the code, and you direct the vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 border-0"
          >
            <Play size={18} /> Start Learning
          </button>
          <button
            onClick={() => document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-slate-700 dark:text-slate-300"
          >
            Explore Toolkit
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16"
        >
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="mx-auto text-slate-400" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — WHAT IS AI WEB CREATION
   ═══════════════════════════════════════════ */

function WhatIsSection() {
  return (
    <section id="what-is" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="📖 The Student Definition"
          title="What is"
          highlight="AI Web Creation?"
          subtitle="Two ways to build on the web — one letter at a time, or one idea at a time."
        />

        {/* Comparison cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Traditional coding */}
          <motion.div
            variants={fadeUpChild}
            whileHover={{ y: -6, scale: 1.015 }}
            className="relative rounded-3xl p-8 border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <Terminal size={24} className="text-slate-600 dark:text-slate-300" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Traditional Coding</h3>
                <span className="text-xs text-slate-500 font-medium">The Builder Approach</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-5">
              <strong className="text-slate-800 dark:text-slate-200">You are the builder.</strong> You place every brick (line of code) by hand. If you miss a single semicolon, the house falls down.
            </p>
            <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-sm font-mono text-slate-600 dark:text-slate-300">
              <span className="text-red-500 select-none">→</span>
              <code>Missing semicolon on line 47… Error!</code>
            </div>
          </motion.div>

          {/* AI Web Creation */}
          <motion.div
            variants={fadeUpChild}
            whileHover={{ y: -6, scale: 1.015 }}
            className="relative rounded-3xl p-8 border border-violet-200 dark:border-violet-800/50 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400" />
            {/* glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Sparkles size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">AI Web Creation (Vibe Coding)</h3>
                <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">The Architect Approach</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-5">
              <strong className="text-slate-800 dark:text-slate-200">You are the architect and the director.</strong> You use plain English to describe the website you want. The AI acts as your team of expert programmers—writing HTML, CSS, JavaScript, and database connections instantly.
            </p>
            <div className="flex items-start gap-2 p-3 rounded-xl bg-violet-100/60 dark:bg-violet-900/30 text-sm text-violet-700 dark:text-violet-300 italic">
              <Sparkles size={14} className="flex-shrink-0 mt-0.5" />
              <span>"Build me a portfolio site with a hero section and project cards."</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Core takeaway */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-violet-950/50 to-slate-900 p-8 md:p-10 text-white border border-violet-800/30 overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
              <Lightbulb size={26} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-violet-300 mb-2">Core Takeaway</div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-3">You still learn how code works.</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                But you learn by <strong className="text-white">reading and modifying working projects</strong>, rather than staring at a blank screen.
                You review the AI's work, tell it what to tweak, and it rewrites in seconds — making you a faster, more confident developer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — TOOLKIT (Platforms)
   ═══════════════════════════════════════════ */

const platforms = [
  {
    id: 'v0',
    name: 'v0.dev',
    subtitle: 'The UI Master',
    emoji: '🎨',
    accent: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    borderGlow: 'border-violet-500/30 shadow-violet-500/10',
    badge: 'Frontend First',
    badgeBg: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    useCase: 'Building landing pages for school clubs, personal portfolios, or designing the visual layout of an app idea.',
    makes: 'Frontend code (React and Tailwind CSS). It makes things look incredible, but it doesn\'t handle backend databases.',
    url: 'https://v0.dev',
    steps: [
      {
        title: 'Create an Account',
        description: 'Go to v0.dev. Click "Log In" in the top right. Select "Continue with GitHub" or "Continue with Google" to sign in instantly.',
      },
      {
        title: 'Write Your First Prompt',
        description: 'Use the chat box to type exactly what you want to see. For example: "Create a dark-themed personal portfolio for a computer science student with a hero section and a project grid."',
      },
      {
        title: 'Review the Generations',
        description: 'v0 will generate three visual variations. Browse all three previews and choose your favorite layout to continue with.',
      },
      {
        title: 'Iterate and Tweak',
        description: 'Highlight specific sections or use the chat to make direct edits. For example: "Make this button rounded and neon green" or "Move the contact section above the footer."',
      },
      {
        title: 'Get Your Code',
        description: 'Click the "Code" button in the top right to copy the React/HTML code to your clipboard — ready to paste into any project.',
      },
    ],
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    subtitle: 'The Full-Stack Sandbox',
    emoji: '⚡',
    accent: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    borderGlow: 'border-cyan-500/30 shadow-cyan-500/10',
    badge: 'Full-Stack',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    useCase: 'Building fully functional web apps like to-do lists, weather apps pulling real data, or study tools.',
    makes: 'Full-stack applications. It writes code, installs software packages, and runs a live preview server directly in your browser tab.',
    url: 'https://bolt.new',
    steps: [
      {
        title: 'Sign In',
        description: 'Go to bolt.new and sign in using a GitHub account. This links your projects to version control automatically.',
      },
      {
        title: 'Start a New Environment',
        description: 'Describe a complete app concept in the prompt box. For example: "Build a flashcard studying app where users can flip cards to see answers."',
      },
      {
        title: 'Watch the Engine Run',
        description: 'The screen splits. The left side shows terminal logs and file creation in real time. The right side shows a live preview of your running app — updating as code is written.',
      },
      {
        title: 'Fixing Errors',
        description: 'If something breaks, copy the red error text, paste it into the chat, and tell Bolt: "I got this error, please fix it." It diagnoses and patches automatically.',
      },
      {
        title: 'Deploy',
        description: 'Click "Deploy" in the top right to instantly generate a public shareable link. Share it with classmates and teachers immediately.',
      },
    ],
  },
  {
    id: 'replit',
    name: 'Replit Agent',
    subtitle: 'The Heavyweight Partner',
    emoji: '🤖',
    accent: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    borderGlow: 'border-emerald-500/30 shadow-emerald-500/10',
    badge: 'Backend + Cloud',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    useCase: 'Complex apps requiring secure user logins, permanent databases (like student grade trackers), or multiplayer games.',
    makes: 'Complete backend and frontend infrastructure utilizing cloud-hosted virtual machines.',
    url: 'https://replit.com',
    steps: [
      {
        title: 'Sign Up',
        description: 'Go to replit.com and log in with Google or GitHub. Your workspace is instantly available from any device — no installation required.',
      },
      {
        title: 'Open Workspace',
        description: 'Click "Create Repl" and select the "Agent" option from the list. This opens the AI-powered development environment.',
      },
      {
        title: 'Give Instructions',
        description: 'Provide your high-level concept clearly. For example: "Build a campus textbook marketplace where students can list and search for textbooks by subject."',
      },
      {
        title: 'Collaborate',
        description: 'The Agent generates a step-by-step development roadmap before starting to code. Review it, approve the plan, then watch it build each feature one by one.',
      },
      {
        title: 'Review Files',
        description: 'Explore the generated folder tree on the left panel to learn how professional software is architecturally structured — routes, components, and databases.',
      },
    ],
  },
];

function PlatformCard({ platform }) {
  const [openStep, setOpenStep] = useState(null);
  const [tab, setTab] = useState('guide');

  const accentGradients = {
    violet: 'from-violet-500 to-purple-600',
    cyan: 'from-cyan-500 to-blue-600',
    emerald: 'from-emerald-500 to-teal-600',
  };

  return (
    <motion.div
      variants={fadeUpChild}
      className={`bg-white dark:bg-slate-900 rounded-3xl border ${platform.borderGlow} shadow-xl overflow-hidden`}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${platform.gradient} p-6 md:p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{platform.emoji}</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-heading font-extrabold text-2xl text-white">{platform.name}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white`}>
                  {platform.badge}
                </span>
              </div>
              <p className="text-white/80 font-medium">{platform.subtitle}</p>
            </div>
          </div>
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-semibold transition-colors mt-1"
          >
            Visit <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-800 flex">
        {[
          { id: 'guide', label: 'Step-by-Step Guide', icon: BookOpen },
          { id: 'info', label: 'Details', icon: Eye },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors border-b-2 ${
              tab === id
                ? 'border-violet-500 text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/10'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {tab === 'guide' && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {platform.steps.map((step, i) => (
                <AccordionStep
                  key={i}
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isOpen={openStep === i}
                  onToggle={() => setOpenStep(openStep === i ? null : i)}
                  accent={platform.accent}
                />
              ))}
            </motion.div>
          )}

          {tab === 'info' && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <Star size={12} /> Best Use Case
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{platform.useCase}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <Code2 size={12} /> What It Makes
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{platform.makes}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ToolkitSection() {
  return (
    <section id="toolkit" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="🛠️ The Toolkit"
          title="The Ultimate Web"
          highlight="Creation Toolkit"
          subtitle="Three powerful platforms — each with a superpower. Pick the one that matches your idea."
        />

        {/* Quick compare bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {platforms.map((p) => (
            <motion.button
              key={p.id}
              variants={scaleIn}
              whileHover={{ y: -3 }}
              onClick={() => document.getElementById(`platform-${p.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className={`py-3 px-4 rounded-2xl border bg-gradient-to-r ${p.gradient} text-white font-heading font-bold text-sm shadow-lg hover:shadow-xl transition-all`}
            >
              {p.emoji} {p.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {platforms.map((p) => (
            <div key={p.id} id={`platform-${p.id}`} className="scroll-mt-24">
              <PlatformCard platform={p} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — DEPLOYMENT GUIDE
   ═══════════════════════════════════════════ */

const deploymentSteps = [
  {
    platform: 'v0.dev',
    emoji: '🎨',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-200 dark:border-violet-800/40',
    bg: 'bg-violet-50 dark:bg-violet-950/20',
    iconBg: 'bg-violet-500',
    action: 'Click the "Deploy" button in the top right.',
    result: 'Vercel automatically hosts your frontend and hands you a live URL in ~10 seconds.',
    timeEstimate: '~10 seconds',
  },
  {
    platform: 'Bolt.new',
    emoji: '⚡',
    color: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-200 dark:border-cyan-800/40',
    bg: 'bg-cyan-50 dark:bg-cyan-950/20',
    iconBg: 'bg-cyan-500',
    action: 'Click "Deploy".',
    result: 'Connects your project to your GitHub account and uses platforms like Netlify to compile, optimize, and launch your live site.',
    timeEstimate: '~30 seconds',
  },
  {
    platform: 'Replit',
    emoji: '🤖',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    iconBg: 'bg-emerald-500',
    action: 'Click "Deploy". Choose "Static" for basic sites or "Reserved VM" for apps with databases.',
    result: 'Assigns an active cloud server slot to your project — always online, accessible worldwide.',
    timeEstimate: '1–2 minutes',
  },
];

function DeploymentSection() {
  return (
    <section id="deploy" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="🚀 Deployment"
          title="How to Upload to a"
          highlight="Server"
          subtitle="Get your creation out of the browser and in front of the world with a real URL."
        />

        {/* Analogy card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 md:p-12 text-white mb-14 overflow-hidden border border-indigo-800/30"
        >
          <div className="absolute -right-12 -top-12 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
            {/* Left: Analogy icons */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="text-5xl">🏠</div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={28} className="text-indigo-400" />
              </motion.div>
              <div className="text-5xl">🌐</div>
            </div>
            {/* Right: explanation */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-2">The Concept</div>
              <h3 className="font-heading font-bold text-2xl mb-3">The Lego Castle Analogy</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Coding in your AI browser chat is like building a Lego castle inside your bedroom — <strong className="text-white">only you can see it</strong>. "Uploading to a server" (Deployment) means moving that castle to a <strong className="text-indigo-300">public global museum with a dedicated address (a URL)</strong> so anyone can visit it 24/7.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Per-platform deploy cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {deploymentSteps.map((step, i) => (
            <motion.div
              key={step.platform}
              variants={fadeUpChild}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`rounded-2xl p-6 border ${step.border} ${step.bg} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4`}
            >
              {/* Platform header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${step.iconBg} bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-lg`}>
                  {step.emoji}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100">{step.platform}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">⏱ {step.timeEstimate}</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 flex-shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{step.action}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.result}</p>
                </div>
              </div>

              {/* Result badge */}
              <div className={`mt-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700`}>
                <Globe size={13} className="text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Live URL generated ✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — RULES FOR SUCCESS
   ═══════════════════════════════════════════ */

const rules = [
  {
    number: '01',
    icon: PenTool,
    title: 'Be Specific',
    description: "Don't just say \"make a game.\" Say \"make a 2D snake game using HTML canvas with a scoreboard.\" The more detail you give, the better the AI understands your vision.",
    example: '"Make a 2D snake game using HTML canvas with a scoreboard."',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/25',
    bg: 'bg-violet-50 dark:bg-violet-950/20',
    border: 'border-violet-200 dark:border-violet-800/40',
    textAccent: 'text-violet-600 dark:text-violet-400',
    numberBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Take Baby Steps',
    description: 'Build a login screen first, then add profile pages, then add features. Don\'t ask for everything at once — you\'ll get overwhelmed and so will the AI.',
    example: 'Login → Profile → Dashboard → Features',
    color: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    bg: 'bg-cyan-50 dark:bg-cyan-950/20',
    border: 'border-cyan-200 dark:border-cyan-800/40',
    textAccent: 'text-cyan-600 dark:text-cyan-400',
    numberBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Read the Code',
    description: "Always ask the AI to explain lines you don't understand. Say: \"Explain what this function does line by line.\" This is how you build up your own coding literacy!",
    example: '"Explain what this function does line by line."',
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/25',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    textAccent: 'text-emerald-600 dark:text-emerald-400',
    numberBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
  },
];

function RulesSection() {
  return (
    <section id="rules" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="⭐ Rules for Success"
          title="The Vibe Coder's"
          highlight="Golden Rules"
          subtitle="Three principles that separate great vibe coders from confused ones."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {rules.map((rule, i) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUpChild}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-3xl p-8 border ${rule.border} ${rule.bg} shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${rule.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                {/* Number badge */}
                <div className={`w-14 h-14 rounded-2xl ${rule.numberBg} flex items-center justify-center mb-6 shadow-lg ${rule.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>

                {/* Rule number */}
                <div className={`text-xs font-bold uppercase tracking-widest ${rule.textAccent} mb-2`}>
                  Rule {rule.number}
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100 mb-4">
                  {rule.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {rule.description}
                </p>

                {/* Example prompt */}
                <div className={`p-3 rounded-xl border ${rule.border} bg-white/60 dark:bg-slate-900/40`}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Example</div>
                  <p className={`text-sm font-medium italic ${rule.textAccent}`}>{rule.example}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-heading font-bold text-lg shadow-2xl shadow-violet-500/25">
            <Rocket size={22} />
            You're ready to start building. Go make something awesome! 🎉
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ROOT EXPORT
   ═══════════════════════════════════════════ */

export default function VibeCoding() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIsSection />
      <ToolkitSection />
      <DeploymentSection />
      <RulesSection />
    </div>
  );
}
