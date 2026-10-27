'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-4xl lg:rounded-[40px] bg-forest-950 text-white overflow-hidden p-6 sm:p-10 lg:p-16 border border-forest-850 shadow-2xl">
        
        {/* Subtle decorative background eco glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-900/60 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Photograph of Rubana Nasrin (CEO) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[520px] w-full rounded-3xl overflow-hidden border border-forest-700/60 shadow-2xl">
              <Image
                src="/images/team/rubana-nasrin-ceo.jpg"
                alt="Rubana Nasrin - Chief Executive Officer of Green Tree standing beside LEED Platinum plaque"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
              
              {/* Plaque Verified Pill on top right of photo */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-forest-700/80 text-[11px] font-bold text-emerald-300 shadow-lg">
                <Award className="w-3.5 h-3.5 text-eco" />
                <span>LEED Platinum Accredited</span>
              </div>

              {/* CEO Identification Card at bottom of photo */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-forest-900/95 backdrop-blur-md border border-forest-700/80 shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                      Rubana Nasrin
                    </h3>
                    <p className="text-xs text-eco font-bold mt-0.5">
                      Chief Executive Officer & Founder, Green Tree
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600 flex items-center justify-center text-eco shrink-0">
                    <ShieldCheck className="w-5 h-5 text-eco" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Vision & Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-xs font-semibold text-eco mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CEO & Executive Leadership</span>
            </div>

            <blockquote className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug mb-6">
              &ldquo;Sustainable architecture in Bangladesh is no longer just about compliance—it is an economic and environmental imperative for global competitiveness.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Under Rubana Nasrin&apos;s leadership, Green Tree has established itself as South Asia&apos;s benchmark consultancy for net-zero engineering, computational microclimate physics, and verified environmental ROI. We bridge architectural elegance with rigorous thermodynamic modeling—transforming Bangladesh&apos;s industrial textile export belt and premier commercial skylines into high-performing, climate-resilient assets.
            </p>

            {/* Executive Highlights / Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-forest-800/80 mb-6 text-center sm:text-left">
              <div>
                <div className="font-display font-black text-2xl text-white">250+</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-0.5">Certified Projects</div>
              </div>
              <div className="border-x border-forest-800/80 px-2 sm:px-4">
                <div className="font-display font-black text-2xl text-eco">100%</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-0.5">Audit Approval</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-white">18M+</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-0.5">Sq Ft Decarbonized</div>
              </div>
            </div>

            {/* 3 Strategic Pillars under her leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="font-display font-extrabold text-xs text-eco">01</span>
                <div className="font-display font-bold text-xs text-white mt-1">
                  Circular Materials
                </div>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                  Targeted embodied carbon reduction via LCA & low-carbon cement.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="font-display font-extrabold text-xs text-eco">02</span>
                <div className="font-display font-bold text-xs text-white mt-1">
                  Microclimate Physics
                </div>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                  CFD wind modeling, solar shading louvres & natural ventilation.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="font-display font-extrabold text-xs text-eco">03</span>
                <div className="font-display font-bold text-xs text-white mt-1">
                  Green Financing
                </div>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                  Bangladesh Bank GTF low-cost capital advisory and ESG proof.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-eco text-forest-950 font-bold text-xs sm:text-sm hover:bg-eco-400 transition-all shadow-glow"
              >
                <span>Consult with CEO Office</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-850 text-white font-semibold text-xs sm:text-sm border border-forest-750 transition-all"
              >
                <span>Read Full Philosophy</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
