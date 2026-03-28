'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ServiceRowProps {
  number: string;
  name: string;
  desc: string;
  learnMore: string;
  href: string;
  metric: { symbol: string; text: string };
  index: number;
}

function ServiceRow({ number, name, desc, learnMore, href, metric, index }: ServiceRowProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t border-[rgba(148,163,184,0.07)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-400 cursor-pointer block"
    >
      {/* Gold left accent */}
      <div className="border-l-2 border-transparent group-hover:border-[#C9A84C] transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 py-10 lg:py-12 items-center">

            {/* Index number */}
            <div className="col-span-2 lg:col-span-1">
              <span
                className="text-[11px] tracking-widest text-[#4A5B72] group-hover:text-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {number}
              </span>
            </div>

            {/* Service name */}
            <div className="col-span-10 lg:col-span-3">
              <h3
                className="text-[24px] lg:text-[28px] font-bold text-[#EDE8E0] group-hover:text-[#E0C270] transition-colors duration-300 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {name}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-5">
              <p className="text-[14px] text-[#8A9BB5] leading-relaxed">{desc}</p>
            </div>

            {/* Metric + CTA */}
            <div className="col-span-12 lg:col-span-3 lg:col-start-9 flex lg:justify-end items-center gap-5">
              <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.04)]">
                <span className="text-[#C9A84C] font-mono font-bold text-sm">{metric.symbol}</span>
                <span className="text-[11px] text-[#8A9BB5]">{metric.text}</span>
              </div>
              <span
                className="text-[13px] text-[#4A5B72] group-hover:text-[#C9A84C] transition-colors duration-300 font-medium flex items-center gap-1.5"
              >
                {learnMore}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      number: t('s1num'),
      name: t('s1name'),
      desc: t('s1desc'),
      href: '/services/analytics',
      metric: { symbol: '↑', text: '3.4× faster decisions' },
    },
    {
      number: t('s2num'),
      name: t('s2name'),
      desc: t('s2desc'),
      href: '/services/automation',
      metric: { symbol: '↓', text: '80% manual work eliminated' },
    },
    {
      number: t('s3num'),
      name: t('s3name'),
      desc: t('s3desc'),
      href: '/services/ai',
      metric: { symbol: '∞', text: 'context retained across sessions' },
    },
  ];

  return (
    <section id="services" className="bg-[#07101F] py-24 lg:py-32">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-16"
      >
        <p className="section-label mb-5">{t('label')}</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2
            className="text-[36px] lg:text-[52px] font-extrabold text-[#EDE8E0] leading-tight tracking-tight max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('title')}
          </h2>
          <p className="text-[14px] text-[#8A9BB5] leading-relaxed max-w-xs lg:text-right">
            {t('subtitle')}
          </p>
        </div>
      </motion.div>

      {/* Service rows */}
      <div>
        {services.map((service, i) => (
          <ServiceRow key={service.number} {...service} index={i} learnMore={t('learnMore')} />
        ))}
        <div className="border-t border-[rgba(148,163,184,0.07)]" />
      </div>

      {/* Custom inquiry */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <p className="text-[13px] text-[#4A5B72]">
          Need something custom?{' '}
          <a
            href="mailto:hello@pragmas.io"
            className="text-[#8A9BB5] hover:text-[#C9A84C] transition-colors duration-200 underline underline-offset-4 decoration-[rgba(201,168,76,0.3)]"
          >
            Let&apos;s talk
          </a>
        </p>
      </div>
    </section>
  );
}
