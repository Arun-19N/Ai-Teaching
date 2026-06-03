import { Link } from 'react-router-dom';
import {
  Brain, Zap, Shield, BookOpen, Wrench,
  ArrowRight, CheckCircle, AlertTriangle,
  Star, ChevronRight, Lightbulb, MessageSquare, BarChart2
} from 'lucide-react';
import PromptToggle from '../components/PromptToggle';
import UseCaseGrid from '../components/UseCaseGrid';

const modules = [
  {
    icon: Brain, color: 'blue', badge: 'Module A', title: 'How AI Actually Works', subtitle: 'Simplified',
    desc: 'Demystify the magic. Understand AI, ML, and LLMs using everyday analogies — no math degree required.',
    topics: ['AI vs. Machine Learning (The Recipe Book)', 'How LLMs predict the next word', 'Hallucinations, bias & limits of AI'],
    href: '/how-ai-works',
    borderColor: 'border-t-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-brand-blue',
    badgeCls: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    bullet: 'text-brand-blue',
  },
  {
    icon: MessageSquare, color: 'emerald', badge: 'Module B', title: 'The Art of Asking', subtitle: 'Practical Prompting',
    desc: 'The single most valuable AI skill. Learn to craft prompts that get you exactly the output you need.',
    topics: ['Anatomy of a Good Prompt (Context, Task, Format)', 'Role-playing: Tell AI who to be', 'Iterative prompting for refined results'],
    href: '/prompting',
    borderColor: 'border-t-emerald-500',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-brand-emerald',
    badgeCls: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    bullet: 'text-brand-emerald',
  },
  {
    icon: Wrench, color: 'purple', badge: 'Module C', title: 'Everyday AI Tools', subtitle: 'Directory & Guide',
    desc: 'A curated directory of the best AI tools available right now — with clear guidance on what each is best for.',
    topics: ['Text & Research: ChatGPT, Claude, Perplexity', 'Images & Slides: Midjourney, Gamma, Canva AI', 'Productivity: Copilot, Notion AI, Grammarly'],
    href: '/tools',
    borderColor: 'border-t-purple-500',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    badgeCls: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    bullet: 'text-purple-500',
  },
];

const stats = [
  { value: '3', label: 'Core Modules', icon: BookOpen },
  { value: '11+', label: 'AI Tools Covered', icon: Wrench },
  { value: '2', label: 'Workshop Days', icon: Star },
  { value: '18', label: 'Practical Use Cases', icon: Zap },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl -z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="badge-blue inline-flex">
                <Zap size={13} />
                Free AI Literacy Program · 2-Day Workshop
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight text-slate-900 dark:text-slate-100">
                Make <span className="text-gradient-blue">AI</span> Work{' '}
                <span className="text-gradient-emerald">for You</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Demystifying Artificial Intelligence: Learn the basics, master practical tools, and
                boost your daily productivity —{' '}
                <strong className="text-slate-900 dark:text-slate-200">without needing a computer science degree.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/how-ai-works" id="hero-cta-primary" className="btn-primary">
                  Start the Basics <ArrowRight size={16} />
                </Link>
                <Link to="/tools" id="hero-cta-secondary" className="btn-secondary">
                  Explore AI Tools <ChevronRight size={16} />
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {['No CS degree needed', '100% free resources', 'Hands-on activities'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <CheckCircle size={14} className="text-brand-emerald" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-emerald/20 rounded-3xl blur-2xl" />
                <img
                  src="/hero.png"
                  alt="A person interacting with an AI assistant"
                  className="relative rounded-3xl shadow-2xl max-w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">{value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ────────────────────────────────────────────────────── */}
      <section id="modules" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="badge-emerald inline-flex"><BookOpen size={13} />Core Curriculum</div>
            <h2 className="section-title">Three Modules to AI Fluency</h2>
            <p className="section-subtitle mx-auto">
              From understanding how AI thinks, to crafting perfect prompts, to finding the right tools — all explained in plain English.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.id} className={`card p-6 border-t-4 ${mod.borderColor} group`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mod.iconBg}`}>
                        <Icon size={24} />
                      </div>
                      <span className={`badge ${mod.badgeCls}`}>{mod.badge}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-0.5">{mod.title}</h3>
                      <p className="text-sm font-medium text-slate-400 mb-3">{mod.subtitle}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{mod.desc}</p>
                    </div>
                    <ul className="space-y-2">
                      {mod.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${mod.bullet}`} />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link to={mod.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-3 transition-all duration-200">
                      Explore Module <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ──────────────────────────────────────────────────── */}
      <section id="use-cases" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="badge-blue inline-flex"><Lightbulb size={13} />Real-World Applications</div>
            <h2 className="section-title">AI in Action — Practical Use Cases</h2>
            <p className="section-subtitle mx-auto">
              Select your role to see exactly how AI can help you today — no theory, just practical examples.
            </p>
          </div>
          <UseCaseGrid />
        </div>
      </section>

      {/* ── PROMPT TOGGLE ──────────────────────────────────────────────── */}
      <section id="prompts" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="badge-emerald inline-flex"><MessageSquare size={13} />Interactive Lesson</div>
            <h2 className="section-title">The Prompt Makes All the Difference</h2>
            <p className="section-subtitle mx-auto">
              Toggle between a weak and a well-crafted prompt. Same task. Completely different results.
            </p>
          </div>
          <PromptToggle />
        </div>
      </section>

      {/* ── WORKSHOP TEASER ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="badge-blue inline-flex"><BarChart2 size={13} />2-Day Workshop</div>
            <h2 className="section-title">Full Workshop Agenda</h2>
            <p className="section-subtitle mx-auto">
              A structured, hands-on program from AI fundamentals to building and pitching your own AI-powered project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/agenda/day1" className="card p-8 group hover:border-brand-blue transition-colors block">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-blue">Day 1</span>
                  <span className="text-xs text-slate-400">09:30 AM – 04:30 PM</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 group-hover:text-brand-blue transition-colors">
                  Foundations & Tools Lab
                </h3>
                <ul className="space-y-2.5">
                  {['Session 1: AI Fundamentals & Concepts','Session 2: Prompt Engineering Masterclass','Session 3: Ethics, Safety & Responsible AI','Session 4: AI Tools Exploration Lab','Session 5: Mini Activity Challenge'].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
                  View Day 1 Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link to="/agenda/day2" className="card p-8 group hover:border-brand-emerald transition-colors block">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-emerald">Day 2</span>
                  <span className="text-xs text-slate-400">09:30 AM – 03:15 PM</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 group-hover:text-brand-emerald transition-colors">
                  Build, Deploy & Innovate
                </h3>
                <ul className="space-y-2.5">
                  {['Session 1: Recap & Team Formation','Session 2: Vibe Coding with AI Platforms','Session 3: Website / App Building Lab','Session 4: Idea Bank & Innovation Challenge'].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald group-hover:gap-3 transition-all">
                  View Day 2 Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SAFETY ────────────────────────────────────────────────────── */}
      <section id="safety" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="badge inline-flex bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"><Shield size={13} />AI Safety & Ethics</div>
            <h2 className="section-title">Use AI Responsibly</h2>
            <p className="section-subtitle mx-auto">AI is a powerful tool — and with great power comes great responsibility.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-8 border-l-4 border-l-amber-500">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <Shield className="text-amber-600" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">🔒 Don't Share Sensitive Data</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Never input personal information, passwords, financial details, or confidential company data into public AI tools.
              </p>
              <ul className="space-y-1.5">
                {['No National ID / Aadhaar / passport numbers','No bank details or card numbers','No company trade secrets or client data','No passwords or API keys'].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <AlertTriangle size={13} className="text-amber-500 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8 border-l-4 border-l-brand-blue">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <CheckCircle className="text-brand-blue" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">🔍 Trust but Verify</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                AI can confidently state incorrect facts — this is called a <strong>"hallucination."</strong> Always fact-check important AI outputs.
              </p>
              <ul className="space-y-1.5">
                {['Cross-check statistics with official sources','Verify medical or legal information with experts',"Don't cite AI output directly in academic work",'Use Perplexity.ai for source-backed answers'].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle size={13} className="text-brand-blue flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue via-blue-600 to-brand-emerald p-12 md:p-16 text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative space-y-6">
              <h2 className="font-heading font-bold text-4xl md:text-5xl">Ready to Start?</h2>
              <p className="text-xl text-blue-100 max-w-xl mx-auto">
                Join the AI literacy movement. Start with the basics, explore real tools, and complete your workshop challenges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/how-ai-works" id="cta-start" className="bg-white text-brand-blue font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-lg">
                  Begin Module A
                </Link>
                <Link to="/agenda/day1" id="cta-agenda" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 transition-all hover:-translate-y-0.5">
                  View Workshop Agenda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
