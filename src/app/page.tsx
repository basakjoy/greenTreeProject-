import React from 'react';
import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { BentoGrid } from '@/components/home/BentoGrid';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { EstimatorTeaser } from '@/components/home/EstimatorTeaser';
import { PartnerLogos } from '@/components/home/PartnerLogos';
import { CtaSection } from '@/components/home/CtaSection';
import { ParallaxSection } from '@/components/ui/ParallaxSection';
import { getServices, getProjects, getClients } from '@/server/services/content';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Building, MapPin, Sparkles } from 'lucide-react';

export const revalidate = 3600; // ISR revalidation every 1 hour

export default async function HomePage() {
  const [services, projects, clients] = await Promise.all([
    getServices(),
    getProjects(),
    getClients(),
  ]);

  // Organization & LocalBusiness JSON-LD for rich snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.greentreebd.com/#organization',
        name: 'Green Tree Building Consultants',
        alternateName: ['Green Tree BD', 'GTBC'],
        url: 'https://www.greentreebd.com',
        logo: 'https://www.greentreebd.com/logo.png',
        email: 'greentreebangladesh@gmail.com',
        telephone: '+8801922943373',
        description:
          'Green Tree is a design-driven consultancy passionate about creating spaces that are functional and aesthetically timeless. Philosophy: design is everything.',
        memberOf: [
          { '@type': 'Organization', name: 'Institute of Architects Bangladesh (IAB)' },
          { '@type': 'Organization', name: 'Institute of Engineers Bangladesh (IEB)' },
          { '@type': 'Organization', name: 'RAJUK' },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.greentreebd.com/#professionalservice',
        name: 'Green Tree Building Consultants',
        image: 'https://www.greentreebd.com/images/hero/hero-green-facade.jpg',
        telephone: '+8801922943373',
        email: 'greentreebangladesh@gmail.com',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House #136 (1st Floor), Eastern Housing Project-1, Darus Salam, Mirpur',
          addressLocality: 'Dhaka',
          postalCode: '1216',
          addressCountry: 'BD',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-2">
        {/* Full-width Hero Section with background photography */}
        <Hero />
        
        {/* Verified Stats Bar */}
        <ParallaxSection speed={0.06}>
          <StatsBar />
        </ParallaxSection>
        
        {/* Exclusive Studio Process & "Design is Everything" Bento Grid */}
        <ParallaxSection speed={0.05}>
          <BentoGrid />
        </ParallaxSection>
        
        {/* Comprehensive Solutions for Sustainable and Efficient Building Design (6 Services) */}
        <ParallaxSection speed={0.04}>
          <ServicesGrid services={services} />
        </ParallaxSection>
        
        {/* Dedicated Section for CEO Rubana Nasrin */}
        <ParallaxSection speed={0.05}>
          <LeadershipSection />
        </ParallaxSection>

        {/* Verified Projects Feature Section */}
        <ParallaxSection speed={0.04}>
          <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <span className="text-xs font-bold text-eco uppercase tracking-widest">
                  Our Work
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight mt-1">
                  Featured Client Projects
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                  Real-world project milestones delivered for leading institutional clients across Bangladesh.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-forest-900 text-white hover:bg-forest-850 border border-forest-750 transition-all self-start md:self-auto shrink-0"
              >
                <span>View All 5 Projects</span>
                <ArrowUpRight className="w-4 h-4 text-eco" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <div
                  key={project.slug}
                  className="group bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-forest-950">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-forest-950/85 backdrop-blur-md text-emerald-300 border border-forest-700/60">
                        {project.sector}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-forest-950 group-hover:text-forest-700 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <div className="space-y-1 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Building className="w-3.5 h-3.5 text-eco shrink-0" />
                          <span>Client: <strong className="text-forest-900">{project.client}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-eco shrink-0" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-forest-100 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-forest-900 group-hover:text-eco transition-colors"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-eco" />
                      </Link>
                      <span className="text-xs text-gray-400 font-semibold">{project.completedYear}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ParallaxSection>

        {/* Feasibility & ROI Estimator Teaser */}
        <ParallaxSection speed={0.04}>
          <EstimatorTeaser />
        </ParallaxSection>

        {/* Client Logos & Memberships (IAB, IEB, RAJUK) */}
        <ParallaxSection speed={0.03}>
          <PartnerLogos />
        </ParallaxSection>

        {/* Final CTA Banner */}
        <CtaSection />
      </div>
    </>
  );
}
