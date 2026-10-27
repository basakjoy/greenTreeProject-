import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServices } from '@/server/services/content';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Green Tree Building Consultants',
  description:
    'Comprehensive solutions for sustainable and efficient building design: EDGE, Energy Simulation, Daylight Simulation, Tender Review, LEED Commissioning, and Overall LEED Facilitation.',
};

export const revalidate = 3600;

const serviceImages: Record<string, string> = {
  'edge-certification': '/images/hero/hero-green-facade.jpg',
  'energy-simulation': '/images/hero/hero-biophilic-dome.jpg',
  'daylight-simulation': '/images/hero/hero-sculptural-courtyard.jpg',
  'tender-design-documents-review': '/images/hero/hero-green-facade.jpg',
  'leed-commissioning': '/images/hero/hero-biophilic-dome.jpg',
  'overall-leed-facilitation': '/images/hero/hero-sculptural-courtyard.jpg',
};

export default async function ServicesPage() {
  const servicesList = await getServices();

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Technical Excellence</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Comprehensive Solutions for Sustainable & Efficient Building Design
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Green Tree Building Consultants specializes in innovative and sustainable solutions for modern construction projects, tailored to each project&apos;s needs, ensuring environmental responsibility, cost-efficiency and high performance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((service, index) => {
            const img = serviceImages[service.slug] || '/images/hero/hero-green-facade.jpg';
            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-forest-950/85 backdrop-blur-md text-emerald-300 border border-forest-700/60">
                      0{index + 1} • {service.badge}
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-forest-950 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-forest-900 mb-2">
                      Key Highlights & Impact
                    </h3>
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-eco shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-forest-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-forest-900 hover:text-eco transition-colors"
                  >
                    <span>View Technical Scope</span>
                    <ArrowUpRight className="w-4 h-4 text-eco" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-forest-50 hover:bg-forest-100 text-forest-900 transition-colors"
                  >
                    Inquire Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Official Call to Action Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Ready to Transform Your Next Project?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Get in touch with us today to explore how our services can help you achieve your sustainability goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
