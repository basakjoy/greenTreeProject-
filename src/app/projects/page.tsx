import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/server/services/content';
import { ArrowUpRight, MapPin, Building, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects | Green Tree Building Consultants',
  description:
    'Explore Green Tree’s verified portfolio of sustainable building design and consultancy projects across Bangladesh, including Wonderland Toy, Mansion D Salam, Fakir Eco Knitwear, and more.',
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const projectsList = await getProjects();

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Project Portfolio</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Our Projects
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              A curated showcase of Green Tree&apos;s sustainable engineering and architectural design projects across Bangladesh. Delivering functional excellence, cost reduction, and aesthetic refinement for leading institutional clients.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.slug}
              className="group bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden bg-forest-950">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  
                  {/* Sector Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-forest-950/85 backdrop-blur-md text-emerald-300 border border-forest-700/60">
                    {project.sector}
                  </div>

                  {/* Rating / Scope Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white drop-shadow truncate">
                    {project.ratingAchieved}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display font-bold text-xl text-forest-950 group-hover:text-forest-700 transition-colors mb-2">
                    {project.title}
                  </h2>

                  <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5 text-eco shrink-0" />
                      <span>Client: <strong className="text-forest-900">{project.client}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-eco shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-forest-100 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 group-hover:text-eco transition-colors"
                  >
                    <span>View Project Dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-eco group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {project.completedYear}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Have a Project in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              From early conceptual sketches to tender reviews and environmental simulation, our studio is ready to collaborate.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-eco text-forest-950 font-bold text-sm hover:bg-eco-400 transition-all shadow-glow shrink-0"
          >
            <span>Consult With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
