import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, UserCheck, GraduationCap, Users } from 'lucide-react';

const CoordinatorsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const faculty = [
    { name: 'Mrs. M. Sheeba', role: 'Faculty Coordinator', dept: 'Department of IT', phone: '+91 9944481587' },
    { name: 'Mr. S. Sashikumar', role: 'Faculty Coordinator', dept: 'Department of IT', phone: '+91 9629301892' }
  ];

  const student = [
    { name: 'Vishva S', role: 'Student Coordinator', dept: 'Tech Titans Leader', phone: '+91 9360729933' },
    { name: 'Girivaran C', role: 'Student Coordinator', dept: 'Tech Titans Secretary', phone: '+91 8056306369' }
  ];

  const CoordinatorCard = ({ person, index, isFaculty }: { person: typeof faculty[0], index: number, isFaculty?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center group hover:border-[#FF6A00]/50 relative overflow-hidden"
    >
      {/* Top Inner Specular Highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Avatar with Halo Glow */}
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#E5B842] opacity-40 blur-sm group-hover:opacity-80 transition-opacity" />
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FF6A00] via-[#FF8A1F] to-[#D94800] flex items-center justify-center text-xl sm:text-2xl font-orbitron font-extrabold text-[#060608] shadow-lg">
          {person.name.replace(/^(Mrs\.|Mr\.)\s*/, '').charAt(0)}
        </div>
      </div>

      {/* Role Pill */}
      <span className={`text-[10px] tracking-wider font-orbitron font-bold px-2.5 py-0.5 rounded-full mb-2 ${
        isFaculty 
          ? 'bg-[#E5B842]/15 text-[#FFE2A3] border border-[#E5B842]/30'
          : 'bg-[#FF6A00]/15 text-[#FF8A1F] border border-[#FF6A00]/30'
      }`}>
        {person.role}
      </span>

      <h3 className="text-base sm:text-lg font-orbitron font-bold text-[#F8F6F0] mb-0.5 group-hover:text-[#FF8A1F] transition-colors">
        {person.name}
      </h3>
      <p className="text-[#A3A5AF] font-inter text-xs sm:text-sm mb-6">
        {person.dept}
      </p>
      
      {/* Glass Action Buttons */}
      <div className="grid grid-cols-2 gap-3 w-full mt-auto">
        <a 
          href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`} 
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl glass-panel text-xs sm:text-sm font-semibold font-inter text-[#F8F6F0] hover:text-[#060608] hover:bg-[#FF6A00] hover:border-transparent transition-all duration-300"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl glass-panel text-xs sm:text-sm font-semibold font-inter text-[#F8F6F0] hover:text-[#060608] hover:bg-[#25D366] hover:border-transparent transition-all duration-300"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 md:py-24 relative z-10" id="coordinators">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl" ref={ref}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Users className="w-3.5 h-3.5 text-[#E5B842]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              ORGANIZING TEAM
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-[#F8F6F0] mb-3 tracking-tight">
            SYMPOSIUM <span className="text-gradient">COORDINATORS</span>
          </h2>
          <p className="text-[#A3A5AF] font-inter text-sm sm:text-base max-w-xl mx-auto">
            Reach out directly for registration assistance, event guidelines, or venue navigation.
          </p>
        </motion.div>

        {/* Coordinators Grid */}
        <div className="space-y-12 sm:space-y-16">
          {/* Faculty Section */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-[#E5B842]" />
              <h3 className="text-base sm:text-lg md:text-xl font-orbitron font-bold text-[#FFE2A3] tracking-wider uppercase">
                Faculty Coordinators
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {faculty.map((person, i) => (
                <CoordinatorCard key={i} person={person} index={i} isFaculty />
              ))}
            </div>
          </div>

          {/* Student Section */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <UserCheck className="w-5 h-5 text-[#FF8A1F]" />
              <h3 className="text-base sm:text-lg md:text-xl font-orbitron font-bold text-[#FF8A1F] tracking-wider uppercase">
                Student Coordinators
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
