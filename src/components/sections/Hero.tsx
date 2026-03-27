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
              {t('label')}
            </p>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-7xl leading-tight text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              {t('title')}
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-base leading-relaxed max-w-lg mb-10">
              {t('subtitle')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Link
                href="/get-started"
                className="bg-black text-white px-8 py-3 text-sm hover:bg-[#1F2937] transition-colors duration-200"
              >
                {t('cta')}
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm underline underline-offset-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 py-3"
              >
                {t('ctaSecondary')}
              </button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400">
              {t('trustLine')}
            </p>
          </div>

          {/* Right: Value panel */}
          <div className="hidden lg:block">
            <div className="border border-[#E5E5E5]">
              {/* Panel header */}
              <div className="border-b border-[#E5E5E5] px-8 py-5">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {t('panel.header')}
                </p>
              </div>

              {/* 2x2 grid of value props */}
              <div className="grid grid-cols-2">
                {/* Value 1 */}
                <div className="p-8 border-b border-r border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    {t('panel.m1')}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    {t('panel.m1label')}
                  </p>
                </div>

                {/* Value 2 */}
                <div className="p-8 border-b border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    {t('panel.m2')}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    {t('panel.m2label')}
                  </p>
                </div>

                {/* Value 3 */}
                <div className="p-8 border-r border-[#E5E5E5]">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    {t('panel.m3')}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    {t('panel.m3label')}
                  </p>
                </div>

                {/* Value 4 */}
                <div className="p-8">
                  <p
                    className="text-3xl text-[#0A0A0A] mb-2"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    {t('panel.m4')}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
                    {t('panel.m4label')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
