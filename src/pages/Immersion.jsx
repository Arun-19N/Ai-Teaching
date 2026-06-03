import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Activity, CheckCircle, Play, Code, 
  Layers, Cpu, Award, BookOpen, Map, Zap
} from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
    >
      {title}
    </motion.h2>
    {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = '' }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function ImmersionProgram() {
  const [promptData, setPromptData] = useState({ role: '', task: '', context: '', format: '', constraints: '' });
  const [quizState, setQuizState] = useState('start');
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden font-sans selection:bg-blue-500/30">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: 'spring', duration: 1 }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
          >
            <Brain className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            AI IMMERSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">PROGRAM</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10"
          >
            "Learn AI. Build Future. Create Impact."
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => document.getElementById('start-learning')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
            >
              <Play size={20} /> Start Learning
            </button>
            <button 
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
            >
              Explore Curriculum
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Why AI Matters */}
      <section id="curriculum" className="py-24 px-4 relative z-10 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why AI Matters Today" subtitle="AI is reshaping every industry. See how it impacts the world around us." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: 'Healthcare', desc: 'AI detects diseases early and accelerates drug discovery.', color: 'text-rose-500', stat: '40% Faster' },
              { icon: BookOpen, title: 'Education', desc: 'Personalized learning paths adapting to each student.', color: 'text-blue-500', stat: '24/7 Tutors' },
              { icon: Zap, title: 'Business', desc: 'Automating tasks and predicting market trends with data.', color: 'text-amber-500', stat: '3x Efficiency' },
              { icon: Map, title: 'Transport', desc: 'Self-driving vehicles and optimized logistics routing.', color: 'text-teal-500', stat: 'Safer Roads' },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:border-blue-500/50 transition-colors cursor-pointer group">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.desc}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-semibold">
                  {item.stat}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What is AI (Human vs AI) */}
      <section id="start-learning" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Human Brain vs Artificial Intelligence" subtitle="How do machines mimic our thinking?" />
          <div className="flex flex-col lg:flex-row gap-8 mt-12 items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Brain className="text-indigo-500"/> Human Intelligence</h3>
              <ul className="space-y-4">
                {['Learn from experience', 'Reason and think logically', 'Make complex decisions', 'Solve creative problems', 'Understand context & emotion'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg"><CheckCircle className="text-indigo-500" size={20}/> {t}</li>
                ))}
              </ul>
            </motion.div>
            
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-xl shadow-blue-500/20">VS</div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/30 dark:to-blue-950/30 rounded-3xl p-8 border border-teal-100 dark:border-teal-900/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Cpu className="text-teal-500"/> Artificial Intelligence</h3>
              <ul className="space-y-4">
                {['Learn hidden patterns in data', 'Predict future outcomes', 'Recommend relevant content', 'Generate text, code & images', 'Automate repetitive tasks'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg"><Zap className="text-teal-500" size={20}/> {t}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. AI vs ML vs DL vs GenAI */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="The AI Universe" subtitle="Understanding the subsets of Artificial Intelligence." />
          <div className="relative h-[500px] flex items-center justify-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-blue-500/30 bg-blue-500/10 flex items-start justify-center pt-8 font-semibold text-blue-200 cursor-pointer">
              Artificial Intelligence
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px] rounded-full border border-indigo-500/40 bg-indigo-500/20 flex items-start justify-center pt-8 mt-12 font-semibold text-indigo-200 cursor-pointer">
              Machine Learning
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full border border-purple-500/50 bg-purple-500/30 flex items-start justify-center pt-8 mt-24 font-semibold text-purple-200 cursor-pointer">
              Deep Learning
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="absolute w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full border border-teal-400 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mt-36 font-bold shadow-2xl shadow-teal-500/50 cursor-pointer">
              Generative AI
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13 & 14. Interactive Tokenization & Prompt Builder */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Prompt Engineering Studio" subtitle="Master the art of communicating with AI models." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Tokenizer Demo */}
            <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Layers className="text-blue-500" /> Tokenization Simulator</h3>
              <p className="text-sm text-slate-500 mb-6">AI reads words in chunks called tokens. Try it out!</p>
              
              <div className="flex flex-wrap gap-2 mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg min-h-[100px] font-mono text-sm items-center justify-start">
                {"I Love Artificial Intelligence".split(' ').map((word, i) => (
                  <motion.span 
                    key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.2 }}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-700/50"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="text-xs text-slate-500 text-center">In AI models, 1 token ≈ 4 characters of English text.</div>
            </Card>

            {/* Prompt Builder */}
            <Card>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Code className="text-indigo-500" /> Interactive Prompt Builder</h3>
              <div className="space-y-4">
                {Object.keys(promptData).map((key) => (
                  <div key={key}>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{key}</label>
                    <input 
                      type="text" 
                      placeholder={`Enter ${key}...`} 
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={promptData[key]}
                      onChange={(e) => setPromptData({...promptData, [key]: e.target.value})}
                    />
                  </div>
                ))}
                
                <div className="p-4 mt-6 bg-slate-900 text-blue-300 font-mono text-sm rounded-xl">
                  {promptData.role || promptData.task ? (
                    <span>
                      <span className="text-pink-400">Act as a</span> {promptData.role || '[Role]'}, 
                      <span className="text-pink-400"> and </span> {promptData.task || '[Task]'}. 
                      <span className="text-pink-400"> Context: </span> {promptData.context || '[Context]'}. 
                      <span className="text-pink-400"> Format the output as </span> {promptData.format || '[Format]'}. 
                      <span className="text-pink-400"> Constraints: </span> {promptData.constraints || '[Constraints]'}.
                    </span>
                  ) : (
                    <span className="text-slate-500">Your generated prompt will appear here...</span>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 22. Knowledge Quiz */}
      <section className="py-24 px-4 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading title="Knowledge Check" subtitle="Test what you've learned so far!" />
          
          <Card className="mt-12 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900">
            {quizState === 'start' && (
              <div className="py-12">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to test your AI knowledge?</h3>
                <button 
                  onClick={() => setQuizState('playing')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            )}
            
            {quizState === 'playing' && (
              <div className="text-left py-6">
                <span className="text-sm font-semibold text-blue-500 mb-2 block">Question 1 of 3</span>
                <h3 className="text-xl font-bold mb-6">What subset of AI is inspired by the human brain's neural networks?</h3>
                <div className="space-y-3">
                  {['Expert Systems', 'Deep Learning', 'Robotic Process Automation', 'Symbolic AI'].map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => setQuizState('end')}
                      className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-500 transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizState === 'end' && (
              <div className="py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-6">🎉</motion.div>
                <h3 className="text-2xl font-bold mb-2">Great Job!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">You've mastered the basics of Artificial Intelligence.</p>
                <button 
                  onClick={() => setQuizState('start')}
                  className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-full font-semibold transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* 25. Final Thank You */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              "AI is not the future.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">AI is the present.</span>"
            </h2>
            <p className="text-xl text-slate-400 mb-12 uppercase tracking-[0.3em]">
              Learn AI. Build Future. Create Impact.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-white/10">
              Continue Learning
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
