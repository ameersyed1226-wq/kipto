import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight">
            Loved By Businesses & Students
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400">
            We operate with clear communication and consistent responsiveness. Read how Kipto Innovation Private Limited helps individuals and businesses accelerate online.
          </p>
        </div>

        {/* 3 Grid Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-gray-50 dark:bg-[#123B4A]/25 rounded-3xl p-8 border border-gray-150 dark:border-white/5 hover:border-accent hover:dark:border-accent/40 transition-all duration-300 hover:-translate-y-1 relative shadow-sm flex flex-col justify-between"
            >
              {/* Testimonial Quote Symbol Decor */}
              <div className="absolute top-6 right-6 text-primary/10 dark:text-accent/15 group-hover:text-accent/30 transition-colors">
                <MessageSquareQuote className="w-10 h-10" />
              </div>

              {/* Star review scale */}
              <div className="flex space-x-1 mb-6 text-[#F39C3D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Core Quote Body */}
              <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed mb-6 font-sans">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-150 dark:border-white/5 flex items-center space-x-4">
                {/* Visual Circle Identity block */}
                <div className="w-10 h-10 bg-primary/15 dark:bg-accent/15 rounded-full flex items-center justify-center font-display font-bold text-[#0F5D6B] dark:text-accent font-black text-xs shrink-0">
                  {t.author.split(' ')[0][0]}
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-sm text-secondary dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
