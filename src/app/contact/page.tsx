'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl bg-forest-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-750 text-xs font-bold text-eco mb-5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6">
              Contact Green Tree
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Whether you are planning a new industrial RMG campus, seeking EDGE or LEED certification, or looking for an exclusive architectural consultant, our studio team is ready to discuss your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-forest-100 shadow-subtle space-y-6">
              <div>
                <span className="text-[10px] font-bold text-eco uppercase tracking-widest">
                  Direct Inquiries
                </span>
                <h2 className="font-display font-bold text-2xl text-forest-950 mt-1 mb-4">
                  Studio Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Green Tree Building Consultants Ltd. operates as a registered private limited company with IAB, IEB, and RAJUK.
                </p>
              </div>

              <div className="space-y-5 pt-4 border-t border-forest-100 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco shrink-0">
                    <Phone className="w-4 h-4 text-eco" />
                  </div>
                  <div>
                    <div className="font-bold text-forest-950">Phone Contact:</div>
                    <a href="tel:+8801922943373" className="text-forest-800 font-semibold hover:text-eco transition-colors">
                      +880 1922 943373
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco shrink-0">
                    <Mail className="w-4 h-4 text-eco" />
                  </div>
                  <div>
                    <div className="font-bold text-forest-950">Official Email:</div>
                    <a href="mailto:greentreebangladesh@gmail.com" className="text-forest-800 font-semibold hover:text-eco transition-colors">
                      greentreebangladesh@gmail.com
                    </a>
                  </div>
                </div>

                {/* Primary Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center text-eco shrink-0">
                    <MapPin className="w-4 h-4 text-eco" />
                  </div>
                  <div>
                    <div className="font-bold text-forest-950">Primary Office Address:</div>
                    <div className="text-gray-700 mt-0.5 leading-relaxed">
                      House #136 (1st Floor), Eastern Housing Project-1, Darus Salam, Mirpur, Dhaka 1216, Bangladesh
                    </div>
                  </div>
                </div>

                {/* Secondary Address Note */}
                <div className="p-4 rounded-2xl bg-sand-50 border border-forest-100 text-xs text-gray-600">
                  <div className="font-bold text-forest-950 mb-0.5">Alternate Location:</div>
                  <div>C/14 (2nd Floor), Road-6, Eastern Housing-2, South Kalyanpur, Mirpur, Dhaka 1207</div>
                </div>

              </div>

              {/* Social Placeholders */}
              <div className="pt-6 border-t border-forest-100">
                <span className="text-xs font-bold text-forest-950 block mb-2">Connect Across Platforms:</span>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-forest-800">
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[Facebook]</span>
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[LinkedIn]</span>
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[Twitter]</span>
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[Instagram]</span>
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[Pinterest]</span>
                  <span className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-100">[YouTube]</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-subtle">
              <span className="text-[10px] font-bold text-eco uppercase tracking-widest">
                Online Inquiry
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-forest-950 mt-1 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
                Fill out the form below. Your message will be routed directly to our studio team at <strong className="text-forest-950">greentreebangladesh@gmail.com</strong>.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-eco/10 border border-eco/30 text-forest-950 animate-fade-in text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-eco text-forest-950 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg">Inquiry Received Successfully</h3>
                  <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto">
                    Thank you for reaching out to Green Tree Building Consultants. Our studio team will review your project details and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2 rounded-full bg-forest-900 text-white text-xs font-bold hover:bg-forest-850"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-forest-950 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-eco text-sm bg-sand-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest-950 uppercase tracking-wide mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. tanvir@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-eco text-sm bg-sand-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest-950 uppercase tracking-wide mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +880 1712 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-eco text-sm bg-sand-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-950 uppercase tracking-wide mb-1.5">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your project location, scope (EDGE, LEED, energy simulation, design review), approximate floor area, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-eco text-sm bg-sand-50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-full bg-eco hover:bg-eco-400 text-forest-950 font-extrabold text-sm shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'Submitting...' : 'Submit Project Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
