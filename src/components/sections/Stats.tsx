'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface StatItem {
  value: string;
  label: string;
}

function StatCounter({ value, label, index }: StatItem & { index: number }) {
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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center text-center px-8 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl sm:text-5xl font-black text-white mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text">
        {value}
      </span>
      <span className="text-white/50 text-sm font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const t = useTranslations('stats');

  const stats: StatItem[] = [
    { value: t('clients'), label: t('clientsLabel') },
    { value: t('retention'), label: t('retentionLabel') },
    { value: t('savings'), label: t('savingsLabel') },
    { value: t('support'), label: t('supportLabel') },
  ];

  return (
    <section className="relative py-16 border-y border-white/6 overflow-hidden">
      {/* Subtle purple glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              <StatCounter {...stat} index={index} />
              {/* Separator line (not after last) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
