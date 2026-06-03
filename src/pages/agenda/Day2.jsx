import { Clock, Target, CheckCircle, Lightbulb, Code2, Globe, Rocket } from 'lucide-react';

const session1 = {
  time: '09:30 – 10:00 AM',
  points: [
    'Recap of AI Fundamentals from Day 1',
    'Review of Prompt Engineering concepts and best practices',
    'Discussion on effective prompting in real scenarios',
    'Overview of AI-powered development platforms',
    'Explain the final project workflow for the day',
  ],
  instructions: ['Conduct a quick quiz or recap discussion', 'Verify team allocations and project groups', 'Ensure all students have access to required tools'],
};

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

const session3Topics = [
  {
    title: 'Web Application Components',
    items: ['Frontend: HTML, CSS, JavaScript and frameworks', 'Backend: conceptual overview of servers and APIs', 'Database integration: overview of data storage'],
  },
  {
    title: 'Responsive Design',
    items: ['Mobile-first approach and breakpoints', 'User experience and accessibility considerations', 'Layout optimization for different screen sizes'],
  },
  {
    title: 'Testing Applications',
    items: ['Functional testing: does it work as expected?', 'UI testing: does it look right on all devices?', 'Error handling: graceful failure scenarios'],
  },
  {
    title: 'Deployment Basics',
    items: ['Hosting concepts: where does your app live?', 'Sharing project links with stakeholders', 'Deployment workflow overview (Vercel, Netlify)'],
  },
];

const miniProjects = [
  { emoji: '🎫', name: 'Department Event Portal', desc: 'Register and manage campus events' },
  { emoji: '📋', name: 'Attendance Tracker', desc: 'Digital attendance with session reports' },
  { emoji: '💬', name: 'Student Feedback System', desc: 'Collect and display feedback anonymously' },
  { emoji: '👨‍🏫', name: 'Faculty Information Portal', desc: 'Staff directory with search functionality' },
  { emoji: '📅', name: 'AI Study Planner', desc: 'Smart scheduler based on exam timetables' },
];

const ideaFramework = [
  { icon: '🎯', label: 'Problem Statement', desc: 'What specific problem does this solve?' },
  { icon: '💡', label: 'Proposed Solution', desc: 'How does AI make it better than current approaches?' },
  { icon: '👥', label: 'Target Users', desc: 'Who will use this and why?' },
  { icon: '🌟', label: 'Benefits', desc: 'What are the measurable positive outcomes?' },
  { icon: '🤖', label: 'AI Integration', desc: 'Which AI tools/APIs will power this solution?' },
];

const problemAreas = [
  { area: 'Academic Challenges', examples: ['Study scheduling', 'Assignment tracking', 'Grade prediction'] },
  { area: 'Campus Challenges', examples: ['Event management', 'Lost & found', 'Facility booking'] },
  { area: 'Department Problems', examples: ['Lab scheduling', 'Resource allocation', 'Project tracking'] },
  { area: 'Industry Opportunities', examples: ['Internship matching', 'Skill gap analysis', 'Project idea generation'] },
];

export default function Day2() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="badge-emerald inline-flex">Day 2 Agenda</span>
        <h1 className="section-title">Build, Deploy & Innovate</h1>
        <p className="section-subtitle mx-auto">
          From AI-assisted development to ideating and pitching your own AI-powered solution. Today you go from learner to builder.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Clock size={15} /><span>09:30 AM – 03:15 PM</span>
        </div>
      </div>

      {/* Session 1: Recap */}
      <section className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle size={20} className="text-brand-blue" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 1</div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Recap & Kickoff</h2>
              <span className="text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />09:30 – 10:00 AM</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Target size={15} className="text-brand-blue" />Key Points to Cover
            </h3>
            <ul className="space-y-2">
              {session1.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle size={12} className="text-brand-blue mt-0.5 flex-shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/10">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Faculty Instructions</h3>
            <ul className="space-y-2">
              {session1.instructions.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle size={12} className="text-amber-600 mt-0.5 flex-shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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

      {/* Session 3: App Building Lab */}
      <section className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Globe size={20} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 3</div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Website / App Building Lab</h2>
              <span className="text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />11:45 AM – 01:00 PM</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {session3Topics.map((t) => (
            <div key={t.title} className="card p-5">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">{t.title}</h4>
              <ul className="space-y-1.5">
                {t.items.map((item) => (
                  <li key={item} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="text-purple-500 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card p-6">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">Suggested Mini Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {miniProjects.map((p) => (
              <div key={p.name} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-400 transition-colors">
                <span className="text-xl">{p.emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{p.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session 4: Idea Bank */}
      <section className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Lightbulb size={20} className="text-brand-blue" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session 4</div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">Idea Bank & Innovation</h2>
              <span className="text-sm text-slate-400 flex items-center gap-1"><Clock size={13} />02:00 – 03:15 PM</span>
            </div>
          </div>
        </div>

        {/* Problem Areas */}
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">Problem Identification Areas</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {problemAreas.map((area) => (
              <div key={area.area} className="card p-5">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">{area.area}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.examples.map((ex) => (
                    <span key={ex} className="badge-blue text-xs">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Framework */}
        <div className="card p-6">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">Innovation Framework</h3>
          <div className="space-y-3">
            {ideaFramework.map((item, i) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{i + 1}. {item.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Prep */}
        <div className="card p-6 border-t-4 border-t-brand-blue">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">Pitch Preparation</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {['📌 Project title — clear and memorable','❓ Problem statement — one sentence','✅ Solution overview — how AI solves it',"🎬 Demonstration plan — what you'll show"].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/10 text-sm text-slate-700 dark:text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/10">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Faculty Tips</h3>
          <ul className="space-y-1.5">
            {['Push students toward practical, buildable solutions','Encourage originality — discourage ideas that already exist as products','Help teams simplify overly ambitious ideas into achievable MVPs'].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle size={13} className="text-amber-600 mt-0.5 flex-shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
