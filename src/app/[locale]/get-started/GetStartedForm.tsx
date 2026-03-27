'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

type FormData = {
  name: string;
  company: string;
  projectType: string;
  bottleneck: string;
  budget: string;
  timeline: string;
};

const initialForm: FormData = {
  name: '',
  company: '',
  projectType: '',
  bottleneck: '',
  budget: '',
  timeline: '',
};

export default function GetStartedForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRadio = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="inline-block border border-[#E5E5E5] px-4 py-2 text-xs tracking-widest uppercase text-gray-500 mb-8">
            Brief Received
          </div>
          <h1
            className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            We'll be in touch within 24 hours.
          </h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Our team will review your brief and send you a detailed scope document — architecture,
            timeline, and a fixed price. No surprises.
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors"
          >
            Back to home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const projectTypes = [
    'Analytics Dashboard',
    'Automation Workflow',
    'AI-Powered Tool',
    'Not sure — help me decide',
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 – $5,000',
    '$5,000 – $15,000',
    '$15,000+',
    'Monthly retainer',
  ];

  const timelines = ['This week', 'This month', 'Just exploring'];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-gray-500">— START A PROJECT</span>
          <h1
            className="text-3xl md:text-5xl font-semibold text-[#0A0A0A] mt-4"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Tell us what you need.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Form (60%) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name + Company */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  About you
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    required
                    className="w-full border border-[#E5E5E5] px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 focus:outline-none focus:border-[#0A0A0A] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={set('company')}
                    className="w-full border border-[#E5E5E5] px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 focus:outline-none focus:border-[#0A0A0A] transition-colors"
                  />
                </div>
              </div>

              {/* What do you need */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  What do you need?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setRadio('projectType', type)}
                      className={`text-left px-4 py-3 text-sm border transition-colors ${
                        form.projectType === type
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                          : 'border-[#E5E5E5] text-[#0A0A0A] hover:border-gray-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottleneck */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  What's your biggest operational bottleneck right now?
                </label>
                <textarea
                  placeholder="Describe the process your team does manually that should be automated..."
                  value={form.bottleneck}
                  onChange={set('bottleneck')}
                  required
                  rows={4}
                  className="w-full border border-[#E5E5E5] px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 focus:outline-none focus:border-[#0A0A0A] transition-colors resize-none"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Approximate budget
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setRadio('budget', b)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.budget === b
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                          : 'border-[#E5E5E5] text-[#0A0A0A] hover:border-gray-400'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  When do you need to start?
                </label>
                <div className="flex flex-wrap gap-3">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRadio('timeline', t)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.timeline === t
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                          : 'border-[#E5E5E5] text-[#0A0A0A] hover:border-gray-400'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors w-full sm:w-auto"
                >
                  Send brief — We'll scope it in 24h
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  No sales calls. We'll reply with a scope document within 24 business hours.
                </p>
              </div>
            </form>
          </div>

          {/* Right: What happens next (40%) */}
          <div className="lg:col-span-2">
            <div className="bg-[#FAFAF8] border border-[#E5E5E5] p-8 sticky top-24">
              <h2
                className="text-lg font-semibold text-[#0A0A0A] mb-8"
                style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
              >
                What happens next
              </h2>

              <ol className="space-y-6 mb-10">
                {[
                  { n: '01', text: 'You submit this brief' },
                  { n: '02', text: 'We review and scope your project (24h)' },
                  {
                    n: '03',
                    text: 'You receive a detailed proposal: architecture, timeline, and fixed price',
                  },
                  { n: '04', text: 'You approve and we start building' },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span
                      className="text-xs text-gray-400 font-mono shrink-0 mt-0.5"
                      style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                    >
                      {step.n}
                    </span>
                    <span className="text-sm text-[#0A0A0A] leading-relaxed">{step.text}</span>
                  </li>
                ))}
              </ol>

              <div className="border-t border-[#E5E5E5] pt-8 space-y-3">
                {[
                  'Fixed price, no scope creep',
                  'Source code is yours',
                  'First staging link within 24h of start',
                  '2 weeks of post-launch support included',
                ].map((prop) => (
                  <div key={prop} className="flex items-start gap-3">
                    <span className="text-[#0A0A0A] text-sm shrink-0">&#10003;</span>
                    <span className="text-sm text-gray-600">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
