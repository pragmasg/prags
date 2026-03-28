'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative bg-[#0B1828] py-32 lg:py-40 overflow-hidden">
      {/* Ambient gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06), rgba(91,156,246,0.03), transparent 70%)',
        }}
      />

      {/* Noise + grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Gold lines decorative */}
      <div className="absolute top-0 left-0 right-0 gold-line" />
      <div className="absolute bottom-0 left-0 right-0 gold-line" />

      {/* Vertical gold line left */}
      <div
        className="absolute left-1/3 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.08), transparent)' }}
      />
      <div
        className="absolute left-2/3 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.08), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.06)]">
            <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C] font-mono">
              Scope document in 24h
            </span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[42px] lg:text-[64px] xl:text-[72px] font-extrabold leading-tight tracking-tight mb-7"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-[#EDE8E0]">{t('title')}</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] text-[#8A9BB5] leading-[1.7] max-w-xl mx-auto mb-12"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="/get-started"
            className="group inline-flex items-center gap-2.5 px-10 py-4 bg-[#C9A84C] text-[#07101F] font-bold text-[13px] tracking-wide hover:bg-[#E0C270] transition-all duration-300"
            style={{ boxShadow: '0 0 40px rgba(201,168,76,0.3), 0 8px 24px rgba(0,0,0,0.4)' }}
          >
            {t('button')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-4 border border-[rgba(148,163,184,0.15)] text-[#8A9BB5] text-[13px] font-medium tracking-wide hover:text-[#EDE8E0] hover:border-[rgba(148,163,184,0.3)] transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M4 1v2M10 1v2M1 6h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Book a 20-min call
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[11px] text-[#4A5B72] mb-12 font-mono"
        >
          No commitment. No discovery sprints. Scope document within 24h.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 pt-10 border-t border-[rgba(148,163,184,0.07)]"
        >
          {[
            { icon: '◈', label: '3–5 day delivery' },
            { icon: '◆', label: 'Fixed price, no overruns' },
            { icon: '◇', label: '100% code ownership' },
            { icon: '◉', label: 'IP fully transferred' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              <span className="text-[#C9A84C] text-sm opacity-60">{badge.icon}</span>
              <span className="text-[12px] text-[#4A5B72]">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
