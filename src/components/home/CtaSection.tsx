'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-4xl lg:rounded-[40px] bg-white border border-forest-200 p-8 sm:p-14 lg:p-20 shadow-lift overflow-hidden">
        
        {/* Subtle decorative eco glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-eco uppercase tracking-widest">
              Pioneering Sustainable Architecture in Bangladesh
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-forest-950 tracking-tight leading-[1.05] mt-3 uppercase">
              Join The Net-Zero <br />
              Transition.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-6 leading-relaxed max-w-xl">
              Partner with South Asia&apos;s most proven green building simulation team. From schematic microclimate envelope modeling to final GBCI plaque handover, we engineer sustainable profitability.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-forest-100 text-xs text-forest-900 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-eco" />
                <span>100% GBCI Audit Approval Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-eco" />
                <span>Dedicated Simulation Fellow Assigned</span>
              </div>
            </div>
          </div>

          {/* Giant Interactive Arrow Button */}
          <div className="self-center lg:self-auto shrink-0">
            <Link
              href="/contact"
              className="group flex flex-col items-center gap-3 focus:outline-none focus:ring-4 focus:ring-eco-300 rounded-full p-2"
              aria-label="Initiate engineering consultation"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-eco group-hover:bg-eco-400 text-forest-950 flex items-center justify-center shadow-glow group-hover:scale-105 group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-12 h-12 stroke-[2.5]" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest-950 group-hover:text-eco transition-colors">
                Initiate Project Audit
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
