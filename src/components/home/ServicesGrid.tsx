'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  badge?: string | null;
}

const serviceImages: Record<string, string> = {
  'edge-certification': '/images/hero/hero-green-facade.jpg',
  'energy-simulation': '/images/hero/hero-biophilic-dome.jpg',
  'daylight-simulation': '/images/hero/hero-sculptural-courtyard.jpg',
  'tender-design-documents-review': '/images/hero/hero-green-facade.jpg',
  'leed-commissioning': '/images/hero/hero-biophilic-dome.jpg',
  'overall-leed-facilitation': '/images/hero/hero-sculptural-courtyard.jpg',
};

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header Bar using verified company copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight mt-1">
            Comprehensive Solutions for Sustainable and Efficient Building Design
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Green Tree Building Consultants specializes in innovative and sustainable solutions for modern construction projects, tailored to each project&apos;s needs, ensuring environmental responsibility, cost-efficiency and high performance.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-forest-900 text-white hover:bg-forest-850 border border-forest-700 transition-all self-start md:self-auto shrink-0"
        >
          <span>All 6 Services</span>
          <ArrowUpRight className="w-4 h-4 text-eco" />
        </Link>
      </div>

      {/* 6 Official Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => {
          const img = serviceImages[service.slug] || '/images/hero/hero-green-facade.jpg';
          return (
            <div
              key={service.slug}
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/20 to-transparent" />
                  
                  {service.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-forest-950/85 backdrop-blur-md text-emerald-300 border border-forest-700/60">
                      {service.badge}
                    </div>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-2 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 group-hover:text-eco transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 text-eco group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                  GTBC Standard
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Call to Action Banner */}
      <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="max-w-xl">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
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
  );
}
