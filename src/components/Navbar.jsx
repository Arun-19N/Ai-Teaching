import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Brain, ChevronDown, Maximize, Minimize } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How AI Works', href: '/how-ai-works' },
  { label: 'Prompting', href: '/prompting' },
  { label: 'AI Tools', href: '/tools' },
  { label: 'AI Models', href: '/models' },
  { label: 'Prompt Library', href: '/prompt-library' },
  { label: 'Use Cases', href: '/use-cases' },
  {
    label: 'Workshop',
    children: [
      { label: 'Day 1 – Tools Lab', href: '/agenda/day1' },
      { label: 'Day 1 – Challenges', href: '/agenda/day1/challenges' },
      { label: 'Day 2 – Build & Innovate', href: '/agenda/day2' },
    ],
  },
  { label: 'Resources', href: '/resources' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to enable fullscreen:", err);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-emerald flex items-center justify-center shadow group-hover:shadow-blue-glow transition-shadow duration-300">
                <Brain className="text-white" size={17} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100">AI Mastery</span>
                <span className="text-xs text-slate-500 font-medium hidden sm:block">Practical · Simple · Powerful</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <button className="nav-link flex items-center gap-1">
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdown && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl py-1.5 z-50 animate-fade-in">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-blue transition-colors"
                            onClick={() => setDropdown(false)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'text-brand-blue bg-blue-50 dark:bg-blue-900/20' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:flex"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
              <button
                id="theme-toggle"
                onClick={toggle}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/agenda/day1" className="hidden md:flex btn-primary text-sm py-2 px-4">
                Start Learning
              </Link>
              <button
                id="mobile-menu-toggle"
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass px-4 py-4 space-y-1 animate-slide-up">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mt-2">{item.label}</div>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className="block px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg font-medium transition-colors text-sm ${
                      isActive
                        ? 'text-brand-blue bg-blue-50 dark:bg-blue-900/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="pt-2">
              <Link to="/agenda/day1" className="btn-primary w-full justify-center text-sm" onClick={() => setIsOpen(false)}>
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
}
