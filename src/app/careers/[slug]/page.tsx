import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJobBySlug, getPublishedJobs } from '@/server/services/jobs';
import { ArrowLeft, ArrowUpRight, Briefcase, MapPin, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const jobs = await getPublishedJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return { title: 'Position Not Found' };

  return {
    title: `${job.title} | Careers | Green Tree Building Consultants`,
    description: job.description,
  };
}

function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return '';
  const fmt = (n: number) => `৳${(n / 1000).toFixed(0)}K`;
  if (min && max) return `${fmt(min)} – ${fmt(max)}/mo`;
  if (max) return `Up to ${fmt(max)}/mo`;
  return `From ${fmt(min!)}/mo`;
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-eco transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Open Positions</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-forest-900 border border-forest-750 text-eco mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{job.department}</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              {job.title}
            </h1>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-eco" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-eco" />
                {job.employmentType}
              </span>
              {(job.salaryMin || job.salaryMax) && (
                <span className="flex items-center gap-1.5 font-semibold text-eco-300">
                  <Briefcase className="w-4 h-4 text-eco" />
                  {formatSalary(job.salaryMin, job.salaryMax)}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-10">
          
          {/* Overview */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-forest-950 mb-4">
              Role Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          {job.responsibilities && (
            <div className="pt-8 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-4">
                Key Responsibilities
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-2">
                {job.responsibilities}
              </div>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && (
            <div className="pt-8 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-4">
                Required Qualifications &amp; Experience
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-2">
                {job.requirements}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div className="pt-8 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest-950 mb-4">
                Compensation &amp; Practice Benefits
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-2">
                {job.benefits}
              </div>
            </div>
          )}

          {/* Application Box */}
          <div className="pt-8 border-t border-forest-100 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-forest-950 text-white">
            <div className="max-w-lg">
              <h4 className="font-display font-bold text-lg text-white">
                Interested in this position?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                Send your CV, portfolio, and a cover letter referencing <strong className="text-white">{job.title}</strong> directly to our hiring team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-xs sm:text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
            >
              <span>Apply via Studio Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

