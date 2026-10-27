import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTeamMembers, getMemberships } from '@/server/services/content';
import { Award, ShieldCheck, Compass, Users, CheckCircle2, ArrowUpRight, Sparkles, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Green Tree Building Consultants',
  description:
    'Green Tree is an exclusive, design-driven consultancy in Dhaka passionate about creating functional and aesthetically timeless spaces. Registered with IAB, IEB, and RAJUK.',
};

export const revalidate = 3600;

export default async function AboutPage() {
  const [team, memberships] = await Promise.all([
    getTeamMembers(),
    getMemberships(),
  ]);

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Building & Design Consultancy</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              &ldquo;Design is Everything.&rdquo;
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Welcome to Green Tree, a design-driven consultancy with a relentless passion for creating spaces that are not only functional but also aesthetically timeless. From the first spark of inspiration to the final execution, we believe every detail matters.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Process & Interdisciplinary Approach */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Studio Process */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest-100 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco mb-6">
                <Compass className="w-6 h-6 text-eco" />
              </div>
              <span className="text-xs font-bold text-eco uppercase tracking-widest">
                Our Creative Process
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1 mb-4">
                From First Sketch to Final Execution
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Our Chief Architect sketches the first concept. The dedicated studio team brings it to life, preparing drawings and presentations, then refines functionality and optimizes every aspect of the design for its purpose.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Chief Architect keeps the style, pattern and essence of the design intact through every stage so the final product matches the original vision and the client&apos;s needs.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-forest-100 text-xs font-semibold text-forest-900">
              Style, pattern, and design essence preserved throughout
            </div>
          </div>

          {/* Interdisciplinary Approach */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest-100 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco mb-6">
                <Users className="w-6 h-6 text-eco" />
              </div>
              <span className="text-xs font-bold text-eco uppercase tracking-widest">
                Interdisciplinary Synergy
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1 mb-4">
                Architects, Engineers & Estimators
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Our firm brings together architects, engineers (structural, electrical, plumbing), interior designers and estimators.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Estimators track cost-effectiveness and project feasibility at every stage, so the final product is both cost-conscious and high quality.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-forest-100 text-xs font-semibold text-forest-900">
              Continuous feasibility and cost-effectiveness tracking
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-forest-900 text-white rounded-3xl p-8 sm:p-10 border border-forest-800 shadow-lift">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-eco uppercase tracking-wider mb-3">
              <Target className="w-4 h-4 text-eco" />
              <span>Our Mission</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              High-Value Cost Reduction & Design
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              To provide a standard group of high-value-added cost reduction and design services to clients who want to buy quickly and value, not price. Green Tree is regularly sought out by renowned organizations to help reduce costs and provide expertise in building systems.
            </p>
          </div>

          <div className="bg-forest-900 text-white rounded-3xl p-8 sm:p-10 border border-forest-800 shadow-lift">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-eco uppercase tracking-wider mb-3">
              <Eye className="w-4 h-4 text-eco" />
              <span>Our Vision</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Collaborative, Bold & Functional Solutions
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Design is about a process of architects and clients working together to balance complex requirements with bold project solutions that are both functional and beautiful. We build relationships between our staff and our clients, listen to client needs, wishes and visions, and involve clients from the beginning of the design process.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Professional Commitment & Registered Memberships */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="bg-sand-50 rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-forest-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-eco uppercase tracking-widest">
              Professional Standing
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
              Commitment to Integrity & Governance
            </h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              As a registered private limited company with IAB, IEB and RAJUK, Green Tree upholds the highest standards of professionalism, driven by strong management structure and clear corporate vision, completing each project with precision and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {memberships.map((m) => (
              <div
                key={m.acronym}
                className="bg-white p-6 rounded-2xl border border-forest-100 shadow-subtle"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-forest-50 text-forest-900 border border-forest-200 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-eco" />
                  <span>{m.acronym}</span>
                </div>
                <h4 className="font-display font-bold text-base text-forest-950 mb-1">
                  {m.name}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Studio Team & Leadership */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Studio Structure
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Guided by Vision, Supported by Specialists
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The studio team, guided by the Chief Architect and supported by engineers and specialists, works in harmony with the environment and the client&apos;s objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-5 border border-forest-100 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-forest-950">
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 px-2 py-1 rounded-xl bg-forest-950/85 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-forest-700/60 truncate">
                    {member.credential}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-forest-950">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-eco mt-0.5 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-forest-100 flex items-center justify-between text-xs text-gray-500">
                <span>Green Tree Studio</span>
                <Link href="/contact" className="text-forest-900 font-bold hover:text-eco">
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-950 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Ready to work with an exclusive consultant?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Reach out to our Dhaka studio to begin the architectural charette and feasibility analysis.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
          >
            <span>Contact Studio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
