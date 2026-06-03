import { useState } from 'react';
import { GraduationCap, Briefcase, Home } from 'lucide-react';

const categories = [
  {
    id: 'students',
    label: 'For Students',
    icon: GraduationCap,
    activeClass: 'bg-brand-blue text-white shadow-blue-glow',
    cases: [
      { emoji: '📄', title: 'Summarize Long PDFs', desc: 'Paste any dense research paper and get a clean bullet-point summary in seconds.' },
      { emoji: '📚', title: 'Create Study Guides', desc: 'Turn your lecture notes into a structured revision guide with key terms and quizzes.' },
      { emoji: '✅', title: 'Grammar & Writing Check', desc: 'Polish essays and reports — catch errors and get suggestions for clearer writing.' },
      { emoji: '🗓️', title: 'Build a Study Plan', desc: 'Tell AI your exam dates and topics; get a personalized daily study schedule.' },
      { emoji: '🔍', title: 'Research Assistant', desc: 'Get an overview of any topic with sources to explore, saving hours of searching.' },
      { emoji: '🎯', title: 'Practice Questions', desc: 'Generate MCQs and short-answer questions on any topic to test your understanding.' },
    ],
  },
  {
    id: 'professionals',
    label: 'For Professionals',
    icon: Briefcase,
    activeClass: 'bg-brand-emerald text-white shadow-emerald-glow',
    cases: [
      { emoji: '✉️', title: 'Draft Tricky Emails', desc: 'Communicate tough messages — feedback, negotiation, or follow-ups — with the right tone.' },
      { emoji: '📋', title: 'Summarize Meeting Notes', desc: 'Paste raw transcripts; get action items, decisions, and key points instantly.' },
      { emoji: '💡', title: 'Brainstorm Marketing', desc: 'Generate campaign ideas, taglines, and content calendars for your brand in minutes.' },
      { emoji: '📊', title: 'Create Presentations', desc: 'Give AI your key points and get a structured slide-by-slide outline instantly.' },
      { emoji: '📝', title: 'Write Job Descriptions', desc: 'Create clear, compelling job postings that attract the right candidates.' },
      { emoji: '🔧', title: 'Troubleshoot Problems', desc: 'Describe a technical or process issue and get structured debugging steps.' },
    ],
  },
  {
    id: 'life',
    label: 'For Life Admin',
    icon: Home,
    activeClass: 'bg-purple-600 text-white',
    cases: [
      { emoji: '🍽️', title: 'Meal Planning', desc: "Tell AI what's in your fridge; get a full week of recipes with a shopping list." },
      { emoji: '✈️', title: 'Travel Itinerary', desc: 'Describe your destination, budget and interests — get a day-by-day travel plan.' },
      { emoji: '💰', title: 'Budget Planner', desc: 'Share your income and expenses; get a personalised savings plan and spending tips.' },
      { emoji: '🏋️', title: 'Fitness Routine', desc: 'Get a custom workout plan based on your goals, equipment, and available time.' },
      { emoji: '📖', title: 'Book Recommendations', desc: 'Describe what you liked in past books; get a curated reading list tailored to you.' },
      { emoji: '🎁', title: 'Gift Ideas', desc: "Describe someone's interests and budget; get unique, thoughtful gift suggestions." },
    ],
  },
];

export default function UseCaseGrid() {
  const [active, setActive] = useState('students');
  const current = categories.find((c) => c.id === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              id={`usecase-tab-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? cat.activeClass
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Icon size={16} />
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
        {current.cases.map((item, i) => (
          <div key={i} className="card p-5 group cursor-default">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div>
                <h4 className="font-heading font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
