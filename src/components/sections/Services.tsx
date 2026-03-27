'use client';

import { useTranslations } from 'next-intl';
import { BarChart3, Zap, Brain, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  desc: string;
  learnMore: string;
  index: number;
}

function ServiceCard({ icon, name, desc, learnMore, index }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        'group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer',
        'bg-[#13131F]/60 border-white/6',
        'hover:border-purple-500/40 hover:bg-[#13131F]/80',
        'hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1'
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Gradient border glow on hover */}
      <div className={cn(
        'absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none',
        'bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5',
        hovered ? 'opacity-100' : 'opacity-0'
      )} />

      {/* Icon */}
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300',
        'bg-purple-500/10 border border-purple-500/20',
        'group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/20'
      )}>
        <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
          {icon}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-white/95">
        {name}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {desc}
      </p>

      {/* Learn more link */}
      <div className="flex items-center gap-1.5 text-purple-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
        {learnMore}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
}

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: t('analytics.name'),
      desc: t('analytics.desc'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: t('automation.name'),
      desc: t('automation.desc'),
    },
    {
      icon: <Brain className="w-6 h-6" />,
      name: t('ai.name'),
      desc: t('ai.desc'),
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            What we do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              {...service}
              learnMore={t('learnMore')}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm">
            Need something custom?{' '}
            <a href="mailto:hello@pragmas.io" className="text-purple-400 hover:text-purple-300 transition-colors">
              Talk to us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
