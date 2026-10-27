'use client';

import React from 'react';
import { Star, Building2, Quote } from 'lucide-react';

interface TestimonialItem {
  id: number;
  clientName: string;
  clientTitle: string;
  company: string;
  rating: number;
  content: string;
  projectRef?: string | null;
}

export function TestimonialsSection({ testimonials }: { testimonials: TestimonialItem[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold text-eco uppercase tracking-widest">
          Verified Impact
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight mt-1">
          What Institutional Owners Are Saying
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
          Hear how our computational simulations and LEED/EDGE certifications helped premier developers secure international buyers and lower lifecycle utility costs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Quote Mark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-eco text-eco" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-forest-200" />
              </div>

              <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-forest-100">
              <div className="font-display font-bold text-sm text-forest-950">
                {t.clientName}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {t.clientTitle}, <span className="text-forest-900 font-semibold">{t.company}</span>
              </div>
              {t.projectRef && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-forest-50 text-forest-900 border border-forest-200">
                  <Building2 className="w-3 h-3 text-eco" />
                  <span>{t.projectRef}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
