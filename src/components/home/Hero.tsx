'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const heroSlides = [
  {
    id: 0,
    tag: '01 Commercial Tower',
    title: 'Modern Commercial Tower',
    image: '/images/hero/hero-tower.jpg',
    description: 'Contemporary mixed-use tower designed with a strong urban presence and expansive glass façade.',
  },
  {
    id: 1,
    tag: '02 Cultural Landmark',
    title: 'Zebun Nessa Mosque',
    image: '/images/hero/hero-mosque.jpg',
    description: 'A monumental civic landmark shaped by sculptural concrete walls and a rhythmic façade.',
  },
  {
    id: 2,
    tag: '03 Residential Tower',
    title: 'Contemporary Residential Tower',
    image: '/images/hero/hero-residential-tower.jpg',
    description: 'Red-toned residential architecture framed with greenery and generous outdoor balconies.',
  },
];

const SLIDE_DURATION = 7000; // ms between auto-advances
const TRANSITION_MS  = 1200; // crossfade duration (must match CSS)

export function Hero() {
  const [current, setCurrent]     = useState(0);
  const [next,    setNext]        = useState<number | null>(null); // slide being faded in
  const [transitioning, setTransitioning] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const title = titleRef.current;
    const card = cardRef.current;
    if (!section || !background || !title || !card) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let targetScroll = 0;
    let currentScroll = 0;
    let animationFrame = 0;

    const updateTransforms = (scroll: number) => {
      background.style.transform = `translate3d(0, ${scroll * 0.35}px, 0)`;
      title.style.transform = `translate3d(0, ${scroll * 0.2}px, 0)`;
      card.style.transform = `translate3d(0, ${scroll * 0.12}px, 0)`;
    };

    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * 0.12;
      updateTransforms(currentScroll);

      if (Math.abs(targetScroll - currentScroll) < 0.1) {
        currentScroll = targetScroll;
        updateTransforms(currentScroll);
        animationFrame = 0;
        return;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (motionPreference.matches) return;

      targetScroll = Math.min(window.scrollY, section.offsetHeight);
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    };

    const onMotionPreferenceChange = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (motionPreference.matches) {
        targetScroll = 0;
        currentScroll = 0;
        updateTransforms(0);
      } else {
        onScroll();
      }
    };

    updateTransforms(motionPreference.matches ? 0 : Math.min(window.scrollY, section.offsetHeight));
    currentScroll = targetScroll = motionPreference.matches
      ? 0
      : Math.min(window.scrollY, section.offsetHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    motionPreference.addEventListener('change', onMotionPreferenceChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      motionPreference.removeEventListener('change', onMotionPreferenceChange);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Smooth slide transition
  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setNext(index);

      setTimeout(() => {
        setCurrent(index);
        setNext(null);
        setTransitioning(false);
      }, TRANSITION_MS);
    },
    [current, transitioning],
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-slate-950"
      aria-label="Hero section"
    >
      {/* ─── BACKGROUND SLIDESHOW ─────────────────────────────────────────── */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        {/* Current slide (always visible) */}
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 w-full h-full',
              // Ken Burns: current slide subtly zooms in while shown
              i === current ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`,
              // slight continuous zoom on current active slide
              transform: i === current ? 'scale(1.06)' : 'scale(1)',
              // transition for scale: longer so it's invisible zoom-in during 7s
              transitionProperty: i === current ? 'opacity, transform' : 'opacity',
              transitionDuration:
                i === current ? `${TRANSITION_MS}ms, 8000ms` : `${TRANSITION_MS}ms`,
              transitionTimingFunction:
                i === current ? 'cubic-bezier(0.4,0,0.2,1), linear' : 'cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}

        {/* Incoming slide fading in on top */}
        {next !== null && (
          <div
            key={`next-${next}`}
            className="absolute inset-0 w-full h-full"
            style={{
              animation: `heroFadeIn ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1) forwards`,
            }}
          >
            <Image
              src={heroSlides[next].image}
              alt={heroSlides[next].title}
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* ── Gradient Overlays ── */}
        {/* Top-to-mid dark: header legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />
        {/* Bottom scrim: text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />
      </div>

      {/* ─── CONTENT LAYER ────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16">

        {/* ── GIANT BRAND TYPOGRAPHY (parallax-driven) ── */}
        <div
          ref={titleRef}
          className="w-full overflow-hidden select-none"
          style={{ willChange: 'transform' }}
        >
          {/*
            Inspired by the reference: enormous text that bleeds off the right edge.
            "GREEN" left-aligned, starts from a generous left padding.
            "TREE" continues on the same line but its right side may clip.
          */}
          <div className="px-5 sm:px-10 lg:px-14 xl:px-20">
            {/* Top label */}
            <div className="flex items-center gap-4 mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/70 uppercase">
                GT-2025
              </span>
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/70 uppercase">
                YOUR SUSTAINABLE MASTERPIECE AWAITS
              </span>
            </div>

            {/* GREEN TREE — full-bleed display */}
            <div className="flex items-start leading-none">
              {/*
                We render a single line: "GREEN" [©] "TREE"
                The font-size is deliberately huge — vw-based so it fills the width.
                On mobile: 22vw so both words fit; on large screens it bleeds right.
              */}
              <div
                className="font-black uppercase tracking-[-0.04em] text-white drop-shadow-2xl"
                style={{ fontSize: 'clamp(60px, 12.5vw, 200px)', lineHeight: 0.88 }}
              >
                {/* First word */}
                <span className="mr-3 sm:mr-6">GREEN</span>

                {/* Second word — may intentionally bleed past the viewport on small screens */}
                <span className="text-white/95">TREE</span>
              </div>
            </div>

            {/* Top-right badge (positioned absolutely relative to section) */}
          </div>

          {/* Top-right badge */}
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 lg:right-14 flex items-start gap-2 text-right">
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
              </svg>
            </div>
            
          </div>
        </div>

        {/* ── BOTTOM CONTENT ROW ── */}
        <div
          ref={cardRef}
          className="w-full px-5 sm:px-10 lg:px-14 xl:px-20 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto pt-12"
          style={{ willChange: 'transform' }}
        >
          {/* Left: headline + CTA + sub-labels */}
          <div className="max-w-sm">
            <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-[1.1] mb-5 drop-shadow-xl">
              WHERE<br />
              TRANQUILITY MEETS<br />
              NET-ZERO ENGINEERING
            </h2>

            {/* White pill button — identical to reference */}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-2xl hover:bg-slate-100 transition-all mb-6"
            >
              <span>VIEW PROJECTS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-950 group-hover:scale-125 transition-transform" />
            </Link>

            {/* Small property labels */}
            <div className="space-y-0.5 text-[10px] font-bold text-white/70 tracking-[0.2em] uppercase leading-snug">
              <div>SUSTAINABLE ARCHITECTURE</div>
              <div>SURROUNDED BY NATURE</div>
              <div>20 MINUTES FROM DHAKA GULSHAN</div>
            </div>
          </div>

          {/* Centre: slide indicator pills */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 self-start md:self-auto pb-1">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                disabled={transitioning}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 backdrop-blur-md',
                  index === current
                    ? 'bg-white text-slate-950 shadow-lg scale-105'
                    : 'bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/20',
                )}
              >
                {slide.tag}
              </button>
            ))}
          </div>

          {/* Right: floating stat card */}
          <div className="self-end w-full sm:w-auto">
            <div className="bg-white text-slate-900 rounded-[28px] p-5 sm:p-6 shadow-2xl max-w-xs sm:max-w-[300px]">
              
              
             

              {/* Currently running project */}
              <Link
                href="/projects/fakir-eco-knitwear"
                className="mb-4 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-3 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                aria-label="View Fakir Eco Knitwear running project"
              >
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm">
                  <Image
                    src="/images/clients/fakir-eco-knitwear-logo.webp"
                    alt="Fakir Eco Knitwear Ltd"
                    width={44}
                    height={44}
                    sizes="44px"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                      Running project
                    </span>
                  </div>
                  <p className="truncate text-xs font-bold text-slate-950">
                    Fakir Eco Knitwear
                  </p>
                  <p className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
                    Narayanganj, Bangladesh
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-emerald-700" />
              </Link>

              {/* Progress bar animation */}
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                  style={{
                    width: `${((current + 1) / heroSlides.length) * 100}%`,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
              <div className="mt-2 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                {current + 1} / {heroSlides.length} — {heroSlides[current].tag}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ─── KEYFRAME INJECT (nextjs global styles can't do component-scoped keyframes) ── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
