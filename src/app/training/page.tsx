import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Laptop,
  Leaf,
  Sparkles,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Training | Green Tree Building Consultants',
  description:
    'Professional green building, sustainability, BIM, EDGE, and LEED training programs from Green Tree Building Consultants.',
};

const programs = [
  {
    icon: Leaf,
    category: 'Green Building',
    title: 'EDGE Practitioner Workshop',
    description:
      'Learn the EDGE standard, project assessment workflow, energy and water modeling, and practical documentation for green building certification.',
    duration: '2 days',
    level: 'Intermediate',
  },
  {
    icon: Award,
    category: 'Certification',
    title: 'LEED Project Fundamentals',
    description:
      'Understand LEED credit categories, roles and responsibilities, evidence requirements, and a clear roadmap for successful project registration.',
    duration: '3 days',
    level: 'Foundation',
  },
  {
    icon: Laptop,
    category: 'Simulation',
    title: 'Building Energy Modeling',
    description:
      'Build technical confidence in climate inputs, envelope selection, HVAC assumptions, simulation setup, and results interpretation.',
    duration: '4 days',
    level: 'Professional',
  },
];

const benefits = [
  'Instructor-led sessions by practicing sustainability specialists',
  'Real project case studies and hands-on technical exercises',
  'Post-training learning resources and implementation guidance',
  'Professional certificates of participation',
];

export default function TrainingPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-page-max mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-green-facade.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/30" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-forest-700 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Green Building Academy</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Training for a Sustainable Built Environment
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-8">
              Practical professional programs that turn green building standards into confident, repeatable project decisions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow"
              >
                <span>Explore Programs</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-900/80 border border-forest-700 text-white font-bold text-sm hover:bg-forest-800 transition-all"
              >
                <span>Request a Course</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto scroll-mt-28">
        <div className="mb-8">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">Professional Programs</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Learn with industry practitioners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article
                key={program.title}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-subtle hover:shadow-lift hover:border-eco/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center mb-6 group-hover:bg-eco-50 transition-colors">
                  <Icon className="w-6 h-6 text-eco" />
                </div>
                <span className="text-[10px] font-bold text-eco uppercase tracking-wider">
                  {program.category}
                </span>
                <h3 className="font-display font-bold text-xl text-forest-950 mt-2 mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {program.description}
                </p>
                <div className="mt-6 pt-4 border-t border-forest-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="w-3.5 h-3.5 text-eco" />
                    {program.duration}
                  </span>
                  <span className="font-semibold text-forest-800">{program.level}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-page-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-sand-50 rounded-3xl p-8 sm:p-10 border border-forest-200">
            <span className="text-xs font-bold text-eco uppercase tracking-widest">
              Why Train With Us
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1 mb-6">
              Applied learning, not just theory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-forest-100">
                  <CheckCircle2 className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 bg-forest-900 text-white rounded-3xl p-8 sm:p-10 border border-forest-800 shadow-lift">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-700 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-eco" />
            </div>
            <span className="text-xs font-bold text-eco uppercase tracking-widest">Custom Learning</span>
            <h2 className="font-display font-bold text-2xl text-white mt-1 mb-4">
              Training for your organization
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              We tailor workshops to architectural, engineering, MEP, developer, and facility management teams.
            </p>
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-center gap-2.5 text-gray-200">
                <Users className="w-4 h-4 text-eco" />
                <span>Teams of 8–30 participants</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-200">
                <CalendarDays className="w-4 h-4 text-eco" />
                <span>Flexible studio or on-site delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-200">
                <BookOpen className="w-4 h-4 text-eco" />
                <span>Programs mapped to your project needs</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all"
            >
              <span>Discuss Training</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Build expertise that moves projects forward
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Contact Green Tree to receive program dates, course outlines, and corporate training options.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
          >
            <span>Request Course Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
