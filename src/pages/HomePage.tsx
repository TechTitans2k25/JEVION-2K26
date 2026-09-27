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

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F2EA]">
      <HeroSection />
      
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
      
      <div className="noise-overlay" />
    </div>
  );
};

export default HomePage;
