import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Green Tree Building Consultants',
  description: 'Privacy Policy for Green Tree Building Consultants Ltd. in Dhaka, Bangladesh.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-eco transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal &amp; Privacy</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Last updated: January 2025 · Green Tree Building Consultants Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when submitting consultation inquiries, project estimation requests, job applications, or general correspondence through our website forms and email channels. This may include your name, company name, corporate email address, phone number, and architectural or project specifications.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">2. How We Use Your Information</h2>
            <p>
              The information we collect is strictly used to evaluate your green building requirements, conduct feasibility analyses, communicate project deliverables, review job candidacies, and maintain ongoing professional engagement with our institutional partners.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">3. Data Security &amp; Confidentiality</h2>
            <p>
              As an accredited building and engineering consultancy, Green Tree treats all client architectural drawings, proprietary energy models, and corporate data with strict confidentiality. We do not sell, rent, or lease your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-forest-950 mb-3">4. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data protection practices, please contact us at <strong className="text-forest-950">greentreebangladesh@gmail.com</strong> or visit our studio headquarters in Mirpur, Dhaka.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

