import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { STUDIO_SERVICES } from './data/studio';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    STUDIO_SERVICES[0].name
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-canvas text-ink">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection onSelectService={setSelectedService} />
          <AboutSection />
          <ContactSection
            selectedService={selectedService}
            onSelectService={setSelectedService}
          />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
