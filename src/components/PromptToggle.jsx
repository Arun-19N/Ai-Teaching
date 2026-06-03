import { useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const examples = [
  {
    id: 1,
    topic: 'Email Request',
    bad: {
      prompt: 'Write me an email to my boss about taking time off.',
      issues: ['No context given', 'No tone specified', 'No dates or reason', 'Vague output expected'],
      result: "You'll get a generic, robotic email that may not match your company culture.",
    },
    good: {
      prompt: "Act as a professional employee at a mid-sized tech company. Write a polite and concise email to my manager requesting PTO for next Friday (June 13th). My name is Alex. Mention that all current projects are up to date and I'll be reachable for urgent matters. Keep it under 150 words.",
      improvements: ['Clear role: "professional employee"', 'Specific date included', 'Context: projects up to date', 'Output constraint: under 150 words'],
      result: "You'll get a polished, ready-to-send email that feels natural and professional.",
    },
  },
  {
    id: 2,
    topic: 'Study Guide',
    bad: {
      prompt: 'Help me study for my exam.',
      issues: ['No subject specified', 'No exam details', 'No learning style', 'Too vague to be useful'],
      result: "You'll get a generic study tips list that doesn't help with your actual exam.",
    },
    good: {
      prompt: "Act as a patient and encouraging tutor. Create a 1-hour study plan for my Chapter 5 Biology exam on Cell Division (Mitosis & Meiosis). I'm a visual learner. Include a 5-question quiz at the end with answers. Use clear headings and bullet points.",
      improvements: ['Role: "patient tutor"', 'Specific chapter and topic', 'Learning style noted', 'Structured output requested'],
      result: "You'll get a detailed, personalised study guide with exactly the format you need.",
    },
  },
  {
    id: 3,
    topic: 'Business Idea',
    bad: {
      prompt: 'Give me a business idea.',
      issues: ['No industry or interest', 'No budget constraints', 'No target audience', 'No evaluation criteria'],
      result: 'A random, generic idea with no relevance to you.',
    },
    good: {
      prompt: 'Act as a startup mentor. Generate 3 low-cost business ideas for a college student in India with skills in graphic design and social media. Each idea should include: problem it solves, target customer, how to start with under ₹5000, and realistic monthly earning potential.',
      improvements: ['Persona: "startup mentor"', 'Specific context (student, India)', 'Skills provided', 'Structured format with 4 criteria'],
      result: 'Actionable, relevant ideas tailored to your exact situation.',
    },
  },
];

export default function PromptToggle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showGood, setShowGood] = useState(false);
  const ex = examples[activeIdx];

  return (
    <div className="space-y-6">
      {/* Example selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {examples.map((e, i) => (
          <button
            key={e.id}
            onClick={() => { setActiveIdx(i); setShowGood(false); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeIdx === i
                ? 'bg-brand-blue text-white shadow-blue-glow'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {e.topic}
          </button>
        ))}
      </div>

      {/* Toggle switch */}
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-semibold ${!showGood ? 'text-red-500' : 'text-slate-400 dark:text-slate-600'}`}>
          ❌ Bad Prompt
        </span>
        <button
          id="prompt-toggle-btn"
          onClick={() => setShowGood(!showGood)}
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue ${
            showGood ? 'bg-brand-emerald' : 'bg-red-400'
          }`}
          aria-label="Toggle prompt quality"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
              showGood ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-sm font-semibold ${showGood ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-600'}`}>
          ✅ Good Prompt
        </span>
      </div>

      {/* Content */}
      <div
        className={`rounded-2xl border-2 p-6 transition-all duration-500 ${
          showGood
            ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/10'
            : 'border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          {showGood
            ? <CheckCircle2 className="text-emerald-500" size={20} />
            : <AlertCircle className="text-red-500" size={20} />}
          <span className={`font-semibold text-sm ${showGood ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
            {showGood ? 'Well-Crafted Prompt' : 'Weak Prompt'}
          </span>
        </div>

        <div className={`font-mono text-sm p-4 rounded-xl mb-5 border ${
          showGood
            ? 'bg-emerald-100/50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-slate-200'
            : 'bg-red-100/50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-slate-800 dark:text-slate-200'
        }`}>
          "{showGood ? ex.good.prompt : ex.bad.prompt}"
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${showGood ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
              {showGood ? 'What Makes It Great' : "What's Missing"}
            </h4>
            <ul className="space-y-1.5">
              {(showGood ? ex.good.improvements : ex.bad.issues).map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className={`mt-0.5 flex-shrink-0 font-bold ${showGood ? 'text-emerald-500' : 'text-red-400'}`}>
                    {showGood ? '✓' : '✗'}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${showGood ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
              Expected Result
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {showGood ? ex.good.result : ex.bad.result}
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
        <ChevronRight size={12} />
        Toggle above to see the difference — same task, completely different results
      </p>
    </div>
  );
}
