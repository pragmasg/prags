import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="bg-[#0D1117] bg-grid-dark py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl text-white font-semibold leading-tight mb-6">
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-12">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/get-started"
            className="border border-white px-8 py-3 text-sm text-white hover:bg-white hover:text-[#0D1117] transition-colors duration-200"
          >
            {t('button')}
          </a>

          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener"
            className="text-sm text-white border border-white/30 px-8 py-3 hover:border-white transition-colors"
          >
            Book a 20-min call →
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">No commitment. No discovery sprints. Scope document within 24h.</p>
      </div>
    </section>
  );
}
