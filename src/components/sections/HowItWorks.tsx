'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const timelineDays = [
  { label: 'Day 0', desc: 'Brief & scope', color: 'bg-[#A855F7]' },
  { label: 'Day 1', desc: 'Staging link', color: 'bg-[#67E8F9]' },
  { label: 'Day 3', desc: 'Review', color: 'bg-[#00FF9D]' },
  { label: 'Day 5', desc: 'Handover', color: 'bg-[#00FF9D]' },
];

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
    <section id="how-it-works" className="bg-[#050510] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-0">
          <p className="text-xs uppercase tracking-widest text-[#00FF9D] mb-4">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F0F4FF] leading-tight max-w-3xl">
            {t('title')}
          </h2>
          <p className="text-[#8892AA] text-base leading-relaxed mt-4 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-3 gap-0 mt-16 border-t border-white/[0.08]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`pt-8 pb-8 relative${
                index < 2 ? ' md:pr-12 md:border-r border-white/[0.08]' : ''
              }${index > 0 ? ' md:pl-12' : ''}`}
            >
              {/* Large background number */}
              <span
                className="text-8xl font-bold text-white/[0.03] absolute top-4 right-4 select-none pointer-events-none font-mono"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Step number badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#00FF9D] text-xs font-mono tracking-widest">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/[0.08]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#F0F4FF] mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#8892AA] leading-relaxed">{step.desc}</p>

              {/* Arrow connector (not last) */}
              {index < 2 && (
                <span className="hidden md:block absolute top-12 -right-3 text-[#00FF9D] text-lg z-10 select-none">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="flex items-stretch gap-0">
            {timelineDays.map((day) => (
              <div key={day.label} className="flex-1 text-center">
                <div className={`h-1 ${day.color} mb-3`} />
                <span className="text-xs font-mono text-[#8892AA]">{day.label}</span>
                <p className="text-[10px] text-[#4B5563] mt-1">{day.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
