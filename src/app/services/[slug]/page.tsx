import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServices } from '@/server/services/content';
import { CheckCircle2, ArrowUpRight, ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Green Tree Building Consultants`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // JSON-LD Service Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'Green Tree Building Consultants',
      url: 'https://www.greentreebd.com',
    },
    areaServed: 'Bangladesh',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-20">
        
        {/* Breadcrumb / Back Link */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-eco transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-forest-900 border border-forest-700 text-eco mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{service.badge || 'Accredited Service'}</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-10">
            
            {/* Description */}
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-forest-950 mb-4">
                Service Scope & Methodology
              </h2>
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
                {service.fullDescription}
              </div>
            </div>

            {/* Benefits & Value Proposition */}
            <div className="pt-8 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-4">
                Value Added & Direct Client Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="p-4 rounded-2xl bg-forest-50 border border-forest-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="pt-8 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-4">
                Key Technical Deliverables
              </h3>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-eco shrink-0 mt-2" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="pt-8 border-t border-forest-100 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-sand-50 border border-forest-200">
              <div>
                <h4 className="font-display font-bold text-base text-forest-950">
                  Ready to deploy {service.title}?
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Our studio engineers and estimators respond within 24 hours.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eco text-forest-950 font-bold text-xs sm:text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
              >
                <span>Initiate Service Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
