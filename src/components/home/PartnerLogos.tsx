'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/*  Put your logo files in /public/images/clients/ and /public/images/memberships/ */
/*  `logo` can also be a full URL (https://...).                              */
/*  `href` is optional – if set, the logo becomes a link.                     */
/* -------------------------------------------------------------------------- */

type Client = {
  name: string;
  logo: string;
  href?: string;
};

const clients: Client[] = [
  { name: 'Navana Group', logo: '/images/clients/navana-group.png', href: 'https://navana.com' },
  { name: 'Ahsan Group', logo: '/images/clients/ahsan.png' },
  { name: 'Wonderland Toys', logo: '/images/clients/wonderlandToy.png' },
  { name: 'Palmal Group', logo: '/images/clients/palmal.png' },
  { name: 'J&H', logo: '/images/clients/J&h group.png' },
  { name: 'Fakir Group', logo: '/images/clients/fakirGroup.png' },
  { name: 'Cosmic Group', logo: '/images/clients/cosmicGroup.png' },
  { name: 'Anwar Landmark', logo: '/images/clients/anwar-landmark.png' },
  { name: 'Trikon Architects', logo: '/images/clients/trikon-architects.jpeg' },
  { name: 'Starpath Holdings Ltd.', logo: '/images/clients/starpath-holdings.jpeg' },
  { name: 'Shatotto', logo: '/images/clients/shatotto.jpeg' },
  { name: 'Shanta Holdings', logo: '/images/clients/shanta-holdings.jpeg' },
  { name: 'Rahama Properties', logo: '/images/clients/rahama-properties.png' },
  { name: 'Rangs Properties', logo: '/images/clients/rangs-properties.png' },
  { name: 'Fakir Knitwears Ltd.', logo: '/images/clients/fakir-knitwears.png' },
];

type Membership = {
  name: string;
  acronym: string;
  logo?: string;
};

const memberships: Membership[] = [
  {
    acronym: 'IAB',
    name: 'Institute of Architects Bangladesh',
  },
  {
    acronym: 'IEB',
    name: 'Institute of Engineers Bangladesh',
  },
  {
    acronym: 'RAJUK',
    name: 'Rajdhani Unnayan Kartripakkha',
  },
];

/* -------------------------------------------------------------------------- */
/*  HOOKS                                                                     */
/* -------------------------------------------------------------------------- */

/** Fires once when the element scrolls into view. */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* -------------------------------------------------------------------------- */
/*  LOGO CARD                                                                 */
/* -------------------------------------------------------------------------- */

function LogoCard({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  const content = (
    <div className="logo-card group/card relative flex h-24 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-forest-100 bg-sand-50 px-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-forest-300 hover:bg-white hover:shadow-lg sm:w-52">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="max-h-12 w-auto max-w-full select-none object-contain opacity-60 grayscale transition-all duration-500 ease-out group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
        />
      ) : (
        /* Fallback when the logo file is missing */
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-100 text-forest-800 transition-colors duration-300 group-hover/card:bg-eco group-hover/card:text-forest-950">
            <Briefcase className="h-4 w-4" />
          </div>
          <span className="text-center font-display text-xs font-bold leading-tight text-forest-950">
            {client.name}
          </span>
        </div>
      )}

      {/* Small name tag that slides up on hover */}
      {!failed && (
        <span className="pointer-events-none absolute bottom-1.5 translate-y-1 text-[10px] font-semibold text-emerald-800 opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
          {client.name}
        </span>
      )}
    </div>
  );

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={client.name}
        className="rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-eco focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return content;
}

/* -------------------------------------------------------------------------- */
/*  MARQUEE                                                                   */
/* -------------------------------------------------------------------------- */

function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Client[];
  reverse?: boolean;
  duration?: number;
}) {
  // Two identical groups. Each group slides one full width to the left, so the
  // second group takes the place of the first and the loop is seamless.
  const groupClass = `marquee-group flex shrink-0 items-center gap-4 pr-4 ${
    reverse ? 'marquee-reverse' : ''
  }`;
  const style = { ['--marquee-duration' as string]: `${duration}s` } as React.CSSProperties;

  return (
    <div className="marquee group/marquee flex w-full overflow-hidden py-2">
      <div className={groupClass} style={style}>
        {items.map((c) => (
          <LogoCard key={c.name} client={c} />
        ))}
      </div>
      {/* Duplicate group – hidden from screen readers */}
      <div className={groupClass} style={style} aria-hidden="true">
        {items.map((c) => (
          <LogoCard key={`${c.name}-dup`} client={c} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION                                                                   */
/* -------------------------------------------------------------------------- */

export function PartnerLogos() {
  const { ref: clientsRef, inView: clientsInView } = useInView<HTMLDivElement>();
  const { ref: memberRef, inView: memberInView } = useInView<HTMLDivElement>();

  const reversed = [...clients].reverse();

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Component-scoped animation styles */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55); }
          70%  { box-shadow: 0 0 0 7px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .marquee-group {
          animation: marquee-left var(--marquee-duration, 40s) linear infinite;
          will-change: transform;
        }
        .marquee-group.marquee-reverse {
          animation-name: marquee-right;
        }
        /* Pause the whole row while a person is looking at a logo */
        .marquee:hover .marquee-group,
        .marquee:focus-within .marquee-group {
          animation-play-state: paused;
        }

        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
                  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }

        .pulse-dot { animation: pulse-ring 2.2s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .marquee { overflow-x: auto; }
          .marquee-group { animation: none; }
          .marquee-group[aria-hidden='true'] { display: none; }
          .marquee-mask { -webkit-mask-image: none; mask-image: none; }
          .pulse-dot { animation: none; }
        }
      `}</style>

      {/* 1. Client portfolio */}
      <div
        ref={clientsRef}
        className={`overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-subtle transition-all duration-700 ease-out sm:rounded-4xl ${
          clientsInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl px-6 pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <span className="text-xs font-bold uppercase tracking-widest text-eco">
            Proven partnerships
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-forest-950 sm:text-3xl">
            Trusted by leading organizations
          </h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600">
            Valued clients and industrial partners who rely on our expertise.
          </p>
        </div>

        <div className="marquee-mask flex flex-col gap-3">
          <Marquee items={clients} duration={45} />
          <Marquee items={reversed} duration={55} reverse />
        </div>

        {/* 2. Official memberships */}
        <div
          ref={memberRef}
          className={`border-t border-forest-100 bg-forest-50/70 px-5 py-5 transition-all duration-700 ease-out sm:px-8 sm:py-6 ${
            memberInView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-eco">
                Professional affiliations
              </div>
              <p className="mt-1 text-sm font-bold text-forest-950">
                Registered and recognized by
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              {memberships.map((membership, index) => (
                <MembershipBadge
                  key={membership.acronym}
                  membership={membership}
                  delay={index * 100}
                  show={memberInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MEMBERSHIP BADGE                                                          */
/* -------------------------------------------------------------------------- */

function MembershipBadge({
  membership,
  delay,
  show,
}: {
  membership: Membership;
  delay: number;
  show: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const hasLogo = membership.logo && !failed;

  return (
    <div
      title={membership.name}
      style={{ transitionDelay: `${delay + 250}ms` }}
      className={`inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-forest-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-forest-950 transition-all duration-300 ease-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      {/* {hasLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={membership.logo}
          alt={`${membership.acronym} logo`}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="h-5 w-5 rounded-full bg-white object-contain p-0.5"
        />
      ) : (
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-eco/30 bg-eco-50 text-[9px] font-extrabold text-forest-900"
          aria-hidden="true"
        >
          {membership.acronym.slice(0, 1)}
        </span>
      )} */}
      <span className="font-bold">{membership.acronym}</span>
      <span className="hidden max-w-44 text-[11px] leading-tight text-gray-500 lg:inline">
        {membership.name}
      </span>
    </div>
  );
}