'use client';

import { useState } from 'react';
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
}

function PricingCard({
  name,
  desc,
  price,
  priceSuffix,
  cta,
  features,
  isPopular,
  popular,
  isAnnual,
}: PricingCardProps) {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
  const isOneTime =
    priceSuffix.includes('one') ||
    priceSuffix.includes('único') ||
    priceSuffix.includes('einmalig') ||
    priceSuffix.includes('unique') ||
    priceSuffix.includes('pagamento');

  const displayPrice =
    isAnnual && !isOneTime ? `$${Math.round(numericPrice * 0.8)}` : price;

  return (
    <div
      className={`flex flex-col p-8 lg:p-12 border ${
        isPopular
          ? 'border-2 border-[#0A0A0A]'
          : 'border border-[#E5E5E5]'
      }`}
    >
      {/* Header */}
      <div className="mb-8">
        {isPopular && popular && (
          <p className="text-xs uppercase tracking-widest text-[#0A0A0A] font-medium mb-3">
            {popular}
          </p>
        )}
        <h3 className="text-lg font-medium text-[#0A0A0A] mb-2">{name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>

      {/* Price */}
      <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
        <div className="flex items-end gap-2">
          <span
            className="text-4xl text-[#0A0A0A]"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            {displayPrice}
          </span>
          <span className="text-sm text-gray-400 mb-1">{priceSuffix}</span>
        </div>
        {isAnnual && !isOneTime && (
          <p className="text-xs text-gray-400 mt-2">
            Save ${Math.round(numericPrice * 0.2 * 12)}/year with annual billing
          </p>
        )}
      </div>

      {/* CTA */}
      <a
        href="/get-started"
        className={`w-full py-3 text-sm text-center transition-colors duration-200 mb-8 ${
          isPopular
            ? 'bg-[#0A0A0A] text-white hover:bg-[#1F2937]'
            : 'border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
        }`}
      >
        {cta}
      </a>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <span className="text-[#00D4AA] flex-shrink-0 mt-0.5 text-base">✓</span>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
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
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
        t('starter.features.4'),
      ],
      isPopular: false,
    },
    {
      name: t('growth.name'),
      desc: t('growth.desc'),
      price: t('growth.price'),
      priceSuffix: t('growth.priceSuffix'),
      cta: t('growth.cta'),
      features: [
        t('growth.features.0'),
        t('growth.features.1'),
        t('growth.features.2'),
        t('growth.features.3'),
        t('growth.features.4'),
        t('growth.features.5'),
      ],
      isPopular: true,
      popular: t('growth.popular'),
    },
    {
      name: t('platform.name'),
      desc: t('platform.desc'),
      price: t('platform.price'),
      priceSuffix: t('platform.priceSuffix'),
      cta: t('platform.cta'),
      features: [
        t('platform.features.0'),
        t('platform.features.1'),
        t('platform.features.2'),
        t('platform.features.3'),
        t('platform.features.4'),
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {t('subtitle')}
          </p>

          {/* Billing toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`text-sm transition-colors duration-200 ${
                !isAnnual
                  ? 'text-[#0A0A0A] font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t('monthly')}
            </button>
            <span className="text-gray-300">·</span>
            <button
              onClick={() => setIsAnnual(true)}
              className={`text-sm transition-colors duration-200 ${
                isAnnual
                  ? 'text-[#0A0A0A] font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t('annual')}
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Enterprise tier */}
        <div className="mt-6 border border-[#E5E5E5] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">— ENTERPRISE</p>
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">Custom engagement</h3>
            <p className="text-sm text-gray-500 max-w-xl">For organizations with complex infrastructure needs, compliance requirements, or multi-team rollouts. Dedicated team, SLA included, custom pricing.</p>
          </div>
          <div className="flex-shrink-0">
            <a href="mailto:hello@pragmas.io" className="border border-[#0A0A0A] px-8 py-3 text-sm hover:bg-black hover:text-white transition-colors whitespace-nowrap">
              Contact us →
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-sm text-gray-400 mt-8">
          All prices in USD.{' '}
          <a
            href="mailto:hello@pragmas.io"
            className="text-[#0A0A0A] hover:underline transition-colors"
          >
            Need a custom arrangement? See Enterprise above or email us.
          </a>
        </p>
      </div>
    </section>
  );
}
