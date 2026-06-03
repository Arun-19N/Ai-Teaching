import { useState, useEffect } from 'react';
import { BookOpen, Copy, Check, Star, Zap, ShieldAlert, Heart, Lock, Unlock } from 'lucide-react';

const promptLibraryData = [
  {
    id: 'easy',
    title: 'EASY LEVEL PROMPTS',
    icon: <Star size={20} />,
    color: 'emerald',
    prompts: [
      {
        title: 'Challenge 1: AI Poster Creation',
        text: 'A vibrant, futuristic background for a technology poster about Artificial Intelligence. Abstract glowing digital networks with blue and purple nodes. CRITICAL CONSTRAINT: Leave the center completely empty with negative space. DO NOT generate any text, letters, or watermarks. Clean minimalist tech aesthetic, 8k resolution, photorealistic.',
      },
      {
        title: 'Challenge 2: AI Image Generation',
        text: 'A futuristic classroom in 2050. A friendly, welcoming, humanoid robot teacher is pointing to a glowing holographic whiteboard. Diverse students at sleek desks with AR glasses. Vibe: Bright, optimistic, utopian, cinematic lighting. Avoid dark, dystopian, or scary elements.',
      },
      {
        title: 'Challenge 3: AI Logo Designer',
        text: 'A minimalist flat vector logo for an AI startup. A simple stylized blue brain merged with circuit board lines. Solid dark background. Vector graphic style, 2D flat design, no 3D shading, clean edges, corporate branding, NO TEXT.',
      },
      {
        title: 'Challenge 4: AI Photo Editing Challenge',
        text: 'Transform the clothing and background into a futuristic cyberpunk style with neon lights and a metallic jacket. CRITICAL: Preserve the original face, facial features, and exact body pose without altering the person\'s identity.',
      },
      {
        title: 'Challenge 5: AI Social Media Creator',
        text: 'Act as a Gen-Z tech influencer. Write an Instagram post on "Why Students Should Learn AI". Constraints: Maximum 100 words. Use a highly conversational, energetic tone. Structure: 1 Catchy Hook, 3 short bullet points with emojis, 1 engaging question for the audience at the end. Include 5 hashtags.',
      },
    ],
  },
  {
    id: 'medium',
    title: 'MEDIUM LEVEL PROMPTS',
    icon: <Zap size={20} />,
    color: 'amber',
    prompts: [
      {
        title: 'Challenge 1: AI Advertisement Video Creation',
        text: 'Act as a commercial director. Write a 45-second script for "EduGenius" AI app. Format the output as a 2-column table: Column 1 [Visual/Scene Description] | Column 2 [Audio/Voiceover]. Use punchy, fast-paced dialogue suitable for TikTok/Reels.',
      },
      {
        title: 'Challenge 2: AI Story Creation with Images',
        text: 'Act as a storyteller. Write a 5-part visual story about a teenager\'s day with their helpful robot assistant. For each scene, provide the story text AND an image generation prompt. Crucial Constraint: Begin EVERY single image prompt with the exact phrase: "In a 3D Pixar animation style, highly detailed..." to ensure visual consistency across all 5 images.',
      },
      {
        title: 'Challenge 3: Future Product Designer',
        text: 'A futuristic smart school backpack floating slightly. Matte black with glowing neon blue LED accents and a digital display screen. Studio lighting, pure white background, isolated product photography, 8k resolution. Do not include any people or background clutter.',
      },
      {
        title: 'Challenge 4: AI News Reporter',
        text: 'Act as a TV news anchor in 2030 reporting on AI-powered flying school buses. Write a 1-minute script. Include bracketed stage directions for the anchor (e.g., [Look surprised], [Point to the left]) and exact descriptions of what should be edited onto the green screen behind them.',
      },
      {
        title: 'Challenge 5: AI Movie Poster Challenge',
        text: 'A cinematic movie poster for a sci-fi thriller titled "Human vs Artificial Intelligence". Split screen: a determined human face on the left, glowing robotic face on the right. Dark dramatic lighting, cyberpunk aesthetic. DO NOT include any text, titles, or words in the image. Leave the bottom 20% of the poster dark and completely empty so I can add my own typography.',
      },
    ],
  },
  {
    id: 'hard',
    title: 'HARD LEVEL PROMPTS',
    icon: <ShieldAlert size={20} />,
    color: 'rose',
    prompts: [
      {
        title: 'Challenge 1: AI Startup Pitch Video',
        text: 'Act as an elite Silicon Valley founder. My startup uses AI for personalized student learning. Provide: 1) 3 unique, modern, one-word brand names. 2) A 60-second pitch script formatted with headers: [The Hook], [The Problem], [Our AI Solution], [The 2030 Impact]. Tone: Visionary, persuasive, and metrics-driven.',
      },
      {
        title: 'Challenge 2: AI Smart City Design',
        text: 'A bird\'s-eye view of a futuristic smart city in 2060. Must include explicit visual tech elements: transparent solar-panel roads, a massive glowing blue AI data-hub in the city center, and automated delivery drone swarms. Unreal Engine 5 render, cinematic sunset lighting, highly detailed.',
      },
      {
        title: 'Challenge 3: AI Awareness Campaign',
        text: 'Act as a Gen-Z digital marketing strategist. Topic: "Responsible Use of AI for Teens". Output: 1) A catchy Campaign Name. 2) Three Instagram Carousel slide outlines (Hook, Content, Call-to-action). 3) A 60-second TikTok script with trending visual cues. Tone: Relatable, engaging, fast-paced, not preachy.',
      },
      {
        title: 'Challenge 4: AI Short Film Creation',
        text: 'Act as an award-winning film director. Outline a 4-scene short film titled "Life with AI". For each scene, provide: 1) The voiceover script. 2) An image prompt. Crucial Constraint for image prompts: You MUST specify the camera angle (e.g., "Extreme close-up", "Wide establishing shot") and lighting conditions for every image to create cinematic pacing.',
      },
      {
        title: 'Challenge 5: Solve Real Problem Using AI',
        text: 'Act as a tech founder pitching to venture capitalists. Problem: Ocean Plastic. AI Solution: Autonomous underwater drone swarms that use computer vision to detect plastic. Write a 1-minute pitch. Constraint: Ensure the AI technology described is scientifically plausible. Structure: Problem (15s), Solution (30s), Impact (15s).',
      },
    ],
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-l-emerald-500', text: 'text-emerald-700 dark:text-emerald-300' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-900/10', border: 'border-l-amber-500', text: 'text-amber-700 dark:text-amber-300' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-900/10', border: 'border-l-rose-500', text: 'text-rose-700 dark:text-rose-300' },
};

function PromptBox({ item, colorClass, isUnlocked, onUnlock, canUnlock }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(item.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isUnlocked) {
    return (
      <div className={`card p-5 border-l-4 ${colorClass.border} ${colorClass.bg}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock size={16} className="text-slate-400" />
            {item.title}
          </h4>
          <button
            onClick={() => onUnlock(item.title)}
            disabled={!canUnlock}
            className="flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-all px-4 py-2 rounded-lg bg-brand-blue hover:bg-blue-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Unlock size={14} />
            Unlock Prompt (Costs 1 <Heart size={12} className="fill-rose-500 text-rose-500 ml-0.5" />)
          </button>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-700 leading-relaxed shadow-inner blur-sm select-none opacity-50">
          "This prompt is locked. You must use one of your lives to unlock it and reveal the hidden text."
        </div>
      </div>
    );
  }

  return (
    <div className={`card p-5 border-l-4 ${colorClass.border} ${colorClass.bg}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
        <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Unlock size={16} className="text-brand-emerald" />
          {item.title}
        </h4>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-brand-blue transition-colors px-4 py-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow border border-slate-200 dark:border-slate-700"
          title="Copy prompt"
        >
          {copied ? <Check size={14} className="text-brand-emerald" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-relaxed shadow-inner">
        "{item.text}"
      </div>
    </div>
  );
}

export default function PromptLibrary() {
  const [activeTab, setActiveTab] = useState('easy');
  const [unlockedPrompts, setUnlockedPrompts] = useState([]);
  const [resetTime, setResetTime] = useState(null);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState('');

  // Load state from localStorage on mount
  useEffect(() => {
    const storedUnlocks = JSON.parse(localStorage.getItem('unlockedPrompts') || '[]');
    const storedResetTime = localStorage.getItem('promptResetTime');
    
    if (storedResetTime && Date.now() > parseInt(storedResetTime)) {
      // Cooldown expired
      localStorage.removeItem('unlockedPrompts');
      localStorage.removeItem('promptResetTime');
      setUnlockedPrompts([]);
      setResetTime(null);
      setLives(3);
    } else {
      setUnlockedPrompts(storedUnlocks);
      if (storedResetTime) setResetTime(parseInt(storedResetTime));
      setLives(3 - storedUnlocks.length);
    }
  }, []);

  // Countdown timer for reset
  useEffect(() => {
    if (!resetTime || lives > 0) return;
    
    const interval = setInterval(() => {
      const diff = resetTime - Date.now();
      if (diff <= 0) {
        // Timer reached 0 while page is open
        localStorage.removeItem('unlockedPrompts');
        localStorage.removeItem('promptResetTime');
        setUnlockedPrompts([]);
        setResetTime(null);
        setLives(3);
        setTimeLeft('');
        clearInterval(interval);
      } else {
        const m = Math.floor(diff / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${m}m ${s}s`);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [resetTime, lives]);

  const handleUnlock = (promptTitle) => {
    if (lives <= 0) return;
    
    const newUnlocks = [...unlockedPrompts, promptTitle];
    setUnlockedPrompts(newUnlocks);
    setLives(3 - newUnlocks.length);
    localStorage.setItem('unlockedPrompts', JSON.stringify(newUnlocks));
    
    // Start 1 hour cooldown when they run out of lives
    if (newUnlocks.length === 3) {
      const newReset = Date.now() + 60 * 60 * 1000; // 1 hour from now
      setResetTime(newReset);
      localStorage.setItem('promptResetTime', newReset.toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header & Lives Display */}
      <div className="text-center space-y-6">
        <div className="badge-blue inline-flex"><BookOpen size={13} />Resources</div>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 dark:text-slate-100">
          Prompt Library
        </h1>
        <p className="section-subtitle mx-auto">
          A collection of highly optimized prompts designed for the Day 1 Challenges. 
          Choose wisely! You can only unlock 3 prompts per hour.
        </p>

        {/* Lives UI */}
        <div className="inline-flex flex-col items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Your Lives</div>
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3].map((num) => (
              <Heart 
                key={num} 
                size={32} 
                className={`transition-all duration-300 ${
                  num <= lives 
                    ? 'fill-rose-500 text-rose-500 drop-shadow-md' 
                    : 'fill-slate-200 text-slate-300 dark:fill-slate-800 dark:text-slate-700'
                }`} 
              />
            ))}
          </div>
          {lives === 0 ? (
            <div className="text-sm font-semibold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-lg">
              Out of lives! Refreshes in: {timeLeft}
            </div>
          ) : (
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {lives} {lives === 1 ? 'life' : 'lives'} remaining
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {promptLibraryData.map((level) => {
          const isActive = activeTab === level.id;
          return (
            <button
              key={level.id}
              onClick={() => setActiveTab(level.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2 ${
                isActive 
                  ? `border-${level.color}-500 bg-${level.color}-500 text-white shadow-lg shadow-${level.color}-500/30` 
                  : `border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 hover:border-${level.color}-300 hover:text-${level.color}-600`
              }`}
            >
              {level.icon}
              {level.title}
            </button>
          );
        })}
      </div>

      {/* Prompt List */}
      <div className="space-y-6">
        {promptLibraryData.find(l => l.id === activeTab).prompts.map((p, index) => {
          const isUnlocked = unlockedPrompts.includes(p.title);
          return (
            <PromptBox 
              key={index} 
              item={p} 
              colorClass={colorMap[promptLibraryData.find(l => l.id === activeTab).color]} 
              isUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              canUnlock={lives > 0}
            />
          );
        })}
      </div>
    </div>
  );
}
