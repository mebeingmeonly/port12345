import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const heroHeight = hero ? hero.offsetHeight : 600;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > heroHeight - 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="floating-nav-wrapper">
        <header className={`site-header-capsule ${scrolled ? 'scrolled' : ''}`} id="top">
          <div className="header-inner">
            {/* Desktop Navigation Links */}
            <nav className="header-nav" aria-label="Main Navigation">
              <a href="#about" className="nav-link">About</a>
              <a href="#outcomes" className="nav-link">Outcomes</a>
              <a href="#expertise" className="nav-link">Expertise</a>
              <a href="#cases" className="nav-link">Cases</a>
            </nav>

            {/* Right: Primary Pill Action */}
            <div className="header-actions">
              <a href="#contact" className="header-cta-pill">Book a call</a>
              {/* Mobile Menu Button (Visible on <= 768px) */}
              <button 
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <i className={mobileMenuOpen ? "ph ph-x" : "ph ph-list"}></i>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
          <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Navigation</span>
              <button type="button" className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
                <i className="ph ph-x"></i>
              </button>
            </div>
            <nav className="mobile-nav-links">
              <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
              <a href="#outcomes" className="mobile-nav-link" onClick={closeMobileMenu}>Outcomes</a>
              <a href="#expertise" className="mobile-nav-link" onClick={closeMobileMenu}>Expertise</a>
              <a href="#cases" className="mobile-nav-link" onClick={closeMobileMenu}>Cases</a>
              <a href="#contact" className="mobile-nav-link mobile-cta" onClick={closeMobileMenu}>Book a call</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
