import { Clock, Target, CheckCircle, Star, Trophy, BookOpen, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  { cat: 'Content & Writing', color: 'blue', items: [
    { name: 'ChatGPT', desc: 'Best for: Creative writing, brainstorming, drafting content', emoji: '💬' },
    { name: 'Gemini', desc: 'Best for: Google Workspace integration, multimodal tasks', emoji: '✨' },
    { name: 'Claude', desc: 'Best for: Long documents, nuanced analysis, safe outputs', emoji: '🤖' },
  ]},
  { cat: 'Research', color: 'emerald', items: [
    { name: 'Perplexity', desc: 'Best for: Source-cited answers, fact-checking, research', emoji: '🔍' },
    { name: 'Elicit', desc: 'Best for: Academic research, literature review, paper summaries', emoji: '📖' },
  ]},
  { cat: 'Presentation Creation', color: 'purple', items: [
    { name: 'Gamma', desc: 'Best for: AI-generated slides from a prompt in minutes', emoji: '🎯' },
    { name: 'Canva AI', desc: 'Best for: Visually rich presentations with AI design suggestions', emoji: '🎨' },
  ]},
  { cat: 'Image Generation', color: 'rose', items: [
    { name: 'Microsoft Designer', desc: 'Best for: Free AI image creation with DALL-E integration', emoji: '🖼️' },
    { name: 'Adobe Firefly', desc: 'Best for: Professional, commercially safe AI-generated images', emoji: '🔥' },
  ]},
  { cat: 'Productivity', color: 'amber', items: [
    { name: 'Notion AI', desc: 'Best for: Smart note-taking, summarising, writing inside Notion', emoji: '📋' },
    { name: 'Grammarly', desc: 'Best for: Grammar correction, tone adjustment, clarity improvements', emoji: '✅' },
  ]},
];

const activities = [
  { emoji: '🎯', text: 'Generate a presentation using Gamma or Canva AI' },
  { emoji: '🖼️', text: 'Create an image from a detailed text prompt' },
  { emoji: '📄', text: 'Summarize a research article using Perplexity or Elicit' },
  { emoji: '⚖️', text: 'Compare outputs from two different AI tools on the same prompt' },
];

const rubric = [
  { criterion: 'Prompt Quality', marks: 25, desc: 'How specific, structured, and context-rich is the prompt?' },
  { criterion: 'Creativity', marks: 25, desc: 'Does the output show original thinking and creative application?' },
  { criterion: 'Output Relevance', marks: 25, desc: 'Does the AI output directly address the challenge?' },
  { criterion: 'Presentation', marks: 25, desc: 'How clearly and professionally is the result communicated?' },
];

const challenges = [
  { emoji: '📚', text: 'Create a study plan using AI' },
  { emoji: '🎨', text: 'Generate a poster for an event' },
  { emoji: '📰', text: 'Summarize a news article' },
  { emoji: '📱', text: 'Design a social media post' },
  { emoji: '💡', text: 'Create a simple business idea using AI' },
];

const colorMap = {
  blue: 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/10',
  emerald: 'border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/10',
  purple: 'border-l-purple-500 bg-purple-50 dark:bg-purple-900/10',
  rose: 'border-l-rose-500 bg-rose-50 dark:bg-rose-900/10',
  amber: 'border-l-amber-500 bg-amber-50 dark:bg-amber-900/10',
};

export default function Day1() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="badge-blue inline-flex"><Star size={13} />Day 1 Agenda</span>
        <h1 className="section-title">Foundations & AI Tools Lab</h1>
        <p className="section-subtitle mx-auto">
          A full-day immersive program covering AI fundamentals, prompting, ethics, hands-on tool exploration, and a mini challenge.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Clock size={15} /><span>09:30 AM – 04:30 PM</span>
        </div>
      </div>

      {/* Session 4: Tools Lab */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
            <Zap size={20} className="text-brand-blue" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 4</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">AI Tools Exploration Lab</h2>
          </div>
          <span className="ml-auto text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />02:00 – 03:30 PM</span>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-brand-blue" />
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Learning Outcome</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Students should explore practical AI tools and understand which tools are best suited for different tasks.</p>
        </div>

        {/* Tools by category */}
        <div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-6">Suggested Tools by Category</h3>
          <div className="space-y-4">
            {tools.map((group) => (
              <div key={group.cat} className={`card border-l-4 p-6 ${colorMap[group.color]}`}>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wider">{group.cat}</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {group.items.map((tool) => (
                    <div key={tool.name} className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-700 hover:shadow-card transition-shadow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{tool.emoji}</span>
                        <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">{tool.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="card p-6">
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-4">Hands-On Activities</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xl">{a.emoji}</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Instructions */}
        <div className="card p-6 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/10">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={16} className="text-amber-600" />
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Faculty Instructions</h3>
          </div>
          <ul className="space-y-2">
            {['Focus on use cases rather than features — show WHY, not just HOW','Demonstrate responsible AI usage: attribution, fact-checking','Allow students to explore independently — guided discovery over lecture'].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle size={13} className="text-amber-600 mt-0.5 flex-shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Session 5: Mini Challenge */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
            <Trophy size={20} className="text-brand-emerald" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 5</div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Mini Activity Challenge</h2>
          </div>
          <span className="ml-auto text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />03:30 – 04:30 PM</span>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-brand-emerald" />
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Objective</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Evaluate student understanding of prompt engineering and AI tools through a practical, timed activity.</p>
        </div>

        <div className="card p-6">
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">Activity Format</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Students individually or in teams:</p>
          <div className="space-y-3">
            {['Receive a task / problem statement','Create effective prompts for the task','Generate outputs using AI tools of choice','Submit results through the portal'].map((step, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="w-7 h-7 rounded-full bg-brand-emerald/10 text-brand-emerald text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brand-emerald/10 to-brand-blue/10 border-brand-emerald/20">
          <div>
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">Hands-On Challenges</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Explore our curated list of Easy, Medium, and Hard challenges complete with a detailed Prompt Library.
            </p>
          </div>
          <Link to="/agenda/day1/challenges" className="btn-primary flex items-center gap-2 whitespace-nowrap bg-brand-emerald hover:bg-emerald-600 shadow-emerald-500/20">
            View All Challenges <ArrowRight size={16} />
          </Link>
        </div>

        {/* Evaluation Rubric */}
        <div className="card p-6">
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-4">
            Evaluation Criteria — Total: 100 Marks
          </h3>
          <div className="space-y-3">
            {rubric.map((r) => (
              <div key={r.criterion} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="text-center min-w-[52px]">
                  <div className="font-heading font-bold text-xl text-brand-blue">{r.marks}</div>
                  <div className="text-xs text-slate-400">marks</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{r.criterion}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{r.desc}</div>
                </div>
                <div className="ml-auto w-24 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-emerald w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-of-Day Wrap-up */}
      <section className="card p-8 border-t-4 border-t-brand-emerald">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={20} className="text-brand-emerald" />
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">End-of-Day Wrap-up</h2>
          <span className="ml-auto text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />04:30 PM</span>
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wider">Faculty Should Ensure</h3>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {['Attendance completed','Portal login successful','Students understand AI basics','Students can write effective prompts','Students explored at least 3 AI tools','Activity submissions collected'].map((item) => (
            <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/10">
              <CheckCircle size={14} className="text-brand-emerald flex-shrink-0" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
