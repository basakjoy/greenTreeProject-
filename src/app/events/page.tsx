import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events | Green Tree Building Consultants',
  description:
    'Green Tree seminars, workshops, conferences, and professional learning events.',
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Events</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Learning, Exchange &amp; Impact
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Green Tree events bring together building professionals to exchange knowledge on sustainable design, certification, and high-performance buildings.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-forest-100 shadow-subtle">
            <span className="text-xs font-bold text-eco uppercase tracking-widest">Upcoming Calendar</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1 mb-4">
              Event schedule
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Our full event calendar is being updated. Subscribe to receive announcements for workshops, technical talks, and professional seminars.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sand-50 border border-forest-100 p-5">
                <CalendarDays className="w-5 h-5 text-eco mb-3" />
                <h3 className="font-bold text-forest-950">Technical Workshops</h3>
                <p className="text-xs text-gray-600 mt-1">Focused sessions for project teams.</p>
              </div>
              <div className="rounded-2xl bg-sand-50 border border-forest-100 p-5">
                <MapPin className="w-5 h-5 text-eco mb-3" />
                <h3 className="font-bold text-forest-950">Dhaka Studio Sessions</h3>
                <p className="text-xs text-gray-600 mt-1">On-site and hybrid learning formats.</p>
              </div>
            </div>
          </div>

          <aside className="bg-forest-900 text-white rounded-3xl p-8 border border-forest-800 shadow-lift">
            <h2 className="font-display font-bold text-2xl">Host or attend</h2>
            <p className="text-sm text-gray-300 leading-relaxed mt-3 mb-6">
              Invite Green Tree to speak or propose a collaboration for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all"
            >
              <span>Contact the Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
