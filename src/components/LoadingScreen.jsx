import React, { useState, useEffect } from 'react';

// Rich randomized glyph sequences for smooth rolling typography
const LETTER_CONFIGS = [
  // Word 1: Riya
  {
    word: 0,
    target: 'R',
    glyphs: ['—', 'Z', 'K', 'O', 'M', 'P', 'X', 'B', 'W', 'D', 'Q', 'E', 'A', 'S', 'V', 'T', 'H', 'F', 'N', 'L', 'C', 'Y', 'J', 'U', 'I', 'G', 'P', 'R'],
    duration: 1.50,
    delay: 0.05,
  },
  {
    word: 0,
    target: 'i',
    glyphs: ['—', 'o', 'e', 'x', 'a', 's', 'r', 'n', 'c', 'v', 'u', 'l', 'm', 't', 'k', 'z', 'w', 'j', 'd', 'b', 'p', 'f', 'h', 'g', 'q', 'y', 'l', 'i'],
    duration: 1.62,
    delay: 0.10,
  },
  {
    word: 0,
    target: 'y',
    glyphs: ['—', 'e', 'u', 'q', 'a', 'x', 'p', 'w', 'o', 'r', 'v', 'n', 'm', 's', 'z', 'k', 'l', 'c', 'd', 'b', 't', 'g', 'f', 'h', 'j', 'q', 'p', 'y'],
    duration: 1.74,
    delay: 0.15,
  },
  {
    word: 0,
    target: 'a',
    glyphs: ['—', 's', 'm', 'o', 'n', 'e', 'u', 'x', 'r', 'c', 'v', 'w', 'z', 'k', 'l', 't', 'p', 'q', 'd', 'b', 'g', 'h', 'f', 'j', 'i', 'y', 'o', 'a'],
    duration: 1.86,
    delay: 0.20,
  },
  // Word 2: Gupta
  {
    word: 1,
    target: 'G',
    glyphs: ['—', 'B', 'D', 'O', 'C', 'P', 'Q', 'S', 'U', 'R', 'K', 'M', 'W', 'X', 'Z', 'H', 'N', 'E', 'F', 'T', 'V', 'A', 'L', 'J', 'Y', 'I', 'O', 'G'],
    duration: 1.95,
    delay: 0.26,
  },
  {
    word: 1,
    target: 'u',
    glyphs: ['—', 'o', 'v', 'n', 'w', 'm', 'c', 'a', 'e', 's', 'r', 'x', 'z', 'k', 'j', 'l', 't', 'd', 'b', 'p', 'q', 'g', 'h', 'f', 'y', 'i', 'v', 'u'],
    duration: 2.05,
    delay: 0.32,
  },
  {
    word: 1,
    target: 'p',
    glyphs: ['—', 'b', 'd', 'q', 'g', 'j', 'y', 'k', 'h', 'm', 'n', 'u', 'v', 'w', 'x', 'z', 'o', 'e', 'a', 's', 'r', 'c', 'l', 't', 'f', 'd', 'q', 'p'],
    duration: 2.14,
    delay: 0.38,
  },
  {
    word: 1,
    target: 't',
    glyphs: ['—', 'l', 'f', 'j', 'i', 'r', 's', 'c', 'e', 'o', 'a', 'n', 'u', 'v', 'w', 'x', 'z', 'k', 'h', 'd', 'b', 'p', 'm', 'g', 'q', 'y', 'l', 't'],
    duration: 2.22,
    delay: 0.44,
  },
  {
    word: 1,
    target: 'a',
    glyphs: ['—', 'u', 'e', 'o', 'n', 's', 'r', 'c', 'v', 'w', 'x', 'z', 'm', 'k', 'j', 'l', 't', 'p', 'q', 'd', 'b', 'g', 'h', 'f', 'i', 'p', 'e', 'a'],
    duration: 2.28,
    delay: 0.50,
  }
];

function RollingChar({ target, glyphs, duration, delay, isRolling }) {
  const total = glyphs.length;
  const targetShift = `${((total - 1) / total) * 100}%`;

  return (
    <span className="rolling-char-slot" data-char={target}>
      {/* Invisible natural character sizer locks down 100% accurate width and baseline */}
      <span className="rolling-char-sizer" aria-hidden="true">
        {target}
      </span>
      {/* GPU-accelerated smooth single-curve transition */}
      <span
        className="rolling-char-track"
        style={{
          transform: isRolling ? `translate3d(0, -${targetShift}, 0)` : 'translate3d(0, 0, 0)',
          transition: `transform ${duration}s cubic-bezier(0.12, 0.92, 0.22, 1) ${delay}s`,
        }}
      >
        {glyphs.map((glyph, idx) => (
          <span
            key={idx}
            className={`rolling-char-glyph ${idx === total - 1 ? 'is-target' : ''}`}
          >
            {glyph}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function LoadingScreen({ onStartUnveil, onComplete }) {
  const [isRolling, setIsRolling] = useState(false);
  const [isUnveiling, setIsUnveiling] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    // Lock background scroll during preloader
    document.body.style.overflow = 'hidden';

    // Start rolling letters smoothly
    const startTimer = setTimeout(() => {
      setIsRolling(true);
    }, 50);

    // Duration matches the last letter's roll settlement (2.28s delay+duration + slight buffer)
    const rollDuration = 2700;
    const settleTimer = setTimeout(() => {
      setIsSettled(true);
      
      // Hold beat after settling on "Riya Gupta", then start transition into hero section
      setTimeout(() => {
        setIsUnveiling(true);
        if (onStartUnveil) onStartUnveil();
        
        setTimeout(() => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 700);
      }, 350);
    }, rollDuration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(settleTimer);
      document.body.style.overflow = '';
    };
  }, [onStartUnveil, onComplete]);

  const word1 = LETTER_CONFIGS.filter((cfg) => cfg.word === 0);
  const word2 = LETTER_CONFIGS.filter((cfg) => cfg.word === 1);

  return (
    <aside
      className={`sentira-preloader ${isUnveiling ? 'is-unveiling' : ''}`}
      aria-label="Loading Riya Gupta Portfolio"
      role="dialog"
      aria-modal="true"
    >
      {/* Matched Layout Geometry: Identical container, flex positioning, and baseline as Hero section */}
      <div className="container preloader-container">
        <div className="preloader-content">
          <div className={`preloader-rolling-title ${isSettled ? 'is-settled' : ''}`}>
            <span className="rolling-title-wrapper" aria-hidden="true">
              <span className="rolling-word">
                {word1.map((cfg, i) => (
                  <RollingChar
                    key={`w1-${i}`}
                    target={cfg.target}
                    glyphs={cfg.glyphs}
                    duration={cfg.duration}
                    delay={cfg.delay}
                    isRolling={isRolling}
                  />
                ))}
              </span>
              <span className="rolling-space">&nbsp;</span>
              <span className="rolling-word">
                {word2.map((cfg, i) => (
                  <RollingChar
                    key={`w2-${i}`}
                    target={cfg.target}
                    glyphs={cfg.glyphs}
                    duration={cfg.duration}
                    delay={cfg.delay}
                    isRolling={isRolling}
                  />
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
