import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'About — Pragmas',
  description:
    "Pragmas exists because most growing businesses are sitting on data they can't read and running processes they can't automate. We fix that.",
};

const techStack = [
  { name: 'Next.js', note: 'The framework behind the fastest apps on the web' },
  { name: 'Supabase', note: 'Open-source Firebase alternative — your data, your infra' },
  { name: 'n8n', note: 'Self-hostable automation — you can run it yourself' },
  { name: 'Anthropic Claude', note: 'The AI that powers our intelligent tools' },
  { name: 'Vercel', note: 'Edge-optimized deployment, zero config' },
  { name: 'TypeScript', note: 'Type-safe code means fewer bugs in production' },
];

export default async function AboutPage() {
  const t = await getTranslations('about');

  const values = [
    { title: t('v1title'), body: t('v1body') },
    { title: t('v2title'), body: t('v2body') },
    { title: t('v3title'), body: t('v3body') },
  ];

  const comparison = [
    { row: t('rowTimeline'), us: t('rowTimelineUs'), agency: t('rowTimelineAgency'), fl: t('rowTimelineFl') },
    { row: t('rowPricing'), us: t('rowPricingUs'), agency: t('rowPricingAgency'), fl: t('rowPricingFl') },
    { row: t('rowOwnership'), us: t('rowOwnershipUs'), agency: t('rowOwnershipAgency'), fl: t('rowOwnershipFl') },
    { row: t('rowComms'), us: t('rowCommsUs'), agency: t('rowCommsAgency'), fl: t('rowCommsFl') },
    { row: t('rowSupport'), us: t('rowSupportUs'), agency: t('rowSupportAgency'), fl: t('rowSupportFl') },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('label')}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mt-6 max-w-4xl leading-tight">
          {t('title')}
        </h1>
        <p className="mt-8 text-lg text-[#BBBBBB] max-w-2xl leading-relaxed">{t('subtitle')}</p>
      </section>

      {/* Values */}
      <section className="bg-[#111111] py-24 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316] mb-12 block">
            {t('valuesLabel')}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {values.map((value) => (
              <div key={value.title} className="bg-[#111111] p-10">
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-4">{value.title}</h3>
                <p className="text-[#BBBBBB] leading-relaxed text-sm">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('stackLabel')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-6 mb-12">
            {t('stackTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.08]">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className={`flex items-start gap-6 px-8 py-6 border-b border-white/[0.08] hover:bg-white/[0.03] transition-colors ${
                  i % 2 === 0 ? 'md:border-r' : ''
                } last:border-b-0`}
              >
                <div>
                  <p className="font-bold text-[#F5F5F5] text-sm mb-1">{tech.name}</p>
                  <p className="text-sm text-[#BBBBBB]">{tech.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#111111] py-24 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('diffLabel')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-6 mb-12">
            {t('diffTitle')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 pr-8 text-[#888888] font-normal w-1/4"></th>
                  <th className="text-left py-4 pr-8 text-[#F97316] font-semibold">{t('colUs')}</th>
                  <th className="text-left py-4 pr-8 text-[#888888] font-normal">{t('colAgency')}</th>
                  <th className="text-left py-4 text-[#888888] font-normal">{t('colFl')}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.row} className="border-b border-white/[0.08]">
                    <td className="py-5 pr-8 text-[#888888]">{r.row}</td>
                    <td className="py-5 pr-8 text-[#F5F5F5] font-medium">{r.us}</td>
                    <td className="py-5 pr-8 text-[#BBBBBB]">{r.agency}</td>
                    <td className="py-5 text-[#BBBBBB]">{r.fl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#F5F5F5]">{t('ctaTitle')}</h2>
            <p className="text-[#BBBBBB] mt-2">{t('ctaSubtitle')}</p>
          </div>
          <Link
            href="/get-started"
            className="shrink-0 bg-[#F97316] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
