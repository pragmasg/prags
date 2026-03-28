'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CubeLogo from '@/components/ui/CubeLogo';

function TerminalMockup() {
  return (
    <div className="hidden lg:block">
      {/* Terminal window */}
      <div className="bg-[#0F0F0F] border border-white/8">
        {/* Title bar */}
        <div className="bg-[#1A1A1A] border-b border-white/8 px-4 py-2.5 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span
            className="ml-4 text-xs text-[#BBBBBB]"
            style={{ fontFamily: 'var(--font-mono, monospace)' }}
          >
            pragmas — workflow runner
          </span>
        </div>

        {/* Terminal body */}
        <div
          className="p-6 space-y-2 min-h-[260px]"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          <p className="text-[#BBBBBB] text-sm">$ pragmas deploy --project invoice-automation</p>
          <p className="text-[#F97316] text-sm">✓ Connected to data source (127 records)</p>
          <p className="text-[#F97316] text-sm">✓ Extracted vendor &amp; amount data</p>
          <p className="text-[#F97316] text-sm">✓ Validated against accounting rules</p>
          <p className="text-[#F97316] text-sm">✓ Posted to accounting system</p>
          <p className="text-[#888888] text-sm py-1">— — —</p>
          <p className="text-white text-sm">↳ 127 invoices processed in 1.4s</p>
          <div className="pt-3">
            <p className="text-[#BBBBBB] text-sm">$ pragmas status</p>
          </div>
          <p className="text-[#BBBBBB] text-sm">
            ● Pipeline: <span className="text-[#F97316]">operational</span>
          </p>
          <p className="text-[#BBBBBB] text-sm">
            ● Next run: <span className="text-white">in 14 minutes</span>
          </p>
          <p className="text-[#BBBBBB] text-sm">
            ● Errors: <span className="text-[#F97316]">0</span>
          </p>
          <div className="flex items-center gap-1 pt-3">
            <span className="text-[#BBBBBB] text-sm">$ </span>
            <span className="inline-block w-2 h-4 bg-[#F97316] animate-[blink_1s_step-end_infinite]" />
          </div>
        </div>
      </div>

      {/* Stats grid below terminal */}
      <div className="grid grid-cols-2 border border-white/8 border-t-0">
        <div className="bg-[#0F0F0F] hover:bg-[#1A1A1A] transition-colors p-4 border-r border-b border-white/8">
          <p
            className="text-sm font-bold text-[#F5F5F5] mb-1"
            style={{ fontFamily: 'var(--font-mono, monospace)' }}
          >
            3–5 days
          </p>
          <p className="text-xs uppercase tracking-widest text-[#888888]">Avg. delivery</p>
        </div>
        <div className="bg-[#0F0F0F] hover:bg-[#1A1A1A] transition-colors p-4 border-b border-white/8">
          <p
            className="text-sm font-bold text-[#F5F5F5] mb-1"
            style={{ fontFamily: 'var(--font-mono, monospace)' }}
          >
            Fixed price
          </p>
          <p className="text-xs uppercase tracking-widest text-[#888888]">No scope creep</p>
        </div>
        <div className="bg-[#0F0F0F] hover:bg-[#1A1A1A] transition-colors p-4 border-r border-white/8">
          <p
            className="text-sm font-bold text-[#F5F5F5] mb-1"
            style={{ fontFamily: 'var(--font-mono, monospace)' }}
          >
            100% yours
          </p>
          <p className="text-xs uppercase tracking-widest text-[#888888]">Full IP transfer</p>
        </div>
        <div className="bg-[#0F0F0F] hover:bg-[#1A1A1A] transition-colors p-4">
          <p
            className="text-sm font-bold text-[#F5F5F5] mb-1"
            style={{ fontFamily: 'var(--font-mono, monospace)' }}
          >
            5 languages
          </p>
          <p className="text-xs uppercase tracking-widest text-[#888888]">EN · ES · PT · FR · DE</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center bg-[#0A0A0A] relative overflow-hidden bg-grid">
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,170,0.08), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-[#F97316]/30 text-[#F97316] bg-[#F97316]/5">
                <CubeLogo size={14} />
                ● AI · Analytics · Automation
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="text-[#F5F5F5]">The automation gap{'\n'}</span>
                <span className="text-[#F97316]">
                  is costing you.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <p className="text-[#BBBBBB] text-lg leading-relaxed max-w-lg">
                {t('subtitle')}
              </p>
            </motion.div>

            {/* CTAs + trust line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-[#0A0A0A] font-bold text-sm hover:bg-white transition-colors duration-200"
                  style={{ boxShadow: '0 0 24px rgba(0,212,170,0.35)' }}
                >
                  Start a project →
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/16 text-[#BBBBBB] text-sm hover:text-white hover:border-white/30 transition-colors duration-200"
                >
                  See how it works
                </Link>
              </div>
              <p className="text-xs text-[#888888]">{t('trustLine')}</p>
            </motion.div>
          </motion.div>

          {/* Right column — terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TerminalMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
