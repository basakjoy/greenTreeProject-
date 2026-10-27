'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowUpRight } from 'lucide-react';

interface FellowItem {
  id: number;
  name: string;
  role: string;
  credential: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string | null;
}

export function TeamSection({ fellows }: { fellows: FellowItem[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="text-xs font-bold text-eco uppercase tracking-widest">
            Leadership & Simulation Fellows
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight mt-1">
            Accredited LEED & EDGE Simulation Fellows
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
            The computational physicists, building energy modelers, and architects guiding over 250+ certified sustainable projects.
          </p>
        </div>

        <Link
          href="/team"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-forest-900 text-white hover:bg-forest-850 border border-forest-700 transition-all self-start md:self-auto"
        >
          <span>Meet All Technical Fellows</span>
          <ArrowUpRight className="w-4 h-4 text-eco" />
        </Link>
      </div>

      {/* 4 Fellows Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {fellows.map((fellow) => (
          <div
            key={fellow.name}
            className="group bg-white rounded-3xl p-5 border border-forest-100 shadow-subtle hover:shadow-lift transition-all flex flex-col justify-between"
          >
            <div>
              {/* Avatar Photo */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={fellow.avatarUrl}
                  alt={fellow.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                
                {/* Credential Badge */}
                <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1 rounded-xl bg-forest-950/85 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-forest-700/60 truncate">
                  {fellow.credential}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-forest-950 group-hover:text-forest-700 transition-colors">
                {fellow.name}
              </h3>
              <p className="text-xs font-semibold text-eco mt-0.5 mb-2">
                {fellow.role}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                {fellow.bio}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-forest-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-400">GTBC Core Fellow</span>
              {fellow.linkedinUrl && (
                <a
                  href={fellow.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-900 font-bold hover:text-eco transition-colors flex items-center gap-1"
                >
                  <span>Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-eco" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
