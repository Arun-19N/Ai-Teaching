import { MessageSquare, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PromptToggle from '../components/PromptToggle';

const anatomy = [
  { label: 'Context', icon: '🌍', color: 'blue', desc: 'Set the scene. Who are you? What situation are you in? What does the AI need to know before answering?', example: '"I am a 3rd-year engineering student working on a final year project about AI in healthcare."' },
  { label: 'Task', icon: '🎯', color: 'emerald', desc: 'Be specific about what you want. Use action verbs. The more precise, the better the output.', example: '"Suggest 5 research topics and briefly explain the AI technology involved in each."' },
  { label: 'Format', icon: '📐', color: 'purple', desc: 'Tell AI how to present the answer. Bullet points, table, email, JSON, paragraph — specify it.', example: '"Present your answer as a numbered list with a title, 2-sentence description, and the AI technique used."' },
];

const roleExamples = [
  { role: 'Career Advisor', prompt: 'Act as a career advisor for a recent CS graduate in India. Review my resume and suggest 3 improvements.', emoji: '👔' },
  { role: 'Strict Editor', prompt: 'Act as a harsh but fair editor. Review this paragraph for clarity, conciseness, and impact. Be direct.', emoji: '✍️' },
  { role: 'Startup Mentor', prompt: 'Act as a Y Combinator startup mentor. Give critical feedback on this business idea from an investor perspective.', emoji: '🚀' },
  { role: 'Patient Teacher', prompt: 'Act as a patient 10th-grade science teacher. Explain quantum entanglement using a simple real-world analogy.', emoji: '🧑‍🏫' },
];

const iterativeSteps = [
  { step: 1, title: 'Start Broad', desc: 'Give your initial prompt and see what you get. Don\'t try to be perfect immediately.', example: '"Write an introduction for my AI project report."' },
  { step: 2, title: 'Evaluate & Refine', desc: 'What\'s missing? What\'s wrong? Tell AI exactly what to change in a follow-up message.', example: '"Make it more formal. Add a statistic about AI adoption rates. Cut the length by half."' },
  { step: 3, title: 'Layer Constraints', desc: 'Add specific constraints — tone, length, audience, format — one at a time as you refine.', example: '"Now make it suitable for a non-technical audience. Use simpler vocabulary."' },
  { step: 4, title: 'Iterate Until Right', desc: 'Keep refining. You can have a full conversation. AI remembers context within a chat session.', example: '"Perfect. Now write 3 alternative versions with different opening sentences."' },
];

export default function Prompting() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center space-y-4">
        <span className="badge-emerald inline-flex"><MessageSquare size={13} />Module B</span>
        <h1 className="section-title">The Art of Asking</h1>
        <p className="section-subtitle mx-auto">
          Prompting is the single most important skill in the age of AI. Learn to ask well, and you'll get results that feel like magic.
        </p>
      </div>

      {/* Anatomy Section */}
      <section className="space-y-6">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">The Anatomy of a Good Prompt</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Every great prompt has three components. Master these and your AI outputs will transform instantly.</p>
        <div className="space-y-4">
          {anatomy.map((a, i) => (
            <div key={a.label} className={`card p-6 border-l-4 ${a.color === 'blue' ? 'border-l-brand-blue' : a.color === 'emerald' ? 'border-l-brand-emerald' : 'border-l-purple-500'}`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${a.color === 'blue' ? 'bg-brand-blue' : a.color === 'emerald' ? 'bg-brand-emerald' : 'bg-purple-500'}`}>{i + 1}</span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">{a.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{a.desc}</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 font-mono text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {a.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Role-Playing */}
      <section className="space-y-6">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">Role-Playing: Tell AI Who to Be</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Adding "Act as a [role]" to your prompt dramatically changes the quality, tone, and perspective of the response.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {roleExamples.map((r) => (
            <div key={r.role} className="card p-5 group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{r.emoji}</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm group-hover:text-brand-blue transition-colors">{r.role}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 leading-relaxed">"{r.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Iterative Prompting */}
      <section className="space-y-6">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">Iterative Prompting: Have a Conversation</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Don't expect perfection on the first try. The best outputs come from refining your prompt through a back-and-forth conversation.</p>
        <div className="space-y-3">
          {iterativeSteps.map((s) => (
            <div key={s.step} className="card p-5 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center flex-shrink-0 text-sm">{s.step}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{s.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{s.desc}</p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2">{s.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">See It In Action</h2>
        <PromptToggle />
      </section>

      <div className="card p-8 text-center space-y-4 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 border-none">
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Now Explore the Best AI Tools</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Know how to prompt — now discover which tools to use for which tasks.</p>
        <Link to="/tools" className="btn-primary mx-auto w-fit">Explore AI Tools <ArrowRight size={16} /></Link>
      </div>
    </div>
  );
}
