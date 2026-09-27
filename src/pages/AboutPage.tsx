import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Cpu, Code } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-6 tracking-wider">
            ABOUT JEVION 2K26
          </h1>
          <p className="text-xl text-[#A9A9A5] font-orbitron max-w-2xl mx-auto">
            {siteConfig?.tagline || 'A National Level Technical Symposium'}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Main Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none text-[#A9A9A5] leading-relaxed"
          >
            <p>
              <strong className="text-[#F5F2EA]">JEVION 2K26</strong> is the premier national-level technical symposium organized by the 
              Department of Information Technology, celebrating innovation, logic, and technological excellence.
              It serves as a dynamic platform for brilliant minds from across the nation to converge, compete, 
              and showcase their prowess in various domains of computer science and IT.
            </p>
            <p>
              This year, we are pushing the boundaries of what's possible, creating a cinematic, futuristic 
              experience that transcends a traditional college fest. Expect intense technical showdowns, 
              mind-bending hackathons, and creative non-technical events that test your ingenuity.
            </p>
          </motion.div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {[
              { icon: Terminal, label: 'EVENTS', val: '20+' },
              { icon: Users, label: 'PARTICIPANTS', val: '1000+' },
              { icon: Cpu, label: 'COLLEGES', val: '50+' },
              { icon: Code, label: 'PRIZE POOL', val: '₹1L+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111214] border border-[#5C421D]/30 rounded-xl p-6 text-center hover:border-[#FF6A00]/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-[#FF6A00] mx-auto mb-3" />
                <div className="text-2xl font-bold font-orbitron text-[#F5F2EA] mb-1">{stat.val}</div>
                <div className="text-xs text-[#A9A9A5] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Organization Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151618] border border-[#5C421D]/30 rounded-xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/5 rounded-full blur-3xl" />
            
            <h2 className="text-2xl font-orbitron font-bold text-[#D9A441] mb-6">ORGANIZED BY</h2>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-[#F5F2EA] font-bold text-lg">{siteConfig?.association || 'TECH TITANS ASSOCIATION'}</h3>
                <p className="text-[#A9A9A5] text-sm mt-1">The official student association driving technical excellence and fostering a community of innovators.</p>
              </div>
              
              <div className="h-px w-full bg-[#5C421D]/20" />
              
              <div>
                <h3 className="text-[#F5F2EA] font-bold text-lg">{siteConfig?.department || 'Department of Information Technology'}</h3>
                <p className="text-[#A9A9A5] text-sm mt-1">{siteConfig?.university || 'University'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
