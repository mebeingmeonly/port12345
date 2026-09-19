import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Outcomes() {
  const { outcomes } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = outcomes.length;

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance card-by-card in a loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextCard();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextCard(); // Swiped left -> next
    } else if (diff < -50) {
      prevCard(); // Swiped right -> prev
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="outcomes" className="section impact-section" aria-label="Key Outcomes Dashboard">
      <div className="container">
        {/* Section Header */}
        <div className="sentira-section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="sentira-section-title" style={{ maxWidth: '820px', margin: '0 auto' }}>
            Measurable outcomes engineered with intent.
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'var(--ink-muted)', fontSize: '1.05rem' }}>
            Audience psychology and strategic scripting translated into documented channel performance.
          </p>
        </div>

        {/* Looping Cards Stage */}
        <div
          className="outcomes-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="outcomes-carousel-track">
            {outcomes.map((item, idx) => {
              const diff = (idx - currentIndex + total) % total;

              let cardClass = 'card-hidden';
              if (diff === 0) {
                cardClass = 'card-center';
              } else if (diff === 1) {
                cardClass = 'card-next';
              } else if (diff === total - 1) {
                cardClass = 'card-prev';
              }

              const handleCardClick = () => {
                if (diff === 1) nextCard();
                if (diff === total - 1) prevCard();
              };

              return (
                <div
                  key={item.id}
                  className={`outcome-carousel-card ${cardClass}`}
                  onClick={handleCardClick}
                  aria-hidden={diff !== 0}
                >
                  <div className="outcome-card-top">
                    <span className="outcome-eyebrow">{item.eyebrow}</span>
                    <span className="outcome-top-tag">{item.topRight}</span>
                  </div>
                  <div className="outcome-hero-stat">
                    {item.stat}
                  </div>
                  <div className="outcome-card-body">
                    <h3 className="outcome-title">{item.title}</h3>
                    <p className="outcome-desc">{item.desc}</p>
                  </div>
                  <div className="outcome-metric-pills-row">
                    {item.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="outcome-metric-pill">
                        {typeof pill === 'string' ? pill : pill.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls: Arrows & Indicators */}
          <div className="outcomes-carousel-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={prevCard}
              aria-label="Previous outcome card"
            >
              <i className="ph ph-arrow-left"></i>
            </button>

            <div className="carousel-dots-wrap">
              {outcomes.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  className={`carousel-dot ${dotIdx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={nextCard}
              aria-label="Next outcome card"
            >
              <i className="ph ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
