'use client';

import React from 'react';
import { Award, ShieldCheck, Building2, Briefcase } from 'lucide-react';

const clients = [
  'Navana Group',
  'Ahsan Group',
  'Wonderland Toys',
  'Palmal Group',
  'J&H',
  'Fakir Group',
  'Cosmic Group',
];

const memberships = [
  { name: 'Institute of Architects Bangladesh', acronym: 'IAB' },
  { name: 'Institute of Engineers Bangladesh', acronym: 'IEB' },
  { name: 'Rajdhani Unnayan Kartripakkha', acronym: 'RAJUK' },
];

export function PartnerLogos() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      
      {/* 1. Client Portfolio Logos */}
      <div className="py-8 px-6 rounded-3xl bg-white border border-forest-100 shadow-subtle mb-8">
        <div className="text-center text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-6">
          Our Valued Clients & Industrial Partners
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand-50 border border-forest-100 hover:border-forest-300 hover:bg-white transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center text-forest-800 mb-2 group-hover:bg-eco group-hover:text-forest-950 transition-colors">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xs text-forest-950 leading-tight">
                {client}
              </span>
              <span className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-wider">
                [Client Logo]
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Official Memberships Banner */}
      <div className="py-6 px-6 sm:px-8 rounded-3xl bg-forest-950 text-white border border-forest-850 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-eco">
            Registered Institutional Standing
          </span>
          <h4 className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
            Registered Private Limited Company with IAB, IEB & RAJUK
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {memberships.map((m) => (
            <div
              key={m.acronym}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-semibold text-emerald-300"
            >
              <span className="w-2 h-2 rounded-full bg-eco" />
              <span className="font-bold">{m.acronym}</span>
              <span className="text-gray-400 text-[11px] hidden md:inline">({m.name})</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
