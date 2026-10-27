import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/server/services/content';
import { ArrowLeft, ArrowUpRight, Building, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Projects | Green Tree Building Consultants`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectWithGallery = project as typeof project & { gallery?: string[] };
  const gallery: string[] =
    projectWithGallery.gallery && projectWithGallery.gallery.length > 0
      ? projectWithGallery.gallery
      : [project.imageUrl];

  return (
    <div className="pt-24 pb-20">
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-eco transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Main Container */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl mb-10">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-forest-900 border border-forest-750 text-eco mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{project.ratingAchieved}</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-6">
              {project.title}
            </h1>

            {/* Project Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-forest-800 text-xs">
              <div>
                <span className="text-gray-400 block mb-0.5">Client</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-eco" />
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Location</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-eco" />
                  {project.location}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Category</span>
                <span className="font-bold text-white">{project.sector}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Completed Year</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-eco" />
                  {project.completedYear}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mb-4">
            Project Image Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.map((imgUrl, i) => (
              <div key={i} className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lift bg-slate-900">
                <Image
                  src={imgUrl}
                  alt={`${project.title} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Narrative Details */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-8 mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl text-forest-950 mb-3">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {project.challenge && (
            <div className="pt-6 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg text-forest-950 mb-2">
                Project Challenge
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="pt-6 border-t border-forest-100">
              <h3 className="font-display font-bold text-lg text-forest-950 mb-2">
                Green Tree Engineering & Studio Solution
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </section>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-sand-50 border border-forest-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-forest-950">
              Interested in similar building solutions?
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Contact our Dhaka studio for a technical feasibility review.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-white font-bold text-xs sm:text-sm hover:bg-forest-850 transition-all shadow-md shrink-0"
          >
            <span>Inquire About Your Project</span>
            <ArrowUpRight className="w-4 h-4 text-eco" />
          </Link>
        </div>

      </article>
    </div>
  );
}
