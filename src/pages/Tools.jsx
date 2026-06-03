import { Wrench, ExternalLink } from 'lucide-react';

const toolGroups = [
  {
    category: 'Content & Writing',
    color: 'blue',
    borderColor: 'border-t-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-brand-blue',
    tools: [
      { name: 'ChatGPT', emoji: '💬', maker: 'OpenAI', best: 'Creative writing, brainstorming, code generation, general Q&A', free: true, link: 'https://chat.openai.com' },
      { name: 'Claude', emoji: '🤖', maker: 'Anthropic', best: 'Long documents, nuanced analysis, safe & balanced outputs', free: true, link: 'https://claude.ai' },
      { name: 'Gemini', emoji: '✨', maker: 'Google', best: 'Google Workspace integration, multimodal (image + text) tasks', free: true, link: 'https://gemini.google.com' },
    ],
  },
  {
    category: 'Research',
    color: 'emerald',
    borderColor: 'border-t-emerald-500',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-brand-emerald',
    tools: [
      { name: 'Perplexity', emoji: '🔍', maker: 'Perplexity AI', best: 'Fact-checked answers with sources, real-time web search', free: true, link: 'https://perplexity.ai' },
      { name: 'Elicit', emoji: '📖', maker: 'Ought', best: 'Academic literature review, research paper analysis', free: true, link: 'https://elicit.com' },
    ],
  },
  {
    category: 'Images & Presentations',
    color: 'purple',
    borderColor: 'border-t-purple-500',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    tools: [
      { name: 'Midjourney', emoji: '🎨', maker: 'Midjourney', best: 'High-quality artistic image generation from text prompts', free: false, link: 'https://midjourney.com' },
      { name: 'Microsoft Designer', emoji: '🖼️', maker: 'Microsoft', best: 'Free AI images with DALL-E, social media graphics', free: true, link: 'https://designer.microsoft.com' },
      { name: 'Adobe Firefly', emoji: '🔥', maker: 'Adobe', best: 'Commercially safe AI images, integrated with Adobe Suite', free: true, link: 'https://firefly.adobe.com' },
      { name: 'Gamma', emoji: '🎯', maker: 'Gamma', best: 'AI-generated presentations and documents from a single prompt', free: true, link: 'https://gamma.app' },
      { name: 'Canva AI', emoji: '🎭', maker: 'Canva', best: 'Design-focused AI: magic write, image generation, presentation AI', free: true, link: 'https://canva.com' },
    ],
  },
  {
    category: 'Productivity',
    color: 'amber',
    borderColor: 'border-t-amber-500',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600',
    tools: [
      { name: 'Microsoft Copilot', emoji: '🔵', maker: 'Microsoft', best: 'AI inside Word, Excel, Outlook, PowerPoint — built-in productivity AI', free: true, link: 'https://copilot.microsoft.com' },
      { name: 'Notion AI', emoji: '📋', maker: 'Notion', best: 'Smart note-taking, summarising, and writing inside Notion docs', free: false, link: 'https://notion.so' },
      { name: 'Grammarly', emoji: '✅', maker: 'Grammarly', best: 'Grammar correction, tone adjustment, clarity improvements', free: true, link: 'https://grammarly.com' },
    ],
  },
];

export default function Tools() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center space-y-4">
        <span className="badge inline-flex bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"><Wrench size={13} />Module C</span>
        <h1 className="section-title">AI Tool Directory</h1>
        <p className="section-subtitle mx-auto">
          A curated guide to the most useful AI tools available today — with clear explanations of what each one excels at.
        </p>
      </div>

      <div className="space-y-10">
        {toolGroups.map((group) => (
          <section key={group.category} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${group.iconBg}`}>
                <Wrench size={17} />
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">{group.category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.tools.map((tool) => (
                <div key={tool.name} className={`card p-5 border-t-4 ${group.borderColor} group flex flex-col`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tool.emoji}</span>
                      <div>
                        <h3 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-brand-blue transition-colors">{tool.name}</h3>
                        <p className="text-xs text-slate-400">{tool.maker}</p>
                      </div>
                    </div>
                    <span className={`badge text-xs ${tool.free ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                      {tool.free ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Best for: </span>{tool.best}
                  </p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:gap-2.5 transition-all"
                  >
                    Try it <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
