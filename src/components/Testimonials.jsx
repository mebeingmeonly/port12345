import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="section testimonials-sentira-section">
      <div className="container">
        {/* Section Header */}
        <div className="sentira-section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', maxWidth: '820px', margin: '0 auto' }}>
            Trusted by creators, founders, and media heads.
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'var(--ink-muted)', fontSize: '1.05rem' }}>
            Real feedback from executives and creators on audience retention and brand positioning.
          </p>
        </div>

        {/* 3-Column Solid Testimonials Cards Grid */}
        <div className="testimonials-solid-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card-solid">
              {/* Stars on Top */}
              <div className="testimonial-solid-stars">
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
              </div>

              {/* Content in Middle */}
              <p className="testimonial-solid-quote">
                "{t.quote}"
              </p>

              {/* Person Name at Bottom */}
              <div className="testimonial-solid-author">
                <span className="testimonial-solid-name">{t.name}</span>
                <span className="testimonial-solid-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
