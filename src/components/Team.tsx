import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { teamMembers } from '../data';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Grid Mesh */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
            CREATIVE STEWARDSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight">
            Meet Our Leadership
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300">
            Kipto Innovation Private Limited was built on shared collaboration and professional integrity. We bridge design grids with rigorous development performance.
          </p>
        </div>

        {/* 2 Co-Founders Team Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const isCEO = member.role.includes('CEO');
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                className="group bg-gray-50 dark:bg-[#123B4A]/30 backdrop-blur-md rounded-3xl p-8 shadow-md border border-gray-100 dark:border-white/5 hover:border-primary hover:dark:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              >
                {/* Upper Status Icon */}
                <div className="absolute top-6 right-6 text-primary dark:text-accent">
                  {isCEO ? <ShieldCheck className="w-6 h-6 text-accent animate-pulse" /> : <Sparkles className="w-6 h-6 text-primary dark:text-accent" />}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Portrait Avatar Placeholder using styled corporate circle initials */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary to-[#123B4A] flex items-center justify-center text-white text-3xl font-display font-black shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300 border-2 border-white dark:border-[#0A1E26]">
                    <span className="text-gradient bg-gradient-to-tr from-accent to-white bg-clip-text text-transparent">
                      {member.initials}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-center sm:text-left">
                    <h3 className="font-display font-bold text-2xl text-secondary dark:text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono font-bold tracking-widest text-primary dark:text-accent uppercase">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Biography Copy */}
                <p className="mt-6 text-sm sm:text-base text-gray-650 dark:text-gray-300 leading-relaxed font-sans">
                  {member.bio}
                </p>

                {/* Interactive handles */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-accent p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-primary/20 transition-all"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-4.5 h-4.5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={`https://${member.github}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-accent p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-primary/20 transition-all"
                        aria-label={`${member.name} GitHub Repository`}
                      >
                        <Github className="w-4.5 h-4.5" />
                      </a>
                    )}
                    <a
                      href="mailto:kipto2007@gmail.com"
                      className="text-gray-400 hover:text-accent p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-primary/20 transition-all"
                      aria-label="Direct Email"
                    >
                      <Mail className="w-4.5 h-4.5" />
                    </a>
                  </div>

                  <span className="text-[10px] font-mono text-gray-400">
                    Kipto Partner
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
