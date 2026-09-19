import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import InteractiveBlob from './InteractiveBlob';

export default function Hero({ isLoaded, isUnveiling }) {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className={`sentira-hero-section ${isLoaded ? 'is-revealed' : isUnveiling ? 'is-unveiling' : 'is-dormant'}`} id="hero">
      {/* Blue Cloud Sky AVIF Background */}
      <div className="hero-sky-anime-bg" aria-hidden="true">
        <img
          src="/assets/images/background.avif"
          alt=""
          className="hero-sky-anime-img"
          loading="eager"
          decoding="async"
        />
        <div className="hero-sky-anime-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* White Squircle Blob Mascot with Mouse-Tracking Eyes */}
          <InteractiveBlob />

          {/* Single Headline in Lt Remark */}
          <h1 className="sentira-hero-title">
            {profile.name}
          </h1>

          {/* Value Proposition Subtext */}
          <p className="sentira-hero-subtext">
            {profile.tagline}
          </p>

          {/* Paired Action Pills */}
          <div className="sentira-hero-actions">
            <a href="#contact" className="sentira-btn-primary">Book a free call</a>
            <a href="#cases" className="sentira-btn-secondary">
              <span>View Case Studies</span>
              <i className="ph ph-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
