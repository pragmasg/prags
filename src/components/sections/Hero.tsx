'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

function TerminalMockup() {
  return (
    <div className="hidden lg:block">
      <div className="bg-[#0D1117] border border-[#30363D]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 text-xs text-gray-500" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
            pragmas — workflow runner
          </span>
        </div>
        <div className="p-6 space-y-2.5 min-h-[280px]" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          <p className="text-sm text-gray-400">$ pragmas deploy --project invoice-automation</p>
          <p className="text-sm text-[#3FB950]">✓ Connected to data source (127 records)</p>
          <p className="text-sm text-[#3FB950]">✓ Extracted vendor &amp; amount data</p>
          <p className="text-sm text-[#3FB950]">✓ Validated against accounting rules</p>
          <p className="text-sm text-[#3FB950]">✓ Posted to accounting system</p>
          <p className="text-sm text-gray-600 py-1">— — —</p>
          <p className="text-sm text-white">↳ 127 invoices processed in 1.4s</p>
          <div className="pt-3">
            <p className="text-sm text-gray-400">$ pragmas status</p>
          </div>
          <p className="text-sm text-[#58A6FF]">● Pipeline: <span className="text-[#3FB950]">operational</span></p>
          <p className="text-sm text-[#58A6FF]">● Next run: <span className="text-white">in 14 minutes</span></p>
          <p className="text-sm text-[#58A6FF]">● Errors: <span className="text-[#3FB950]">0</span></p>
          <div className="flex items-center gap-1 pt-3">
            <span className="text-sm text-gray-400">$ </span>
            <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border border-[#E5E5E5] border-t-0">
        <div className="p-5 border-r border-b border-[#E5E5E5]">
          <p className="text-base font-semibold text-[#0A0A0A] mb-1" style={{ fontFamily: 'var(--font-mono, monospace)' }}>3–5 days</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Avg. delivery</p>
        </div>
        <div className="p-5 border-b border-[#E5E5E5]">
          <p className="text-base font-semibold text-[#0A0A0A] mb-1" style={{ fontFamily: 'var(--font-mono, monospace)' }}>Fixed price</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">No scope creep</p>
        </div>
        <div className="p-5 border-r border-[#E5E5E5]">
          <p className="text-base font-semibold text-[#0A0A0A] mb-1" style={{ fontFamily: 'var(--font-mono, monospace)' }}>100% yours</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Full IP transfer</p>
        </div>
        <div className="p-5">
          <p className="text-base font-semibold text-[#0A0A0A] mb-1" style={{ fontFamily: 'var(--font-mono, monospace)' }}>5 languages</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">EN · ES · PT · FR · DE</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              {t('label')}
            </p>
            <h1
              className="text-4xl lg:text-6xl leading-tight text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              {t('title')}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
              <Link
                href="/get-started"
                className="bg-black text-white px-8 py-3.5 text-sm font-medium hover:bg-[#1F2937] transition-colors duration-200"
              >
                {t('cta')}
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm underline underline-offset-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 py-3.5"
              >
                {t('ctaSecondary')} ↓
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              {t('trustLine')}
            </p>
          </div>
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}
