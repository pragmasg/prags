'use client';

import { useTranslations } from 'next-intl';
import { Search, Hammer, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  isLast: boolean;
  index: number;
}

function Step({ number, icon, title, desc, isLast, index }: StepProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Left: number + connector line */}
      <div className="flex md:flex-col items-center gap-4 md:gap-0 md:w-20 flex-shrink-0">
        {/* Number circle */}
        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-xl shadow-purple-500/30 flex-shrink-0">
          <span className="text-white font-black text-lg">{number}</span>
        </div>

        {/* Connector line (vertical on desktop, hidden on mobile for last) */}
        {!isLast && (
          <div className="hidden md:block w-px flex-1 mt-4 mb-0 bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent min-h-[80px]" style={{ height: '80px' }} />
        )}
      </div>

      {/* Right: card content */}
      <div className={cn(
        'flex-1 pb-12 md:pb-16',
        isLast && 'pb-0 md:pb-0'
      )}>
        <div className="bg-[#13131F]/40 border border-white/6 rounded-2xl p-6 md:p-8 hover:border-purple-500/20 transition-colors duration-300">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 text-purple-400">
            {icon}
          </div>
          <h3 className="text-white font-bold text-xl mb-3">
            {title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '01',
      icon: <Search className="w-5 h-5" />,
      title: t('step1.title'),
      desc: t('step1.desc'),
    },
    {
      number: '02',
      icon: <Hammer className="w-5 h-5" />,
      title: t('step2.title'),
      desc: t('step2.desc'),
    },
    {
      number: '03',
      icon: <TrendingUp className="w-5 h-5" />,
      title: t('step3.title'),
      desc: t('step3.desc'),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              {...step}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
