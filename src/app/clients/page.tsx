import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getClients } from '@/server/services/content';
import { Briefcase, ArrowUpRight, Sparkles, Building, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Clients | Green Tree Building Consultants',
  description:
    'Our trusted institutional and corporate partners across Bangladesh, including Navana Group, Ahsan Group, Wonderland Toys, Palmal Group, J&H, Fakir Group, and Cosmic Group.',
};

export const revalidate = 3600;

export default async function ClientsPage() {
  const clientsList = await getClients();

  return (
    <div className="pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institutional Client Portfolio</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Our Clients
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Green Tree Building Consultants is regularly sought out by renowned organizations and leading industrial conglomerates across Bangladesh to provide high-value cost reduction, architectural refinement, and green building expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Showcase Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientsList.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-3xl p-8 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
            >
              <div>
                {/* Logo Placeholder Box */}
                <div className="h-28 w-full rounded-2xl bg-sand-50 border border-forest-100 flex flex-col items-center justify-center p-4 text-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center mb-2">
                    <Building className="w-5 h-5 text-eco" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    [PLACEHOLDER: CLIENT LOGO]
                  </span>
                </div>

                <span className="text-[10px] font-bold text-eco uppercase tracking-wider">
                  {client.category}
                </span>
                <h2 className="font-display font-bold text-xl text-forest-950 mt-1 mb-2">
                  {client.name}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Trusted partnership for green building design, energy efficiency modeling, and architectural consulting.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-100 flex items-center justify-between text-xs font-semibold text-forest-900">
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-eco" />
                  Verified Engagement
                </span>
                <Link href="/projects" className="text-forest-900 hover:text-eco transition-colors flex items-center gap-1">
                  <span>Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-eco" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Join our network of forward-thinking clients
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Discover how our exclusive consulting approach can elevate your next building development.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
          >
            <span>Partner With Green Tree</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
