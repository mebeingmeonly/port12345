import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Expertise() {
  const { expertise } = PORTFOLIO_DATA;

  return (
    <section id="expertise" className="section expertise-sentira-section">
      <div className="container">
        {/* Section Header */}
        <div className="sentira-section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', maxWidth: '780px', margin: '0 auto' }}>
            From confusion to clarity, fully handled.
          </h2>
        </div>

        {/* Expertise 5-Card Bento Grid */}
        <div className="expertise-bento-grid">
          {expertise.map((item, idx) => {
            const isTall = idx === 2; // Middle card spanning 2 rows
            return (
              <div
                key={item.id}
                className={`expertise-bento-card ${isTall ? 'expertise-card-tall' : ''}`}
              >
                {/* Card Top: Icon */}
                <div className="expertise-card-top">
                  <div className="expertise-bento-icon-wrap">
                    <i className={`ph ${item.icon} expertise-bento-icon`}></i>
                  </div>
                </div>

                {/* Card Bottom: Content */}
                <div className="expertise-bento-info">
                  <h3 className="expertise-bento-title">{item.title}</h3>
                  <p className="expertise-bento-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
