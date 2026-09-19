import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section sentira-about-section">
      <div className="container">
        {/* Section Header - Perfectly aligned with Outcomes, Expertise, Cases, Contact */}
        <div className="sentira-section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', maxWidth: '820px', margin: '0 auto' }}>
            Bridging creative intuition and retention analytics.
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'var(--ink-muted)', fontSize: '1.05rem' }}>
            Audience psychology, calculated narrative pacing, and strategic storytelling systems.
          </p>
        </div>

        {/* Symmetrical 2-Column Bento Grid matching Cases layout */}
        <div className="about-duo-grid">
          {/* Left: Clean Framed Editorial Portrait Card */}
          <div className="about-portrait-card">
            <img
              src={about.image}
              alt="Riya Gupta content strategist portrait"
              className="about-portrait-card-img"
              loading="lazy"
            />
          </div>

          {/* Right: Narrative Story & Proof Badges Card */}
          <div className="about-story-card">
            <div className="about-story-body">
              <div className="about-story-paragraphs">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-story-paragraph">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="about-story-chips">
              {about.chips.map((chip, idx) => (
                <span key={idx} className="about-story-chip">
                  <i className="ph ph-check-circle"></i>
                  <span>{chip}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
