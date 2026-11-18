import React from 'react';
import type { Metadata } from 'next';
import {
  BrandMark,
  NavigationLink,
  OutlinedActionButton,
  HeroHeadline,
  ParticleCloudCanvas,
  EditorialStatementBlock,
  PortfolioCardGrid,
  PioneerProfileCard,
  DecorativeSparkleMark,
  BorderedContainerFrame,
  ScrollIndicator,
} from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Design System — Atlantic VC Specification',
  description:
    'Complete implementation of the Atlantic VC editorial design system, typography tokens, surfaces, and wireframe components.',
};

export default function DesignSystemPage() {
  const samplePortfolio = [
    { id: 1, name: 'SOFTR', category: 'NO-CODE PLATFORM' },
    { id: 2, name: 'WANDELBOTS', category: 'ROBOTICS SOFTWARE' },
    { id: 3, name: 'ZENJOB', category: 'STAFFING AUTOMATION' },
    { id: 4, name: 'DEEPDRIVE', category: 'ELECTRIC MOBILITY' },
    { id: 5, name: 'LANGDOCK', category: 'ENTERPRISE AI' },
    { id: 6, name: 'BRYTER', category: 'DECISION AUTOMATION' },
  ];

  const samplePioneers = [
    {
      id: 1,
      name: 'Mariana Gomez',
      role: 'FOUNDER & CEO',
      company: 'SOFTR',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      bio: 'Democratizing software creation through intuitive modular engineering.',
    },
    {
      id: 2,
      name: 'Christian Piechnick',
      role: 'FOUNDER & CEO',
      company: 'WANDELBOTS',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      bio: 'Pioneering no-code robotics teaching for global manufacturing automation.',
    },
    {
      id: 3,
      name: 'Fritz Trott',
      role: 'FOUNDER & MD',
      company: 'ZENJOB',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      bio: 'Architecting the real-time algorithmic labour marketplace of tomorrow.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#d8eaff] selection:bg-[#1f58f2] selection:text-white font-monument">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-[#000000]/80 backdrop-blur-md border-b border-[#d8eaff]/10">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between">
          <BrandMark name="atlantic" href="/design-system" />

          {/* Navigation Links (Mono 10-12px, uppercase, 0.16em tracking, 32px gap) */}
          <nav className="hidden md:flex items-center gap-[32px]">
            <NavigationLink href="#hero" label="HOME" isActive />
            <NavigationLink href="#approach" label="APPROACH" />
            <NavigationLink href="#portfolio" label="PORTFOLIO" />
            <NavigationLink href="#pioneers" label="TEAM" />
            <NavigationLink href="#tokens" label="TOKENS" />
          </nav>

          {/* Primary CTA (Outlined, 1px #ff4105 border, transparent bg, Monument 12-14px) */}
          <OutlinedActionButton href="#cta" size="sm">
            FOLLOW ALONG
          </OutlinedActionButton>
        </div>
      </header>

      {/* 2. HERO SECTION WITH PARTICLE CLOUD CANVAS */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden">
        {/* Full-bleed particle cloud canvas */}
        <ParticleCloudCanvas />

        {/* Content Container (1400px max-width) */}
        <div className="relative z-10 max-w-page-max w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Micro category tag */}
          <div className="mb-4">
            <span className="font-mono text-[11px] font-[400] uppercase tracking-[0.16em] text-[#d8eaff]/70">
              [ 01 // EDITORIAL THESIS ]
            </span>
          </div>

          {/* 96px Hero Headline with #1f58f2 Electric Cobalt Accent Words */}
          <HeroHeadline
            parts={[
              { text: 'Venturing into the' },
              { text: 'unknown', isAccent: true },
              { text: 'to find the' },
              { text: 'inevitable.', isAccent: true },
            ]}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 w-full pb-[50px] flex justify-center">
          <ScrollIndicator ariaLabel="Scroll to editorial statement" />
        </div>
      </section>

      {/* 3. EDITORIAL STATEMENT BLOCK */}
      <section id="approach" className="py-[100px] bg-[#0d0d0f] border-t border-[#d8eaff]/10">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialStatementBlock>
            We back extraordinary founders turning deep technical breakthroughs into enduring global monopolies.
            We believe greatness starts as a contrarian intuition before becoming self-evident.
          </EditorialStatementBlock>
        </div>
      </section>

      {/* 4. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-[100px] bg-[#000000]">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 mb-[48px] flex items-center gap-[16px]">
          <DecorativeSparkleMark size={40} points={6} />
          <h2 className="font-monument font-[400] text-[40px] sm:text-[64px] text-[#d8eaff] leading-[1.06] tracking-[-0.01em]">
            Portfolio companies
          </h2>
        </div>

        <PortfolioCardGrid items={samplePortfolio} />
      </section>

      {/* 5. MEET THE PIONEERS SECTION */}
      <section id="pioneers" className="py-[100px] bg-[#0d0d0f] border-t border-[#d8eaff]/10">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 mb-[56px] flex items-center gap-[16px]">
          <DecorativeSparkleMark size={40} points={8} rotation={12} />
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#6c757f] block mb-1">
              [ 03 // FOUNDER ARCHIVE ]
            </span>
            <h2 className="font-monument font-[400] text-[40px] sm:text-[64px] text-[#d8eaff] leading-[1.06] tracking-[-0.01em]">
              Meet the pioneers
            </h2>
          </div>
        </div>

        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {samplePioneers.map((pioneer) => (
              <PioneerProfileCard key={pioneer.id} pioneer={pioneer} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WIREFRAME CONTAINERS & SYSTEM TOKENS REFERENCE */}
      <section id="tokens" className="py-[100px] bg-[#000000] border-t border-[#d8eaff]/10">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-[16px] mb-[48px]">
            <DecorativeSparkleMark size={40} />
            <h2 className="font-monument font-[400] text-[40px] sm:text-[64px] text-[#d8eaff] leading-[1.06] tracking-[-0.01em]">
              System architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {/* Surfaces Card */}
            <BorderedContainerFrame>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f] block mb-4">
                SURFACE STEPPING // DEPTH WITHOUT SHADOWS
              </span>
              <div className="space-y-3">
                <div className="p-4 bg-[#000000] border border-[#d8eaff]/20 rounded-[8px] flex justify-between items-center">
                  <span className="font-mono text-[12px] tracking-[0.16em] uppercase">LEVEL 0 · VOID</span>
                  <span className="font-mono text-[12px] text-[#6c757f]">#000000</span>
                </div>
                <div className="p-4 bg-[#0d0d0f] border border-[#d8eaff]/20 rounded-[8px] flex justify-between items-center">
                  <span className="font-mono text-[12px] tracking-[0.16em] uppercase">LEVEL 1 · CARBON</span>
                  <span className="font-mono text-[12px] text-[#6c757f]">#0D0D0F</span>
                </div>
                <div className="p-4 bg-[#232529] border border-[#d8eaff]/20 rounded-[8px] flex justify-between items-center">
                  <span className="font-mono text-[12px] tracking-[0.16em] uppercase">LEVEL 2 · GRAPHITE</span>
                  <span className="font-mono text-[12px] text-[#6c757f]">#232529</span>
                </div>
                <div className="p-4 bg-[#2b2f33] border border-[#d8eaff]/20 rounded-[8px] flex justify-between items-center">
                  <span className="font-mono text-[12px] tracking-[0.16em] uppercase">LEVEL 3 · SLATE</span>
                  <span className="font-mono text-[12px] text-[#6c757f]">#2B2F33</span>
                </div>
              </div>
            </BorderedContainerFrame>

            {/* Color Discipline & Typography Card */}
            <BorderedContainerFrame>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f] block mb-4">
                COLOR TEMPERATURE & DISCIPLINE
              </span>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#d8eaff]" />
                  <div>
                    <p className="font-monument text-[14px] text-[#d8eaff]">Ice White (#d8eaff)</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
                      Primary editorial text & 1px wireframe borders
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#1f58f2]" />
                  <div>
                    <p className="font-monument text-[14px] text-[#1f58f2]">Electric Cobalt (#1f58f2)</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
                      Headline accent words, sparkles, corner points & particles
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#ff4105]" />
                  <div>
                    <p className="font-monument text-[14px] text-[#ff4105]">Signal Orange (#ff4105)</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
                      Outlined action borders & active nav indicators only
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#d8eaff]/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
                    Strict single-weight philosophy: Monument 400 across all sizes (10px - 96px).
                  </p>
                </div>
              </div>
            </BorderedContainerFrame>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="cta" className="py-[80px] bg-[#0d0d0f] border-t border-[#d8eaff]/10">
        <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <BrandMark name="atlantic" href="/design-system" />
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
            © {new Date().getFullYear()} ATLANTIC // WIREFRAME SPECIFICATION
          </p>
          <OutlinedActionButton href="#hero" size="sm">
            BACK TO TOP
          </OutlinedActionButton>
        </div>
      </footer>
    </div>
  );
}

