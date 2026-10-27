'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;   // 0 = no parallax, 1 = moves at full scroll speed. Default 0.08
  className?: string;
}

/**
 * Wraps any section in a gentle parallax upward-drift as the user scrolls.
 * Uses IntersectionObserver + requestAnimationFrame for 60fps performance.
 */
export function ParallaxSection({ children, speed = 0.08, className }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { rootMargin: '100px 0px' },
    );
    observer.observe(el);

    const onScroll = () => {
      if (!visible || !el) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        // Distance from centre of element to centre of viewport
        const centre = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(centre * speed);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      <div style={{ transform: `translateY(${offset}px)`, willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}
