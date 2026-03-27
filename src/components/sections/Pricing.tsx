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
      className={`flex flex-col p-8 relative ${
        isPopular
          ? 'bg-white/[0.06] border border-[#00FF9D]/50'
          : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300'
      }`}
      style={isPopular ? { boxShadow: '0 0 40px rgba(0,255,157,0.1)' } : undefined}
    >
      {/* Popular top bar and badge */}
      {isPopular && popular && (
        <>
          <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FF9D] via-[#67E8F9] to-[#A855F7]" />
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#00FF9D] font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
            {popular}
          </span>
        </>
      )}

      {/* Header */}
      <h3 className="text-sm font-semibold text-[#F0F4FF] mb-1">{name}</h3>
      <p className="text-xs text-[#8892AA] leading-relaxed mb-6">{desc}</p>

      {/* Price */}
      <div className="py-6 border-y border-white/[0.08] mb-6">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-[#F0F4FF]">{displayPrice}</span>
          <span className="text-sm text-[#8892AA] mb-1">{priceSuffix}</span>
        </div>
        {isAnnual && !isOneTime && (
          <p className="text-xs text-[#00FF9D] mt-2">Save ${Math.round(numericPrice * 0.2 * 12)}/year</p>
        )}
      </div>

      {/* CTA */}
      <a
        href="/get-started"
        className={`w-full py-3 text-sm text-center transition-colors mb-8 ${
          isPopular
            ? 'bg-[#00FF9D] text-[#050510] font-bold hover:bg-white'
            : 'font-medium border border-white/[0.16] text-[#F0F4FF] hover:border-[#00FF9D]/50 hover:text-[#00FF9D]'
        }`}
        style={isPopular ? { boxShadow: '0 0 20px rgba(0,255,157,0.3)' } : undefined}
      >
        {cta}
      </a>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[#8892AA]">
            <span className="text-[#00FF9D] mt-0.5 flex-shrink-0 font-mono">✓</span>
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
    <section id="pricing" className="bg-[#0D0D1A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#00FF9D] mb-6">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F0F4FF] leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-[#8892AA] text-sm mb-8">
            {t('subtitle')}
          </p>

          {/* Billing toggle */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.05] border border-white/[0.08] w-fit">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-xs font-medium transition-all ${
                !isAnnual ? 'bg-[#00FF9D] text-[#050510]' : 'text-[#8892AA] hover:text-white'
              }`}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-xs font-medium transition-all ${
                isAnnual ? 'bg-[#00FF9D] text-[#050510]' : 'text-[#8892AA] hover:text-white'
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
        <div className="mt-6 border border-white/[0.08] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white/[0.02]">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#A855F7] font-semibold mb-2">— Enterprise</p>
            <h3 className="text-xl font-bold text-[#F0F4FF] mb-2">Custom engagement</h3>
            <p className="text-sm text-[#8892AA] max-w-xl">
              For organizations with complex infrastructure, compliance requirements, or multi-team rollouts.
              Dedicated team, SLA included, custom pricing.
            </p>
          </div>
          <a
            href="mailto:hello@pragmas.io"
            className="flex-shrink-0 border border-white/[0.16] text-[#F0F4FF] px-8 py-3 text-sm hover:border-[#A855F7]/60 hover:text-[#A855F7] transition-colors whitespace-nowrap"
          >
            Contact us →
          </a>
        </div>

        {/* Bottom note */}
        <p className="text-xs text-[#4B5563] mt-6">
          All prices in USD.{' '}
          <a
            href="mailto:hello@pragmas.io"
            className="text-[#8892AA] hover:text-[#F0F4FF] transition-colors"
          >
            Need a custom arrangement? See Enterprise above or email us.
          </a>
        </p>
      </div>
    </section>
  );
}
