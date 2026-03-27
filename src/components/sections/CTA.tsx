import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="bg-[#111111] py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,212,170,0.06),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4AA]/30 text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 bg-[#00D4AA] rounded-full animate-pulse" />
          Scope document in 24h
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight mb-6">
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="text-[#999999] text-base leading-relaxed max-w-xl mx-auto mb-10">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#00D4AA] text-[#0A0A0A] font-bold text-sm hover:bg-white transition-colors duration-200"
            style={{ boxShadow: '0 0 32px rgba(0,212,170,0.35)' }}
          >
            {t('button')} →
          </a>
          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/[0.16] text-[#999999] text-sm hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Book a 20-min call
          </a>
        </div>

        {/* Trust line */}
        <p className="text-xs text-[#555555]">No commitment. No discovery sprints. Scope document within 24h.</p>

        {/* 3 micro trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/[0.06]">
          {[
            { icon: '⚡', label: '3–5 day delivery' },
            { icon: '🔒', label: 'Fixed price, no overruns' },
            { icon: '📦', label: '100% code ownership' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs text-[#999999]">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
