import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import NarrativeSection from '@/components/sections/NarrativeSection';
import ThesisSection from '@/components/sections/ThesisSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NarrativeSection />
      <ThesisSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <CapabilitiesSection />
      <ContactSection />
    </>
  );
}
