'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('v1'), label: t('v1label') },
    { value: t('v2'), label: t('v2label') },
    { value: t('v3'), label: t('v3label') },
    { value: t('v4'), label: t('v4label') },
  ];

  return (
    <section className="bg-[#0D0D1A] border-y border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/8 p-8 hover:bg-white/[0.06] hover:border-white/12 transition-all duration-300"
            >
              <span
                className="text-4xl font-bold text-[#00FF9D] block"
              >
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8892AA] mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
