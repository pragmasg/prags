import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Automation & Workflows — Pragmas',
  description:
    'We build n8n automation workflows that eliminate manual work. Self-hostable infrastructure — you own it.',
};

export default async function AutomationPage() {
  const t = await getTranslations('automationService');

  const included = [t('i1'), t('i2'), t('i3'), t('i4'), t('i5')];

  const workflowNodes = [
    { label: 'TRIGGER', desc: 'New form submission', variant: 'teal' as const },
    null,
    { label: 'PROCESS', desc: 'Enrich data + score lead', variant: 'neutral' as const },
    null,
    { label: 'BRANCH', desc: 'Score > 70?', variant: 'neutral' as const },
    null,
    { label: 'ACTION', desc: 'Notify sales + add to CRM', variant: 'teal' as const },
  ];

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
    { title: t('uc4title'), desc: t('uc4desc') },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/[0.08]">
        <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('label')}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mt-6 max-w-4xl leading-tight">
          {t('title')}
        </h1>
        <p className="mt-8 text-lg text-[#999999] max-w-2xl leading-relaxed">{t('subtitle')}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/get-started"
            className="bg-[#00D4AA] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/#pricing"
            className="border border-white/[0.08] px-8 py-4 text-sm text-[#999999] hover:border-white/30 hover:text-[#F5F5F5] transition-colors"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </section>

      {/* What's included + visual */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('includedLabel')}</span>
            <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-8">{t('includedTitle')}</h2>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#00D4AA] text-sm shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-[#999999]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow diagram */}
          <div className="border border-white/[0.08] p-8 bg-[#0F0F0F]">
            <p className="text-xs uppercase tracking-widest text-[#555555] mb-8">{t('workflowLabel')}</p>
            <div className="flex flex-col gap-0">
              {workflowNodes.map((node, i) => {
                if (node === null) {
                  return (
                    <div key={i} className="flex justify-center py-1">
                      <div className="w-px h-6 bg-white/[0.08]" />
                    </div>
                  );
                }
                const isTeal = node.variant === 'teal';
                return (
                  <div
                    key={node.label}
                    className={`border px-5 py-3 flex items-center justify-between ${
                      isTeal
                        ? 'border-[#00D4AA]/30 bg-[#00D4AA]/5'
                        : 'border-white/[0.08] bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold font-mono ${
                        isTeal ? 'text-[#00D4AA]' : 'text-[#999999]'
                      }`}
                    >
                      {node.label}
                    </span>
                    <span className="text-xs text-[#555555]">{node.desc}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-[#555555] mt-6">{t('workflowFooter')}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#111111] py-24 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('processLabel')}</span>
          <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('processTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/[0.08]">
            {process.map((p, i) => (
              <div
                key={p.step}
                className={`p-8 bg-[#111111] ${i < 3 ? 'border-r border-white/[0.08]' : ''}`}
              >
                <span className="text-xs text-[#00D4AA] font-mono">{p.step}</span>
                <h3 className="text-base font-bold text-[#F5F5F5] mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-[#999999] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('useCasesLabel')}</span>
        <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('useCasesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.08]">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className={`p-8 hover:bg-white/[0.03] transition-colors ${
                i % 2 === 0 ? 'border-r border-white/[0.08]' : ''
              } ${i < 2 ? 'border-b border-white/[0.08]' : ''}`}
            >
              <h3 className="text-base font-bold text-[#F5F5F5] mb-3">{uc.title}</h3>
              <p className="text-sm text-[#999999] leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-24 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">{t('ctaTitle')}</h2>
          <p className="text-[#999999] mb-10 max-w-xl mx-auto">{t('ctaSubtitle')}</p>
          <Link
            href="/get-started"
            className="inline-block bg-[#00D4AA] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
