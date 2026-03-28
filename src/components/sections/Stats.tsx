'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { raw: 47,   display: null, suffix: '+', prefix: '', value: t('v1'), label: t('v1label') },
    { raw: 0,    display: null, suffix: '',  prefix: '', value: t('v2'), label: t('v2label') },
    { raw: 0,    display: null, suffix: '',  prefix: '', value: t('v3'), label: t('v3label') },
    { raw: 100,  display: null, suffix: '%', prefix: '', value: t('v4'), label: t('v4label') },
  ];

  return (
    <section className="relative bg-[#0B1828] border-y border-[rgba(148,163,184,0.07)]">
      {/* Gold line top */}
      <div className="gold-line" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group px-10 py-12 ${
                index < 3 ? 'border-r border-[rgba(148,163,184,0.07)]' : ''
              } ${index >= 2 ? 'border-t lg:border-t-0 border-[rgba(148,163,184,0.07)]' : ''}`}
            >
              {/* Gold hover line top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Number */}
              <p
                className="text-[48px] lg:text-[56px] font-extrabold leading-none tracking-tight text-[#EDE8E0] mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#4A5B72] font-mono">
                {stat.label}
              </p>

              {/* Gold accent dot */}
              <div className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gold-line" />
    </section>
  );
}
