'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ServiceRowProps {
  number: string;
  name: string;
  desc: string;
  learnMore: string;
  isLast: boolean;
}

function ServiceRow({ number, name, desc, learnMore, isLast }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`border-t border-[#E5E5E5] ${isLast ? 'border-b' : ''} ${
        hovered ? 'bg-[#FAFAF8]' : 'bg-white'
      } transition-colors duration-200 cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 py-8 lg:py-10 items-start">
          {/* Number */}
          <div className="col-span-2 lg:col-span-1">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              {number}
            </span>
          </div>

          {/* Service name */}
          <div className="col-span-10 lg:col-span-4">
            <h3
              className="text-2xl lg:text-3xl text-[#0A0A0A] leading-snug"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              {name}
            </h3>
          </div>

          {/* Description */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-6">
            <p className="text-gray-500 text-sm leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Explore link */}
          <div className="col-span-12 lg:col-span-2 lg:text-right flex lg:justify-end items-center">
            <span className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              {learnMore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      number: t('s1num'),
      name: t('s1name'),
      desc: t('s1desc'),
    },
    {
      number: t('s2num'),
      name: t('s2name'),
      desc: t('s2desc'),
    },
    {
      number: t('s3num'),
      name: t('s3name'),
      desc: t('s3desc'),
    },
  ];

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
          {t('label')}
        </p>
        <h2
          className="text-4xl lg:text-5xl text-[#0A0A0A] leading-tight max-w-2xl"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          {t('title')}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-2xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Service rows */}
      <div>
        {services.map((service, index) => (
          <ServiceRow
            key={service.number}
            {...service}
            learnMore={t('learnMore')}
            isLast={index === services.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
