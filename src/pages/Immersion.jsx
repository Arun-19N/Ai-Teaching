import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Cpu, Zap, Eye, MessageSquare, Sparkles, ChevronRight,
  CheckCircle, XCircle, ArrowRight, Layers, Code, BookOpen,
  ShieldCheck, ShieldAlert, Lightbulb, Image as ImageIcon,
  Bot, GraduationCap, Search, Palette, PenTool, Globe,
  Play, Network, Database, Cog, Target, ChevronDown,
  Users, Monitor, Atom, Workflow, BrainCircuit
} from 'lucide-react';

/* ═══════════════════════════════════════════
   REUSABLE HELPERS
   ═══════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

function SectionBadge({ icon: Icon, text }) {
  return (
    <motion.div variants={fadeUp} className="badge-blue inline-flex mb-4">
      <Icon size={13} /> {text}
    </motion.div>
  );
}

function SectionHeading({ title, subtitle, highlight }) {
  return (
    <div className="text-center mb-14">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-100 mb-4 leading-tight"
      >
        {title}{' '}
        {highlight && <span className="text-gradient-blue">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, description, color, stat, index = 0 }) {
  return (
    <motion.div
      variants={fadeUpChild}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group cursor-pointer"
    >
      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={30} />
      </div>
      <h3 className="font-heading font-bold text-xl mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{description}</p>
      {stat && (
        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300">
          {stat}
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
        >
          <Brain className="w-14 h-14 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 text-slate-900 dark:text-slate-100"
        >
          Artificial Intelligence
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            for Beginners
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          A complete visual guide to understand AI — from zero to confident.
          <br className="hidden sm:block" />
          Built for classrooms. Designed for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4"
          >
            <Play size={18} /> Start Learning
          </button>
          <button
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-slate-700 dark:text-slate-300"
          >
            Explore AI Tools
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="mx-auto text-slate-400" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — INTRODUCTION TO AI
   ═══════════════════════════════════════════ */

function IntroSection() {
  return (
    <section id="intro" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What is"
          highlight="Artificial Intelligence?"
          subtitle="AI is when we teach computers to think, learn, and make decisions — just like humans do, but using data instead of a brain."
        />

        {/* Human vs Machine */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={fadeUpChild}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/50"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Brain className="text-indigo-500" size={28} /> Human Intelligence
            </h3>
            <ul className="space-y-3">
              {[
                'Learns from experience & senses',
                'Understands emotions & feelings',
                'Thinks creatively & imagines',
                'Makes moral decisions',
                'Adapts to brand-new situations',
              ].map((t, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpChild}
                  className="flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 p-3 rounded-xl text-base"
                >
                  <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} /> {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUpChild}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/30 dark:to-blue-950/30 rounded-3xl p-8 border border-teal-100 dark:border-teal-900/50"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-teal-500" size={28} /> Machine Intelligence
            </h3>
            <ul className="space-y-3">
              {[
                'Learns from massive amounts of data',
                'Finds hidden patterns in data',
                'Processes millions of items per second',
                'Generates text, images, code & music',
                'Never gets tired or forgets',
              ].map((t, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpChild}
                  className="flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 p-3 rounded-xl text-base"
                >
                  <Zap className="text-teal-500 flex-shrink-0" size={20} /> {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── How Does AI Learn? Human vs AI ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 md:p-12 text-white"
        >
          {/* Decorative blobs */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-center mb-3">
              How Does AI Learn? 🐕
            </h3>
            <p className="text-center text-blue-200/70 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              Just like a child learns to recognise a dog by seeing many examples, AI learns by studying thousands of images. Let's compare!
            </p>

            {/* ─── Side-by-side: Human vs AI ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* ───── HUMAN SIDE ───── */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/20">
                    👶
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-amber-300">Human Child</h4>
                    <span className="text-xs text-slate-400">How kids learn naturally</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <motion.div variants={fadeUpChild} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-sm flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h5 className="font-bold text-base mb-1">Sees many pictures of dogs</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          A child looks at picture books, sees pets in the park, and watches videos of different dogs — big dogs, small dogs, fluffy dogs, spotted dogs.
                        </p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {['🐕', '🐩', '🐕‍🦺', '🦮', '🐶'].map((dog, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
                              className="text-3xl"
                            >
                              {dog}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div variants={fadeUpChild} className="flex justify-center">
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <ChevronDown className="text-amber-400/60" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={fadeUpChild} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-sm flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h5 className="font-bold text-base mb-1">Learns from many examples</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          After seeing enough dogs, the child's brain starts to notice what all dogs have in common — four legs, a tail, fur, a wet nose, and floppy or pointy ears.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div variants={fadeUpChild} className="flex justify-center">
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>
                      <ChevronDown className="text-amber-400/60" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Step 3 — Result */}
                  <motion.div
                    variants={fadeUpChild}
                    className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-5 border border-amber-500/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                      <div>
                        <h5 className="font-bold text-base mb-1 text-amber-300">Now recognises dogs!</h5>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          The next time the child sees a new dog — even a breed they've never seen before — they point and say:
                        </p>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, type: 'spring' }}
                          className="mt-3 inline-flex items-center gap-2 bg-amber-500 text-white font-heading font-bold text-lg px-5 py-2 rounded-xl shadow-lg shadow-amber-500/30"
                        >
                          🐕 "That's a dog!"
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* ───── AI SIDE ───── */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                    🤖
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-blue-300">AI Computer</h4>
                    <span className="text-xs text-slate-400">How machines learn from data</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <motion.div variants={fadeUpChild} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h5 className="font-bold text-base mb-1">Receives thousands of dog images</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          We feed the computer thousands of dog photos, each one labelled "dog". It also gets non-dog images labelled "not dog" — so it knows the difference.
                        </p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {['🖼️', '🖼️', '🖼️', '🖼️', '📸'].map((img, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0, rotate: -20 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 180 }}
                              className="text-3xl"
                            >
                              {img}
                            </motion.span>
                          ))}
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="text-sm text-blue-300 font-semibold self-center ml-1"
                          >
                            ×1000s
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div variants={fadeUpChild} className="flex justify-center">
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <ChevronDown className="text-blue-400/60" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Step 2 — Pattern Learning */}
                  <motion.div variants={fadeUpChild} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h5 className="font-bold text-base mb-2">AI learns patterns</h5>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                          The AI model studies every image and discovers the features that make a dog look like a dog:
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Shape', emoji: '📐', desc: 'Body outline, four legs, tail', color: 'from-blue-500 to-cyan-500' },
                            { label: 'Colour', emoji: '🎨', desc: 'Fur colour patterns & shading', color: 'from-purple-500 to-pink-500' },
                            { label: 'Face', emoji: '👃', desc: 'Eyes, nose, mouth, ear shape', color: 'from-amber-500 to-orange-500' },
                            { label: 'Features', emoji: '✨', desc: 'Texture, size, fur length', color: 'from-emerald-500 to-teal-500' },
                          ].map((pattern, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.15, type: 'spring', stiffness: 180 }}
                              whileHover={{ scale: 1.08, y: -4 }}
                              className={`bg-gradient-to-br ${pattern.color} rounded-xl p-3 text-center cursor-pointer shadow-lg`}
                            >
                              <div className="text-2xl mb-1">{pattern.emoji}</div>
                              <div className="font-heading font-bold text-sm">{pattern.label}</div>
                              <div className="text-[11px] text-white/70 mt-0.5 leading-tight">{pattern.desc}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div variants={fadeUpChild} className="flex justify-center">
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>
                      <ChevronDown className="text-blue-400/60" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Step 3 — Prediction */}
                  <motion.div
                    variants={fadeUpChild}
                    className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                      <div>
                        <h5 className="font-bold text-base mb-1 text-blue-300">AI predicts new images!</h5>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          Now when we show the AI a photo it has <strong>never</strong> seen before, it uses the patterns it learned to make a prediction:
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                          {/* New image input */}
                          <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="bg-white/10 rounded-xl p-3 text-center border border-white/10"
                          >
                            <div className="text-4xl mb-1">📷</div>
                            <div className="text-xs text-slate-400">New photo</div>
                          </motion.div>

                          {/* Arrow */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                          >
                            <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                              <ArrowRight className="text-blue-400" size={24} />
                            </motion.div>
                          </motion.div>

                          {/* AI Processing */}
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, type: 'spring' }}
                            className="bg-white/10 rounded-xl p-3 text-center border border-white/10"
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                              className="text-3xl mb-1"
                            >
                              ⚙️
                            </motion.div>
                            <div className="text-xs text-slate-400">AI thinks...</div>
                          </motion.div>

                          {/* Arrow */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                          >
                            <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}>
                              <ArrowRight className="text-blue-400" size={24} />
                            </motion.div>
                          </motion.div>

                          {/* Prediction result */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4, type: 'spring', stiffness: 150 }}
                            className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl px-5 py-3 text-center shadow-xl shadow-emerald-500/30"
                          >
                            <div className="text-3xl mb-1">🐕</div>
                            <div className="font-heading font-bold text-sm">Dog!</div>
                            <div className="text-[11px] text-emerald-100">97.2% confident</div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center bg-white/[0.05] border border-white/10 rounded-2xl p-6"
            >
              <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
                <span className="text-amber-400 font-semibold">A child</span> and an <span className="text-blue-400 font-semibold">AI model</span> learn the same way — by seeing lots of examples!
                The only difference? AI can look at <span className="text-emerald-400 font-bold">millions of pictures in seconds</span>, while a child needs years of experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — EVOLUTION OF AI
   ═══════════════════════════════════════════ */

const evolutionData = [
  {
    era: '1950s–1990s',
    title: 'Traditional Programming',
    icon: Code,
    color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
    gradient: 'from-slate-500 to-slate-700',
    items: ['Human writes exact rules', 'IF-THEN logic', 'Cannot learn on its own', 'e.g., Calculator, ATM'],
    emoji: '⌨️',
  },
  {
    era: '2000s',
    title: 'Machine Learning',
    icon: Database,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300',
    gradient: 'from-blue-500 to-blue-700',
    items: ['Learns patterns from data', 'Gets better with more data', 'Needs human to label data', 'e.g., Spam filters, Netflix'],
    emoji: '📊',
  },
  {
    era: '2010s',
    title: 'Deep Learning',
    icon: Network,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300',
    gradient: 'from-purple-500 to-purple-700',
    items: ['Uses neural networks (brain-inspired)', 'Learns complex patterns alone', 'Handles images, audio, video', 'e.g., Face ID, Self-driving'],
    emoji: '🧠',
  },
  {
    era: '2020s',
    title: 'Generative AI',
    icon: Sparkles,
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300',
    gradient: 'from-emerald-500 to-teal-500',
    items: ['Creates brand-new content', 'Text, images, code, music', 'Understands context & nuance', 'e.g., ChatGPT, DALL·E, Gemini'],
    emoji: '✨',
  },
];

function EvolutionSection() {
  return (
    <section className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20" id="evolution">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="The Evolution of"
          highlight="AI"
          subtitle="From simple rule-based programs to AI that creates new things — here's how we got here."
        />

        {/* Timeline connector */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {evolutionData.map((era, i) => (
            <motion.div key={i} variants={fadeUpChild}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${era.gradient}`} />

                <div className="text-5xl mb-4">{era.emoji}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{era.era}</div>
                <h3 className="font-heading font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">{era.title}</h3>
                <ul className="space-y-2">
                  {era.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <ChevronRight size={14} className="mt-1 text-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Arrow connector (except last) */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="text-brand-blue" size={24} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — AI UNIVERSE (Nested Circles)
   ═══════════════════════════════════════════ */

function AIUniverseSection() {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    { id: 'ai', label: 'Artificial Intelligence', desc: 'Any technique that enables machines to mimic human behaviour.', example: 'Siri, Alexa, Spam filters', size: 'w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px]', border: 'border-blue-400/40', bg: 'bg-blue-500/10', text: 'text-blue-300' },
    { id: 'ml', label: 'Machine Learning', desc: 'AI that learns from data without being explicitly programmed.', example: 'Netflix recommendations, Spam detection', size: 'w-[220px] h-[220px] sm:w-[330px] sm:h-[330px] md:w-[410px] md:h-[410px]', border: 'border-indigo-400/50', bg: 'bg-indigo-500/15', text: 'text-indigo-300' },
    { id: 'dl', label: 'Deep Learning', desc: 'ML using neural networks with many layers — inspired by the brain.', example: 'Face ID, Self-driving cars', size: 'w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px]', border: 'border-purple-400/60', bg: 'bg-purple-500/20', text: 'text-purple-300' },
    { id: 'genai', label: 'Generative AI', desc: 'DL that creates new content — text, images, code, music.', example: 'ChatGPT, DALL·E, Midjourney', size: 'w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[190px] md:h-[190px]', border: 'border-teal-400', bg: 'bg-gradient-to-br from-teal-500/30 to-blue-600/30', text: 'text-teal-200' },
  ];

  return (
    <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden scroll-mt-20" id="universe">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="AI vs ML vs DL vs"
          highlight="GenAI"
          subtitle="They are like nested Russian dolls — each one is a subset of the bigger one."
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Nested Circles */}
          <div className="relative flex items-center justify-center flex-shrink-0" style={{ height: 520, width: '100%', maxWidth: 520 }}>
            {layers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                className={`absolute rounded-full border-2 ${layer.border} ${layer.bg} flex items-start justify-center cursor-pointer transition-all duration-300 ${layer.size}`}
                style={{ marginTop: i * 48 }}
              >
                <span className={`mt-3 sm:mt-4 font-heading font-semibold text-xs sm:text-sm ${layer.text}`}>
                  {layer.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Info Panel */}
          <div className="flex-1 space-y-4 min-w-0 w-full">
            {layers.map((layer) => (
              <motion.div
                key={layer.id}
                variants={fadeUpChild}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeLayer === layer.id
                    ? 'bg-white/10 border-white/30 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <h4 className="font-heading font-bold text-lg mb-1">{layer.label}</h4>
                <p className="text-sm text-slate-400 mb-2">{layer.desc}</p>
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-300">Examples:</span> {layer.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — NEURAL NETWORKS (Animated)
   ═══════════════════════════════════════════ */

function NeuronNode({ label, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 150 }}
      className="flex flex-col items-center gap-1"
    >
      <motion.div
        animate={{ boxShadow: [`0 0 0px ${color}`, `0 0 20px ${color}`, `0 0 0px ${color}`] }}
        transition={{ repeat: Infinity, duration: 2, delay }}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center text-sm font-bold"
        style={{ borderColor: color, backgroundColor: `${color}15`, color }}
      >
        <Atom size={20} />
      </motion.div>
      {label && <span className="text-[10px] font-semibold text-slate-400">{label}</span>}
    </motion.div>
  );
}

function NeuralNetworkSection() {
  const inputNodes = ['Image', 'Text', 'Audio'];
  const hiddenNodes = ['H1', 'H2', 'H3', 'H4'];
  const outputNodes = ['Cat', 'Dog'];

  return (
    <section className="py-24 px-4 scroll-mt-20" id="neural">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="How Neural Networks"
          highlight="Think"
          subtitle="Inspired by the human brain — artificial neurons pass data through layers to learn patterns and make predictions."
        />

        {/* Bio vs Artificial comparison */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeUpChild} className="card p-8 border-l-4 border-l-indigo-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🧬</div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Biological Neuron</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                'Receives signals through Dendrites',
                'Cell Body processes the information',
                'Sends output through Axon',
                'Connects to 10,000+ other neurons',
                'Uses electrical & chemical signals',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 text-indigo-500 flex-shrink-0" />{t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpChild} className="card p-8 border-l-4 border-l-teal-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🤖</div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Artificial Neuron</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                'Receives numerical Inputs (data)',
                'Applies Weights & Bias (importance)',
                'Passes through Activation Function',
                'Produces an Output value',
                'Uses math instead of chemistry',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 text-teal-500 flex-shrink-0" />{t}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Animated Neural Network Diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          <h3 className="text-center text-white font-heading font-bold text-2xl mb-10">
            Data Flow Through a Neural Network
          </h3>

          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 relative">
            {/* Input Layer */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Input</div>
              {inputNodes.map((n, i) => (
                <NeuronNode key={n} label={n} color="#3B82F6" delay={i * 0.1} />
              ))}
            </div>

            {/* Connection Lines 1 */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="nn-connection w-12 sm:w-20 md:w-32 rounded-full" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>

            {/* Hidden Layer */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Hidden</div>
              {hiddenNodes.map((n, i) => (
                <NeuronNode key={n} label={n} color="#8B5CF6" delay={0.3 + i * 0.1} />
              ))}
            </div>

            {/* Connection Lines 2 */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="nn-connection-2 w-12 sm:w-20 md:w-32 rounded-full" style={{ animationDelay: `${1 + i * 0.3}s` }} />
              ))}
            </div>

            {/* Output Layer */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Output</div>
              {outputNodes.map((n, i) => (
                <NeuronNode key={n} label={n} color="#10B981" delay={0.6 + i * 0.1} />
              ))}
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-10 max-w-xl mx-auto">
            Data enters the <span className="text-blue-400 font-semibold">Input Layer</span>, gets transformed by the{' '}
            <span className="text-purple-400 font-semibold">Hidden Layer</span>, and produces a prediction at the{' '}
            <span className="text-emerald-400 font-semibold">Output Layer</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — LARGE LANGUAGE MODELS
   ═══════════════════════════════════════════ */

function LLMSection() {
  const chatGPTSteps = [
    { icon: '📝', title: 'You Type a Prompt', desc: 'You ask ChatGPT a question or give it a task in plain English.' },
    { icon: '🔤', title: 'Tokenization', desc: 'Your text is broken into small pieces called tokens (words or parts of words).' },
    { icon: '🧮', title: 'Numbers In', desc: 'Each token is converted into a number (embedding) the AI can understand.' },
    { icon: '🧠', title: 'Neural Network Processes', desc: 'Billions of parameters predict the most likely next word, again and again.' },
    { icon: '💬', title: 'Response Generated', desc: 'The predicted tokens are converted back into human-readable text.' },
  ];

  const tokens = [
    { word: 'I', color: 'bg-blue-500' },
    { word: 'love', color: 'bg-indigo-500' },
    { word: 'Art', color: 'bg-purple-500' },
    { word: 'ificial', color: 'bg-purple-400' },
    { word: 'Int', color: 'bg-teal-500' },
    { word: 'elligence', color: 'bg-teal-400' },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20" id="llm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Large Language Models"
          highlight="(LLMs)"
          subtitle="LLMs are AI models trained on billions of words from the internet. They predict the next word in a sentence — that's how they 'talk'!"
        />

        {/* How ChatGPT Works — Step by Step */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl text-center text-slate-900 dark:text-slate-100 mb-8">
            How ChatGPT Works — Step by Step
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {chatGPTSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUpChild} className="relative">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 h-full shadow-card"
                >
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="text-xs font-bold text-brand-blue mb-1">Step {i + 1}</div>
                  <h4 className="font-heading font-bold text-sm mb-2 text-slate-900 dark:text-slate-100">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
                {i < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={18} className="text-brand-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training vs Inference */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <motion.div variants={fadeUpChild} className="card p-8 border-t-4 border-t-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <GraduationCap className="text-amber-600" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Training</h4>
                <span className="text-xs text-amber-600 font-semibold">Learning Phase</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="font-bold text-amber-500">•</span> Takes weeks/months on supercomputers</li>
              <li className="flex gap-2"><span className="font-bold text-amber-500">•</span> Reads billions of web pages, books, articles</li>
              <li className="flex gap-2"><span className="font-bold text-amber-500">•</span> Learns grammar, facts, reasoning patterns</li>
              <li className="flex gap-2"><span className="font-bold text-amber-500">•</span> Costs millions of dollars to train</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpChild} className="card p-8 border-t-4 border-t-emerald-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Zap className="text-emerald-600" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Inference</h4>
                <span className="text-xs text-emerald-600 font-semibold">Using Phase</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="font-bold text-emerald-500">•</span> Happens in real-time (seconds)</li>
              <li className="flex gap-2"><span className="font-bold text-emerald-500">•</span> Uses trained knowledge to answer you</li>
              <li className="flex gap-2"><span className="font-bold text-emerald-500">•</span> Predicts one token at a time</li>
              <li className="flex gap-2"><span className="font-bold text-emerald-500">•</span> This is what you do when using ChatGPT!</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Tokenization Demo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-card"
        >
          <h3 className="font-heading font-bold text-xl text-center text-slate-900 dark:text-slate-100 mb-2">
            🔤 Tokenization — How AI Reads Text
          </h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
            AI doesn't read words like we do — it breaks text into small chunks called <strong>tokens</strong>.
          </p>

          <div className="text-center mb-4 text-lg font-mono text-slate-700 dark:text-slate-300">
            "I love Artificial Intelligence"
          </div>
          <div className="flex items-center justify-center mb-3">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="text-brand-blue" size={24} />
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {tokens.map((t, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                className={`${t.color} text-white px-4 py-2 rounded-xl font-mono text-lg font-bold shadow-lg`}
              >
                {t.word}
              </motion.span>
            ))}
          </div>

          <div className="text-center text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold">6 tokens</span> · In AI models, <span className="font-semibold text-brand-blue">1 token ≈ 4 characters</span> of English text
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7 — ACADEMIC INTEGRITY
   ═══════════════════════════════════════════ */

function AcademicIntegritySection() {
  const dos = [
    'Use AI to brainstorm ideas and get started',
    'Use AI as a tutor to explain difficult topics',
    'Always verify AI-generated facts & citations',
    'Credit AI tools when you use them in projects',
    'Use AI to improve your grammar & writing style',
  ];
  const donts = [
    'Copy-paste AI output and submit as your own work',
    'Use AI during exams unless explicitly allowed',
    'Trust AI blindly — it can be confidently wrong',
    'Let AI replace your own critical thinking',
    'Share personal or sensitive data with AI tools',
  ];

  return (
    <section className="py-24 px-4 scroll-mt-20" id="integrity">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Academic"
          highlight="Integrity"
          subtitle="AI is a powerful tool, but using it responsibly is YOUR superpower. Here's how to stay ethical."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* DOs */}
          <motion.div variants={fadeUpChild} className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-emerald-700 dark:text-emerald-300">Do's ✅</h3>
            </div>
            <ul className="space-y-3">
              {dos.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpChild}
                  className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DON'Ts */}
          <motion.div variants={fadeUpChild} className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center">
                <ShieldAlert className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-rose-700 dark:text-rose-300">Don'ts ❌</h3>
            </div>
            <ul className="space-y-3">
              {donts.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpChild}
                  className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300"
                >
                  <XCircle className="text-rose-500 flex-shrink-0 mt-0.5" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 8 — PROMPT ENGINEERING
   ═══════════════════════════════════════════ */

const promptTypes = [
  { title: 'Zero-Shot', desc: 'Give a task with no examples — rely on AI\'s training.', example: '"Translate hello to French"', icon: Target, color: 'from-blue-500 to-blue-700' },
  { title: 'Few-Shot', desc: 'Provide 2–3 examples so AI understands the pattern.', example: '"Cat → 🐱, Dog → 🐶, Fish → ?"', icon: Layers, color: 'from-indigo-500 to-indigo-700' },
  { title: 'Role-Based', desc: 'Ask AI to act as a specific person or expert.', example: '"Act as a science teacher…"', icon: Users, color: 'from-purple-500 to-purple-700' },
  { title: 'Structured', desc: 'Specify the exact output format you need.', example: '"Format as a table with 3 columns"', icon: Workflow, color: 'from-teal-500 to-teal-700' },
];

function PromptEngineeringSection() {
  return (
    <section className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20" id="prompting">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="The Art of"
          highlight="Prompt Engineering"
          subtitle="The quality of AI's answer depends on the quality of YOUR question. Learn how to ask AI the right way!"
        />

        {/* Poor vs Good Prompt */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <motion.div variants={fadeUpChild} className="card p-6 border-l-4 border-l-rose-500 bg-rose-50/50 dark:bg-rose-950/10">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="text-rose-500" size={22} />
              <h4 className="font-heading font-bold text-lg text-rose-700 dark:text-rose-300">❌ Poor Prompt</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
              "Tell me about space"
            </div>
            <p className="text-xs text-slate-500 mt-3">Too vague — AI doesn't know what aspect, format, or depth you want.</p>
          </motion.div>

          <motion.div variants={fadeUpChild} className="card p-6 border-l-4 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/10">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-emerald-500" size={22} />
              <h4 className="font-heading font-bold text-lg text-emerald-700 dark:text-emerald-300">✅ Great Prompt</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
              "Act as a science teacher. Explain 5 interesting facts about Mars to a 10-year-old. Use simple language and include emojis. Format as a numbered list."
            </div>
            <p className="text-xs text-slate-500 mt-3">Specific role, task, audience, format, and constraints — AI gives a perfect answer!</p>
          </motion.div>
        </motion.div>

        {/* Prompt Formula */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-center mb-8">
              ✨ The Perfect Prompt Formula
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-lg font-bold">
              {[
                { label: 'Role', emoji: '🎭', desc: 'Who should AI be?' },
                { label: 'Task', emoji: '📝', desc: 'What to do?' },
                { label: 'Context', emoji: '🌍', desc: 'Background info' },
                { label: 'Format', emoji: '📋', desc: 'How to output?' },
                { label: 'Constraints', emoji: '⚠️', desc: 'Any limits?' },
              ].map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring' }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl mb-1">{part.emoji}</div>
                    <div className="font-heading">{part.label}</div>
                    <div className="text-xs font-normal text-blue-200">{part.desc}</div>
                  </div>
                  {i < 4 && <span className="text-2xl text-white/60">+</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Prompting Types */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {promptTypes.map((type, i) => (
            <motion.div key={i} variants={fadeUpChild}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${type.color}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <type.icon size={22} />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">{type.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{type.desc}</p>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 font-mono text-xs text-slate-500 dark:text-slate-400 italic">
                  {type.example}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 9 — AI TOOLS GALLERY
   ═══════════════════════════════════════════ */

const toolsData = [
  { name: 'ChatGPT', maker: 'OpenAI', desc: 'The most popular AI chatbot — great for writing, coding, brainstorming, and answering questions.', emoji: '💬', color: 'from-emerald-500 to-teal-500', tags: ['Text', 'Code', 'Research'] },
  { name: 'Gemini', maker: 'Google', desc: 'Google\'s powerful AI that can understand text, images, and code together. Integrated with Google apps.', emoji: '✨', color: 'from-blue-500 to-indigo-500', tags: ['Text', 'Images', 'Search'] },
  { name: 'Claude', maker: 'Anthropic', desc: 'Known for safety and long conversations. Great for detailed analysis and careful reasoning.', emoji: '🧠', color: 'from-amber-500 to-orange-500', tags: ['Analysis', 'Writing', 'Safety'] },
  { name: 'Perplexity', maker: 'Perplexity AI', desc: 'AI-powered search engine that gives you sourced, cited answers with references.', emoji: '🔍', color: 'from-purple-500 to-pink-500', tags: ['Search', 'Research', 'Citations'] },
  { name: 'Canva AI', maker: 'Canva', desc: 'Design tool with AI features — create posters, presentations, and edit images instantly.', emoji: '🎨', color: 'from-cyan-500 to-blue-500', tags: ['Design', 'Images', 'Posters'] },
  { name: 'Microsoft Designer', maker: 'Microsoft', desc: 'AI-powered design app for creating social media posts, invitations, and visual content.', emoji: '🖌️', color: 'from-rose-500 to-red-500', tags: ['Design', 'Social Media', 'Branding'] },
];

function AIToolsSection() {
  return (
    <section className="py-24 px-4 scroll-mt-20" id="tools">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="AI Tools"
          highlight="Gallery"
          subtitle="These are the most popular AI tools you can start using today. Each one has a superpower!"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {toolsData.map((tool, i) => (
            <motion.div key={i} variants={fadeUpChild}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
              >
                {/* Card header with gradient */}
                <div className={`bg-gradient-to-r ${tool.color} p-6 flex items-center gap-4`}>
                  <div className="text-4xl">{tool.emoji}</div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-white">{tool.name}</h4>
                    <span className="text-sm text-white/70">by {tool.maker}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{tool.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 10 — FINAL CTA
   ═══════════════════════════════════════════ */

function FinalSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <div className="text-6xl mb-8">🚀</div>
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
          "AI is not the future.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            AI is the present."
          </span>
        </h2>
        <p className="text-xl text-slate-400 mb-10 uppercase tracking-[0.2em] font-semibold">
          Learn AI · Build Future · Create Impact
        </p>
        <button
          onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/10"
        >
          Start from the Beginning ↑
        </button>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FLOATING NAV (in-page section navigation)
   ═══════════════════════════════════════════ */

function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'intro', icon: Brain, label: 'Intro' },
    { id: 'evolution', icon: Cog, label: 'Evolution' },
    { id: 'universe', icon: Layers, label: 'AI Universe' },
    { id: 'neural', icon: BrainCircuit, label: 'Neural Net' },
    { id: 'llm', icon: MessageSquare, label: 'LLMs' },
    { id: 'integrity', icon: ShieldCheck, label: 'Ethics' },
    { id: 'prompting', icon: Lightbulb, label: 'Prompting' },
    { id: 'tools', icon: Monitor, label: 'Tools' },
  ];

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 px-3 py-2 flex items-center gap-1 overflow-x-auto max-w-[95vw]"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-blue px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all whitespace-nowrap"
          title={s.label}
        >
          <s.icon size={14} />
          <span className="hidden sm:inline">{s.label}</span>
        </button>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */

export default function ImmersionProgram() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden font-sans selection:bg-blue-500/30">
      <FloatingNav />
      <HeroSection />
      <IntroSection />
      <EvolutionSection />
      <AIUniverseSection />
      <NeuralNetworkSection />
      <LLMSection />
      <AcademicIntegritySection />
      <PromptEngineeringSection />
      <AIToolsSection />
      <FinalSection />
    </div>
  );
}
