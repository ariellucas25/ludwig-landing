import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import lumarePreview from '../assets/lumare.jpeg';

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
                  Music
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-medium text-blue-400 tracking-wide border border-blue-500/20">
                  Health and Lifestyle
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Lumare</h3>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                Lumare is a daily ritual of sound-guided sessions designed to elevate your mornings and calm your nights.
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
              <motion.img 
                src={lumarePreview} 
                alt="Lumare preview" 
                className="relative w-full h-full object-cover"
                initial={{ opacity: 0.6, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
