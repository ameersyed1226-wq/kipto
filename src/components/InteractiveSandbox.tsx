import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Laptop, Smartphone, Cpu, Play, Sparkles, ShoppingCart, Zap, CheckCircle, RefreshCw, BarChart, X } from 'lucide-react';

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'ai'>('web');
  const [sandboxMessage, setSandboxMessage] = useState<string | null>(null);
  
  // Tab 1 state: Web simulator
  const [cartCount, setCartCount] = useState(0);
  const [respMode, setRespMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [addingToCart, setAddingToCart] = useState(false);

  // Tab 2 state: Mobile simulator
  const [mobileTheme, setMobileTheme] = useState<'dark' | 'light'>('dark');
  const [activeScreen, setActiveScreen] = useState<'home' | 'menu' | 'profile'>('home');

  // Tab 3 state: AI Video track state
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [rendering, setRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);

  const aiPrompts = [
    { text: 'Generate viral promo clip for Mahesh Bakery & Sweets', duration: '12s', quality: '4K Render' },
    { text: 'Synthesize professional portfolio voiceover intro', duration: '8s', quality: 'Dolby Studio' },
    { text: 'Render high-converting dynamic Instagram brand reel', duration: '15s', quality: '60 FPS Full HD' }
  ];

  // Trigger simulated AI rendering timeline progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (rendering) {
      setRenderProgress(0);
      interval = setInterval(() => {
        setRenderProgress((prev) => {
          if (prev >= 100) {
            setRendering(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [rendering, selectedPrompt]);

  // Auto-dismiss sandbox notification message
  useEffect(() => {
    if (sandboxMessage) {
      const timer = setTimeout(() => {
        setSandboxMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sandboxMessage]);

  const handleAddToCart = () => {
    setAddingToCart(true);
    setTimeout(() => {
      setCartCount(prev => prev + 1);
      setAddingToCart(false);
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="relative mx-auto max-w-md lg:max-w-none"
    >
      {/* Dynamic Glowing Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-3xl transform rotate-2 scale-103 filter blur-sm pointer-events-none" />

      {/* Main Glassmorphism Frame Container */}
      <div className="bg-white/90 dark:bg-[#123B4A]/30 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-5 sm:p-6 shadow-2xl relative z-10">
        
        {/* Top bar containing simulated operating system header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-gray-200/60 dark:border-white/5">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-amber-400 rounded-full" />
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
            <span className="text-[11px] font-mono font-extrabold tracking-wider text-primary dark:text-accent ml-2 uppercase">
              KIPTO INNOVATION SANDBOX v2.0
            </span>
          </div>

          {/* Connected state pill */}
          <div className="flex items-center space-x-1.5 self-start sm:self-center bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>Interactive Simulator</span>
          </div>
        </div>

        {/* Tab Selection Row Bar */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-gray-50 dark:bg-[#0A1E26]/60 rounded-xl mb-5 border border-gray-200/50 dark:border-white/5">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-display font-bold transition-all ${
              activeTab === 'web'
                ? 'bg-primary text-white shadow-md dark:bg-accent dark:text-secondary'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent'
            }`}
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Web Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-display font-bold transition-all ${
              activeTab === 'mobile'
                ? 'bg-primary text-white shadow-md dark:bg-accent dark:text-secondary'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">App Sandbox</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-display font-bold transition-all ${
              activeTab === 'ai'
                ? 'bg-primary text-white shadow-md dark:bg-accent dark:text-secondary'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">AI Prompts</span>
          </button>
        </div>

        {/* Tab 1: Web Simulator Content */}
        {activeTab === 'web' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Viewport Resizer tool selection bar */}
            <div className="flex items-center justify-between text-xs bg-white/60 dark:bg-white/5 p-2 rounded-xl border border-gray-150 dark:border-white/5">
              <span className="font-mono text-gray-500 font-semibold">Web Viewport Size:</span>
              <div className="flex space-x-1.5">
                {[
                  { mode: 'desktop', icon: Laptop, label: 'MacBook' },
                  { mode: 'tablet', icon: Laptop, label: 'iPad' },
                  { mode: 'mobile', icon: Smartphone, label: 'iPhone' }
                ].map((btn) => {
                  const Icon = btn.icon;
                  const isActive = respMode === btn.mode;
                  return (
                    <button
                      key={btn.mode}
                      onClick={() => setRespMode(btn.mode as any)}
                      className={`p-1.5 rounded-md flex items-center space-x-1 text-[10px] font-medium transition-all ${
                        isActive
                          ? 'bg-primary/20 text-primary dark:bg-accent/20 dark:text-accent border border-primary/30 dark:border-accent/30'
                          : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/5'
                      }`}
                      title={btn.label}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="hidden xs:inline">{btn.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulated browser window with layout resize fluid animation */}
            <motion.div
              animate={{ width: respMode === 'desktop' ? '100%' : respMode === 'tablet' ? '75%' : '48%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="mx-auto bg-gray-50 dark:bg-[#0A1E26] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-inner"
            >
              {/* Browser Search Bar */}
              <div className="bg-gray-200/50 dark:bg-[#123B4A]/50 px-3 py-1.5 flex items-center space-x-2 text-[10px] font-mono text-gray-500 border-b border-gray-150 dark:border-white/5">
                <span className="text-emerald-500">🔒 https://</span>
                <span className="text-gray-600 dark:text-gray-300">maheshbakery.kipto.tech</span>
              </div>

              {/* Mock Web Dashboard Page Render */}
              <div className="p-4 space-y-4">
                {/* Header inside mock page */}
                <div className="flex justify-between items-center bg-white dark:bg-[#123B4A]/30 p-2 rounded-xl border border-gray-150 dark:border-white/5">
                  <span className="text-[10px] font-display font-black text-secondary dark:text-white">MAHESH'S CAKE BAR</span>
                  <div className="flex items-center space-x-1 bg-accent/25 text-accent text-[9px] font-mono px-2 py-0.5 rounded-lg">
                    <ShoppingCart className="w-3 h-3 text-accent" />
                    <span className="font-bold">{cartCount}</span>
                  </div>
                </div>

                {/* Cake list showcase preview */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white dark:bg-[#123B4A]/40 p-3 rounded-xl border border-gray-100 dark:border-white/5 flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-accent to-red-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      🍰
                    </div>
                    <div className="grow space-y-0.5">
                      <div className="text-[11px] font-bold text-gray-800 dark:text-white">Red Velvet Special</div>
                      <div className="text-[9px] font-mono text-gray-500">Fast delivery available</div>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      disabled={addingToCart}
                      className="bg-primary hover:bg-secondary dark:bg-accent dark:hover:bg-orange-500 text-white dark:text-secondary text-[9px] font-display font-bold px-2.5 py-1.5 rounded-lg transition-all"
                    >
                      {addingToCart ? 'Adding...' : '₹490'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-white/50 dark:bg-white/5 p-2 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="text-[10px] font-mono text-emerald-500 font-bold">180ms</div>
                <div className="text-[9px] text-gray-500">Page Load</div>
              </div>
              <div className="bg-white/50 dark:bg-white/5 p-2 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="text-[10px] font-mono text-emerald-500 font-bold">100/100</div>
                <div className="text-[9px] text-gray-500">SEO Health</div>
              </div>
              <div className="bg-white/50 dark:bg-white/5 p-2 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="text-[10px] font-mono text-accent font-bold">Yes</div>
                <div className="text-[9px] text-gray-500">PWA Ready</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Mobile Sandbox Content */}
        {activeTab === 'mobile' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Controls for theme and mock screens */}
            <div className="flex justify-between items-center text-xs bg-white/60 dark:bg-white/5 p-2.5 rounded-xl border border-gray-150 dark:border-white/5 font-sans">
              <span className="font-semibold text-gray-500">Interface Theme:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setMobileTheme('dark')}
                  className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${
                    mobileTheme === 'dark' ? 'bg-[#0A1E26] text-accent border border-accent/25' : 'text-gray-400'
                  }`}
                >
                  Dark HUD
                </button>
                <button
                  onClick={() => setMobileTheme('light')}
                  className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${
                    mobileTheme === 'light' ? 'bg-white text-primary border border-primary/25' : 'text-gray-400'
                  }`}
                >
                  Light HUD
                </button>
              </div>
            </div>

            {/* Smartphone Case frame render */}
            <div className="w-56 mx-auto bg-gray-900 rounded-[35px] p-3 border-4 border-gray-800 shadow-xl relative">
              
              {/* Speaker receiver */}
              <div className="w-16 h-4 bg-gray-800 absolute top-4 left-1/2 -translate-x-1/2 rounded-full z-20 flex justify-center items-center">
                <div className="w-2 h-2 bg-camera-lens rounded-full bg-slate-900" />
              </div>

              {/* Dynamic simulated phone viewport */}
              <div
                className={`rounded-[28px] overflow-hidden aspect-[9/16] transition-colors duration-300 relative ${
                  mobileTheme === 'dark' ? 'bg-[#0A1E26] text-white' : 'bg-white text-slate-800'
                }`}
              >
                {/* Content display */}
                <div className="p-4 pt-8 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[8px] font-mono">
                      <span>LTE / 5G</span>
                      <span className="text-[#F39C3D]">96% Loaded</span>
                    </div>

                    <div className="h-0.5 bg-gradient-to-r from-accent to-primary" />

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider block">KIPTO INNOVATION DETECTOR</span>
                      <h4 className="text-xs font-display font-black leading-tight">Syed's Technical Identity Card</h4>
                      <p className="text-[9px] text-gray-400 leading-snug">Designed specifically for recruitment platforms & direct inquiries.</p>
                    </div>

                    <div className="bg-white/5 dark:bg-[#123B4A]/40 p-2.5 rounded-xl border border-gray-100 dark:border-white/5 space-y-1">
                      <span className="text-[8px] font-mono text-accent uppercase block">Active Projects:</span>
                      <div className="text-[9px] font-sans font-bold text-blue-400 truncate">✔ bakeries_portal_v1.bin</div>
                      <div className="text-[9px] font-sans font-bold text-emerald-400 truncate">✔ live_ai_voiceover_render.acc</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => setSandboxMessage('Call Syed Ameer R on +91 80722 43142 for complete mobile app design & deployment!')}
                      className="w-full bg-primary text-white dark:bg-accent dark:text-slate-900 text-[9px] font-display font-medium py-2 rounded-lg text-center"
                    >
                      Connect with Syed
                    </button>
                    <span className="text-[7px] font-mono text-gray-500 block text-center">Swipe up to reveal next portfolio</span>
                  </div>
                </div>

              </div>

              {/* Home indicator bar */}
              <div className="w-14 h-1 bg-gray-700 mx-auto mt-2 rounded-full" />
            </div>
          </motion.div>
        )}

        {/* Tab 3: AI Prompts Content */}
        {activeTab === 'ai' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-gray-500 block">Select AI Promotion Target:</span>
              <div className="space-y-2">
                {aiPrompts.map((prompt, idx) => {
                  const isSelected = selectedPrompt === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedPrompt(idx);
                        setRendering(true);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? 'bg-primary/10 border-primary dark:bg-accent/10 dark:border-accent text-gray-800 dark:text-white'
                          : 'bg-white/60 dark:bg-[#0A1E26]/50 border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[9px] font-black text-accent uppercase">Prompt Asset {idx + 1}</span>
                        <span className="text-[9px] text-gray-400">{prompt.duration} duration</span>
                      </div>
                      <p className="font-sans font-semibold leading-tight text-[11px]">{prompt.text}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Waveform rendering loop */}
            <div className="bg-gray-50 dark:bg-[#0A1E26] p-4 rounded-xl border border-gray-200 dark:border-white/5 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-500">AI Model Output Status:</span>
                <span className={rendering ? 'text-accent animate-pulse' : 'text-emerald-500'}>
                  {rendering ? `Generating Frame Tracks (${renderProgress}%)` : 'Ready to Render'}
                </span>
              </div>

              {/* Fake Audio Waveform / Frame Strip representation */}
              <div className="h-8 flex items-center justify-between gap-1 px-2">
                {[2, 4, 3, 7, 5, 2, 8, 4, 9, 3, 6, 4, 8, 5, 2, 6, 3, 5].map((val, key) => (
                  <motion.div
                    key={key}
                    animate={{ height: rendering ? `${val * 10}%` : '20%' }}
                    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.2 + key * 0.02 }}
                    className="w-1.5 bg-accent rounded-full"
                  />
                ))}
              </div>

              {/* Progress Slider */}
              <div className="h-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary dark:bg-accent"
                  animate={{ width: rendering ? `${renderProgress}%` : '0%' }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-gray-550 pt-1">
                <span>Output Metric Code:</span>
                <span className="text-accent font-bold">{aiPrompts[selectedPrompt].quality}</span>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Mini tag below sandbox */}
      <div className="absolute -left-4 -bottom-4 bg-white dark:bg-[#123B4A] dark:border-white/10 p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-150 flex items-center space-x-3 z-20">
        <div className="w-9 h-9 bg-accent/20 rounded-xl flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-accent animate-spin-slow" />
        </div>
        <div>
          <div className="text-xs font-black text-gray-800 dark:text-white">Syed Ameer R.</div>
          <div className="text-[10px] font-mono text-gray-500">+91 8072243142</div>
        </div>
      </div>

      {/* Floating Alert Toast Overlay */}
      <AnimatePresence>
        {sandboxMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute left-4 right-4 bottom-16 z-40 bg-slate-900/95 dark:bg-white/95 text-white dark:text-secondary rounded-2xl p-4 shadow-2xl backdrop-blur-md flex items-center justify-between border border-white/10 dark:border-[#0A1E26]/10"
          >
            <div className="flex items-center space-x-3 flex-1 pr-3">
              <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <p className="text-xs font-sans font-medium leading-relaxed">
                {sandboxMessage}
              </p>
            </div>
            <button
              onClick={() => setSandboxMessage(null)}
              className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-secondary p-1.5 rounded-lg hover:bg-white/5 dark:hover:bg-[#0A1E26]/5 transition-all shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
