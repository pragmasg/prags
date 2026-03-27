import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: t('s1num'),
      title: t('s1title'),
      desc: t('s1desc'),
    },
    {
      number: t('s2num'),
      title: t('s2title'),
      desc: t('s2desc'),
    },
    {
      number: t('s3num'),
      title: t('s3title'),
      desc: t('s3desc'),
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            {t('label')}
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#0A0A0A] leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            {t('title')}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-[#E5E5E5]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`pt-8 pb-8 ${
                index < steps.length - 1 ? 'md:pr-12 md:border-r border-[#E5E5E5]' : ''
              } ${index > 0 ? 'md:pl-12' : ''}`}
            >
              {/* Number */}
              <p
                className="text-5xl text-[#E5E5E5] mb-6 leading-none"
                style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
              >
                {step.number}
              </p>

              {/* Step title */}
              <h3
                className="text-xl text-[#0A0A0A] mb-4 leading-snug"
                style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
