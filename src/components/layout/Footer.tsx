import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, Award, ShieldCheck, Building } from 'lucide-react';

const serviceLinks = [
  { name: 'EDGE Certification Service', href: '/services/edge-certification' },
  { name: 'Energy Simulation Services', href: '/services/energy-simulation' },
  { name: 'Daylight Simulation Services', href: '/services/daylight-simulation' },
  { name: 'Tender & Design Documents Review', href: '/services/tender-design-documents-review' },
  { name: 'LEED Commissioning Services', href: '/services/leed-commissioning' },
  { name: 'Overall LEED Facilitation Services', href: '/services/overall-leed-facilitation' },
];

const resourceLinks = [
  { name: 'Our Projects', href: '/projects' },
  { name: 'Our Clients', href: '/clients' },
  { name: 'ROI Estimator', href: '/estimator' },
  { name: 'About Green Tree', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Sustainability Disclosures', href: '/disclosures' },
  { name: 'Admin Portal', href: '/admin' },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 text-gray-300 pt-16 pb-12 border-t border-forest-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Positioning Banner */}
        <div className="pb-10 mb-12 border-b border-forest-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-3 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo/green-tree-logo.png"
                alt="Green Tree Building Consultants"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert drop-shadow-md"
              />
            </Link>
            <p className="text-xs text-gray-400 italic max-w-sm">
              &ldquo;We are an exclusive consultant — passionate about creating spaces that are functional and aesthetically timeless. Design is everything.&rdquo;
            </p>
          </div>

          {/* Memberships Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-forest-900 text-emerald-300 border border-forest-750">
              <Award className="w-3.5 h-3.5 text-eco" />
              IAB Member
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-forest-900 text-emerald-300 border border-forest-750">
              <ShieldCheck className="w-3.5 h-3.5 text-eco" />
              IEB Registered
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-forest-900 text-emerald-300 border border-forest-750">
              <Building className="w-3.5 h-3.5 text-eco" />
              RAJUK Enlisted
            </span>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-forest-900">
          
          {/* Col 1: Firm Overview & Corporate Status */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase">
              Corporate Profile
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Green Tree Building Consultants (GTBC) is a registered private limited building and design consultancy based in Dhaka, Bangladesh. Bringing together architects, structural and MEP engineers, and estimators to deliver high-value cost reduction and timeless architectural design.
            </p>
            <div className="text-xs text-gray-400 font-medium">
              Website: <a href="https://www.greentreebd.com" className="text-eco hover:underline">www.greentreebd.com</a>
            </div>
            <div className="flex items-center gap-3 pt-2 text-xs text-gray-400">
              <a href="#" className="hover:text-eco transition-colors">[Facebook]</a>
              <a href="#" className="hover:text-eco transition-colors">[LinkedIn]</a>
              <a href="#" className="hover:text-eco transition-colors">[Twitter]</a>
              <a href="#" className="hover:text-eco transition-colors">[Instagram]</a>
              <a href="#" className="hover:text-eco transition-colors">[YouTube]</a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-eco transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-eco transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Locations */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4">
              Office & Inquiries
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-eco shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-white">Office Location:</div>
                  <div>House #136 (1st Floor), Eastern Housing Project-1, Darus Salam, Mirpur, Dhaka 1216</div>
                  <div className="text-[11px] text-gray-500">[Branch: C/14 (2nd Floor), Road-6, Eastern Housing-2, South Kalyanpur, Mirpur, Dhaka 1207]</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-eco shrink-0" />
                <a href="tel:+8801922943373" className="hover:text-white transition-colors font-medium">
                  +880 1922 943373
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-eco shrink-0" />
                <a href="mailto:greentreebangladesh@gmail.com" className="hover:text-white transition-colors font-medium">
                  greentreebangladesh@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-2xl bg-forest-900/60 border border-forest-800">
              <div className="text-xs font-semibold text-white">Ready to Transform Your Next Project?</div>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-eco hover:underline"
              >
                <span>Get in touch with us today</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Green Tree Building Consultants Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-gray-300 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
