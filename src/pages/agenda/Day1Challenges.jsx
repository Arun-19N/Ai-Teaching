import { useState } from 'react';
import { Target, CheckCircle, Copy, Check, ChevronDown, ChevronUp, Star, Zap, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const challengesData = [
  {
    id: 'easy',
    title: 'EASY LEVEL',
    subtitle: 'Beginner Creativity',
    icon: <Star size={20} />,
    color: 'emerald',
    challenges: [
      {
        num: 1,
        title: 'AI Poster Creation',
        task: 'Create an attractive poster using AI tools.',
        topic: 'Artificial Intelligence for Future Generation',
        reqs: ['Create AI generated background', 'Add suitable title', 'Add slogan/tagline', 'Use creative design'],
        tools: 'Canva AI / Microsoft Designer / Adobe Firefly',
        submit: ['Poster Image', 'AI Prompt Used'],
        prompt: 'A vibrant, futuristic background for a technology poster about Artificial Intelligence. Abstract glowing digital networks with blue and purple nodes. CRITICAL CONSTRAINT: Leave the center completely empty with negative space. DO NOT generate any text, letters, or watermarks. Clean minimalist tech aesthetic, 8k resolution, photorealistic.',
      },
      {
        num: 2,
        title: 'AI Image Generation',
        task: 'Generate a creative AI image.',
        topic: 'Classroom in 2050',
        reqs: ['AI teacher', 'Smart devices', 'Students learning with technology', 'Future environment'],
        submit: ['Image', 'Prompt explanation'],
        prompt: 'A futuristic classroom in 2050. A friendly, welcoming, humanoid robot teacher is pointing to a glowing holographic whiteboard. Diverse students at sleek desks with AR glasses. Vibe: Bright, optimistic, utopian, cinematic lighting. Avoid dark, dystopian, or scary elements.',
      },
      {
        num: 3,
        title: 'AI Logo Designer',
        task: 'Create a logo for an AI startup company.',
        reqs: ['Company name', 'Logo design', 'Tagline', 'Explain meaning of logo'],
        prompt: 'A minimalist flat vector logo for an AI startup. A simple stylized blue brain merged with circuit board lines. Solid dark background. Vector graphic style, 2D flat design, no 3D shading, clean edges, corporate branding, NO TEXT.',
      },
      {
        num: 4,
        title: 'AI Photo Editing',
        task: 'Edit an image using AI.',
        topic: 'Convert normal image into a new style',
        reqs: ['Professional style', 'Cartoon style', 'Futuristic style'],
        submit: ['Before image', 'After image', 'Tool used'],
        prompt: 'Transform the clothing and background into a futuristic cyberpunk style with neon lights and a metallic jacket. CRITICAL: Preserve the original face, facial features, and exact body pose without altering the person\'s identity.',
      },
      {
        num: 5,
        title: 'AI Social Media Creator',
        task: 'Create an Instagram/LinkedIn post.',
        topic: 'Why Students Should Learn AI',
        reqs: ['Caption', 'Hashtags', 'Poster design'],
        prompt: 'Act as a Gen-Z tech influencer. Write an Instagram post on "Why Students Should Learn AI". Constraints: Maximum 100 words. Use a highly conversational, energetic tone. Structure: 1 Catchy Hook, 3 short bullet points with emojis, 1 engaging question for the audience at the end. Include 5 hashtags.',
      },
    ],
  },
  {
    id: 'medium',
    title: 'MEDIUM LEVEL',
    subtitle: 'Design + Thinking',
    icon: <Zap size={20} />,
    color: 'amber',
    challenges: [
      {
        num: 1,
        title: 'AI Advertisement Video',
        task: 'Create a short AI-generated advertisement video.',
        topic: 'AI Learning App Promotion',
        reqs: ['Duration: 30–60 seconds', 'Include: Script, Voice-over, Images/video, Background music'],
        tools: 'Canva AI / CapCut AI',
        prompt: 'Act as a commercial director. Write a 45-second script for "EduGenius" AI app. Format the output as a 2-column table: Column 1 [Visual/Scene Description] | Column 2 [Audio/Voiceover]. Use punchy, fast-paced dialogue suitable for TikTok/Reels.',
      },
      {
        num: 2,
        title: 'AI Story Creation with Images',
        task: 'Create a visual story using AI.',
        topic: 'A Day with My AI Assistant',
        reqs: ['Story idea', 'Characters', '5 AI images', 'Final presentation'],
        prompt: 'Act as a storyteller. Write a 5-part visual story about a teenager\'s day with their helpful robot assistant. For each scene, provide the story text AND an image generation prompt. Crucial Constraint: Begin EVERY single image prompt with the exact phrase: "In a 3D Pixar animation style, highly detailed..." to ensure visual consistency across all 5 images.',
      },
      {
        num: 3,
        title: 'Future Product Designer',
        task: 'Imagine a future AI product.',
        topic: 'e.g., AI Smart Bag',
        reqs: ['Product name', 'AI generated product image', 'Features', 'How it solves problems'],
        prompt: 'A futuristic smart school backpack floating slightly. Matte black with glowing neon blue LED accents and a digital display screen. Studio lighting, pure white background, isolated product photography, 8k resolution. Do not include any people or background clutter.',
      },
      {
        num: 4,
        title: 'AI News Reporter',
        task: 'Create an AI news video.',
        topic: 'Future Technology Update 2030',
        reqs: ['News script', 'AI anchor/avatar', 'Images', 'Edited video'],
        prompt: 'Act as a TV news anchor in 2030 reporting on AI-powered flying school buses. Write a 1-minute script. Include bracketed stage directions for the anchor (e.g., [Look surprised], [Point to the left]) and exact descriptions of what should be edited onto the green screen behind them.',
      },
      {
        num: 5,
        title: 'AI Movie Poster Challenge',
        task: 'Design a movie poster using AI.',
        topic: 'Human vs Artificial Intelligence',
        reqs: ['Movie title', 'Character design', 'Poster', 'Short storyline'],
        prompt: 'A cinematic movie poster for a sci-fi thriller titled "Human vs Artificial Intelligence". Split screen: a determined human face on the left, glowing robotic face on the right. Dark dramatic lighting, cyberpunk aesthetic. DO NOT include any text, titles, or words in the image. Leave the bottom 20% of the poster dark and completely empty so I can add my own typography.',
      },
    ],
  },
  {
    id: 'hard',
    title: 'HARD LEVEL',
    subtitle: 'Innovation + Problem Solving',
    icon: <ShieldAlert size={20} />,
    color: 'rose',
    challenges: [
      {
        num: 1,
        title: 'AI Startup Pitch Video',
        task: 'Create a startup idea and promotional video.',
        reqs: ['Startup name', 'Problem solved', 'AI solution', 'Logo', 'Poster', '1-minute pitch video'],
        prompt: 'Act as an elite Silicon Valley founder. My startup uses AI for personalized student learning. Provide: 1) 3 unique, modern, one-word brand names. 2) A 60-second pitch script formatted with headers: [The Hook], [The Problem], [Our AI Solution], [The 2030 Impact]. Tone: Visionary, persuasive, and metrics-driven.',
      },
      {
        num: 2,
        title: 'AI Smart City Design',
        task: 'Create a future smart city concept.',
        reqs: ['City image', 'AI technologies used', 'Transportation idea', 'Security system', 'Presentation'],
        prompt: 'A bird\'s-eye view of a futuristic smart city in 2060. Must include explicit visual tech elements: transparent solar-panel roads, a massive glowing blue AI data-hub in the city center, and automated delivery drone swarms. Unreal Engine 5 render, cinematic sunset lighting, highly detailed.',
      },
      {
        num: 3,
        title: 'AI Awareness Campaign',
        task: 'Create a complete digital campaign.',
        topic: 'Responsible Use of AI',
        reqs: ['Logo', 'Poster', 'Social media content', '1-minute awareness video'],
        prompt: 'Act as a Gen-Z digital marketing strategist. Topic: "Responsible Use of AI for Teens". Output: 1) A catchy Campaign Name. 2) Three Instagram Carousel slide outlines (Hook, Content, Call-to-action). 3) A 60-second TikTok script with trending visual cues. Tone: Relatable, engaging, fast-paced, not preachy.',
      },
      {
        num: 4,
        title: 'AI Short Film Creation',
        task: 'Create a short film concept using AI.',
        topic: 'Life with Artificial Intelligence',
        reqs: ['Story script', 'Characters', 'AI images', 'Voice-over', 'Edited video', 'Duration: 2 minutes'],
        prompt: 'Act as an award-winning film director. Outline a 4-scene short film titled "Life with AI". For each scene, provide: 1) The voiceover script. 2) An image prompt. Crucial Constraint for image prompts: You MUST specify the camera angle (e.g., "Extreme close-up", "Wide establishing shot") and lighting conditions for every image to create cinematic pacing.',
      },
      {
        num: 5,
        title: 'Solve Real Problem Using AI',
        task: 'Find one real-world problem and design an AI solution.',
        topic: 'Examples: Education, Healthcare, Environment, Transport',
        reqs: ['Problem explanation', 'AI solution idea', 'Poster', 'Demo video', 'Presentation'],
        prompt: 'Act as a tech founder pitching to venture capitalists. Problem: Ocean Plastic. AI Solution: Autonomous underwater drone swarms that use computer vision to detect plastic. Write a 1-minute pitch. Constraint: Ensure the AI technology described is scientifically plausible. Structure: Problem (15s), Solution (30s), Impact (15s).',
      },
    ],
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-l-emerald-500', text: 'text-emerald-700 dark:text-emerald-300', icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600', dot: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-900/10', border: 'border-l-amber-500', text: 'text-amber-700 dark:text-amber-300', icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', dot: 'bg-amber-500' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-900/10', border: 'border-l-rose-500', text: 'text-rose-700 dark:text-rose-300', icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600', dot: 'bg-rose-500' },
};

function PromptBox({ prompt, colorClass }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
      <div className="flex items-center justify-between mb-2">
        <h5 className={`text-xs font-bold uppercase tracking-wider ${colorClass.text} flex items-center gap-1.5`}>
          <span className="text-lg">✨</span> Example Prompt
        </h5>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-blue transition-colors px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          title="Copy prompt"
        >
          {copied ? <Check size={12} className="text-brand-emerald" /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-3 text-sm font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 leading-relaxed">
        "{prompt}"
      </div>
    </div>
  );
}

function ChallengeCard({ c, colorConfig }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`card p-6 border-l-4 ${colorConfig.border} ${colorConfig.bg} transition-all`}>
      <div className="flex items-start justify-between gap-4 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${colorConfig.icon} flex-shrink-0`}>
            {c.num}
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">{c.title}</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{c.task}</p>
          </div>
        </div>
        <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="mt-5 space-y-4 animate-fade-in pl-11">
          {c.topic && (
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Topic/Theme</span>
              <span className="inline-block px-2.5 py-1 rounded-md bg-white/60 dark:bg-slate-800/60 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {c.topic}
              </span>
            </div>
          )}

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Requirements</span>
            <ul className="space-y-1">
              {c.reqs.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colorConfig.dot}`} />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {(c.submit || c.tools) && (
            <div className="grid grid-cols-2 gap-4">
              {c.submit && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Deliverables</span>
                  <ul className="space-y-1">
                    {c.submit.map((sub, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle size={12} className="text-brand-emerald" /> {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {c.tools && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Suggested Tools</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{c.tools}</p>
                </div>
              )}
            </div>
          )}

          {/* Prompt Library Box */}
          <PromptBox prompt={c.prompt} colorClass={colorConfig} />
        </div>
      )}
    </div>
  );
}

export default function Day1Challenges() {
  const [activeTab, setActiveTab] = useState('easy');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="badge-blue inline-flex"><Target size={13} />Day 1 Hands-On</div>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 dark:text-slate-100">
          Creative AI Challenges
        </h1>
        <p className="section-subtitle mx-auto">
          "Learn AI. Build Future. Create Impact." Select a difficulty level and start building your AI portfolio. 
          Use the included <strong>Prompt Library</strong> to jumpstart your creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {challengesData.map((level) => {
          const isActive = activeTab === level.id;
          const c = colorMap[level.color];
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

      {/* Challenge List */}
      <div className="space-y-6">
        {challengesData.find(l => l.id === activeTab).challenges.map(c => (
          <ChallengeCard 
            key={c.num} 
            c={c} 
            colorConfig={colorMap[challengesData.find(l => l.id === activeTab).color]} 
          />
        ))}
      </div>

      {/* Back to Agenda */}
      <div className="pt-8 text-center border-t border-slate-200 dark:border-slate-800">
        <Link to="/agenda/day1" className="text-sm font-semibold text-brand-blue hover:underline">
          &larr; Back to Day 1 Agenda
        </Link>
      </div>
    </div>
  );
}
