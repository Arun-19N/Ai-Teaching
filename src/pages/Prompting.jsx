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

      {/* Definition Section */}
      <section className="card p-8 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-l-brand-blue">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 mb-4">What exactly is Prompt Engineering?</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Think of an AI model like a brilliant, hyper-fast intern who has read every book in the world but has <strong>zero common sense</strong> and <strong>no idea what you actually want</strong>. 
          </p>
          <p>
            If you give this intern a vague instruction like <em>"write a report on AI"</em>, you might get a 50-page highly technical document, or a 3-paragraph poem. It's technically correct, but completely useless to you.
          </p>
          <p>
            <strong>Prompt Engineering is the skill of giving this intern precise, context-rich instructions.</strong> It is not just "typing questions into a chat box." It is the process of structuring text so that the AI understands your intent, the format you need, the tone to use, and the constraints it must follow.
          </p>
          <p className="font-semibold text-brand-blue dark:text-blue-400">
            In short: In the past, we had to learn complex coding languages to instruct computers. Today, plain English is the new programming language, and Prompt Engineering is how you write the code.
          </p>
        </div>

        {/* The Intern Example */}
        <div className="mt-8 space-y-4 border-t border-blue-200 dark:border-blue-800/30 pt-8">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">The "Intern" Example in Action</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Bad Prompt */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 text-xs font-bold">✕</span>
                <span className="font-bold text-red-900 dark:text-red-300 text-sm">The Bad Prompt</span>
              </div>
              <p className="text-sm font-mono text-slate-700 dark:text-slate-400 mb-4 bg-white/50 dark:bg-slate-900/50 p-3 rounded-lg border border-red-50 dark:border-red-900/20">
                "Explain blockchain to me."
              </p>
              <div className="text-xs text-red-800 dark:text-red-200">
                <span className="font-bold uppercase tracking-wider text-[10px] block mb-1">What the AI does:</span>
                It dumps a highly technical, boring Wikipedia-style explanation full of jargon like "cryptographic hashes," "distributed ledgers," and "nodes." You are left more confused than when you started.
              </div>
            </div>

            {/* Good Prompt */}
            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 text-xs font-bold">✓</span>
                <span className="font-bold text-emerald-900 dark:text-emerald-300 text-sm">The Engineered Prompt</span>
              </div>
              <p className="text-sm font-mono text-slate-700 dark:text-slate-400 mb-4 bg-white/50 dark:bg-slate-900/50 p-3 rounded-lg border border-emerald-50 dark:border-emerald-900/20">
                "Act as a friendly high school computer science teacher. Explain how blockchain works to a 10th-grade student who has no technical background. Use a real-world analogy, like sharing a digital notebook with classmates. Do not use any complex jargon. Keep it under 3 paragraphs."
              </p>
              <div className="text-xs text-emerald-800 dark:text-emerald-200">
                <span className="font-bold uppercase tracking-wider text-[10px] block mb-1">What the AI does:</span>
                It takes on the persona of a teacher. It avoids big words. It creates a relatable analogy (a shared notebook). It keeps it short. It gives you <strong>exactly</strong> the output you needed.
              </div>
            </div>
          </div>
        </div>
      </section>

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
