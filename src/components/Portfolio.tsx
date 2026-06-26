import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, CheckCircle2, ChevronRight, X, Calendar, User, Tag } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
            FLAGSHIP ARCHITECTURES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight">
            Our Portfolio
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300">
            A small sneak peek containing only our 3 primary project milestones. Explore how we map requirements into production environments.
          </p>
        </div>

        {/* 3 Project Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
              className="group bg-gray-50 dark:bg-[#123B4A]/20 rounded-3xl overflow-hidden border border-gray-150 dark:border-white/5 hover:border-[#F39C3D] hover:dark:border-[#F39C3D]/50 transition-all duration-300 flex flex-col justify-between shadow-sm relative"
            >
              <div>
                {/* Visual Header / Cover using styled background gradients with visual indicators */}
                <div
                  style={{ background: project.image }}
                  className="h-48 relative flex items-center justify-center p-6 text-center text-white"
                >
                  <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
                  
                  {/* Decorative mesh grids inside card */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                  
                  <div className="relative z-10 space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-accent text-secondary font-black px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="font-display font-black text-2xl drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-gray-550 dark:text-gray-400 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-xs font-mono tracking-wider font-extrabold text-primary dark:text-accent uppercase">
                      Core Integrations:
                    </h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-gray-605 dark:text-gray-350 flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action trigger button */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-center bg-white hover:bg-primary hover:text-white dark:bg-[#123B4A]/50 dark:hover:bg-accent dark:hover:text-secondary text-gray-700 dark:text-white font-display font-medium text-xs py-3 rounded-xl transition-all border border-gray-200 dark:border-white/5 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Window Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A1E26] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-accent text-white rounded-full p-2 transition-all transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Graphic Banner */}
              <div
                style={{ background: selectedProject.image }}
                className="h-48 sm:h-56 relative flex items-center justify-center text-white"
              >
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                
                <div className="text-center p-6 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-accent text-secondary font-black px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-4xl drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Core Info */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 dark:border-white/5 pb-4 text-xs font-mono text-gray-500">
                  <div className="flex items-center space-x-1.5">
                    <User className="w-4 h-4 text-primary dark:text-accent" />
                    <span className="truncate">Client: {selectedProject.client}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-primary dark:text-accent" />
                    <span>Year: 2026</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Tag className="w-4 h-4 text-primary dark:text-accent" />
                    <span>Type: Modern Web</span>
                  </div>
                </div>

                {/* Extended Descriptions */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-lg text-secondary dark:text-white">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-gray-650 dark:text-gray-300 leading-relaxed font-sans">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm tracking-wider uppercase text-primary dark:text-accent">
                    Core Modules & Key Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 dark:bg-[#123B4A]/25 p-3 rounded-xl border border-gray-150 dark:border-white/5 flex items-center space-x-3"
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-sans font-semibold text-gray-750 dark:text-gray-300 truncate">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer buttons of modal */}
                <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs font-mono text-gray-500">
                    Developed with full mobile responsive optimization.
                  </span>
                  
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto bg-primary dark:bg-accent text-white dark:text-secondary text-xs font-display font-medium px-6 py-3 rounded-xl transition-all shadow hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Request Similar Solution</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
