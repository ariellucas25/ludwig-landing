import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BrainCircuit, Code2 } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col items-start p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
  >
    <div className="p-3 bg-black rounded-xl border border-white/10 mb-6 text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Expertise.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-white mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            We merge aesthetic refinement with technical rigor to build products that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Mobile Development" 
            description="Native and cross-platform mobile applications designed for performance, scalability, and an intuitive user experience on iOS and Android."
            icon={<Smartphone size={24} />}
            delay={0.2}
          />
          <ServiceCard 
            title="AI Integration" 
            description="Leveraging Large Language Models and Machine Learning to bring intelligent, predictive, and generative capabilities to your digital infrastructure."
            icon={<BrainCircuit size={24} />}
            delay={0.4}
          />
          <ServiceCard 
            title="Digital Strategy" 
            description="End-to-end product lifecycle management, from initial concept and prototyping to deployment and continuous growth optimization."
            icon={<Code2 size={24} />}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};