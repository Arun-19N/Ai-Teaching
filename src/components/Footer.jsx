import { Link } from 'react-router-dom';
import { Brain, Mail, MessageCircle, Code, Users } from 'lucide-react';

const links = {
  Learn: [
    { label: 'How AI Works', to: '/how-ai-works' },
    { label: 'Prompt Engineering', to: '/prompting' },
    { label: 'AI Tool Directory', to: '/tools' },
    { label: 'AI Models Guide', to: '/models' },
    { label: 'Use Cases', to: '/use-cases' },
    { label: 'Resources', to: '/resources' },
  ],
  Workshop: [
    { label: 'Day 1 – Tools Lab', to: '/agenda/day1' },
    { label: 'Day 2 – Build & Innovate', to: '/agenda/day2' },
  ],
};

// Inline SVGs for brand social icons (avoids lucide-react brand icon removal issues)
const SocialIcons = [
  {
    label: 'Twitter / X',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    svg: <Mail size={15} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-brand-emerald flex items-center justify-center">
                <Brain className="text-white" size={20} />
              </div>
              <span className="font-heading font-bold text-white text-lg">AI Practical Mastery</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Demystifying Artificial Intelligence for students, educators, and professionals.
              Learn, explore, and master AI — one concept at a time.
            </p>
            <div className="flex items-center gap-3">
              {SocialIcons.map(({ label, svg }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-blue flex items-center justify-center transition-colors duration-200 text-slate-400 hover:text-white"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AI Practical Mastery. Built for learners, by learners.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Made with</span>
            <span className="text-brand-emerald">♥</span>
            <span>to demystify AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
