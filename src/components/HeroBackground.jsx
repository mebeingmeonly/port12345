import React, { useEffect, useRef } from 'react';

/**
 * Ramp-inspired smooth royal blue ethereal gradient hero background.
 * Features a deep midnight navy top, electric cobalt body, radiant central halo bloom,
 * and a clean gradient fade into pure white at the bottom (clean, zero arrows).
 */
export default function HeroBackground({ theme = 'royal-blue' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animFrameId;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement.offsetWidth;
      const height = canvas.parentElement.offsetHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Rich Ramp Royal Blue Base Gradient
      baseGrad.addColorStop(0, '#035FD8');     // Primary blue
      baseGrad.addColorStop(0.32, '#154ebf');   // Rich royal cobalt
      baseGrad.addColorStop(0.62, '#256be4');   // Electric blue
      baseGrad.addColorStop(0.84, '#d0e2fc');   // Soft sky transition
      baseGrad.addColorStop(1, '#ffffff');      // Pure white canvas

      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Radiant Center Halo Bloom behind the headline
      const cx = width / 2;
      const cy = height * 0.42;
      const maxGlowRadius = Math.max(width, height) * 0.58;

      const radialGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, maxGlowRadius);
      radialGlow.addColorStop(0, 'rgba(110, 190, 255, 0.7)');
      radialGlow.addColorStop(0.28, 'rgba(45, 135, 250, 0.45)');
      radialGlow.addColorStop(0.62, 'rgba(3, 95, 216, 0.2)');
      radialGlow.addColorStop(1, 'rgba(10, 35, 104, 0)');

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();
    };

    render();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        animFrameId = requestAnimationFrame(render);
      }, 80);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [theme]);

  return (
    <div className="hero-sky-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-sky-canvas" />
      <div className="hero-sky-overlay"></div>
    </div>
  );
}
