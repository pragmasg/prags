'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/12 rounded-full blur-[100px]" />
        {/* Decorative lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Decorative grid dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="grid-bg absolute inset-0" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Get started today
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          {t('subtitle')}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/get-started"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 text-lg"
          >
            {t('button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="mailto:hello@pragmas.io"
            className="text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
          >
            Or email us directly →
          </a>
        </div>

        {/* Social proof mini */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/25 text-sm">
          {[
            '✓ No setup fees',
            '✓ Cancel anytime',
            '✓ 5-day delivery',
            '✓ Source code included',
          ].map((item) => (
            <span key={item} className="text-white/40">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
