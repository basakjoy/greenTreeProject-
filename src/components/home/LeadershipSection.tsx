'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, ShieldCheck, Recycle, Wind, Landmark } from 'lucide-react';

/* ---------- Hooks ---------- */

// Fires once when the element scrolls into view
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Counts from 0 to `end` once `start` is true (skips animation if reduced motion)
function useCountUp(end: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);

  return value;
}

/* ---------- Data ---------- */

const STATS = [
  { end: 250, suffix: '+', label: 'Certified projects', accent: false },
  { end: 100, suffix: '%', label: 'Audit approval', accent: true },
  { end: 18, suffix: 'M+', label: 'Sq ft decarbonized', accent: false },
];

const PILLARS = [
  {
    icon: Recycle,
    title: 'Circular materials',
    text: 'Lower embodied carbon through LCA and low-carbon cement.',
  },
  {
    icon: Wind,
    title: 'Microclimate physics',
    text: 'CFD wind modeling, solar shading louvres and natural ventilation.',
  },
  {
    icon: Landmark,
    title: 'Green financing',
    text: 'Bangladesh Bank GTF low-cost capital advisory and ESG proof.',
  },
];

const QUOTE =
  'Sustainable architecture in Bangladesh is no longer just about compliance it is an economic and environmental imperative for global competitiveness.';

/* ---------- Sub-components ---------- */

function StatItem({
  end,
  suffix,
  label,
  accent,
  active,
  bordered,
}: (typeof STATS)[number] & { active: boolean; bordered?: boolean }) {
  const n = useCountUp(end, active);
  return (
    <div className={bordered ? 'border-x border-forest-800/80 px-2 sm:px-4' : ''}>
      <div
        className={`font-display font-black text-2xl tabular-nums ${
          accent ? 'text-eco' : 'text-white'
        }`}
      >
        {n}
        {suffix}
      </div>
      <div className="text-[11px] font-semibold text-gray-400 mt-0.5">{label}</div>
    </div>
  );
}

/* ---------- Main ---------- */

export function LeadershipSection() {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const words = QUOTE.split(' ');

  // Helper: staggered reveal via CSS variable delay
  const reveal = (delayMs: number): React.CSSProperties =>
    ({ '--d': `${delayMs}ms` } as React.CSSProperties);

  return (
    <section
      ref={ref}
      data-visible={inView}
      className="lead px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-page-max mx-auto"
    >
      <style>{`
        /* Entrance: one orchestrated sequence, triggered when section enters view */
        .lead .rv {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .8s cubic-bezier(.22,1,.36,1) var(--d, 0ms),
                      transform .8s cubic-bezier(.22,1,.36,1) var(--d, 0ms);
        }
        .lead[data-visible="true"] .rv { opacity: 1; transform: none; }

        /* Card shell fades up first */
        .lead .shell {
          opacity: 0;
          transform: translateY(28px) scale(.985);
          transition: opacity 1s cubic-bezier(.22,1,.36,1), transform 1s cubic-bezier(.22,1,.36,1);
        }
        .lead[data-visible="true"] .shell { opacity: 1; transform: none; }

        /* Photo: curtain wipe + slow settle */
        .lead .photo-wrap {
          clip-path: inset(0 0 100% 0 round 24px);
          transition: clip-path 1.2s cubic-bezier(.77,0,.18,1) .15s;
        }
        .lead[data-visible="true"] .photo-wrap { clip-path: inset(0 0 0 0 round 24px); }
        .lead .photo { transform: scale(1.12); transition: transform 2.2s cubic-bezier(.22,1,.36,1) .15s; }
        .lead[data-visible="true"] .photo { transform: scale(1); }

        /* Quote: word-by-word reveal */
        .lead .w {
          display: inline-block;
          opacity: 0;
          transform: translateY(.5em);
          filter: blur(6px);
          transition: opacity .6s ease var(--d), transform .6s cubic-bezier(.22,1,.36,1) var(--d), filter .6s ease var(--d);
        }
        .lead[data-visible="true"] .w { opacity: 1; transform: none; filter: blur(0); }

        /* Ambient glow drift */
        @keyframes lead-drift {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50%      { transform: translate3d(-24px, 18px, 0) scale(1.12); }
        }
        .lead .glow-a { animation: lead-drift 12s ease-in-out infinite; }
        .lead .glow-b { animation: lead-drift 16s ease-in-out infinite reverse; }

        /* Verified badge pulse */
        @keyframes lead-ping {
          0%   { box-shadow: 0 0 0 0 rgba(52,211,153,.45); }
          100% { box-shadow: 0 0 0 10px rgba(52,211,153,0); }
        }
        .lead .badge { animation: lead-ping 2.4s ease-out infinite; }

        /* Primary CTA sheen */
        .lead .cta::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.45) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform .9s ease;
        }
        .lead .cta:hover::after { transform: translateX(120%); }

        @media (prefers-reduced-motion: reduce) {
          .lead .rv, .lead .shell, .lead .photo-wrap, .lead .photo, .lead .w {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            clip-path: none !important;
          }
          .lead .glow-a, .lead .glow-b, .lead .badge { animation: none !important; }
        }
      `}</style>

      <div className="shell relative rounded-3xl sm:rounded-4xl lg:rounded-[40px] bg-forest-950 text-white overflow-hidden p-6 sm:p-10 lg:p-16 border border-forest-850 shadow-2xl">
        {/* Ambient glows */}
        <div className="glow-a absolute -top-10 -right-10 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
        <div className="glow-b absolute -bottom-10 -left-10 w-80 h-80 bg-forest-900/60 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: portrait */}
          <div className="lg:col-span-5">
            <div className="photo-wrap relative h-[440px] sm:h-[520px] w-full overflow-hidden border border-forest-700/60 shadow-2xl rounded-3xl group">
              <Image
                src="/images/team/rubana-nasrin-ceo.jpg"
                alt="Rubana Nasrin, Chief Executive Officer of Green Tree, standing beside a LEED Platinum plaque"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="photo object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />

              {/* Accreditation badge */}
              <div
                className="rv absolute top-4 right-4"
                style={reveal(900)}
              >
                <div className="badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-forest-700/80 text-[11px] font-bold text-eco-300 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-eco" />
                  <span>LEED Platinum Accredited</span>
                </div>
              </div>

              {/* Name card */}
              <div
                className="rv absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-forest-900/95 backdrop-blur-md border border-forest-700/80 shadow-xl"
                style={reveal(1100)}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                      Rubana Nasrin
                    </h3>
                    <p className="text-xs text-eco font-bold mt-0.5">
                     Edge Expert, CEO &amp; Founder, Green Tree
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-eco" />
                  </div>
                </div>
              </div>
              </div>
            </div>

          {/* Right: message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <blockquote
              aria-label={QUOTE}
              className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug mb-6"
            >
              <span aria-hidden="true">&ldquo;</span>
              {words.map((word, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="w"
                  style={reveal(500 + i * 45)}
                >
                  {word}
                  {i < words.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
              <span aria-hidden="true">&rdquo;</span>
            </blockquote>

            <p
              className="rv text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-2xl"
              style={reveal(500 + words.length * 45 + 100)}
            >
              Under Rubana Nasrin&apos;s leadership, Green Tree has become South Asia&apos;s benchmark
              consultancy for net-zero engineering, computational microclimate physics and verified
              environmental ROI. We pair architectural elegance with rigorous thermodynamic
              modeling, turning Bangladesh&apos;s textile export belt and commercial skylines into
              high-performing, climate-resilient assets.
            </p>

            {/* Stats with count-up */}
            <div
              className="rv grid grid-cols-3 gap-3 py-4 border-y border-forest-800/80 mb-6 text-center sm:text-left"
              style={reveal(500 + words.length * 45 + 250)}
            >
              {STATS.map((s, i) => (
                <StatItem key={s.label} {...s} active={inView} bordered={i === 1} />
              ))}
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {PILLARS.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className="rv group p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800 transition-colors duration-300 hover:border-eco/50 hover:bg-forest-900"
                  style={reveal(500 + words.length * 45 + 400 + i * 120)}
                >
                  <Icon className="w-4 h-4 text-eco transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  <div className="font-display font-bold text-xs text-white mt-2">{title}</div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-normal">{text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="rv flex flex-wrap items-center gap-4"
              style={reveal(500 + words.length * 45 + 800)}
            >
              <Link
                href="/contact"
                className="cta group relative overflow-hidden inline-flex items-center gap-2 px-5 py-3 rounded-full bg-eco text-forest-950 font-bold text-xs sm:text-sm hover:bg-eco-400 transition-all shadow-glow hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco"
              >
                <span className="relative z-10">Consult with the CEO office</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-850 text-white font-semibold text-xs sm:text-sm border border-forest-750 transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco"
              >
                <span>Read the full philosophy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}