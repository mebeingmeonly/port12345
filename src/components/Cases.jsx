import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Cases() {
  const { cases } = PORTFOLIO_DATA;

  return (
    <section id="cases" className="section cases-sentira-section">
      <div className="container">
        {/* Section Header */}
        <div className="sentira-section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', maxWidth: '820px', margin: '0 auto' }}>
            Documented performance, proven under scrutiny.
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'var(--ink-muted)', fontSize: '1.05rem' }}>
            Real-world retention curves, founder pipelines, and channel growth from our scripting laboratory.
          </p>
        </div>

        <div className="cases-minimal-grid">
          {cases.map((c) => (
            <div key={c.id} className="case-card-minimal">
              <div className="case-minimal-media-wrap">
                <img
                  src={c.image}
                  alt={`${c.title} visual`}
                  className="case-minimal-img"
                  loading="lazy"
                />
              </div>

              <div className="case-minimal-body">
                <div className="case-minimal-scope">{c.scope}</div>
                <h3 className="case-minimal-title">{c.title}</h3>
                <p className="case-minimal-desc">{c.desc}</p>

                <div className="case-minimal-metrics">
                  {c.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="case-minimal-pill">
                      <i className={`ph ${pill.icon}`}></i> {pill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
