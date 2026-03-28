'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface MetricCardProps {
  symbol: string;
  text: string;
}

function MetricCard({ symbol, text }: MetricCardProps) {
  return (
    <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] text-xs text-[#BBBBBB] shrink-0">
      <span className="text-[#F97316] font-mono font-bold">{symbol}</span>
      <span>{text}</span>
    </div>
  );
}

interface ServiceRowProps {
  number: string;
  name: string;
  desc: string;
  learnMore: string;
  href: string;
  metric: MetricCardProps;
}

function ServiceRow({ number, name, desc, learnMore, href, metric }: ServiceRowProps) {
  return (
    <a
      href={href}
      className="group border-t border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer block"
    >
      <div className="border-l-2 border-transparent group-hover:border-[#F97316] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 py-8 lg:py-10 items-center">
            {/* Number */}
            <div className="col-span-2 lg:col-span-1">
              <span className="text-xs tracking-widest text-[#F97316] font-mono">
                {number}
              </span>
            </div>

            {/* Service name */}
            <div className="col-span-10 lg:col-span-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#F5F5F5] group-hover:text-[#F97316] transition-colors duration-300 leading-tight">
                {name}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-5">
              <p className="text-sm text-[#BBBBBB] leading-relaxed">
                {desc}
              </p>
            </div>

            {/* Metric card */}
            <div className="col-span-12 lg:col-span-3 lg:col-start-9 flex lg:justify-end items-center gap-4">
              <MetricCard symbol={metric.symbol} text={metric.text} />
              <span className="text-sm text-[#BBBBBB] group-hover:text-[#F97316] transition-colors whitespace-nowrap">
                {learnMore}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
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
      metric: { symbol: '↑', text: '3.4x faster decisions' },
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
    <section id="services" className="bg-[#0A0A0A] py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#F97316] mb-4">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F5F5F5] leading-tight max-w-2xl">
            {t('title')}
          </h2>
          <p className="text-[#BBBBBB] text-base leading-relaxed mt-4 max-w-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service) => (
            <ServiceRow
              key={service.number}
              {...service}
              learnMore={t('learnMore')}
            />
          ))}
          {/* Bottom border to close the last row */}
          <div className="border-t border-white/[0.08]" />
        </div>

        {/* Custom inquiry */}
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <p className="text-sm text-[#BBBBBB]">
            Need something custom?{' '}
            <a
              href="mailto:hello@pragmas.io"
              className="text-[#BBBBBB] hover:text-[#F97316] transition-colors duration-200 underline underline-offset-4"
            >
              Let&apos;s talk
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
