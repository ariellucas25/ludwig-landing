import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to build the future?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss how we can bring your vision to life with precision engineering and intelligent design.
          </p>
          
          <a 
            href="mailto:contact@studioludwig.com.br"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300"
          >
            <Mail size={20} />
            contact@studioludwig.com.br
          </a>

          <div className="mt-16 flex justify-center gap-8">
             <div className="flex flex-col items-center gap-2 text-gray-500">
                <span className="text-sm uppercase tracking-widest">Location</span>
                <span className="text-white">Global / Remote</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-gray-500">
                <span className="text-sm uppercase tracking-widest">Inquiries</span>
                <span className="text-white">24h Response Time</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};