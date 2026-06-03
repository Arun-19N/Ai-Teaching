import { useState } from 'react';
import {
  BookOpen, Zap, Code2, Search, FileText,
  Image, Video, Lightbulb, ChevronDown, ChevronUp,
  Copy, Check, Star, ArrowRight, Target
} from 'lucide-react';

// ─── Model Data ───────────────────────────────────────────────────────────────
const models = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    maker: 'OpenAI',
    emoji: '💬',
    color: 'blue',
    category: 'Text & Reasoning',
    tagline: 'The all-rounder — best for reasoning, writing, and coding.',
    definition:
      'ChatGPT is a Large Language Model (LLM) designed for conversation, reasoning, writing, coding, research assistance, and learning support.',
    bestUses: [
      'Research assistance & explanations',
      'Content creation & copywriting',
      'Coding help & debugging',
      'Teaching, tutoring & learning',
      'Business communication & emails',
      'Prompt engineering practice',
    ],
    examplePrompt:
      'Act as an expert research assistant. Explain the impact of Artificial Intelligence on Business Analytics with examples, advantages, and future trends.',
    tip: 'Use ChatGPT when you need detailed explanations, brainstorming, coding support, or educational content.',
    link: 'https://chat.openai.com',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    maker: 'Google',
    emoji: '✨',
    color: 'emerald',
    category: 'Multimodal',
    tagline: 'Google\'s multimodal AI — reads text, images, docs & the web.',
    definition:
      'Gemini is Google\'s multimodal AI model capable of understanding text, images, documents, videos, and web-connected information.',
    bestUses: [
      'Academic research with web access',
      'Google Workspace integration',
      'Large document analysis',
      'Web-based information gathering',
      'Image and video understanding',
    ],
    examplePrompt:
      'Analyze this research paper and provide a summary, methodology, findings, and future research opportunities.',
    tip: 'Best for research, document analysis, and Google ecosystem users.',
    link: 'https://gemini.google.com',
  },
  {
    id: 'claude',
    name: 'Claude',
    maker: 'Anthropic',
    emoji: '🤖',
    color: 'purple',
    category: 'Long-Context Analysis',
    tagline: 'Best for long documents, business reports & academic writing.',
    definition:
      'Claude is an AI assistant optimized for long-context understanding, reasoning, document analysis, and professional writing.',
    bestUses: [
      'Long documents & large PDFs',
      'Academic writing & editing',
      'Policy analysis & legal review',
      'Business reports & summaries',
      'Critical thinking & analysis tasks',
    ],
    examplePrompt:
      'Review this 20-page business report and provide an executive summary with key recommendations.',
    tip: 'Best for handling large PDFs and detailed professional documents.',
    link: 'https://claude.ai',
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    maker: 'Perplexity',
    emoji: '🔍',
    color: 'cyan',
    category: 'Research & Citations',
    tagline: 'AI answer engine — every response comes with real sources.',
    definition:
      'Perplexity is an AI-powered answer engine that combines web search with conversational AI to deliver cited, up-to-date answers.',
    bestUses: [
      'Fact-checking & verification',
      'Literature review with citations',
      'Current affairs & news research',
      'Finding academic sources',
      'Quick referenced summaries',
    ],
    examplePrompt:
      'Provide recent research articles on Agentic AI published within the last two years and cite sources.',
    tip: 'Best for research requiring references and citations.',
    link: 'https://perplexity.ai',
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    maker: 'Microsoft',
    emoji: '🔵',
    color: 'indigo',
    category: 'Productivity',
    tagline: 'AI built into Word, Excel, PowerPoint, and Outlook.',
    definition:
      'Copilot is Microsoft\'s AI assistant integrated into Windows, Office 365, and development tools for seamless productivity.',
    bestUses: [
      'Excel data analysis & charts',
      'PowerPoint slide creation',
      'Word document generation',
      'Outlook email drafting',
      'Business productivity workflows',
    ],
    examplePrompt:
      'Analyze this Excel dataset and generate key insights with charts.',
    tip: 'Best for Microsoft Office productivity tasks.',
    link: 'https://copilot.microsoft.com',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    maker: 'GitHub / Microsoft',
    emoji: '⌨️',
    color: 'slate',
    category: 'Coding',
    tagline: 'AI pair programmer — writes, debugs and explains code.',
    definition:
      'GitHub Copilot is an AI coding assistant that helps developers write, debug, and optimize code directly in their code editor.',
    bestUses: [
      'Code generation & autocomplete',
      'Bug detection & debugging',
      'Code explanation & documentation',
      'Unit test generation',
      'Multi-language programming support',
    ],
    examplePrompt:
      'Generate a Python Flask application with user authentication and database connectivity.',
    tip: 'Best for software developers and programming students.',
    link: 'https://github.com/features/copilot',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    maker: 'Midjourney Inc.',
    emoji: '🎨',
    color: 'rose',
    category: 'Image Generation',
    tagline: 'Creates stunning artistic images from text descriptions.',
    definition:
      'Midjourney is an AI image generation model that creates artistic and high-quality visuals from text prompts.',
    bestUses: [
      'Posters & creative design',
      'Concept art & illustrations',
      'Branding & visual identity',
      'Marketing visuals',
      'Artistic explorations',
    ],
    examplePrompt:
      'Create a futuristic smart city powered by AI, ultra-realistic, cinematic lighting, 8K quality.',
    tip: 'Best for creative and artistic image generation.',
    link: 'https://midjourney.com',
  },
  {
    id: 'dalle',
    name: "DALL·E",
    maker: 'OpenAI',
    emoji: '🖼️',
    color: 'amber',
    category: 'Image Generation',
    tagline: 'Converts text descriptions into detailed images and illustrations.',
    definition:
      "DALL·E is OpenAI's image generation model that converts text descriptions into images, ideal for educational and business visuals.",
    bestUses: [
      'Educational illustrations',
      'Marketing graphics & ads',
      'Concept visualization',
      'Product mockups & prototypes',
      'Infographic creation',
    ],
    examplePrompt:
      'Create an infographic explaining the evolution of Artificial Intelligence.',
    tip: 'Best for educational and business visuals.',
    link: 'https://openai.com/dall-e-3',
  },
  {
    id: 'runway',
    name: 'Runway ML',
    maker: 'Runway',
    emoji: '🎬',
    color: 'violet',
    category: 'Video Generation',
    tagline: 'AI-powered video creation, editing, and motion graphics.',
    definition:
      'Runway ML is an AI-powered video generation and editing platform that enables professional-quality video creation from prompts.',
    bestUses: [
      'AI video creation & editing',
      'Motion graphics & effects',
      'Marketing & promotional videos',
      'Short-form content production',
      'Visual storytelling',
    ],
    examplePrompt:
      'Create a 30-second promotional video about Agentic AI with cinematic transitions and subtitles.',
    tip: 'Best for AI-assisted video production.',
    link: 'https://runwayml.com',
  },
  {
    id: 'sora',
    name: 'Sora',
    maker: 'OpenAI',
    emoji: '🎥',
    color: 'orange',
    category: 'Video Generation',
    tagline: 'Generates realistic, cinematic videos from text prompts.',
    definition:
      "Sora is OpenAI's text-to-video model capable of generating highly realistic videos from text descriptions.",
    bestUses: [
      'Educational video content',
      'AI storytelling & narratives',
      'Simulations & demonstrations',
      'Marketing & brand content',
      'Realistic scenario visualization',
    ],
    examplePrompt:
      'Generate a 60-second video showing the future classroom powered by Artificial Intelligence.',
    tip: 'Best for realistic AI-generated videos.',
    link: 'https://openai.com/sora',
  },
];

// ─── Tool Selection Table ─────────────────────────────────────────────────────
const toolTable = [
  { task: 'Research', tools: ['ChatGPT', 'Gemini', 'Perplexity'] },
  { task: 'Academic Writing', tools: ['Claude', 'ChatGPT'] },
  { task: 'Coding', tools: ['GitHub Copilot', 'ChatGPT'] },
  { task: 'Data Analysis', tools: ['Copilot', 'ChatGPT'] },
  { task: 'Presentation Creation', tools: ['Copilot', 'Gamma AI'] },
  { task: 'Image Generation', tools: ['Midjourney', 'DALL·E'] },
  { task: 'Video Generation', tools: ['Sora', 'Runway ML'] },
  { task: 'Brainstorming', tools: ['ChatGPT'] },
  { task: 'Literature Review', tools: ['Perplexity', 'Gemini'] },
  { task: 'Long Document Analysis', tools: ['Claude'] },
];

// ─── Color Mappings ──────────────────────────────────────────────────────────
const colorMap = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-900/10',   border: 'border-t-blue-500',   icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',   badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
  emerald:{ bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-t-emerald-500', icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600', badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-500' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-900/10', border: 'border-t-purple-500', icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600', badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300', dot: 'bg-purple-500' },
  cyan:   { bg: 'bg-cyan-50 dark:bg-cyan-900/10',   border: 'border-t-cyan-500',   icon: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600',   badge: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300', dot: 'bg-cyan-500' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/10', border: 'border-t-indigo-500', icon: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600', badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300', dot: 'bg-indigo-500' },
  slate:  { bg: 'bg-slate-50 dark:bg-slate-800/50', border: 'border-t-slate-500', icon: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300', badge: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300', dot: 'bg-slate-500' },
  rose:   { bg: 'bg-rose-50 dark:bg-rose-900/10',   border: 'border-t-rose-500',   icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600',   badge: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300', dot: 'bg-rose-500' },
  amber:  { bg: 'bg-amber-50 dark:bg-amber-900/10', border: 'border-t-amber-500', icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300', dot: 'bg-amber-500' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-900/10', border: 'border-t-violet-500', icon: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600', badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300', dot: 'bg-violet-500' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-900/10', border: 'border-t-orange-500', icon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600', badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300', dot: 'bg-orange-500' },
};

// ─── Category filter options ──────────────────────────────────────────────────
const categories = ['All', 'Text & Reasoning', 'Multimodal', 'Long-Context Analysis', 'Research & Citations', 'Productivity', 'Coding', 'Image Generation', 'Video Generation'];

// ─── Copy prompt button component ────────────────────────────────────────────
function CopyPrompt({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handle}
      className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-blue transition-colors px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
      title="Copy prompt"
    >
      {copied ? <Check size={12} className="text-brand-emerald" /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy prompt'}
    </button>
  );
}

// ─── Single Model Card ────────────────────────────────────────────────────────
function ModelCard({ model, index }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[model.color];

  return (
    <div className={`card border-t-4 ${c.border} overflow-hidden group`} id={model.id}>
      {/* Header */}
      <div className={`p-6 ${c.bg}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{model.emoji}</span>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">{model.name}</h3>
                <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                  {model.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">by {model.maker}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-6 h-6 rounded-full bg-slate-900/10 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center justify-center">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300 italic">"{model.tagline}"</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        {/* Definition */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Definition</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{model.definition}</p>
        </div>

        {/* Best Uses */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Best Uses</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {model.bestUses.map((use) => (
              <li key={use} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                {use}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable: Example Prompt + Tip */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-blue transition-colors py-2 border-t border-slate-100 dark:border-slate-800"
        >
          <span>Example Prompt & Student Tip</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="space-y-4 animate-fade-in">
            {/* Example Prompt */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Example Prompt</h4>
                <CopyPrompt text={model.examplePrompt} />
              </div>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 text-sm font-mono text-emerald-400 leading-relaxed border border-slate-700">
                "{model.examplePrompt}"
              </div>
            </div>

            {/* Student Tip */}
            <div className={`rounded-xl p-4 ${c.bg} border border-slate-200/50 dark:border-slate-700/50`}>
              <div className="flex items-start gap-2">
                <Star size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Student Tip</span>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{model.tip}</p>
                </div>
              </div>
            </div>

            {/* Try Link */}
            <a
              href={model.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
            >
              Try {model.name} <ArrowRight size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AIModels() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedFormula, setCopiedFormula] = useState(false);

  const goldenFormula = 'Act as a Business Analytics Professor. Explain Machine Learning concepts to second-year undergraduate students. Include definitions, examples, applications, advantages, and limitations. Present the answer in a structured table format.';

  const filtered = activeCategory === 'All'
    ? models
    : models.filter((m) => m.category === activeCategory);

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(goldenFormula).then(() => {
      setCopiedFormula(true);
      setTimeout(() => setCopiedFormula(false), 2000);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

      {/* ── PAGE HEADER ───────────────────────────────────────────────── */}
      <div className="text-center space-y-5">
        <div className="badge-blue inline-flex"><BookOpen size={13} />AI Learning Guide</div>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
          AI Models &{' '}
          <span className="text-gradient-blue">Professional</span>{' '}
          <span className="text-gradient-emerald">Usage Guide</span>
        </h1>
        <p className="section-subtitle mx-auto text-center">
          Learn the difference between AI models, when to use them, their strengths, limitations,
          and ready-to-use example prompts — all in one place.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {[
            { icon: '🧠', label: '10 AI Models Covered' },
            { icon: '💡', label: '10 Example Prompts' },
            { icon: '📊', label: 'Tool Selection Guide' },
            { icon: '🏆', label: 'Golden Prompt Formula' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="text-lg">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORY FILTER ──────────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 text-center">
          Browse by Category
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-blue-glow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400">
          Showing <strong className="text-slate-700 dark:text-slate-300">{filtered.length}</strong> AI model{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
        </p>
      </section>

      {/* ── MODEL CARDS GRID ─────────────────────────────────────────── */}
      <section>
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {filtered.map((model, i) => (
            <ModelCard key={model.id} model={model} index={models.indexOf(model)} />
          ))}
        </div>
      </section>

      {/* ── TOOL SELECTION TABLE ──────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <div className="badge-emerald inline-flex"><Target size={13} />Quick Reference</div>
          <h2 className="section-title">AI Tool Selection Guide</h2>
          <p className="section-subtitle mx-auto">
            Not sure which AI to use? Match your task to the best tool instantly.
          </p>
        </div>

        <div className="card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 dark:bg-slate-950 text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm uppercase tracking-wider w-2/5">Task / Use Case</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm uppercase tracking-wider">Best AI Tool(s)</th>
                </tr>
              </thead>
              <tbody>
                {toolTable.map((row, i) => (
                  <tr
                    key={row.task}
                    className={`border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors ${
                      i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{row.task}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {row.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-brand-blue/10 text-brand-blue text-xs font-semibold"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GOLDEN PROMPT FORMULA ──────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <div className="badge inline-flex bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
            <Star size={13} className="text-amber-500" />
            Golden Formula
          </div>
          <h2 className="section-title">The Golden Prompt Formula</h2>
          <p className="section-subtitle mx-auto">
            A universal framework that works with any AI model, for any task.
          </p>
        </div>

        {/* Formula blocks */}
        <div className="grid sm:grid-cols-5 gap-3">
          {[
            { part: 'ROLE', desc: 'Who should the AI be?', example: '"Act as a Professor..."', color: 'bg-blue-500' },
            { part: 'TASK', desc: 'What do you want?', example: '"Explain ML concepts..."', color: 'bg-emerald-500' },
            { part: 'CONTEXT', desc: 'Who is the audience?', example: '"...to undergrad students..."', color: 'bg-purple-500' },
            { part: 'REQUIREMENTS', desc: 'What must be included?', example: '"Include examples, pros, cons..."', color: 'bg-amber-500' },
            { part: 'FORMAT', desc: 'How should it look?', example: '"Present as a table."', color: 'bg-rose-500' },
          ].map((f, i) => (
            <div key={f.part} className="relative">
              {i < 4 && (
                <div className="hidden sm:flex absolute -right-1.5 top-1/2 -translate-y-1/2 z-10 w-3 h-3 bg-slate-200 dark:bg-slate-700 rounded-full items-center justify-center">
                  <span className="text-slate-500 text-xs">+</span>
                </div>
              )}
              <div className="card p-4 text-center h-full space-y-2">
                <div className={`w-8 h-8 rounded-lg ${f.color} mx-auto flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{i + 1}</span>
                </div>
                <div className={`inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded ${f.color} text-white`}>
                  {f.part}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{f.desc}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic">{f.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full formula display */}
        <div className="card p-0 overflow-hidden">
          <div className="bg-gradient-to-r from-brand-blue to-brand-emerald px-6 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm">📝 Full Example Prompt</span>
            <button
              onClick={handleCopyFormula}
              className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              {copiedFormula ? <Check size={12} /> : <Copy size={12} />}
              {copiedFormula ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="p-6 bg-slate-900 dark:bg-slate-950">
            <p className="text-emerald-400 font-mono text-sm leading-relaxed">
              "{goldenFormula}"
            </p>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
            <div className="grid sm:grid-cols-5 gap-2 text-xs">
              {[
                { label: 'ROLE', value: 'Business Analytics Professor', color: 'text-blue-600 dark:text-blue-400' },
                { label: 'TASK', value: 'Explain Machine Learning', color: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'CONTEXT', value: '2nd-year undergrads', color: 'text-purple-600 dark:text-purple-400' },
                { label: 'REQUIREMENTS', value: 'Definitions, examples, advantages, limitations', color: 'text-amber-600 dark:text-amber-400' },
                { label: 'FORMAT', value: 'Structured table', color: 'text-rose-600 dark:text-rose-400' },
              ].map((a) => (
                <div key={a.label}>
                  <div className={`font-black text-xs tracking-wider ${a.color}`}>{a.label}</div>
                  <div className="text-slate-600 dark:text-slate-300 mt-0.5">{a.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 text-center text-white">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-emerald/20 rounded-full blur-3xl" />
          <div className="relative space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="font-heading font-bold text-3xl">Ready to Try These Tools?</h3>
            <p className="text-slate-300 max-w-lg mx-auto">
              Click "Expand" on any model card above to see the example prompt, then try it yourself. Start with ChatGPT or Gemini — both are free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-lg text-sm"
              >
                Try ChatGPT Free →
              </a>
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all hover:-translate-y-0.5 text-sm"
              >
                Try Gemini Free →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
