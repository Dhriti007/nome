
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorksSection from '../components/WorksSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThreeDCursor from '../components/ThreeDCursor';
import Preloader from '../components/Preloader';
import NeoBackground from '../components/NeoBackground';

const Index = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show 3D cursor after a brief delay for better UX
    const cursorTimer = setTimeout(() => {
      setShowCursor(true);
    }, 1000);

    // Hide preloader after content is loaded
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds for preloader display

    return () => {
      clearTimeout(cursorTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-bg dark:to-[#0a0a0a]">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {showCursor && <ThreeDCursor />}
          <NeoBackground />
          <Navbar />
          <HeroSection />
          <div id="works">
            <WorksSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
