import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Outcomes from './components/Outcomes';
import Expertise from './components/Expertise';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnveiling, setIsUnveiling] = useState(false);

  useEffect(() => {
    // Ensure viewport starts at top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`portfolio-app ${!isLoading ? 'hero-opened intro-complete' : isUnveiling ? 'hero-unveiling intro-active' : 'is-loading intro-active'}`}>
      {/* Repeating rolling letters loading screen */}
      {isLoading && (
        <LoadingScreen 
          onStartUnveil={() => setIsUnveiling(true)} 
          onComplete={() => setIsLoading(false)} 
        />
      )}

      <main>
        <Hero isLoaded={!isLoading} isUnveiling={isUnveiling} />
        <TrustStrip />
        <About />
        <Outcomes />
        <Expertise />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
