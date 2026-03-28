'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface PricingCardProps {
  name: string;
  desc: string;
  price: string;
  priceSuffix: string;
  cta: string;
  features: string[];
  isPopular?: boolean;
  popular?: string;
  isAnnual: boolean;
  index: number;
}

function PricingCard({ name, desc, price, priceSuffix, cta, features, isPopular, popular, isAnnual, index }: PricingCardProps) {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
  const isOneTime =
    priceSuffix.includes('one') ||
    priceSuffix.includes('único') ||
    priceSuffix.includes('einmalig') ||
    priceSuffix.includes('unique') ||
    priceSuffix.includes('pagamento');

  const displayPrice = isAnnual && !isOneTime ? `$${Math.round(numericPrice * 0.8)}` : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col transition-all duration-300 ${
        isPopular
          ? 'bg-[#0F2040] border border-[rgba(201,168,76,0.35)]'
          : 'bg-[#0B1828] border border-[rgba(148,163,184,0.08)] hover:border-[rgba(201,168,76,0.2)] hover:bg-[#0F2040]'
      }`}
      style={isPopular ? { boxShadow: '0 0 48px rgba(201,168,76,0.08), 0 16px 48px rgba(0,0,0,0.4)' } : undefined}
    >
      {/* Popular top bar */}
      {isPopular && (
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      )}

      <div className="p-8 flex-1 flex flex-col">
        {/* Popular badge */}
        {isPopular && popular && (
          <span
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#C9A84C] font-mono font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
            {popular}
          </span>
        )}

        {/* Header */}
        <h3
          className="text-[16px] font-bold text-[#EDE8E0] mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {name}
        </h3>
        <p className="text-[12px] text-[#8A9BB5] leading-relaxed mb-7">{desc}</p>

        {/* Price */}
        <div className="py-6 border-y border-[rgba(148,163,184,0.08)] mb-7">
          <div className="flex items-end gap-2">
            <span
              className="text-[42px] font-extrabold text-[#EDE8E0] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {displayPrice}
            </span>
            <span className="text-[12px] text-[#8A9BB5] mb-1.5">{priceSuffix}</span>
          </div>
          {isAnnual && !isOneTime && (
            <p className="text-[11px] text-[#C9A84C] mt-2 font-mono">
              Save ${Math.round(numericPrice * 0.2 * 12)}/year
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href="/get-started"
          className={`w-full py-3.5 text-[13px] text-center font-semibold transition-all duration-300 mb-7 ${
            isPopular
              ? 'bg-[#C9A84C] text-[#07101F] hover:bg-[#E0C270]'
              : 'border border-[rgba(148,163,184,0.15)] text-[#EDE8E0] hover:border-[rgba(201,168,76,0.4)] hover:text-[#C9A84C]'
          }`}
          style={isPopular ? { boxShadow: '0 0 24px rgba(201,168,76,0.25)' } : undefined}
        >
          {cta}
        </a>

        {/* Features */}
        <ul className="space-y-3.5 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[13px] text-[#8A9BB5]">
              <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 font-mono text-xs">✓</span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const t = useTranslations('pricing');
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: t('starter.name'),
      desc: t('starter.desc'),
      price: t('starter.price'),
      priceSuffix: t('starter.priceSuffix'),
      cta: t('starter.cta'),
      features: Array.from({ length: 5 }, (_, i) => t(`starter.features.${i}`)),
      isPopular: false,
    },
    {
      name: t('growth.name'),
      desc: t('growth.desc'),
      price: t('growth.price'),
      priceSuffix: t('growth.priceSuffix'),
      cta: t('growth.cta'),
      features: Array.from({ length: 6 }, (_, i) => t(`growth.features.${i}`)),
      isPopular: true,
      popular: t('growth.popular'),
    },
    {
      name: t('platform.name'),
      desc: t('platform.desc'),
      price: t('platform.price'),
      priceSuffix: t('platform.priceSuffix'),
      cta: t('platform.cta'),
      features: Array.from({ length: 5 }, (_, i) => t(`platform.features.${i}`)),
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#0B1828] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-5">{t('label')}</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="text-[36px] lg:text-[52px] font-extrabold text-[#EDE8E0] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('title')}
            </h2>

            {/* Billing toggle */}
            <div className="flex items-center gap-1 p-1 border border-[rgba(148,163,184,0.08)] bg-[rgba(7,16,31,0.5)] w-fit">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-[#C9A84C] text-[#07101F]'
                    : 'text-[#8A9BB5] hover:text-[#EDE8E0]'
                }`}
              >
                {t('monthly')}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                  isAnnual
                    ? 'bg-[#C9A84C] text-[#07101F]'
                    : 'text-[#8A9BB5] hover:text-[#EDE8E0]'
                }`}
              >
                {t('annual')}
                <span className="ml-1.5 text-[9px] text-[#C9A84C]">-20%</span>
              </button>
            </div>
          </div>

          <p className="text-[14px] text-[#8A9BB5] mt-4">{t('subtitle')}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[rgba(148,163,184,0.07)] mb-px">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} isAnnual={isAnnual} index={i} />
          ))}
        </div>

        {/* Enterprise tier */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-px border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono mb-3"
            >
              — Enterprise
            </p>
            <h3
              className="text-[20px] font-bold text-[#EDE8E0] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Custom engagement
            </h3>
            <p className="text-[13px] text-[#8A9BB5] max-w-xl leading-relaxed">
              For organizations with complex infrastructure, compliance requirements, or multi-team rollouts.
              Dedicated team, SLA included, custom pricing.
            </p>
          </div>
          <a
            href="mailto:hello@pragmas.io"
            className="flex-shrink-0 border border-[rgba(201,168,76,0.3)] text-[#C9A84C] px-8 py-3.5 text-[13px] font-medium hover:bg-[rgba(201,168,76,0.08)] transition-all duration-200 whitespace-nowrap"
          >
            Contact us →
          </a>
        </motion.div>

        <p className="text-[11px] text-[#4A5B72] mt-6 font-mono">
          All prices in USD.{' '}
          <a
            href="mailto:hello@pragmas.io"
            className="text-[#8A9BB5] hover:text-[#EDE8E0] transition-colors"
          >
            Need a custom arrangement? Email us.
          </a>
        </p>
      </div>
    </section>
  );
}
