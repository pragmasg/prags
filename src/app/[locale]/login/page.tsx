import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Sign In — Pragmas',
  description: 'Sign in to your Pragmas client account.',
};

export default async function LoginPage() {
  const t = await getTranslations('login');

  const steps = [t('step1'), t('step2'), t('step3')];

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-sm w-full mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-[#F97316]">{t('label')}</span>
          <h1 className="text-3xl font-bold text-[#F5F5F5] mt-6 mb-4">{t('title')}</h1>

          <p className="text-sm text-[#BBBBBB] leading-relaxed mb-8">{t('subtitle')}</p>

          <div className="border border-white/[0.08] bg-[#111111] p-6 text-left mb-8">
            <p className="text-xs uppercase tracking-widest text-[#888888] mb-3">{t('howLabel')}</p>
            <ol className="space-y-2">
              {steps.map((step, i) => (
                <li key={i} className="text-sm text-[#BBBBBB] flex items-start gap-2">
                  <span className="shrink-0 text-[#F97316]">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-3">
            <Link
              href="/get-started"
              className="block bg-[#F97316] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors text-center"
            >
              {t('ctaPrimary')}
            </Link>
            <a
              href="mailto:hello@pragmas.io"
              className="block border border-white/[0.08] px-8 py-4 text-sm text-[#BBBBBB] hover:border-white/30 hover:text-[#F5F5F5] transition-colors text-center"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
