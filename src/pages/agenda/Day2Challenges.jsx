import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, ChevronUp, CheckCircle, ExternalLink,
  Code2, Zap, Globe, Rocket, Lightbulb, Terminal,
  Sparkles, ArrowRight, Star, Trophy, Shield, Target,
  BookOpen, ArrowLeft, Play, Monitor, Server, Layout,
  PenTool, Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   ACCORDION — Step-by-step guide
   ═══════════════════════════════════════════ */

function AccordionStep({ number, title, description, isOpen, onToggle, accentColor }) {
  const colors = {
    violet: { num: 'bg-violet-600 shadow-violet-500/30', border: 'border-violet-400/40', bg: 'bg-violet-500/8', text: 'text-violet-400', chevron: 'text-violet-400' },
    cyan:   { num: 'bg-cyan-600 shadow-cyan-500/30',   border: 'border-cyan-400/40',   bg: 'bg-cyan-500/8',   text: 'text-cyan-400',   chevron: 'text-cyan-400' },
    emerald:{ num: 'bg-emerald-600 shadow-emerald-500/30', border: 'border-emerald-400/40', bg: 'bg-emerald-500/8', text: 'text-emerald-400', chevron: 'text-emerald-400' },
  };
  const c = colors[accentColor] || colors.violet;

  return (
    <div className={`rounded-xl border ${isOpen ? c.border : 'border-slate-200 dark:border-slate-800'} bg-white dark:bg-slate-900 overflow-hidden transition-all duration-200`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
      >
        <span className={`w-7 h-7 rounded-full ${c.num} shadow-md flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
          {number}
        </span>
        <span className={`font-semibold text-sm flex-1 ${isOpen ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
          {title}
        </span>
        <span className={c.chevron}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {isOpen && (
        <div className={`px-4 pb-4 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 ${c.bg}`}>
          <p className="mt-2">{description}</p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PLATFORM CARD — tabbed accordion guide
   ═══════════════════════════════════════════ */

const platforms = [
  {
    id: 'v0',
    name: 'v0.dev',
    label: 'Platform A',
    subtitle: 'The UI Master',
    emoji: '🎨',
    accent: 'violet',
    gradient: 'from-violet-600 to-purple-700',
    badge: 'Frontend · React + Tailwind',
    url: 'https://v0.dev',
    useCase: 'Building landing pages for school clubs, personal portfolio websites, or designing the visual layout of an app idea.',
    makes: 'Frontend code (React and Tailwind CSS). It makes things look incredible, but it doesn\'t handle backend databases.',
    steps: [
      { title: 'Create an Account', description: 'Go to v0.dev. Click "Log In" in the top right. Select "Continue with GitHub" or "Continue with Google" — no password needed.' },
      { title: 'Write Your First Prompt', description: 'Type exactly what you want in the chat box. Example: "Create a dark-themed personal portfolio for a computer science student with a hero section and a project grid."' },
      { title: 'Review the Generations', description: 'v0 will generate three visual variations. Browse all three previews and choose your favorite layout to continue with.' },
      { title: 'Iterate and Tweak', description: 'Highlight sections or chat directly. Example: "Make this button rounded and neon green" or "Move the contact section above the footer."' },
      { title: 'Get Your Code', description: 'Click the "Code" button in the top right to copy the React/HTML code to your clipboard — ready to paste into any project.' },
    ],
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    label: 'Platform B',
    subtitle: 'The Full-Stack Sandbox',
    emoji: '⚡',
    accent: 'cyan',
    gradient: 'from-cyan-600 to-blue-700',
    badge: 'Full-Stack · Live Preview',
    url: 'https://bolt.new',
    useCase: 'Building fully functional web apps like to-do lists, weather apps pulling real data, or study tools.',
    makes: 'Full-stack applications. It writes code, installs software packages, and runs a live preview server directly in your browser tab.',
    steps: [
      { title: 'Sign In', description: 'Go to bolt.new and sign in using a GitHub account. This links your projects to version control automatically.' },
      { title: 'Start a New Environment', description: 'Describe your app in the prompt box. Example: "Build a flashcard studying app where users can flip cards to see answers."' },
      { title: 'Watch the Engine Run', description: 'The screen splits: left shows terminal logs and file creation in real time; right shows a live preview updating as code is written.' },
      { title: 'Fixing Errors', description: 'Copy the red error text, paste into chat, and say: "I got this error, please fix it." Bolt diagnoses and patches automatically.' },
      { title: 'Deploy', description: 'Click "Deploy" in the top right to instantly generate a public shareable link. Share with classmates and teachers immediately.' },
    ],
  },
  {
    id: 'replit',
    name: 'Replit Agent',
    label: 'Platform C',
    subtitle: 'The Heavyweight Partner',
    emoji: '🤖',
    accent: 'emerald',
    gradient: 'from-emerald-600 to-teal-700',
    badge: 'Backend + Cloud VM',
    url: 'https://replit.com',
    useCase: 'Complex apps requiring secure user logins, permanent databases (like student grade trackers), or multiplayer games.',
    makes: 'Complete backend and frontend infrastructure utilizing cloud-hosted virtual machines — always online, accessible worldwide.',
    steps: [
      { title: 'Sign Up', description: 'Go to replit.com and log in with Google or GitHub. Your workspace is available from any device — no installation required.' },
      { title: 'Open Workspace', description: 'Click "Create Repl" and select the "Agent" option. This opens the AI-powered development environment.' },
      { title: 'Give Instructions', description: 'Provide your high-level concept. Example: "Build a campus textbook marketplace where students can list and search for textbooks by subject."' },
      { title: 'Collaborate', description: 'The Agent generates a step-by-step development roadmap before coding. Review it, approve the plan, then watch it build feature by feature.' },
      { title: 'Review Files', description: 'Explore the generated folder tree on the left to learn how professional software is architecturally structured — routes, components, and databases.' },
    ],
  },
];

function PlatformCard({ platform }) {
  const [openStep, setOpenStep] = useState(null);
  const [tab, setTab] = useState('guide');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-card overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${platform.gradient} px-6 py-5 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{platform.emoji}</span>
          <div>
            <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-0.5">{platform.label}</div>
            <h3 className="font-heading font-extrabold text-xl text-white leading-tight">{platform.name}</h3>
            <p className="text-white/80 text-sm">{platform.subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{platform.badge}</span>
          <a href={platform.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium transition-colors">
            Visit <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800">
        {[{ id: 'guide', label: 'Step-by-Step Guide', icon: BookOpen }, { id: 'info', label: 'Details', icon: Target }].map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setTab(id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-semibold transition-colors border-b-2 ${
              tab === id
                ? 'border-violet-500 text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/10'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
            }`}>
            <Icon size={13} /> {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {tab === 'guide' ? (
          <div className="space-y-2.5">
            {platform.steps.map((step, i) => (
              <AccordionStep
                key={i}
                number={i + 1}
                title={step.title}
                description={step.description}
                isOpen={openStep === i}
                onToggle={() => setOpenStep(openStep === i ? null : i)}
                accentColor={platform.accent}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">⭐ Best Use Case</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{platform.useCase}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">⚙️ What It Makes</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{platform.makes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   QUEST CARD — interactive challenge tracker
   ═══════════════════════════════════════════ */

const challenges = [
  {
    id: 1,
    level: 'STARTER',
    levelColor: 'emerald',
    icon: Star,
    emoji: '🌐',
    title: 'Personal Website',
    goal: 'Build your own homepage or visual digital resume using AI.',
    difficulty: 1,
    timeEstimate: '1–2 hrs',
    requirements: [
      'Hero section with your name and a short bio',
      '"About Me" tab with your skills and interests',
      'Gallery / project grid showcasing your work',
      'Clickable contact form (name, email, message)',
      'Focus on layout, color scheme, and professional look',
    ],
    promptTip: '"Build a modern personal portfolio site for a computer science student. Include a hero section, about me, skills grid, project cards, and a contact form. Use a dark theme with purple/indigo accents."',
    badge: '🏅 Portfolio Builder',
  },
  {
    id: 2,
    level: 'BUILDER',
    levelColor: 'amber',
    icon: Zap,
    emoji: '🛒',
    title: 'Web Shop (E-Commerce Storefront)',
    goal: 'Design an interactive product store page using AI.',
    difficulty: 2,
    timeEstimate: '2–3 hrs',
    requirements: [
      'Fictional shop concept (e.g., custom sneakers, gaming gear, baked goods)',
      'Product grid with images, names, and prices',
      'Dynamic filter buttons (filter by price or category)',
      'Working "Add to Cart" sidebar that totals item cost when clicked',
      'Cart summary with quantity controls and total price',
    ],
    promptTip: '"Build a modern e-commerce product page for a custom sneaker store. Include a product grid, filter buttons by category and price range, and a working cart sidebar that shows item totals. Use a clean, minimal design."',
    badge: '🚀 Shop Builder',
  },
  {
    id: 3,
    level: 'ADVANCED',
    levelColor: 'rose',
    icon: Shield,
    emoji: '🔐',
    title: 'Full-Stack App with Secure Login',
    goal: 'Create a functional web application with a frontend and a backend database using AI.',
    difficulty: 3,
    timeEstimate: '3–5 hrs',
    requirements: [
      'Working Login screen (email + password validation)',
      'Sign-Up screen that creates a new user profile',
      'Backend database that stores user accounts securely',
      'Protected dashboard only visible to logged-in users',
      'Unauthorized visitors are blocked and redirected to login',
      'Example idea: private study planner, secret diary, or grade tracker',
    ],
    promptTip: '"Build a full-stack web app called StudyVault — a private study planner. It must have a Sign Up and Login page using real authentication. After login, users see their private dashboard. Unauthorized users should be redirected to login. Use Node.js backend with a database."',
    badge: '🔥 Full-Stack Dev',
  },
];

const levelColors = {
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-emerald-200 dark:border-emerald-800/50', badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-500', glow: 'shadow-emerald-500/20', icon: 'bg-emerald-500', ring: 'ring-emerald-400' },
  amber:   { bg: 'bg-amber-50 dark:bg-amber-900/10',   border: 'border-amber-200 dark:border-amber-800/50',   badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',   dot: 'bg-amber-500',   glow: 'shadow-amber-500/20',   icon: 'bg-amber-500',   ring: 'ring-amber-400' },
  rose:    { bg: 'bg-rose-50 dark:bg-rose-900/10',     border: 'border-rose-200 dark:border-rose-800/50',     badge: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',     dot: 'bg-rose-500',     glow: 'shadow-rose-500/20',     icon: 'bg-rose-500',     ring: 'ring-rose-400' },
};

function QuestCard({ challenge, completed, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const c = levelColors[challenge.levelColor];
  const Icon = challenge.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(challenge.promptTip.replace(/^"|"$/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`card border-l-4 ${completed ? 'border-l-brand-emerald' : `border-l-${challenge.levelColor === 'emerald' ? 'emerald' : challenge.levelColor === 'amber' ? 'amber' : 'rose'}-500`} ${c.bg} ${c.border} transition-all duration-300`}>
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Completion toggle */}
          <button
            onClick={onToggle}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
              completed
                ? 'bg-brand-emerald border-brand-emerald shadow-md shadow-emerald-500/30'
                : 'border-slate-300 dark:border-slate-600 hover:border-emerald-400'
            }`}
          >
            {completed && <CheckCircle size={14} className="text-white" />}
          </button>

          {/* Emoji + info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-2xl">{challenge.emoji}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                {challenge.level}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 ml-auto">⏱ {challenge.timeEstimate}</span>
            </div>

            <h3 className={`font-heading font-bold text-lg ${completed ? 'line-through text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
              Challenge {challenge.id}: {challenge.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{challenge.goal}</p>

            {/* Difficulty dots */}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-slate-400 mr-1">Difficulty:</span>
              {[1, 2, 3].map((d) => (
                <span key={d} className={`w-2 h-2 rounded-full ${d <= challenge.difficulty ? c.dot : 'bg-slate-200 dark:bg-slate-700'}`} />
              ))}
            </div>
          </div>

          {/* Expand toggle */}
          <button onClick={() => setExpanded(!expanded)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex-shrink-0">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-slate-100 dark:border-slate-800 pt-4">
          {/* Requirements */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">📋 Requirements</p>
            <ul className="space-y-1.5">
              {challenge.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Prompt Starter */}
          <div>
            <button
              onClick={() => setPromptVisible(!promptVisible)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-blue-600 transition-colors mb-2"
            >
              <Sparkles size={12} />
              {promptVisible ? 'Hide Starter Prompt' : 'Show Starter Prompt'} →
            </button>
            {promptVisible && (
              <div className="relative bg-slate-900 dark:bg-slate-950 rounded-xl p-4 border border-slate-700">
                <p className="text-sm text-emerald-300 font-mono leading-relaxed pr-8">{challenge.promptTip}</p>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  title="Copy prompt"
                >
                  {copied
                    ? <CheckCircle size={14} className="text-emerald-400" />
                    : <span className="text-xs text-slate-300">📋</span>
                  }
                </button>
              </div>
            )}
          </div>

          {/* Badge */}
          {completed && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
              {challenge.badge} Earned!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   ROOT PAGE
   ═══════════════════════════════════════════ */

export default function Day2Challenges() {
  const [completedChallenges, setCompletedChallenges] = useState(new Set());

  const toggleChallenge = (id) => {
    setCompletedChallenges(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const progress = Math.round((completedChallenges.size / challenges.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

      {/* ── HEADER ── */}
      <div className="text-center space-y-4">
        <span className="badge-blue inline-flex"><Zap size={13} />Day 2 Workshop</span>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
          Vibe Coding &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
            AI Web Creation
          </span>
        </h1>
        <p className="section-subtitle mx-auto">
          Stop staring at a blank screen. Describe what you want — let AI write the code, and you direct the vision.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 1 — WHAT IS AI WEB CREATION
          ══════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Section 1</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">What is AI Web Creation?</h2>
          </div>
          <span className="ml-auto badge-blue text-xs">The Student Definition</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Traditional */}
          <div className="card p-6 border-l-4 border-l-slate-400">
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={18} className="text-slate-500" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">Traditional Coding</h3>
              <span className="ml-auto text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">The Builder</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              <strong className="text-slate-800 dark:text-slate-200">You are the builder.</strong> You place every brick (line of code) by hand. If you miss a single semicolon, the house falls down.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 font-mono text-xs text-red-500">
              → SyntaxError: Missing ';' on line 47
            </div>
          </div>

          {/* Vibe Coding */}
          <div className="card p-6 border-l-4 border-l-violet-500 bg-violet-50/50 dark:bg-violet-950/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-violet-500" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">AI Web Creation (Vibe Coding)</h3>
              <span className="ml-auto text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 px-2 py-0.5 rounded-full">The Architect</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">You are the architect and the director.</strong> Use plain English to describe the website you want. The AI acts as your team of expert programmers — instantly writing HTML, CSS, JavaScript, and database connections. You review, tweak, and they rewrite in seconds.
            </p>
          </div>
        </div>

        {/* Core takeaway */}
        <div className="card p-5 flex items-start gap-4 border-l-4 border-l-brand-blue bg-blue-50 dark:bg-blue-950/20">
          <Lightbulb size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">Core Takeaway</span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              You still learn how code works, but you learn by <strong>reading and modifying working projects</strong>, rather than staring at a blank screen.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — RULES FOR SUCCESS
          ══════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
            <Trophy size={20} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Section 2</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">The Vibe Coder's Rules for Success</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              num: '01', icon: PenTool, color: 'violet',
              bg: 'bg-violet-50 dark:bg-violet-950/20', border: 'border-violet-200 dark:border-violet-800/40',
              iconBg: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400',
              title: 'Be Specific',
              desc: 'Don\'t just say "make a game." Say "make a 2D snake game using HTML canvas with a scoreboard."',
              example: '"Make a 2D snake game using HTML canvas with a live scoreboard and speed levels."',
            },
            {
              num: '02', icon: Layers, color: 'cyan',
              bg: 'bg-cyan-50 dark:bg-cyan-950/20', border: 'border-cyan-200 dark:border-cyan-800/40',
              iconBg: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-400',
              title: 'Take Baby Steps',
              desc: 'Build a login screen first, then add profile pages, then add features. Don\'t ask for everything at once.',
              example: 'Login → Profile → Dashboard → Features → Deploy',
            },
            {
              num: '03', icon: BookOpen, color: 'emerald',
              bg: 'bg-emerald-50 dark:bg-emerald-950/20', border: 'border-emerald-200 dark:border-emerald-800/40',
              iconBg: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400',
              title: 'Read the Code',
              desc: 'Always ask the AI to explain lines you don\'t understand to build up your own coding literacy!',
              example: '"Explain what this useEffect hook does, line by line."',
            },
          ].map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.num} className={`card p-6 border ${rule.border} ${rule.bg} hover:-translate-y-1 transition-transform`}>
                <div className={`w-12 h-12 rounded-2xl ${rule.iconBg} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest ${rule.text} mb-1`}>Rule {rule.num}</div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">{rule.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{rule.desc}</p>
                <div className={`p-3 rounded-xl border ${rule.border} bg-white/60 dark:bg-slate-900/40 text-xs italic ${rule.text}`}>
                  {rule.example}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — TOOLKIT
          ══════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
            <Code2 size={20} className="text-cyan-600 dark:text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Section 3</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">The Ultimate Web Creation Toolkit</h2>
          </div>
        </div>

        {/* Quick nav */}
        <div className="grid grid-cols-3 gap-3">
          {platforms.map(p => (
            <button
              key={p.id}
              onClick={() => document.getElementById(`platform-${p.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`py-2.5 px-3 rounded-xl text-white font-bold text-sm bg-gradient-to-r ${p.gradient} shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
            >
              {p.emoji} {p.name}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {platforms.map(p => (
            <div key={p.id} id={`platform-${p.id}`} className="scroll-mt-24">
              <PlatformCard platform={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — DEPLOYMENT
          ══════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
            <Rocket size={20} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Section 4</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">How to Upload to a Server</h2>
          </div>
          <span className="ml-auto badge-emerald text-xs">Deployment Guide</span>
        </div>

        {/* Analogy */}
        <div className="card p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white border-indigo-800/30">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">🏠→🌐</div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-2">The Lego Castle Analogy</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Coding in your AI browser chat is like building a Lego castle inside your bedroom — <strong className="text-white">only you can see it</strong>. "Uploading to a server" (Deployment) means moving that castle to a <strong className="text-indigo-300">public global museum with a dedicated URL</strong> so anyone can visit it 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Per-platform deploy */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { platform: 'v0.dev', emoji: '🎨', gradient: 'from-violet-600 to-purple-700', timing: '~10 seconds', action: 'Click "Deploy" → top right', result: 'Vercel automatically hosts your frontend and hands you a live URL.' },
            { platform: 'Bolt.new', emoji: '⚡', gradient: 'from-cyan-600 to-blue-700', timing: '~30 seconds', action: 'Click "Deploy"', result: 'Connects to your GitHub and uses Netlify to compile, optimize, and launch.' },
            { platform: 'Replit', emoji: '🤖', gradient: 'from-emerald-600 to-teal-700', timing: '1–2 minutes', action: 'Click "Deploy" → choose "Static" or "Reserved VM"', result: 'Assigns an active cloud server slot — always online, worldwide.' },
          ].map((d) => (
            <div key={d.platform} className="card p-5 flex flex-col gap-3">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-white text-sm font-bold bg-gradient-to-r ${d.gradient} w-fit`}>
                {d.emoji} {d.platform}
              </div>
              <p className="text-xs text-slate-500">⏱ {d.timing}</p>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Action</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{d.action}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Result</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{d.result}</p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Globe size={12} /> Live URL generated ✓
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — CHALLENGES
          ══════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
            <Trophy size={20} className="text-rose-600 dark:text-rose-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Section 5</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Vibe Coding Challenges</h2>
          </div>
          <span className="ml-auto badge-blue text-xs">Level Up Your Portfolio</span>
        </div>

        {/* Progress bar */}
        <div className="card p-5 flex items-center gap-5">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {completedChallenges.size} / {challenges.length} Challenges Complete
              </span>
              <span className="font-bold text-brand-blue">{progress}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-brand-blue to-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {progress === 100 && (
            <div className="text-2xl animate-bounce">🏆</div>
          )}
        </div>

        {/* Quest Cards */}
        <div className="space-y-5">
          {challenges.map((challenge) => (
            <QuestCard
              key={challenge.id}
              challenge={challenge}
              completed={completedChallenges.has(challenge.id)}
              onToggle={() => toggleChallenge(challenge.id)}
            />
          ))}
        </div>

        {/* Complete banner */}
        {progress === 100 && (
          <div className="card p-6 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="font-heading font-bold text-xl mb-1">You crushed all 3 challenges!</h3>
            <p className="text-white/80 text-sm">You've built a Personal Site, a Web Shop, and a Full-Stack App. You're officially a Vibe Coder!</p>
          </div>
        )}
      </section>

      {/* ── BACK LINK ── */}
      <div className="pt-8 text-center border-t border-slate-200 dark:border-slate-800">
        <Link to="/agenda/day2" className="text-sm font-semibold text-brand-blue hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={14} /> Back to Day 2 Agenda
        </Link>
      </div>

    </div>
  );
}
