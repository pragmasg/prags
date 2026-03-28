import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Careers — Pragmas',
  description:
    'Work with Pragmas. We are a lean AI consultancy that collaborates with specialist freelancers on project-based engagements.',
};

export default async function CareersPage() {
  const t = await getTranslations('careers');

  const workPrinciples = [
    { title: t('w1title'), body: t('w1body') },
    { title: t('w2title'), body: t('w2body') },
    { title: t('w3title'), body: t('w3body') },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('label')}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mt-6 max-w-3xl leading-tight">
          {t('title')}
        </h1>
        <p className="mt-8 text-lg text-[#BBBBBB] max-w-xl leading-relaxed">{t('subtitle')}</p>
      </section>

      {/* How we work */}
      <section className="bg-[#111111] py-24 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('howLabel')}</span>
          <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('howTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {workPrinciples.map((item) => (
              <div key={item.title} className="bg-[#111111] p-10">
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-4">{item.title}</h3>
                <p className="text-[#BBBBBB] leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('openLabel')}</span>
          <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-6">{t('openTitle')}</h2>
          <p className="text-[#BBBBBB] max-w-xl leading-relaxed mb-8">{t('openBody')}</p>
          <a
            href="mailto:hello@pragmas.io?subject=Careers"
            className="inline-block border border-white/[0.08] text-[#F5F5F5] px-8 py-4 text-sm hover:bg-white/[0.06] hover:border-white/30 transition-colors"
          >
            {t('openCta')}
          </a>
        </div>
      </section>

      {/* Freelance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('freelanceLabel')}</span>
          <h2 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-12">{t('freelanceTitle')}</h2>
          <div className="border border-white/[0.08] p-10 max-w-2xl bg-[#111111]">
            <p className="text-[#BBBBBB] leading-relaxed mb-4">{t('freelanceBody1')}</p>
            <p className="text-[#BBBBBB] leading-relaxed mb-8">{t('freelanceBody2')}</p>
            <a
              href="mailto:hello@pragmas.io?subject=Freelance collaboration"
              className="inline-block bg-[#F97316] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
            >
              {t('freelanceCta')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
