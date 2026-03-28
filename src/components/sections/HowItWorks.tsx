'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const timelineDays = [
  { label: 'Day 0', desc: 'Brief & scope',  filled: false },
  { label: 'Day 1', desc: 'Staging link',   filled: false },
  { label: 'Day 3', desc: 'Review',         filled: true  },
  { label: 'Day 5', desc: 'Handover',       filled: true  },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { number: t('s1num'), title: t('s1title'), desc: t('s1desc') },
    { number: t('s2num'), title: t('s2title'), desc: t('s2desc') },
    { number: t('s3num'), title: t('s3title'), desc: t('s3desc') },
  ];

  return (
    <section id="how-it-works" className="bg-[#07101F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-5">{t('label')}</p>
          <h2
            className="text-[36px] lg:text-[52px] font-extrabold text-[#EDE8E0] leading-tight tracking-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('title')}
          </h2>
          <p className="text-[14px] text-[#8A9BB5] leading-relaxed mt-5 max-w-xl">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-[rgba(148,163,184,0.07)] mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#07101F] hover:bg-[#0B1828] transition-colors duration-300 p-10 relative overflow-hidden"
            >
              {/* Background step number */}
              <span
                className="absolute top-6 right-6 text-[80px] font-extrabold text-[rgba(201,168,76,0.04)] select-none pointer-events-none leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden="true"
              >
                {index + 1}
              </span>

              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Step number badge */}
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="text-[11px] text-[#C9A84C] font-mono tracking-widest"
                >
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
                {index < 2 && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#4A5B72] group-hover:text-[#C9A84C] transition-colors duration-300">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3
                className="text-[20px] font-bold text-[#EDE8E0] mb-4 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {step.title}
              </h3>
              <p className="text-[13px] text-[#8A9BB5] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-gold p-6 lg:p-8"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] mb-6 font-mono"
          >
            Delivery timeline
          </p>
          <div className="flex gap-0">
            {timelineDays.map((day, i) => (
              <div key={day.label} className="flex-1">
                <div className="flex items-center mb-4">
                  <div
                    className={`h-0.5 flex-1 transition-colors ${
                      day.filled
                        ? 'bg-[#C9A84C]'
                        : i === 0
                        ? 'bg-[rgba(148,163,184,0.2)]'
                        : 'bg-[rgba(148,163,184,0.1)]'
                    }`}
                  />
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${day.filled ? 'bg-[#C9A84C]' : 'bg-[rgba(148,163,184,0.2)]'}`} />
                </div>
                <p
                  className="text-[11px] font-semibold font-mono text-[#EDE8E0]"
                >
                  {day.label}
                </p>
                <p className="text-[10px] text-[#4A5B72] mt-0.5">{day.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
