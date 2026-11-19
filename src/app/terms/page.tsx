import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Green Tree Building Consultants',
  description: 'Terms of Service for Green Tree Building Consultants Ltd. in Dhaka, Bangladesh.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-eco transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="page-image-hero rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Terms of Engagement</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase mb-4">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Effective date: January 2025 · Green Tree Building Consultants Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">1. Scope of Services</h2>
            <p>
              Green Tree Building Consultants Ltd. (GTBC) provides professional building consultancy, LEED advisory, EDGE certification, building energy simulation, daylight analysis, and structural tender reviews. All formal consultancy services are governed by written agreements executed between GTBC and the client.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">2. Intellectual Property</h2>
            <p>
              All content on this website, including architectural renderings, technical descriptions, methodology summaries, calculations, and brand marks, are the property of Green Tree Building Consultants Ltd. and are protected by applicable intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">3. Regulatory Compliance &amp; Standards</h2>
            <p className="mb-4">
              Our consultancy practice adheres to the professional standards prescribed by the Institute of Architects Bangladesh (IAB), the Institute of Engineers Bangladesh (IEB), and the Rajdhani Unnayan Kartripakkha (RAJUK).
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {[
                { acronym: 'IAB', name: 'Institute of Architects Bangladesh', logo: '/images/memberships/iab-logo.png' },
                { acronym: 'IEB', name: 'Institute of Engineers Bangladesh', logo: '/images/memberships/ieb-logo.png' },
                { acronym: 'RAJUK', name: 'Rajdhani Unnayan Kartripakkha', logo: '/images/memberships/rajuk-logo.png' },
              ].map((m) => (
                <div
                  key={m.acronym}
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-sand-50 border border-forest-100 text-xs font-semibold text-forest-950"
                >
                  <div className="relative w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                    <Image
                      src={m.logo}
                      alt={`${m.acronym} logo`}
                      width={24}
                      height={24}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>{m.name} ({m.acronym})</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">4. Limitation of Liability</h2>
            <p>
              Website information and interactive estimation metrics are provided for preliminary evaluation purposes. Final engineering specifications, certification outcomes, and cost savings depend on verified on-site audits, third-party auditor reviews (USGBC/GBCI/SGS/IFC), and formal project contracts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

