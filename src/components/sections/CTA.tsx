import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="bg-[#0D1117] py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl lg:text-6xl text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
        >
          Ready to build smarter infrastructure?
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-12">
          Let's start with a 30-minute call. No commitment, no sales pitch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/get-started"
            className="border border-white px-8 py-3 text-sm text-white hover:bg-white hover:text-[#0D1117] transition-colors duration-200"
          >
            Schedule a call
          </a>

          <a
            href="mailto:hello@pragmas.io"
            className="text-sm text-gray-400 underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            Or email us →
          </a>
        </div>
      </div>
    </section>
  );
}
