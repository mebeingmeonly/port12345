import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="sentira-section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', maxWidth: '820px', margin: '0 auto' }}>
            Let's build content people remember.
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.78)', fontSize: '1.05rem', maxWidth: '640px', margin: '0.85rem auto 0 auto' }}>
            Whether you are launching a video podcast, scaling your personal brand, or need high-retention scriptwriting, let's talk.
          </p>
        </div>

        {/* Redesigned Minimal Direct Inquiries Card Grid */}
        <div className="contact-showcase-container">
          <div className="contact-channels-grid">
            {/* Direct Email Card */}
            <a href={`mailto:${profile.email}`} className="contact-channel-card">
              <div className="contact-card-top">
                <div className="contact-channel-icon">
                  <i className="ph ph-envelope-simple"></i>
                </div>
                <div className="contact-channel-arrow">
                  <i className="ph ph-arrow-up-right"></i>
                </div>
              </div>
              <div className="contact-channel-content">
                <h3 className="contact-channel-title">Direct Email</h3>
                <p className="contact-channel-desc">Send project briefs, brand inquiries, or partnership questions.</p>
              </div>
            </a>

            {/* LinkedIn Profile Card */}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel-card">
              <div className="contact-card-top">
                <div className="contact-channel-icon">
                  <i className="ph ph-linkedin-logo"></i>
                </div>
                <div className="contact-channel-arrow">
                  <i className="ph ph-arrow-up-right"></i>
                </div>
              </div>
              <div className="contact-channel-content">
                <h3 className="contact-channel-title">LinkedIn Message</h3>
                <p className="contact-channel-desc">Connect directly for fast consultations and networking.</p>
              </div>
            </a>

            {/* Strategy Call / Consultation */}
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="contact-channel-card">
              <div className="contact-card-top">
                <div className="contact-channel-icon">
                  <i className="ph ph-calendar-check"></i>
                </div>
                <div className="contact-channel-arrow">
                  <i className="ph ph-arrow-up-right"></i>
                </div>
              </div>
              <div className="contact-channel-content">
                <h3 className="contact-channel-title">Book a Strategy Call</h3>
                <p className="contact-channel-desc">Reserve a focused 20-minute discussion about your channel.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
