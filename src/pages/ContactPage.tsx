import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { coordinators } from '../data/coordinators';
import { Coordinator } from '../types';

const ContactPage: React.FC = () => {
  const faculty = coordinators?.filter(c => c.role === 'faculty') || [];
  const students = coordinators?.filter(c => c.role === 'student') || [];

  const CoordinatorCard = ({ person }: { person: Coordinator }) => (
    <div className="bg-[#111214] border border-[#5C421D]/30 p-5 rounded-xl flex flex-col justify-between h-full hover:border-[#FF6A00]/50 transition-colors">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#F5F2EA]">{person.name}</h3>
        <p className="text-[#FF6A00] text-sm font-orbitron mt-1 uppercase">{person.title}</p>
      </div>
      
      <div className="flex gap-2 mt-auto pt-4 border-t border-[#5C421D]/20">
        <a 
          href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#151618] hover:bg-[#1a1c1e] border border-[#5C421D]/50 rounded-lg text-[#F5F2EA] transition-colors"
        >
          <Phone size={16} className="text-[#FF6A00]" />
          <span className="text-sm font-bold">CALL</span>
        </a>
        <a 
          href={`https://wa.me/${person.phone.replace(/[^0-9+]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#151618] hover:bg-[#1a1c1e] border border-[#5C421D]/50 rounded-lg text-[#F5F2EA] transition-colors"
        >
          <MessageCircle size={16} className="text-[#25D366]" />
          <span className="text-sm font-bold">WHATSAPP</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-4 tracking-wider">
            CONTACT US
          </h1>
          <p className="text-[#A9A9A5]">Get in touch with the JEVION 2K26 organizing committee</p>
        </motion.div>

        {faculty.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-orbitron font-bold text-[#D9A441] mb-6 flex items-center gap-3">
              <span className="h-px bg-[#5C421D]/50 flex-grow" />
              FACULTY COORDINATORS
              <span className="h-px bg-[#5C421D]/50 flex-grow" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((person, i) => (
                <motion.div 
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CoordinatorCard person={person} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {students.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-orbitron font-bold text-[#D9A441] mb-6 flex items-center gap-3">
              <span className="h-px bg-[#5C421D]/50 flex-grow" />
              STUDENT COORDINATORS
              <span className="h-px bg-[#5C421D]/50 flex-grow" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((person, i) => (
                <motion.div 
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CoordinatorCard person={person} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#111214] border border-[#5C421D]/30 rounded-xl p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-orbitron font-bold text-[#F5F2EA] mb-6">GENERAL ENQUIRIES</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <a href="mailto:contact@JEVION2k26.com" className="flex items-center justify-center gap-3 text-[#A9A9A5] hover:text-[#FF6A00] transition-colors">
              <Mail className="text-[#FF6A00]" size={20} />
              <span>contact@JEVION2k26.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-[#A9A9A5]">
              <MapPin className="text-[#FF6A00]" size={20} />
              <span>Dept of IT, University</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
