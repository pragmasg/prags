'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check, Zap, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  name: string;
  desc: string;
  price: string;
  priceSuffix: string;
  cta: string;
  features: string[];
  isPopular?: boolean;
  isAnnual: boolean;
  annualDiscount?: number;
}

function PricingCard({
  name,
  desc,
  price,
  priceSuffix,
  cta,
  features,
  isPopular,
  isAnnual,
  annualDiscount = 0.8,
}: PricingCardProps) {
  // Parse numeric price for discount calculation
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
  const isOneTime = priceSuffix.includes('one') || priceSuffix.includes('único') ||
    priceSuffix.includes('einmalig') || priceSuffix.includes('unique') || priceSuffix.includes('pagamento');

  const displayPrice = isAnnual && !isOneTime
    ? `$${Math.round(numericPrice * annualDiscount)}`
    : price;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border transition-all duration-300',
        'hover:shadow-2xl hover:-translate-y-1',
        isPopular
          ? 'bg-gradient-to-b from-purple-600/20 to-[#13131F] border-purple-500/50 shadow-xl shadow-purple-500/15'
          : 'bg-[#13131F]/60 border-white/8 hover:border-white/15'
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white text-xs font-bold shadow-lg shadow-purple-500/30">
            <Star className="w-3 h-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={cn(
              'font-bold text-xl',
              isPopular ? 'text-white' : 'text-white/90'
            )}>
              {name}
            </h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-2">
            <span className={cn(
              'text-5xl font-black tracking-tight',
              isPopular ? 'text-white' : 'text-white'
            )}>
              {displayPrice}
            </span>
            <span className="text-white/40 text-sm mb-2 pb-1">
              {priceSuffix}
            </span>
          </div>
          {isAnnual && !isOneTime && (
            <p className="text-green-400 text-xs font-medium mt-1">
              Save ${Math.round(numericPrice * 0.2 * 12)}/year with annual billing
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href="/get-started"
          className={cn(
            'w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 mb-8',
            isPopular
              ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50'
              : 'border border-white/10 hover:border-white/20 text-white hover:bg-white/5'
          )}
        >
          {cta}
        </a>

        {/* Divider */}
        <div className="w-full h-px bg-white/6 mb-8" />

        {/* Features */}
        <ul className="space-y-4 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                isPopular ? 'bg-purple-500/20' : 'bg-white/8'
              )}>
                <Check className={cn(
                  'w-3 h-3',
                  isPopular ? 'text-purple-400' : 'text-white/60'
                )} strokeWidth={2.5} />
              </div>
              <span className="text-white/65 text-sm leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
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
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3 h-3" />
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t('subtitle')}
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-[#13131F] border border-white/8 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                'px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                !isAnnual
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white/70'
              )}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                'px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2',
                isAnnual
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white/70'
              )}
            >
              {t('annual')}
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold">
                {t('save')}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-sm mt-10">
          All prices in USD. No hidden fees. Cancel anytime.{' '}
          <a href="mailto:hello@pragmas.io" className="text-purple-400 hover:text-purple-300 transition-colors">
            Need a custom plan?
          </a>
        </p>
      </div>
    </section>
  );
}
