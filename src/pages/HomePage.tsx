import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import CountdownSection from '../sections/CountdownSection';
import AboutSection from '../sections/AboutSection';
import EventUniverseSection from '../sections/EventUniverseSection';
import SchedulePreviewSection from '../sections/SchedulePreviewSection';
import AnnouncementSection from '../sections/AnnouncementSection';
import CoordinatorsSection from '../sections/CoordinatorsSection';
import VenueSection from '../sections/VenueSection';
import RegistrationCTASection from '../sections/RegistrationCTASection';

const SectionWrapper = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`w-full relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#060608] text-[#F8F6F0] overflow-hidden">
      {/* Global Ambient Glows aligned with the Portal Artwork */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Upper Amber Bloom */}
        <div className="absolute top-[20vh] -left-[20vw] w-[50vw] h-[50vw] rounded-full bg-[#FF6A00]/[0.04] blur-[150px]" />
        {/* Mid Golden Nebula */}
        <div className="absolute top-[80vh] -right-[15vw] w-[45vw] h-[45vw] rounded-full bg-[#E5B842]/[0.05] blur-[160px]" />
        {/* Lower Warm Core */}
        <div className="absolute top-[160vh] left-[20vw] w-[40vw] h-[40vw] rounded-full bg-[#FF8A1F]/[0.04] blur-[180px]" />
        {/* Subtle Cosmic Noise */}
        <div className="noise-overlay" />
      </div>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Sections with Glass UX & Refined Spacing */}
      <div className="relative z-10 space-y-16 sm:space-y-24 md:space-y-32 pb-20">
        <SectionWrapper id="countdown">
          <CountdownSection />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>
        
        <SectionWrapper id="events-preview">
          <EventUniverseSection />
        </SectionWrapper>
        
        <SectionWrapper id="schedule-preview">
          <SchedulePreviewSection />
        </SectionWrapper>
        
        <SectionWrapper id="announcements">
          <AnnouncementSection />
        </SectionWrapper>
        
        <SectionWrapper id="coordinators">
          <CoordinatorsSection />
        </SectionWrapper>
        
        <SectionWrapper id="venue">
          <VenueSection />
        </SectionWrapper>
        
        <SectionWrapper id="registration-cta">
          <RegistrationCTASection />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default HomePage;
