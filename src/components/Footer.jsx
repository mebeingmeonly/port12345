import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand-wrap">
          <span className="footer-logo-text">Riya Gupta</span>
          <span className="footer-dot">•</span>
          <span>Content Strategist & Scriptwriter</span>
        </div>
        <a href="#top" onClick={scrollToTop} className="footer-top-link">
          Back to top <i className="ph ph-arrow-up"></i>
        </a>
        <span>© 2026 • Crafted with intent</span>
      </div>
    </footer>
  );
}
