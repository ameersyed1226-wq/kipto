import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  // Helper to map Lucide icons string to components
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative overflow-hidden">
      
      {/* Visual Decor Backdrop glows */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
            TAILORED ENGINEERING & DESIGN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300">
            Kipto Innovation Private Limited structures your physical blueprints into functional digital products. Explore both our essential brand-driven solutions and advanced custom expansions below.
          </p>
        </div>

        {/* Primary/Core services segment */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-px bg-gray-300 dark:bg-white/10 grow" />
            <h3 className="font-display font-extrabold text-sm text-primary dark:text-accent tracking-widest uppercase">
              Brand Solutions & Core Deliverables
            </h3>
            <span className="h-px bg-gray-300 dark:bg-white/10 grow" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.filter(s => s.category === 'core').map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white dark:bg-[#123B4A]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 dark:border-white/5 hover:border-accent hover:dark:border-accent/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Accent mini corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />

                <div className="space-y-4">
                  {/* Styled Icon */}
                  <div className="w-12 h-12 bg-primary/10 dark:bg-[#0A1E26] rounded-xl flex items-center justify-center text-primary dark:text-accent group-hover:bg-accent group-hover:text-secondary group-hover:scale-105 transition-all duration-300 shadow-sm">
                    {renderIcon(service.icon, 'w-6 h-6')}
                  </div>

                  <h4 className="font-display font-bold text-xl text-secondary dark:text-white group-hover:text-[#F39C3D] transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-xs font-mono font-medium text-primary dark:text-accent">
                  <span>Custom fit architecture</span>
                  <Icons.ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Self-made/Extended services segment ( Tamil task requirement: "severices nee neeya add panu" ) */}
        <div className="mt-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-px bg-gray-300 dark:bg-white/10 grow" />
            <h3 className="font-display font-extrabold text-sm text-primary dark:text-accent tracking-widest uppercase">
              Advanced Solutions & Scalable Expansion
            </h3>
            <span className="h-px bg-gray-300 dark:bg-white/10 grow" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.filter(s => s.category === 'extended').map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-gray-50/80 dark:bg-[#123B4A]/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/50 dark:border-white/5 hover:border-primary hover:dark:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 dark:bg-[#0A1E26] rounded-xl flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                    {renderIcon(service.icon, 'w-6 h-6')}
                  </div>

                  <h4 className="font-display font-bold text-xl text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-150 dark:border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                  <span>Extended expansion service</span>
                  <Icons.Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section bottom CTA / Quote block */}
        <div className="mt-16 text-center">
          <blockquote className="inline-block bg-white dark:bg-[#123B4A]/50 px-8 py-4 rounded-full border border-gray-100 dark:border-white/5 shadow-sm text-sm sm:text-base font-display font-bold tracking-wide italic text-secondary dark:text-white">
            "Custom solutions tailored to your needs."
          </blockquote>
        </div>

      </div>
    </section>
  );
}
