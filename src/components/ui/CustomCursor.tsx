'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const ringRefPosition = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    document.body.classList.add('custom-cursor-active');

    const onMouseMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      setInteractive(
        Boolean(
          target?.closest(
            'a, button, input, textarea, select, summary, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])'
          )
        )
      );
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseDown = () => setPressed(true);
    const onMouseUp = () => setPressed(false);

    const animate = () => {
      ringRefPosition.current.x += (positionRef.current.x - ringRefPosition.current.x) * 0.18;
      ringRefPosition.current.y += (positionRef.current.y - ringRefPosition.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringRefPosition.current.x}px, ${ringRefPosition.current.y}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`custom-cursor-ring ${visible ? 'custom-cursor-visible' : ''} ${
          interactive ? 'custom-cursor-interactive' : ''
        } ${pressed ? 'custom-cursor-pressed' : ''}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`custom-cursor-dot ${visible ? 'custom-cursor-visible' : ''}`}
      />
    </>
  );
}
