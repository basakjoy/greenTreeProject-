import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainability Disclosures | Green Tree Building Consultants',
  description: 'Sustainability and Certification Disclosures for Green Tree Building Consultants Ltd.',
};

export default function DisclosuresPage() {
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
              <Award className="w-3.5 h-3.5" />
              <span>ESG &amp; Carbon Accounting</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase mb-4">
              Sustainability Disclosures
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Methodology, Standards &amp; Third-Party Audit Governance
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">1. Green Building Certification Frameworks</h2>
            <p>
              Green Tree Building Consultants advises on projects pursuing LEED (Leadership in Energy and Environmental Design) under the U.S. Green Building Council (USGBC) / Green Business Certification Inc. (GBCI), EDGE (Excellence in Design for Greater Efficiencies) under the International Finance Corporation (IFC), and Bangladesh BEER rating frameworks.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">2. Energy Simulation &amp; Baseline Metrics</h2>
            <p>
              Energy reductions and carbon mitigation projections are computed utilizing whole-building dynamic thermal simulation algorithms adhering to ASHRAE 90.1 Appendix G methodology, local BNBC climate data files, and international best practice standards.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">3. Independent Audit &amp; Verification</h2>
            <p>
              Green Tree serves as an accredited facilitator and commissioning authority. All final certification plaques and tier ratings are awarded exclusively upon formal, independent third-party audit verification by the corresponding international standard-bearer (e.g. GBCI, SGS, or Sintali-SGS).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

