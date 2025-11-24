import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-medium text-gray-400 tracking-[0.2em] mb-6 uppercase"
        >
          Ludwig Digital Studio
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We craft exceptional mobile applications and seamless AI integrations that redefine digital experiences. Simplicity meets power.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#work" 
            className="group flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-medium transition-all hover:bg-gray-100"
          >
            Our Work
          </a>
          <a 
            href="#contact" 
            className="group flex items-center gap-2 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:bg-white/10"
          >
            Contact Us <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};