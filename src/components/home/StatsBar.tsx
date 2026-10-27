'use client';

import React from 'react';

const stats = [
  {
    value: '250+',
    label: 'Green Projects',
    subtext: 'LEED, EDGE & BEER',
  },
  {
    value: '100%',
    label: 'Audit Success',
    subtext: 'GBCI / IFC verification',
  },
  {
    value: '18M+',
    label: 'Sq Ft Certified',
    subtext: 'Industrial & commercial',
  },
  {
    value: '45%',
    label: 'Avg Energy Drop',
    subtext: 'ASHRAE 90.1 baseline',
  },
  {
    value: '1,000+',
    label: 'Carbon Credits',
    subtext: 'Verified MT CO2e / yr',
  },
];

export function StatsBar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-forest-100 shadow-lift">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-forest-100">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''
              }`}
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight flex items-baseline gap-0.5">
                <span>{stat.value}</span>
                <span className="w-2 h-2 rounded-full bg-eco inline-block mb-1 ml-1" />
              </div>
              <div className="text-sm font-bold text-forest-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
