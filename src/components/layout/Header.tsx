'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Navigation structure ────────────────────────────────────────────────────
const NAV = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'EDGE Certification',      href: '/services/edge-certification' },
      { label: 'Energy Simulation',        href: '/services/energy-simulation' },
      { label: 'Daylight Simulation',      href: '/services/daylight-simulation' },
      { label: 'Tender & Design Review',   href: '/services/tender-design-documents-review' },
      { label: 'LEED Commissioning',       href: '/services/leed-commissioning' },
      { label: 'LEED Facilitation',        href: '/services/overall-leed-facilitation' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Clients',  href: '/clients' },
  { label: 'About',    href: '/about' },
  { label: 'Careers',  href: '/careers', badge: 'Hiring' },
  { label: 'Contact',  href: '/contact' },
];

// ─── Dropdown ─────────────────────────────────────────────────────────────────
function Dropdown({
  items,
  visible,
}: {
  items: { label: string; href: string }[];
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 z-50',
        'transition-all duration-200 origin-top',
        visible
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-95 pointer-events-none',
      )}
      aria-hidden={!visible}
    >
      {/* Arrow pip */}
      <div className="flex justify-center">
        <div className="w-3 h-3 -mb-1.5 rotate-45 bg-white border-l border-t border-gray-200 rounded-sm shadow-sm" />
      </div>
      <div className="rounded-2xl bg-white border border-gray-200/80 shadow-2xl shadow-black/10 overflow-hidden">
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center justify-between px-4 py-3',
              'text-[13px] font-medium text-gray-600 hover:text-forest-900 hover:bg-forest-50',
              'transition-colors group',
              i !== items.length - 1 && 'border-b border-gray-100',
            )}
          >
            <span>{item.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-50 transition-opacity text-forest-700" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export function Header() {
  const pathname = usePathname();
  const [scrolled,         setScrolled]         = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);
  const [activeDropdown,   setActiveDropdown]   = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll listener ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close mobile menu on navigation ──
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // ── Dropdown hover with grace delay ──
  const openDropdown  = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 160);
  };

  // ── Colour mode logic ──────────────────────────────────────────────────────
  // Home page at the very top  → transparent header over dark hero → white text
  // Anywhere else OR scrolled  → solid white header → dark text
  const isHome   = pathname === '/';
  const darkMode = isHome && !scrolled; // white text on dark/transparent bg
  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full',
          'transition-all duration-500 ease-out',
          darkMode
            ? // Home-page top: transparent over dark hero
              'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-0 border-b border-transparent shadow-none'
            : // Scrolled OR interior pages: crisp white
              'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_1px_20px_rgba(0,0,0,0.08)] py-0',
        )}
      >
        {/* Green accent line — only visible on scrolled/white mode */}
        <div
          className={cn(
            'h-[2.5px] w-full transition-opacity duration-500',
            darkMode ? 'opacity-0' : 'opacity-100',
          )}
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #16a34a 25%, #22c55e 55%, #16a34a 75%, transparent 100%)',
          }}
        />

        <div className="max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center h-[70px]">

          {/* ── LOGO ── */}
          <Link
            href="/"
            aria-label="Green Tree Building Consultants — Home"
            className="flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco rounded-lg"
          >
            <Image
              src="/images/logo/green-tree-logo.png"
              alt="Green Tree Building Consultants"
              width={180}
              height={56}
              className={cn(
                'w-auto object-contain transition-all duration-500',
                scrolled ? 'h-9' : 'h-11',
                // On white bg the logo is already full-colour; on dark bg invert it to white
                darkMode
                  ? 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
                  : 'drop-shadow-none',
              )}
              priority
            />
          </Link>

          <div className="flex-1" />

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <ul className="flex items-center gap-0.5" role="list">
              {NAV.map((item) => {
                const active      = isActive(item.href);
                const hasChildren = !!item.children?.length;
                const dropOpen    = activeDropdown === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && openDropdown(item.label)}
                    onMouseLeave={() => hasChildren && closeDropdown()}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative inline-flex items-center gap-1 px-3.5 py-2 rounded-full',
                        'text-[13px] font-semibold tracking-wide transition-all duration-200',
                        // Active state
                        active && darkMode  && 'text-white bg-white/15',
                        active && !darkMode && 'text-forest-900 bg-forest-50',
                        // Idle state
                        !active && darkMode  && 'text-white/75 hover:text-white hover:bg-white/10',
                        !active && !darkMode && 'text-gray-600 hover:text-forest-900 hover:bg-gray-100',
                      )}
                    >
                      <span>{item.label}</span>

                      {item.badge && (
                        <span className="ml-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-eco text-forest-950 leading-none">
                          {item.badge}
                        </span>
                      )}

                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            'w-3 h-3 transition-transform duration-200',
                            darkMode ? 'text-white/40' : 'text-gray-400',
                            dropOpen && 'rotate-180',
                          )}
                        />
                      )}

                      {/* Active indicator dot */}
                      {active && (
                        <span
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-eco"
                          style={{ boxShadow: '0 0 6px 2px rgba(34,197,94,0.55)' }}
                        />
                      )}
                    </Link>

                    {hasChildren && item.children && (
                      <Dropdown items={item.children} visible={dropOpen} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex-1" />

          {/* ── RIGHT: CTA + HAMBURGER ── */}
          <div className="flex items-center gap-3">

            {/* Phone CTA */}
            <a
              href="tel:+8801922943373"
              aria-label="Call Green Tree Building Consultants"
              className={cn(
                'hidden sm:inline-flex items-center gap-2 rounded-full',
                'pl-4 pr-1.5 py-1.5 transition-all duration-300 group',
                'text-[12.5px] font-black tracking-wide',
                'hover:scale-[1.03] active:scale-[0.97]',
                darkMode
                  ? // On dark hero: white pill
                    'bg-white text-slate-900 shadow-lg hover:bg-slate-50 shadow-black/20'
                  : // On white bg: solid green pill
                    'bg-forest-900 text-white shadow-[0_2px_16px_rgba(22,101,52,0.30)] hover:bg-forest-800 hover:shadow-[0_4px_24px_rgba(22,101,52,0.45)]',
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">+880 1922 943373</span>
              <span className="md:hidden whitespace-nowrap">Call Us</span>
              <span
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center transition-colors',
                  darkMode ? 'bg-slate-950 group-hover:bg-slate-800' : 'bg-white/15 group-hover:bg-white/25',
                )}
              >
                <Phone
                  className={cn(
                    'w-3.5 h-3.5',
                    darkMode ? 'fill-white text-white' : 'fill-white text-white',
                  )}
                />
              </span>
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className={cn(
                'lg:hidden flex items-center justify-center w-10 h-10 rounded-full',
                'transition-all duration-200 border',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco',
                darkMode
                  ? 'bg-white/12 border-white/20 text-white hover:bg-white/20'
                  : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200',
              )}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ══ MOBILE DRAWER ══════════════════════════════════════════════════════ */}
      {/* Dim overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden',
          'transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] lg:hidden',
          'bg-white border-l border-gray-200',
          'shadow-[-8px_0_60px_rgba(0,0,0,0.15)]',
          'transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[70px] border-b border-gray-100 flex-shrink-0">
          <Image
            src="/images/logo/green-tree-logo.png"
            alt="Green Tree Building Consultants"
            width={140}
            height={44}
            className="h-9 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-5"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <React.Fragment key={item.label}>
                  <li>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-4 py-3.5 rounded-xl',
                        'text-[14px] font-semibold transition-colors',
                        active
                          ? 'bg-forest-50 text-forest-900 border border-forest-100'
                          : 'text-gray-700 hover:text-forest-900 hover:bg-gray-50',
                      )}
                    >
                      <span>{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-eco text-forest-950">
                            {item.badge}
                          </span>
                        )}
                        <ArrowUpRight
                          className={cn(
                            'w-4 h-4',
                            active ? 'text-forest-600' : 'text-gray-300',
                          )}
                        />
                      </div>
                    </Link>
                  </li>

                  {/* Service sub-items */}
                  {item.children && (
                    <li>
                      <ul className="ml-4 flex flex-col gap-0.5 mb-1" role="list">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-[13px] text-gray-500 hover:text-forest-800 hover:bg-forest-50 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-eco/60 flex-shrink-0" />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer — sticky CTA */}
        <div className="flex-shrink-0 p-5 border-t border-gray-100 bg-gray-50">
          <a
            href="tel:+8801922943373"
            className={cn(
              'flex items-center justify-center gap-3 w-full',
              'px-5 py-4 rounded-2xl',
              'bg-forest-900 text-white font-black text-[14px] tracking-wide',
              'shadow-[0_4px_20px_rgba(22,101,52,0.30)]',
              'hover:bg-forest-800 transition-colors',
            )}
          >
            <Phone className="w-4 h-4 fill-white" />
            +880 1922 943373
          </a>
          <p className="text-center text-[11px] text-gray-400 mt-3 tracking-wide">
            greentreebangladesh@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
