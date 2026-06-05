import { Clock, CheckCircle, Lightbulb, Code2, Rocket, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  { name: 'Cursor', emoji: '⌨️', desc: 'AI-powered IDE — write code by describing what you want' },
  { name: 'Bolt.new', emoji: '⚡', desc: 'Full-stack apps from a single prompt in the browser' },
  { name: 'v0 by Vercel', emoji: '🎨', desc: 'Generate React UI components from natural language' },
  { name: 'Lovable', emoji: '💜', desc: 'Build and deploy web apps with AI in minutes' },
];

const session2Topics = [
  {
    title: 'What is Vibe Coding?',
    icon: Code2,
    items: ['Definition and concept of AI-assisted development', 'Comparing traditional coding vs AI-assisted coding', 'How prompts replace syntax knowledge for prototyping'],
  },
  {
    title: 'Prompting AI Development Agents',
    icon: Lightbulb,
    items: ['Defining clear project requirements', 'Creating functional specifications', 'UI/UX requirement prompting', 'Feature enhancement and iteration prompting'],
  },
  {
    title: 'Application Development Workflow',
    icon: Rocket,
    items: ['Idea → Prompt → Prototype', 'Prototype → Testing → Iteration', 'Final → Deployment & Sharing'],
  },
];

export default function Day2() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="badge-emerald inline-flex">Day 2 Agenda</span>
        <h1 className="section-title">
          Vibe Coding &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
            AI Web Creation
          </span>
        </h1>
        <p className="section-subtitle mx-auto">
          From AI-assisted development to building real websites and apps — today you go from learner to builder using the power of Vibe Coding.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Clock size={15} /><span>09:30 AM – 03:15 PM</span>
        </div>
      </div>

      {/* Session 2: Vibe Coding */}
      <section className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Code2 size={20} className="text-brand-emerald" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 2</div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Vibe Coding (AI Development)</h2>
              <span className="text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />10:00 – 11:30 AM</span>
            </div>
          </div>
        </div>

        {/* AI Platforms */}
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">AI Development Platforms</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="card p-5 group hover:border-brand-emerald transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-brand-emerald transition-colors">{p.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="grid md:grid-cols-3 gap-4">
          {session2Topics.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="card p-5">
                <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-brand-emerald" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">{t.title}</h4>
                <ul className="space-y-1.5">
                  {t.items.map((item) => (
                    <li key={item} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                      <span className="text-brand-emerald mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Hands-on Activities */}
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Hands-On Activities</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Generate a simple landing page', 'Create a student management interface', 'Design a department event registration page', 'Build a basic chatbot interface'].map((a) => (
              <div key={a} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <span className="text-brand-emerald">⚡</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/10">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Faculty Tips</h3>
          <ul className="space-y-1.5">
            {['Demonstrate prompt refinement live — show how adding detail improves output','Show iterative development: start simple, add features with follow-up prompts','Emphasize problem-solving through prompting, not memorising syntax'].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle size={13} className="text-amber-600 mt-0.5 flex-shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Day 2 Challenges CTA */}
      <section className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border-violet-200 dark:border-violet-800/40">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={18} className="text-violet-600 dark:text-violet-400" />
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Vibe Coding Challenges</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Build a Personal Website, a Web Shop, and a Full-Stack App with login — complete with starter prompts and portfolio badges.
          </p>
        </div>
        <Link
          to="/agenda/day2/challenges"
          className="btn-primary flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 border-0 shadow-lg shadow-violet-500/20"
        >
          View Challenges <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
