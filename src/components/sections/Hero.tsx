'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CubeLogo from '@/components/ui/CubeLogo';

/* ─── Micro sparkline SVG ─── */
function Sparkline({ color = '#C9A84C', data = [40,55,45,70,60,80,72,90,85,95] }: { color?: string; data?: number[] }) {
  const w = 120, h = 40;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true">
      <polyline
        points={pts}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
        className="sparkline-path"
        style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
      />
    </svg>
  );
}

/* ─── Analytics preview card (replaces terminal) ─── */
function InsightCard() {
  const metrics = [
    { label: 'Automation coverage', value: '94%',   delta: '+18%',  positive: true,  bar: 94 },
    { label: 'Hours saved / week',  value: '340h',  delta: '+127h', positive: true,  bar: 78 },
    { label: 'Error rate',          value: '0.2%',  delta: '-3.1%', positive: true,  bar: 6  },
  ];

  return (
    <div className="relative">
      {/* Glow behind card */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.15), rgba(91,156,246,0.08), transparent 70%)' }}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16,1,0.3,1] }}
        className="relative glass-gold rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.12)' }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(148,163,184,0.08)]">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#8A9BB5] uppercase">Operations · Live</span>
          </div>
          <span className="text-[10px] font-mono text-[#4A5B72]">Updated 2s ago</span>
        </div>

        {/* Metrics */}
        <div className="px-6 py-5 space-y-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.16,1,0.3,1] }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#8A9BB5] tracking-wide">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#C9A84C] bg-[rgba(201,168,76,0.1)] px-1.5 py-0.5">
                    {m.delta}
                  </span>
                  <span className="text-sm font-semibold text-[#EDE8E0]" style={{ fontFamily: 'var(--font-display)' }}>
                    {m.value}
                  </span>
                </div>
              </div>
              <div className="h-0.5 bg-[rgba(148,163,184,0.08)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.bar}%` }}
                  transition={{ duration: 0.9, delay: 0.7 + i * 0.12, ease: [0.16,1,0.3,1] }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, #C9A84C, #E0C270)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sparkline section */}
        <div className="px-6 pb-5 pt-1 border-t border-[rgba(148,163,184,0.06)]">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-[#4A5B72] mb-1 uppercase tracking-widest font-mono">30-day throughput</p>
              <p className="text-2xl font-bold text-[#EDE8E0]" style={{ fontFamily: 'var(--font-display)' }}>
                12,847
                <span className="text-[13px] font-normal text-[#8A9BB5] ml-1.5">tasks processed</span>
              </p>
            </div>
            <div className="opacity-80">
              <Sparkline />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.16,1,0.3,1] }}
        className="absolute -bottom-5 -left-5 glass px-4 py-2.5 flex items-center gap-2.5"
        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
      >
        <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l2.5 2.5L10 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-[#EDE8E0] font-medium">Delivered in 4 days</p>
          <p className="text-[9px] text-[#4A5B72]">Fintech client · €60k/yr saved</p>
        </div>
      </motion.div>

      {/* Floating tech badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: [0.16,1,0.3,1] }}
        className="absolute -top-4 -right-4 glass px-3 py-2 flex items-center gap-2"
        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#5B9CF6] animate-pulse" />
        <span className="text-[10px] font-mono text-[#8A9BB5]">AI · n8n · Supabase</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  const easing = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg noise-overlay">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Ambient gold orb top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />
      {/* Ambient blue orb top-right */}
      <div
        className="absolute -top-16 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,156,246,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-20 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easing }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.06)]">
                <CubeLogo size={12} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]" style={{ fontFamily: 'var(--font-mono)' }}>
                  AI Consultancy · Enterprise Grade
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
              className="mb-7"
            >
              <h1
                className="text-[54px] lg:text-[72px] xl:text-[82px] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#EDE8E0]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('headline') || (
                  <>
                    The infrastructure
                    <br />
                    gap is{' '}
                    <span className="gradient-text-gold">
                      costing you.
                    </span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: easing }}
              className="mb-10"
            >
              <p className="text-[17px] leading-[1.7] text-[#8A9BB5] max-w-[500px]">
                {t('subtitle')}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: easing }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A84C] text-[#07101F] font-bold text-[13px] tracking-wide hover:bg-[#E0C270] transition-all duration-300"
                style={{ boxShadow: '0 0 32px rgba(201,168,76,0.28), 0 4px 16px rgba(0,0,0,0.3)' }}
              >
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://calendly.com/pragmas/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-[rgba(148,163,184,0.15)] text-[#8A9BB5] text-[13px] font-medium tracking-wide hover:text-[#EDE8E0] hover:border-[rgba(148,163,184,0.3)] transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 1v2M10 1v2M1 6h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Book a 20-min call
              </a>
            </motion.div>

            {/* Trust signals row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: easing }}
              className="flex flex-wrap gap-6 pt-6 border-t border-[rgba(148,163,184,0.07)]"
            >
              {[
                { value: '47+',       label: 'companies served' },
                { value: '3–5 days',  label: 'avg. delivery' },
                { value: '100%',      label: 'IP ownership' },
                { value: 'Fixed',     label: 'price, no creep' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <span
                    className="text-[13px] font-bold text-[#EDE8E0]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-[#4A5B72]">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-4 text-[11px] text-[#4A5B72]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t('trustLine')}
            </motion.p>
          </div>

          {/* ─── RIGHT COLUMN — Analytics card ─── */}
          <div className="hidden lg:block">
            <InsightCard />
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #07101F)' }}
      />
    </section>
  );
}
