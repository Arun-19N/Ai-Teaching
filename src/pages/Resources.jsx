import { BookOpen, ExternalLink, Star } from 'lucide-react';

const resources = [
  {
    category: 'Free Courses',
    emoji: '🎓',
    items: [
      { name: 'Google AI Essentials', desc: 'Free beginner AI course by Google covering core concepts and practical applications.', link: 'https://grow.google/ai-essentials/', tag: 'Free' },
      { name: 'Microsoft AI Learning', desc: 'Structured learning paths for AI and machine learning basics on Microsoft Learn.', link: 'https://learn.microsoft.com/en-us/ai/', tag: 'Free' },
      { name: 'Prompt Engineering Guide', desc: 'Comprehensive guide to prompting techniques, by DAIR.AI — freely available.', link: 'https://www.promptingguide.ai/', tag: 'Free' },
      { name: 'Elements of AI', desc: 'University-level AI fundamentals course from University of Helsinki. Highly recommended.', link: 'https://www.elementsofai.com/', tag: 'Free' },
    ],
  },
  {
    category: 'Helpful Reading',
    emoji: '📚',
    items: [
      { name: 'What is ChatGPT Doing?', desc: 'Stephen Wolfram\'s deep dive into how LLMs actually work — surprisingly readable.', link: 'https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/', tag: 'Article' },
      { name: 'AI Canon', desc: 'Curated reading list of the most important AI papers and articles, by a16z.', link: 'https://a16z.com/ai-canon/', tag: 'Reading List' },
      { name: 'MIT Technology Review – AI', desc: 'Latest news and analysis on AI developments from MIT.', link: 'https://www.technologyreview.com/topic/artificial-intelligence/', tag: 'News' },
    ],
  },
  {
    category: 'Prompt Engineering',
    emoji: '⚡',
    items: [
      { name: 'OpenAI Prompt Engineering Guide', desc: 'Official best practices from OpenAI for getting the most out of GPT models.', link: 'https://platform.openai.com/docs/guides/prompt-engineering', tag: 'Official' },
      { name: 'Anthropic Prompt Library', desc: 'Pre-built, optimized prompts for dozens of common tasks from Claude\'s creators.', link: 'https://docs.anthropic.com/en/prompt-library/', tag: 'Library' },
      { name: 'Learn Prompting', desc: 'Community-driven, open-source guide to prompt engineering with examples.', link: 'https://learnprompting.org/', tag: 'Free' },
    ],
  },
  {
    category: 'AI Safety & Ethics',
    emoji: '🛡️',
    items: [
      { name: 'AI For Everyone (Coursera)', desc: 'Andrew Ng\'s non-technical course covering AI strategy, ethics, and societal impact.', link: 'https://www.coursera.org/learn/ai-for-everyone', tag: 'Course' },
      { name: 'Partnership on AI', desc: 'Research and guidelines on AI safety, fairness, and responsible deployment.', link: 'https://partnershiponai.org/', tag: 'Research' },
    ],
  },
];

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <span className="badge-blue inline-flex"><BookOpen size={13} />Learning Resources</span>
        <h1 className="section-title">Curated AI Resources</h1>
        <p className="section-subtitle mx-auto">
          The best free courses, guides, and reading material to deepen your AI knowledge — handpicked and beginner-friendly.
        </p>
      </div>

      <div className="space-y-10">
        {resources.map((group) => (
          <section key={group.category} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{group.emoji}</span>
              <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">{group.category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 group block hover:border-brand-blue transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-blue transition-colors text-sm">{item.name}</h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                      <span className="badge-blue text-xs">{item.tag}</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="card p-8 text-center space-y-3 border-2 border-dashed border-brand-emerald/40">
        <Star className="text-brand-emerald mx-auto" size={28} />
        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Learning is a journey</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          The best way to learn AI is to use AI. Start with one tool today, and come back to these resources as you grow.
        </p>
      </div>
    </div>
  );
}
