'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Users2, Calculator, ChevronRight } from 'lucide-react';

export function BentoGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold text-eco uppercase tracking-widest">
          Exclusive Consultancy & Studio Process
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight mt-1">
          &ldquo;Design is Everything&rdquo; — Passion for Timeless Functionality
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
          A design-driven consultancy passionate about creating spaces that are not only functional but also aesthetically timeless. From the first spark of inspiration to the final execution, every detail matters.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 1: The Design Process */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between flex-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-eco" />
              </div>
              <h3 className="font-display font-bold text-xl text-forest-950 mb-2">
                Concept to Execution
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our Chief Architect sketches the first concept. The dedicated studio team brings it to life with drawings, presentations, and functionality optimization, ensuring the style and essence remain intact through every stage.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-forest-900 group-hover:text-eco transition-colors"
            >
              <span>Explore our studio approach</span>
              <ArrowUpRight className="w-4 h-4 text-eco group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Mission Statement */}
          <div className="bg-forest-50 rounded-3xl p-6 sm:p-8 border border-forest-200/70 shadow-subtle flex flex-col justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-eco">
              Corporate Mission
            </span>
            <p className="text-sm text-forest-900 font-semibold mt-2 leading-relaxed">
              &ldquo;To provide a standard group of high-value-added cost reduction and design services to clients who want to buy quickly and value, not price.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-eco" />
              <span>Sought out by renowned organizations</span>
            </div>
          </div>
        </div>

        {/* Center Column: Visual Feature */}
        <div className="group relative rounded-3xl sm:rounded-4xl overflow-hidden border border-forest-200 shadow-lift min-h-[420px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8">
          <Image
            src="/images/hero/hero-sculptural-courtyard.jpg"
            alt="Green Tree Architectural Courtyard and Sculptural Landscape"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

          {/* Overlaid Box */}
          <div className="relative z-10 p-5 rounded-2xl bg-eco text-forest-950 shadow-glow">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-forest-900">
                  Exclusive Consultancy
                </span>
                <h4 className="font-display font-black text-base sm:text-lg leading-snug">
                  Interdisciplinary Harmony
                </h4>
              </div>
              <Link
                href="/projects"
                className="w-10 h-10 rounded-xl bg-forest-950 text-eco flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform"
                aria-label="View Projects"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 3: Interdisciplinary Approach */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between flex-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco mb-6 group-hover:scale-110 transition-transform">
                <Users2 className="w-6 h-6 text-eco" />
              </div>
              <h3 className="font-display font-bold text-xl text-forest-950 mb-2">
                Interdisciplinary Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our firm unites architects, structural, electrical, and plumbing engineers, interior designers, and estimators. Estimators track cost-effectiveness at every stage so the final product is both cost-conscious and high quality.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-forest-900 group-hover:text-eco transition-colors"
            >
              <span>Learn about our team</span>
              <ArrowUpRight className="w-4 h-4 text-eco group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Registered Professionalism */}
          <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 border border-forest-800 shadow-lift flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-eco">
                Registered Private Limited
              </span>
              <h4 className="font-display font-bold text-lg text-white mt-1">
                Highest standards of professionalism & integrity
              </h4>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-between w-full p-3 rounded-2xl bg-forest-900 hover:bg-forest-850 border border-forest-750 text-xs font-semibold text-emerald-300 group transition-all"
            >
              <span>Initiate a project consultation</span>
              <ChevronRight className="w-4 h-4 text-eco group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
