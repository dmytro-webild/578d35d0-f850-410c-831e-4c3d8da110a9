// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in ./<PageBase>/sections/<X>.tsx. Edit the section
// files directly. Non-block content (wrappers, non-inlinable sections) is
// preserved inline; extracted section blocks become <XSection/> refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import ServicesSection from './HomePage/sections/Services';
import IndustriesSection from './HomePage/sections/Industries';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';


import TrustStripSection from './HomePage/sections/TrustStrip';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />
      <TrustStripSection />

  <AboutSection />

  <ServicesSection />

  <IndustriesSection />

  <TestimonialsSection />

  <FaqSection />

  <ContactSection />
    </>
  );
}
