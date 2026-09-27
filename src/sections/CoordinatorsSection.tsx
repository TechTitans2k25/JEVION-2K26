import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const CoordinatorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const faculty = [
    { name: 'Mrs. M. Sheeba', role: 'Faculty Coordinator', phone: '+91 9944481587' },
    { name: 'Mr. S. Sashikumar', role: 'Faculty Coordinator', phone: '+91 9629301892' }
  ];

  const student = [
    { name: 'Vishva S', role: 'Student Coordinator', phone: '+91 9360729933' },
    { name: 'Girivaran C', role: 'Student Coordinator', phone: '+91 8056306369' }
  ];

  const CoordinatorCard = ({ person, index }: { person: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#111214] rounded-2xl p-4 sm:p-5 border border-[#5C421D]/50 hover:border-[#D9A441] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(217,164,65,0.15)] flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#D9A441] flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-orbitron text-[#050505] font-bold mb-4 shadow-lg group-hover:shadow-[#FF6A00]/40 transition-shadow duration-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {person.name.charAt(0)}
      </div>
      <h3 className="text-base sm:text-lg font-orbitron font-bold text-[#F5F2EA] mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>{person.name}</h3>
      <p className="text-[#A9A9A5] font-inter text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{person.role}</p>
      
      <div className="flex gap-4 w-full justify-center">
        <a href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2 bg-[#151618] hover:bg-[#FF6A00] text-[#F5F2EA] py-2 px-4 rounded-lg transition-colors duration-300 border border-[#5C421D] hover:border-transparent flex-1 font-inter text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Phone size={16} />
          <span>Call</span>
        </a>
        <a href={`https://wa.me/${person.phone.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#151618] hover:bg-[#25D366] text-[#F5F2EA] py-2 px-4 rounded-lg transition-colors duration-300 border border-[#5C421D] hover:border-transparent flex-1 font-inter text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-[#0D0E10] text-[#F5F2EA] relative" id="coordinators">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Event <span className="text-[#D9A441]">Coordinators</span>
          </h2>
          <p className="text-[#A9A9A5] font-inter" style={{ fontFamily: "'Inter', sans-serif" }}>Get in touch with us for any queries.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-orbitron font-semibold text-[#FF8A1F] mb-8 text-center border-b border-[#5C421D]/30 pb-4 inline-block mx-auto" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Faculty Coordinators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faculty.map((person, i) => (
                <CoordinatorCard key={i} person={person} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-orbitron font-semibold text-[#FF8A1F] mb-8 text-center border-b border-[#5C421D]/30 pb-4 inline-block mx-auto" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Student Coordinators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {student.map((person, i) => (
                <CoordinatorCard key={i} person={person} index={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
