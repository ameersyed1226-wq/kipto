import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Play, Star, Award, Layers } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  const stats = [
    { value: '1.5+', label: 'Years Experience', icon: Award, color: 'text-primary dark:text-accent' },
    { value: '3', label: 'Projects Completed', icon: Layers, color: 'text-accent' },
    { value: '5', label: 'Happy Clients', icon: Star, color: 'text-primary dark:text-accent' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-white dark:bg-[#0A1E26] transition-colors duration-300">
      
      {/* Dynamic Ambient Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 bg-accent/80 dark:bg-accent/10 rounded-full filter blur-[150px] pointer-events-none opacity-40 dark:opacity-20" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Copy Column */}
          <div className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 flex flex-col items-center"
            >
              {/* Custom Tagline */}
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent px-4 py-1.5 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">
                  Leading Digital Transformation
                </span>
              </motion.div>

              {/* Title Header */}
              <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-secondary dark:text-white leading-[1.1] max-w-3xl mx-auto">
                Transforming Ideas into{' '}
                <span className="bg-gradient-to-r from-primary via-teal-500 to-accent bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </motion.h1>

              {/* Subheadline description */}
              <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto">
                Kipto Innovation Private Limited delivers innovative web solutions, mobile applications, UI/UX design, AI-powered brand videos, graphic design, and student portfolios.
              </motion.p>

              {/* CTAs CTA Button Group */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full sm:w-auto">
                <button
                  onClick={() => handleScrollTo('#contact')}
                  className="group bg-primary hover:bg-secondary text-white dark:bg-accent dark:hover:bg-orange-500 dark:text-secondary font-display font-medium px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleScrollTo('#portfolio')}
                  className="group bg-white hover:bg-gray-100 text-gray-700 dark:bg-[#123B4A]/40 dark:hover:bg-[#123B4A]/70 dark:text-white dark:border-[#123B4A] font-display font-medium px-8 py-4 rounded-xl transition-all border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Code className="w-4 h-4 text-primary dark:text-accent" />
                  <span>View Portfolio</span>
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Stats Strip */}
        <div id="stats-section" className="mt-20 border-t border-gray-200 dark:border-white/10 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white/40 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gray-100/50 dark:border-white/5 flex items-center space-x-5 shadow-sm group hover:border-accent hover:dark:border-accent/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/25 rounded-xl flex items-center justify-center text-primary dark:text-accent group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-secondary dark:text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-display font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
