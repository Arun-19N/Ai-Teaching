import { Brain, Zap, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    id: 'ai-vs-ml',
    emoji: '📖',
    title: 'AI vs. Machine Learning',
    subtitle: 'The Recipe Book Analogy',
    badge: 'Concept 1',
    color: 'blue',
    content: [
      { label: 'Artificial Intelligence (AI)', desc: 'The broad concept of machines performing tasks that typically require human intelligence — reasoning, learning, problem-solving.' },
      { label: 'Machine Learning (ML)', desc: 'A subset of AI where machines learn from data (examples) instead of being explicitly programmed with rules. Like teaching a child by showing, not by explaining rules.' },
      { label: 'The Recipe Book Analogy', desc: 'Traditional programming = giving the computer a precise recipe. Machine Learning = showing the computer thousands of dishes and letting it figure out the recipe itself.' },
      { label: 'Deep Learning', desc: 'A subset of ML using neural networks with many layers — inspired by the human brain. Powers modern AI like ChatGPT and image recognition.' },
    ],
  },
  {
    id: 'how-llms-work',
    emoji: '🧠',
    title: 'How Large Language Models Learn',
    subtitle: 'Predicting the Next Word',
    badge: 'Concept 2',
    color: 'emerald',
    content: [
      { label: 'What is an LLM?', desc: 'A Large Language Model is trained on massive amounts of text — books, websites, articles — to understand and generate human language.' },
      { label: 'The Core Trick: Next-Word Prediction', desc: 'LLMs learn by predicting what word comes next in a sentence, billions of times. Over time, this simple task teaches the model grammar, facts, reasoning, and style.' },
      { label: 'Training vs. Inference', desc: 'Training = the expensive learning phase using vast data. Inference = when you chat with the model, it uses what it learned to respond.' },
      { label: 'Tokens, not Words', desc: 'LLMs process text in chunks called "tokens" (roughly 0.75 words). A 1000-word essay is about 1300 tokens. This affects context window limits.' },
    ],
  },
  {
    id: 'limitations',
    emoji: '⚠️',
    title: 'The Limitations of AI',
    subtitle: 'What It Cannot Do',
    badge: 'Concept 3',
    color: 'amber',
    content: [
      { label: 'Hallucinations', desc: 'AI can confidently state facts that are completely wrong. It doesn\'t "know" things — it predicts likely text. Always verify important claims from AI.' },
      { label: 'Bias', desc: 'AI learns from human-generated data, which contains human biases. AI can reflect and amplify cultural, gender, or racial biases present in its training data.' },
      { label: 'No Real Understanding', desc: 'AI is not "thinking." It\'s pattern-matching at an extraordinary scale. It has no beliefs, emotions, or consciousness — it generates statistically likely responses.' },
      { label: 'Knowledge Cutoff', desc: 'Most LLMs have a training cutoff date. They don\'t know about events after that date unless they have web access (like Perplexity or GPT with Browse).' },
    ],
  },
];

const colorMap = {
  blue: { badge: 'badge-blue', border: 'border-l-brand-blue', iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-brand-blue', dot: 'bg-brand-blue' },
  emerald: { badge: 'badge-emerald', border: 'border-l-brand-emerald', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-brand-emerald', dot: 'bg-brand-emerald' },
  amber: { badge: 'badge bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300', border: 'border-l-amber-500', iconBg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', dot: 'bg-amber-500' },
};

export default function HowAIWorks() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center space-y-4">
        <span className="badge-blue inline-flex"><Brain size={13} />Module A</span>
        <h1 className="section-title">How AI Actually Works</h1>
        <p className="section-subtitle mx-auto">
          No math. No jargon. Just clear, honest explanations of what AI is, how it learns, and where it falls short.
        </p>
      </div>

      {topics.map((topic) => {
        const c = colorMap[topic.color];
        return (
          <section key={topic.id} id={topic.id} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{topic.emoji}</span>
              <div>
                <span className={`${c.badge} inline-flex mb-1`}>{topic.badge}</span>
                <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">{topic.title}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{topic.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              {topic.content.map((item) => (
                <div key={item.label} className={`card p-5 border-l-4 ${c.border}`}>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1.5 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />{item.label}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="card p-8 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/10 dark:to-emerald-900/10 border-none text-center space-y-4">
        <Zap className="text-brand-blue mx-auto" size={32} />
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Ready to put this into practice?</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto">Now that you understand how AI thinks, learn how to communicate with it effectively.</p>
        <Link to="/prompting" className="btn-primary mx-auto w-fit">
          Learn Prompt Engineering <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
