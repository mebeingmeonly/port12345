import React, { useEffect, useRef, useState } from 'react';

/**
 * InteractiveBlob
 * A white squircle blob character matching the user's reference icon.
 * Features:
 * - Pure white squircle body with smooth continuous curvature
 * - Dual circular eyes that fluidly track the mouse cursor in real-time
 * - Natural periodic blinking physics
 * - Subtle 3D body tilt towards cursor
 * - Playful spring bounce on hover/click
 */
export default function InteractiveBlob() {
  const blobRef = useRef(null);
  const eyeContainerRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSquashing, setIsSquashing] = useState(false);

  // Position state refs for smooth requestAnimationFrame lerp
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentEye = useRef({ x: 0, y: 0 });
  const targetEye = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Render loop for smooth lerp tracking
    const updateMotion = () => {
      if (blobRef.current) {
        const rect = blobRef.current.getBoundingClientRect();
        const blobCenterX = rect.left + rect.width / 2;
        const blobCenterY = rect.top + rect.height / 2;

        const dx = mousePos.current.x - blobCenterX;
        const dy = mousePos.current.y - blobCenterY;
        const distance = Math.hypot(dx, dy);

        // Calculate angle and constrained travel radius
        const angle = Math.atan2(dy, dx);
        // Normalize intensity so eyes look fully towards mouse even when medium distance away
        const intensity = Math.min(distance / 280, 1);
        const maxEyeTravelX = 11; // Max horizontal travel within squircle
        const maxEyeTravelY = 8.5; // Max vertical travel within squircle

        targetEye.current.x = Math.cos(angle) * maxEyeTravelX * intensity;
        targetEye.current.y = Math.sin(angle) * maxEyeTravelY * intensity;

        // Smooth lerp for eyes
        currentEye.current.x += (targetEye.current.x - currentEye.current.x) * 0.16;
        currentEye.current.y += (targetEye.current.y - currentEye.current.y) * 0.16;

        // Smooth subtle body tilt
        const targetTiltX = -(targetEye.current.y * 0.75);
        const targetTiltY = targetEye.current.x * 0.75;
        currentTilt.current.x += (targetTiltX - currentTilt.current.x) * 0.12;
        currentTilt.current.y += (targetTiltY - currentTilt.current.y) * 0.12;

        // Apply transforms directly to DOM nodes for 60/120fps performance
        if (eyeContainerRef.current) {
          eyeContainerRef.current.style.transform = `translate(${currentEye.current.x.toFixed(2)}px, ${currentEye.current.y.toFixed(2)}px)`;
        }

        if (blobRef.current && !isSquashing) {
          blobRef.current.style.transform = `perspective(600px) rotateX(${currentTilt.current.x.toFixed(2)}deg) rotateY(${currentTilt.current.y.toFixed(2)}deg)`;
        }
      }

      animId = requestAnimationFrame(updateMotion);
    };

    animId = requestAnimationFrame(updateMotion);

    // Natural periodic blinking loop (every 3 to 6 seconds)
    let blinkTimeoutId;
    const scheduleNextBlink = () => {
      const delay = Math.random() * 3000 + 3200; // 3.2s to 6.2s
      blinkTimeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, 140);
      }, delay);
    };

    scheduleNextBlink();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
      clearTimeout(blinkTimeoutId);
    };
  }, [isSquashing]);

  // Handle playful click bounce
  const handleClick = () => {
    setIsSquashing(true);
    setTimeout(() => {
      setIsSquashing(false);
    }, 450);
  };

  return (
    <div className="hero-blob-anchor" aria-label="Interactive character mascot">
      <div
        ref={blobRef}
        className={`hero-blob-body ${isSquashing ? 'is-squashing' : ''}`}
        onClick={handleClick}
        title="Hi! I look wherever your cursor goes"
      >
        <div ref={eyeContainerRef} className="hero-blob-eyes-group">
          <div className={`hero-blob-eye left-eye ${isBlinking ? 'is-blinking' : ''}`}></div>
          <div className={`hero-blob-eye right-eye ${isBlinking ? 'is-blinking' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}
