import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Selected Work.</h2>
            <p className="text-gray-400 text-lg">Innovations we are proud to share.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-600 text-sm tracking-widest uppercase">01 / Recent Launch</span>
          </div>
        </motion.div>

        {/* Card for Lumare */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black border border-white/5"
        >
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Content Side */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white tracking-wide border border-white/5">
                  WEB & MOBILE
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-medium text-blue-400 tracking-wide border border-blue-500/20">
                  PRODUCTIVITY
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Lumare</h3>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                A seamless digital experience redefining how users interact with content. Clean, fast, and intuitive.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://lumare.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold text-lg group-hover:text-blue-400 transition-colors"
                >
                  Visit Website <ArrowUpRight size={20} />
                </a>
              </div>
            </div>

            {/* Visual Side (Mockup Placeholder) */}
            <div className="flex-1 relative overflow-hidden bg-[#111] lg:border-l border-white/5">
               {/* Abstract background representation of the app */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
               
               {/* Abstract UI Mockup */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl flex flex-col overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                  <div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 p-8 flex items-center justify-center">
                     <span className="text-neutral-700 font-bold text-2xl tracking-widest">LUMARE UI</span>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};