import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Cpu, Smile } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Our Mission',
      description: 'To empower businesses and students with affordable, modern, and innovative digital solutions that foster career development and scalable customer reach.',
      icon: Target,
      color: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent',
      border: 'border-primary/20 hover:border-primary'
    },
    {
      title: 'Our Vision',
      description: 'To become a trusted, globally recognized digital partner for startups, local businesses, energetic students, and ambitious, aspiring digital professionals.',
      icon: Eye,
      color: 'bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent',
      border: 'border-accent/20 hover:border-accent'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Typography Copy Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
                COHESIVE CREATIVE VALUE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary dark:text-white tracking-tight">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-sans font-medium">
              Kipto Innovation Private Limited is a creative digital agency focused on building impactful digital experiences for businesses and students. We combine design, technology, and AI to create solutions that help brands grow online.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We understand that the step towards establishing a strong online footprint can feel high-budget and complex. At Kipto Innovation Private Limited, we simplify everything. Designing responsive online bakery catalogs or handcrafting unique student resumes — our systems deliver top-tier corporate quality within optimal turnaround times.
            </p>

            {/* Micro Badges group */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="bg-gray-50 dark:bg-[#123B4A]/30 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <Users className="w-6 h-6 text-primary dark:text-accent mx-auto mb-2" />
                <span className="text-xs font-display font-medium text-gray-700 dark:text-gray-300">Student First</span>
              </div>
              <div className="bg-gray-50 dark:bg-[#123B4A]/30 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <Cpu className="w-6 h-6 text-primary dark:text-accent mx-auto mb-2" />
                <span className="text-xs font-display font-medium text-gray-700 dark:text-gray-300">AI Driven</span>
              </div>
              <div className="bg-gray-50 dark:bg-[#123B4A]/30 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <Smile className="w-6 h-6 text-primary dark:text-accent mx-auto mb-2" />
                <span className="text-xs font-display font-medium text-gray-700 dark:text-gray-300">5/5 Quality</span>
              </div>
            </div>
          </div>

          {/* Cards Right Column (Mission & Vision) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5, type: 'spring' }}
                    className={`bg-gray-50 dark:bg-[#123B4A]/25 p-8 rounded-2xl border ${v.border} transition-all duration-300 group hover:-translate-y-1`}
                  >
                    <div className="flex items-start space-x-5">
                      <div className={`p-4 rounded-xl shrink-0 ${v.color} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-xl text-secondary dark:text-white">
                          {v.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
