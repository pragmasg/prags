'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            {/* Section label */}
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              AI · ANALYTICS · AUTOMATION
            </p>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-7xl leading-tight text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
            >
              We build AI infrastructure for growing businesses.
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-base leading-relaxed max-w-lg mb-10">
              Skip the agency. Get analytics dashboards, automation workflows, and AI tools — built for you, delivered in days, priced for ambitious teams.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Link
                href="/get-started"
                className="bg-black text-white px-8 py-3 text-sm hover:bg-[#1F2937] transition-colors duration-200"
              >
                Start a project
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm underline underline-offset-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 py-3"
              >
                See how it works
              </button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400">
              Trusted by 100+ companies in 12 countries
            </p>
          </div>

          {/* Right: Metrics panel */}
          <div className="hidden lg:block">
            <div className="border border-[#E5E5E5]">
              {/* Panel header */}
              <div className="border-b border-[#E5E5E5] px-8 py-5">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Client outcomes — FY 2025
                </p>
              </div>

              {/* 2x2 grid of metrics */}
              <div className="grid grid-cols-2">
                {/* Metric 1 */}
                <div className="p-8 border-b border-r border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
                  >
                    €48.2K
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    Avg. revenue saved / month
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-8 border-b border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
                  >
                    94%
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    Client retention rate
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-8 border-r border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
                  >
                    3–5 days
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    Average delivery time
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="p-8">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
                  >
                    5
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    Languages supported
                  </p>
                </div>
              </div>

              {/* Panel footer */}
              <div className="border-t border-[#E5E5E5] px-8 py-4">
                <p className="text-xs text-gray-400">
                  Data based on 100+ active client engagements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
