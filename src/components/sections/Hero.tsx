'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const avatars = [
  'https://avatars.githubusercontent.com/u/1?v=4',
  'https://avatars.githubusercontent.com/u/2?v=4',
  'https://avatars.githubusercontent.com/u/3?v=4',
  'https://avatars.githubusercontent.com/u/4?v=4',
  'https://avatars.githubusercontent.com/u/5?v=4',
];

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/8 rounded-full blur-[120px] float-anim" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-800/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[60px]" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/8 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          {t('badge')}
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
          <span className="block">{t('title')}</span>
          <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/get-started"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 text-base"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => {
              const el = document.getElementById('how-it-works');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 text-base"
          >
            <div className="w-7 h-7 bg-white/10 group-hover:bg-white/15 rounded-full flex items-center justify-center transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            {t('ctaSecondary')}
          </button>
        </div>

        {/* Trusted by section */}
        <div className="flex flex-col items-center gap-3">
          {/* Avatar cluster */}
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[#0D0D14] overflow-hidden bg-gradient-to-br from-purple-500 to-violet-700"
                style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: avatars.length - i }}
              >
                <img
                  src={src}
                  alt={`User ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Extra count bubble */}
            <div
              className="w-9 h-9 rounded-full border-2 border-[#0D0D14] bg-purple-600/50 flex items-center justify-center text-xs font-bold text-white"
              style={{ marginLeft: '-10px', zIndex: 0 }}
            >
              99+
            </div>
          </div>

          <p className="text-white/40 text-sm">
            <span className="text-white/70 font-semibold">100+ startups</span> worldwide trust Pragmas
          </p>

          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white/40 text-xs ml-1">5.0 — "Exceptional quality & speed"</span>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-20 relative">
          <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-transparent to-[#0D0D14]/50 pointer-events-none" />
          <div className="relative mx-auto max-w-3xl bg-[#13131F]/80 border border-white/6 rounded-2xl p-1 backdrop-blur-sm shadow-2xl">
            <div className="bg-[#0D0D14]/90 rounded-xl p-5">
              {/* Fake terminal / dashboard preview */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-2 h-5 bg-white/5 rounded-md" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Revenue', value: '$48.2K', change: '+12.5%', color: 'text-green-400' },
                  { label: 'Users', value: '2,847', change: '+8.3%', color: 'text-purple-400' },
                  { label: 'Conversion', value: '3.84%', change: '+2.1%', color: 'text-blue-400' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/3 rounded-lg p-3">
                    <p className="text-white/40 text-xs mb-1">{stat.label}</p>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className={`text-xs font-medium ${stat.color}`}>{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-12 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-lg flex items-end px-3 pb-2 gap-1">
                  {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-purple-500/50 rounded-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
