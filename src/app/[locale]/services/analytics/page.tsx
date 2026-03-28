import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Analytics & Intelligence — Pragmas',
  description:
    'We build real-time dashboards and data pipelines that answer your questions before you ask them. Fixed price, source code included.',
};

export default async function AnalyticsPage() {
  const t = await getTranslations('analyticsService');

  const included = [t('i1'), t('i2'), t('i3'), t('i4'), t('i5')];

  const process = [
    { step: t('p1step'), title: t('p1title'), desc: t('p1desc') },
    { step: t('p2step'), title: t('p2title'), desc: t('p2desc') },
    { step: t('p3step'), title: t('p3title'), desc: t('p3desc') },
    { step: t('p4step'), title: t('p4title'), desc: t('p4desc') },
  ];

  const useCases = [
    { title: t('uc1title'), desc: t('uc1desc') },
    { title: t('uc2title'), desc: t('uc2desc') },
    { title: t('uc3title'), desc: t('uc3desc') },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/[0.08]">
        <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('label')}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mt-6 max-w-4xl leading-tight">
          {t('title')}
        </h1>
        <p className="mt-8 text-lg text-[#BBBBBB] max-w-2xl leading-relaxed">{t('subtitle')}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/get-started"
            className="bg-[#F97316] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/#pricing"
            className="border border-white/[0.08] px-8 py-4 text-sm text-[#BBBBBB] hover:border-white/30 hover:text-[#F5F5F5] transition-colors"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </section>

      {/* What's included + visual */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('includedLabel')}</span>
            <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-8">{t('includedTitle')}</h2>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F97316] text-sm shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-[#BBBBBB]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="bg-[#0F0F0F] border border-white/[0.08] p-6 font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/[0.08]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
              <span className="ml-2 text-[#888888] text-xs">dashboard.pragmas.io</span>
            </div>
            <div className="text-[#F97316] mb-3">REVENUE OVERVIEW — Last 30 days</div>
            <div className="text-[#888888] mb-4">
              <div className="flex justify-between border-b border-white/[0.06] pb-2 mb-2">
                <span>Total Revenue</span>
                <span className="text-[#F5F5F5]">$142,830</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2 mb-2">
                <span>New MRR</span>
                <span className="text-[#F97316]">+$12,400  ↑ 18%</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2 mb-2">
                <span>Active Customers</span>
                <span className="text-[#F5F5F5]">847</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Avg. Order Value</span>
                <span className="text-[#F5F5F5]">$168.63</span>
              </div>
            </div>
            <div className="text-[#F5F5F5] mb-2 text-xs">TOP CHANNELS</div>
            <div className="text-[#888888] space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Organic Search</span>
                <span className="text-[#F5F5F5]">42%</span>
              </div>
              <div className="flex justify-between">
                <span>Direct</span>
                <span className="text-[#F5F5F5]">28%</span>
              </div>
              <div className="flex justify-between">
                <span>Referral</span>
                <span className="text-[#F5F5F5]">18%</span>
              </div>
              <div className="flex justify-between">
                <span>Paid</span>
                <span className="text-[#F5F5F5]">12%</span>
              </div>
            </div>
            <div className="text-[#333333] text-xs">Updated 2 min ago · Live</div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#111111] py-24 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('processLabel')}</span>
          <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('processTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/[0.08]">
            {process.map((p, i) => (
              <div
                key={p.step}
                className={`p-8 bg-[#111111] ${i < 3 ? 'border-r border-white/[0.08]' : ''}`}
              >
                <span className="text-xs text-[#F97316] font-mono">{p.step}</span>
                <h3 className="text-base font-bold text-[#F5F5F5] mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-[#BBBBBB] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('useCasesLabel')}</span>
        <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('useCasesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.08]">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className={`p-8 hover:bg-white/[0.03] transition-colors ${i < 2 ? 'border-r border-white/[0.08]' : ''}`}
            >
              <h3 className="text-base font-bold text-[#F5F5F5] mb-3">{uc.title}</h3>
              <p className="text-sm text-[#BBBBBB] leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-24 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">{t('ctaTitle')}</h2>
          <p className="text-[#BBBBBB] mb-10 max-w-xl mx-auto">{t('ctaSubtitle')}</p>
          <Link
            href="/get-started"
            className="inline-block bg-[#F97316] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
