import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Sparkles } from 'lucide-react';

const eventPhotos = [
  {
    src: '/images/events/partnership-meeting-signing.jpeg',
    alt: 'Green Tree team members meeting with partners at the studio',
  },
  {
    src: '/images/events/partnership-signing-team.jpeg',
    alt: 'Team members standing together after signing partnership documents',
  },
  {
    src: '/images/events/studio-partnership-meeting.jpg',
    alt: 'Green Tree team in a studio partnership meeting',
  },
  {
    src: '/images/events/partnership-document-signing.jpeg',
    alt: 'Partners presenting signed documents at the studio',
  },
];

const milestonePhotos = [
  {
    src: '/images/events/industry-recognition.jpg',
    alt: 'Green Tree representative receiving recognition at a Bangladesh infrastructure event',
    title: 'Industry Recognition',
    description:
      'Celebrating Green Tree’s contribution to sustainable building and infrastructure.',
  },
  {
    src: '/images/events/leed-platinum-recognition.jpeg',
    alt: 'Green Tree team and project partners presenting a LEED Platinum plaque',
    title: 'LEED Platinum Milestone',
    description:
      'A project team celebrates achieving LEED Platinum certification.',
  },
  {
    src: '/images/events/greentree-exhibition.jpg',
    alt: 'Green Tree team members at a green building exhibition booth',
    title: 'Green Building Exhibition',
    description:
      'Sharing Green Tree’s sustainable building and energy services with visitors.',
  },
];

const eventStories = [
  {
    title: 'Capacity Building of Factories in Sustainability and Climate Action',
    description:
      'Green Tree is providing technical support for an energy management project led by the BRAC Institute of Governance and Development (BIGD), with support from the Danish Embassy in Bangladesh. Energy audits will gather conventional and renewable energy data from 500 RMG and textile factories to help map a sustainable energy pathway for the industry.',
    photos: [
      {
        src: '/images/events/story-blog/capacity-building-factories.jpeg',
        alt: 'Speaker presenting at the Capacity Building of Factories in Sustainability and Climate Action project launch',
      },
    ],
    href: 'https://bigd.bracu.ac.bd/event/project-launch-capacity-building-of-factories-in-sustainability-and-climate-action/',
  },
  {
    title: 'Energy Audit & Green Building Features',
    description:
      'Green Tree completed consultancy services for the Institute of Water Modelling, evaluating its project against the Bangladesh Bank Sustainable Finance Department’s Green Building Features rating system.',
    photos: [
      {
        src: '/images/events/story-blog/energy-audit-green-building.png',
        alt: 'Institute of Water Modelling headquarters in Dhaka',
      },
    ],
  },
  {
    title: 'Participation in BIID Expo 2017',
    description:
      'Green Tree participated in the BIID Expo 2017, where CEO Rubana Nasrin received an award recognizing her leadership as a female entrepreneur in sustainability.',
    photos: [
      {
        src: '/images/events/story-blog/biid-expo-2017.jpeg',
        alt: 'Rubana Nasrin receiving an award at BIID Expo 2017',
      },
    ],
  },
  {
    title: 'Knowledge Sharing with BGMEA and GBCI',
    description:
      'Green Tree CEO Rubana Nasrin attended a knowledge-sharing program organized by BGMEA and GBCI in Dhaka.',
    photos: [
      {
        src: '/images/events/story-blog/bgmea-gbci-knowledge-sharing-1.jpeg',
        alt: 'Attendees meeting during a knowledge-sharing event in Dhaka',
      },
      {
        src: '/images/events/story-blog/bgmea-gbci-knowledge-sharing-2.jpeg',
        alt: 'Rubana Nasrin at a BGMEA and GBCI green factory award ceremony',
      },
    ],
  },
  {
    title: 'Green Building Rating Systems Training',
    description:
      'On March 5, 2017, Green Tree facilitated a training session on green building rating systems. Organized by SREDA and funded by the UNDP-SREPGen Program, the session brought together architects, engineers, and energy professionals.',
    photos: [
      {
        src: '/images/events/story-blog/green-building-training.jpeg',
        alt: 'Poster for the Green Buildings and Rating Systems training programme',
      },
    ],
  },
  {
    title: 'Esquire Knit Composite Factory Groundbreaking',
    description:
      'Green Tree is providing LEED certification consultancy services for Esquire Knit Composite Factory. The groundbreaking ceremony marked the start of the project.',
    photos: [
      {
        src: '/images/events/story-blog/esquire-groundbreaking-1.jpeg',
        alt: 'Guests gathered for the Esquire Knit Composite Factory groundbreaking ceremony',
      },
      {
        src: '/images/events/story-blog/esquire-groundbreaking-2.jpeg',
        alt: 'Participants planting a tree at the factory groundbreaking ceremony',
      },
      {
        src: '/images/events/story-blog/esquire-groundbreaking-3.jpeg',
        alt: 'Groundbreaking ceremony banners at Esquire Knit Composite Factory',
      },
    ],
  },
  {
    title: 'Fakir Knitwears Ltd. LEED Platinum Certification',
    description:
      'Green Tree is proud to celebrate Fakir Knitwears Ltd. achieving LEED Platinum certification, a major milestone in sustainable manufacturing.',
    photos: [
      {
        src: '/images/events/story-blog/fakir-leed-platinum-handover-1.jpeg',
        alt: 'Fakir Knitwears Ltd. LEED Platinum certification presented to the project team',
      },
      {
        src: '/images/events/story-blog/fakir-leed-platinum-handover-2.jpeg',
        alt: 'Team celebrating Fakir Knitwears Ltd. achieving LEED Platinum certification',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Events | Green Tree Building Consultants',
  description:
    'Green Tree seminars, workshops, conferences, partnership events, and professional learning.',
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-page-max mx-auto">
        <div className="page-image-hero rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
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

      <section className="px-4 py-10 sm:px-6 lg:px-8 max-w-page-max mx-auto">
        <div className="mb-7 max-w-3xl">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Stories from our work
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Projects, people &amp; progress
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            A collection of project launches, industry events, training, and sustainability milestones.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {eventStories.map((story) => (
            <article
              key={story.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-subtle"
            >
              <div
                className={`relative grid aspect-[16/10] gap-2 p-2 ${
                  story.photos.length === 1
                    ? 'grid-cols-1'
                    : story.photos.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-2 grid-rows-2'
                }`}
              >
                {story.photos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={`relative min-h-0 overflow-hidden rounded-xl bg-sand-100 ${
                      story.photos.length === 3 && index === 0 ? 'row-span-2' : ''
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-5 pt-3 sm:p-6 sm:pt-3">
                <h3 className="font-display text-lg font-bold text-forest-950">
                  {story.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {story.description}
                </p>
                {story.href && (
                  <a
                    href={story.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-eco-800 transition-colors hover:text-eco"
                  >
                    Read project details
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-page-max mx-auto">
        <div className="mb-7 max-w-3xl">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            In the Studio
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Partnership Meeting &amp; Signing
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            A look back at a studio meeting with partners, bringing teams together to discuss collaboration and sign project documents.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-subtle"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-page-max mx-auto">
        <div className="mb-7 max-w-3xl">
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Events &amp; Achievements
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
            Milestones Worth Celebrating
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {milestonePhotos.map((photo) => (
            <article
              key={photo.src}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold text-forest-950">
                  {photo.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-page-max mx-auto">
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
