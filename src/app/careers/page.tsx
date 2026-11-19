import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedJobs, FALLBACK_JOBS } from '@/server/services/jobs';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Award,
  ChevronRight,
  Leaf,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Globe,
} from 'lucide-react';

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

export const revalidate = 3600;

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
  {
    icon: Leaf,
    title: 'Sustainability-First Culture',
    desc: 'Every project directly advances Bangladesh’s green-building transition and net-zero engineering.',
  },
  {
    icon: GraduationCap,
    title: 'Sponsored Professional Credentials',
    desc: 'LEED AP, EDGE Expert, and WELL AP exam registration & preparation fees fully covered by GTBC.',
  },
  {
    icon: HeartPulse,
    title: 'Comprehensive Healthcare',
    desc: 'Family medical, hospitalization, and life insurance benefits active from Day 1 of joining.',
  },
  {
    icon: Clock,
    title: 'Flexible Hybrid Practice',
    desc: 'A healthy balance of vibrant in-studio architectural collaboration and quiet remote deep-work days.',
  },
  {
    icon: TrendingUp,
    title: 'Milestone & Profit Bonuses',
    desc: 'Project-completion milestone incentives and annual studio profit-sharing bonuses for all staff.',
  },
  {
    icon: Globe,
    title: 'International Network & GBCI Audits',
    desc: 'Collaborate directly with global green-building certification bodies, regional partners, and auditors.',
  },
];

export default async function CareersPage() {
  let jobs = await getPublishedJobs();
  if (!jobs || jobs.length === 0) jobs = FALLBACK_JOBS;

  return (
    <div className="pt-24 pb-20">
      
      {/* ── 1. Header Banner (Consistent with About / Services / Contact) ── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-page-max mx-auto">
        <div className="page-image-hero rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Ambient eco glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Talent &amp; Studio Careers</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Build a Greener Future With Us
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-8">
              Green Tree Building Consultants is Bangladesh’s leading sustainability advisory and net-zero engineering consultancy. Join our dedicated multidisciplinary studio of architects, engineers, and green-building specialists shaping the nation’s built environment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow"
              >
                <span>View Open Positions</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-900/80 border border-forest-750 text-white font-bold text-sm hover:bg-forest-800 transition-all"
              >
                <span>Send Open Application</span>
                <ArrowUpRight className="w-4 h-4 text-eco" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Studio Culture & Perks ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Studio Culture &amp; Benefits
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Why Practice at Green Tree?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PERKS.map((perk, i) => (
            <div
              key={perk.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift hover:border-eco/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco mb-5 group-hover:bg-eco group-hover:text-forest-950 group-hover:scale-105 transition-all duration-300">
                  <perk.icon className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-eco uppercase tracking-wider">
                  Benefit 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mt-1 mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest-100 text-[11px] font-semibold text-forest-800">
                Green Tree Studio Benefit
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Open Positions List ── */}
      <section id="open-positions" className="px-4 sm:px-6 lg:px-8 py-12 max-w-page-max mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-eco uppercase tracking-widest">
              Current Openings
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-forest-950 mt-1">
              Open Positions
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {jobs.length} available role{jobs.length !== 1 ? 's' : ''} in Dhaka, Bangladesh
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:text-eco transition-colors"
          >
            <span>Don&rsquo;t see your role? Submit an open application</span>
            <ArrowUpRight className="w-4 h-4 text-eco" />
          </Link>
        </div>

        <div className="space-y-5">
          {jobs.map((job) => {
            const closingLabel = daysUntil(job.closesAt);
            const isClosed = closingLabel === 'Closed';

            return (
              <div
                key={job.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift hover:border-eco/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Job details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-forest-50 border border-forest-100 text-forest-800">
                      {job.department}
                    </span>
                    {closingLabel && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          isClosed
                            ? 'bg-red-50 text-red-600 border-red-200'
                            : 'bg-eco-50 text-eco-700 border-eco-200'
                        }`}
                      >
                        {closingLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-forest-950 mb-2.5 hover:text-eco transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-forest-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-forest-500" />
                      {job.employmentType}
                    </span>
                    {(job.salaryMin || job.salaryMax) && (
                      <span className="flex items-center gap-1.5 font-semibold text-forest-800">
                        <Briefcase className="w-3.5 h-3.5 text-eco" />
                        {formatSalary(job.salaryMin, job.salaryMax)}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="shrink-0 flex items-center">
                  {!isClosed ? (
                    <Link
                      href={`/careers/${job.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-white text-xs font-bold hover:bg-eco hover:text-forest-950 transition-all shadow-sm"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs font-semibold text-gray-400">Position Closed</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Professional Recognitions ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto">
        <div className="bg-white rounded-3xl p-8 border border-forest-100 shadow-subtle text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">
            Recognised &amp; Registered With
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                acronym: 'IAB',
                name: 'Institute of Architects Bangladesh',
                logo: '/images/memberships/iab-logo.png',
              },
              {
                acronym: 'IEB',
                name: 'Institute of Engineers Bangladesh',
                logo: '/images/memberships/ieb-logo.png',
              },
              {
                acronym: 'RAJUK',
                name: 'Rajdhani Unnayan Kartripakkha',
                logo: '/images/memberships/rajuk-logo.png',
              },
            ].map((m) => (
              <div
                key={m.acronym}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-forest-950 text-white text-xs font-bold border border-forest-800 shadow-sm"
              >
                <div className="relative w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src={m.logo}
                    alt={`${m.acronym} logo`}
                    width={28}
                    height={28}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-eco font-extrabold block text-xs">{m.acronym}</span>
                  <span className="text-gray-300 text-[11px] font-normal hidden sm:inline">{m.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Bottom CTA Banner (Consistent with About / Services) ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-950 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
              Don&rsquo;t See Your Exact Role?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              We&rsquo;re always looking for exceptional architects, building physics modelers, facade engineers, and LEED specialists. Send us your CV and portfolio.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0 relative z-10"
          >
            <span>Send Open Application</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
