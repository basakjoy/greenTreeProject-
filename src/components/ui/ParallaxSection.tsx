'use client';

import React, { useRef, useEffect, ReactNode } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const content = contentRef.current;
    if (!el || !content) return;

    let visible = false;
    let targetOffset = 0;
    let currentOffset = 0;
    let rafId = 0;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateTransform = (offset: number) => {
      content.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const animate = () => {
      currentOffset += (targetOffset - currentOffset) * 0.12;

      if (Math.abs(targetOffset - currentOffset) < 0.1) {
        currentOffset = targetOffset;
        updateTransform(currentOffset);
        rafId = 0;
        return;
      }

      updateTransform(currentOffset);
      rafId = requestAnimationFrame(animate);
    };

    const scheduleAnimation = () => {
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (!visible || motionPreference.matches) return;

      const rect = el.getBoundingClientRect();
      const centre = rect.top + rect.height / 2 - window.innerHeight / 2;
      targetOffset = centre * speed;
      scheduleAnimation();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: '100px 0px' },
    );
    observer.observe(el);

    const onMotionPreferenceChange = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      if (motionPreference.matches) {
        targetOffset = 0;
        currentOffset = 0;
        updateTransform(0);
      } else {
        onScroll();
      }
    };

    if (motionPreference.matches) updateTransform(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    motionPreference.addEventListener('change', onMotionPreferenceChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      motionPreference.removeEventListener('change', onMotionPreferenceChange);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div ref={contentRef} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}
