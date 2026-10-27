import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedJobs, FALLBACK_JOBS } from '@/server/services/jobs';
import { Briefcase, MapPin, Clock, ArrowUpRight, Leaf, Award, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Green Tree Building Consultants',
  description:
    'Join the team at Green Tree Building Consultants. Explore open positions in sustainable architecture, LEED advisory, energy simulation, and building performance engineering in Dhaka, Bangladesh.',
  openGraph: {
    title: 'Careers at Green Tree Building Consultants',
    description: 'Help us shape a greener built environment in Bangladesh.',
    url: 'https://www.greentreebd.com/careers',
  },
};

// ─── Small helpers ────────────────────────────────────────────────────────────
function daysUntil(date: Date | string | null): string {
  if (!date) return '';
  const ms = new Date(date).getTime() - Date.now();
  const days = Math.ceil(ms / (1000 * 60 * 60 * 24));
  if (days < 0) return 'Closed';
  if (days === 0) return 'Closes today';
  return `${days}d left`;
}

function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return '';
  const fmt = (n: number) => `৳${(n / 1000).toFixed(0)}K`;
  if (min && max) return `${fmt(min)} – ${fmt(max)}/mo`;
  if (max) return `Up to ${fmt(max)}/mo`;
  return `From ${fmt(min!)}/mo`;
}

const PERKS = [
  { icon: '🌿', title: 'Sustainability-first culture', desc: 'Every project advances Bangladesh\'s green-building transition.' },
  { icon: '🎓', title: 'Sponsored credentials', desc: 'LEED AP, EDGE Expert, WELL AP exam fees covered by GTBC.' },
  { icon: '🏥', title: 'Comprehensive healthcare', desc: 'Family medical, hospitalization, and life insurance from Day 1.' },
  { icon: '⏱️', title: 'Flexible hybrid model', desc: 'Mix of office collaboration and remote deep-work days.' },
  { icon: '📈', title: 'Performance bonuses', desc: 'Project-completion and annual profit-sharing bonuses.' },
  { icon: '🌍', title: 'International exposure', desc: 'Work alongside global sustainability networks and GBCI auditors.' },
];

// ─── Page component ──────────────────────────────────────────────────────────
export default async function CareersPage() {
  let jobs = await getPublishedJobs();
  if (!jobs || jobs.length === 0) jobs = FALLBACK_JOBS;

  const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-slate-950 via-forest-950 to-slate-950 overflow-hidden">
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco/10 border border-eco/30 text-eco text-xs font-bold tracking-widest uppercase mb-6">
            <Leaf className="w-3.5 h-3.5" /> We&rsquo;re Hiring
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Build a Greener Future<br className="hidden sm:block" />
            <span className="text-eco"> With Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Green Tree Building Consultants is Bangladesh&rsquo;s leading sustainability advisory firm.
            Join a passionate studio of architects, engineers, and green-building experts shaping
            the country&rsquo;s built environment.
          </p>
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg"
          >
            View Open Positions <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-forest-950 text-center mb-12 tracking-tight">
            Why Join Green Tree?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-eco/40 hover:shadow-md transition-all"
              >
                <span className="text-3xl flex-shrink-0">{perk.icon}</span>
                <div>
                  <h3 className="font-bold text-forest-950 mb-1">{perk.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-forest-950 tracking-tight">
                Open Positions
              </h2>
              <p className="text-gray-500 mt-2">
                {jobs.length} role{jobs.length !== 1 ? 's' : ''} available · Dhaka, Bangladesh
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 hover:text-eco transition-colors"
            >
              Don&rsquo;t see your role? Send an open application <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => {
              const closingLabel = daysUntil(job.closesAt);
              const isClosed = closingLabel === 'Closed';

              return (
                <div
                  key={job.slug}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-eco/50 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8">
                    {/* Left: info */}
                    <div className="flex-1 min-w-0">
                      {/* Department tag */}
                      <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-eco/10 text-eco text-xs font-bold tracking-wider">
                        {job.department}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-forest-950 mb-3 group-hover:text-forest-700 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {job.employmentType}
                        </span>
                        {(job.salaryMin || job.salaryMax) && (
                          <span className="flex items-center gap-1.5 font-medium text-forest-700">
                            <Briefcase className="w-3.5 h-3.5 text-forest-400" />
                            {formatSalary(job.salaryMin, job.salaryMax)}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Right: CTA */}
                    <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
                      {closingLabel && (
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            isClosed
                              ? 'bg-red-50 text-red-500 border border-red-100'
                              : 'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}
                        >
                          {closingLabel}
                        </span>
                      )}
                      {!isClosed && (
                        <Link
                          href={`/careers/${job.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 text-white text-sm font-bold hover:bg-eco hover:text-forest-950 transition-all shadow-sm"
                        >
                          Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Memberships strip ── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">
            Recognised &amp; Registered With
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Institute of Architects Bangladesh (IAB)', 'Institute of Engineers Bangladesh (IEB)', 'RAJUK'].map(
              (m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-950 text-emerald-300 text-xs font-bold border border-forest-800"
                >
                  <Award className="w-3.5 h-3.5 text-eco" />
                  {m}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CTA bottom ── */}
      <section className="py-20 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Don&rsquo;t See Your Role?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We&rsquo;re always looking for talented architects, engineers, and sustainability specialists.
            Send us your CV and a brief note — we&rsquo;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg"
          >
            Send Open Application <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
