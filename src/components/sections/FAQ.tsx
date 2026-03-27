'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-t border-[#E5E5E5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900 leading-snug">
          {question}
        </span>
        <span className="text-lg text-gray-400 flex-shrink-0 leading-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { q: t('q1.q'), a: t('q1.a') },
    { q: t('q2.q'), a: t('q2.a') },
    { q: t('q3.q'), a: t('q3.a') },
    { q: t('q4.q'), a: t('q4.a') },
    { q: t('q5.q'), a: t('q5.a') },
    { q: t('q6.q'), a: t('q6.a') },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* FAQ items */}
        <div>
          {items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
          {/* Bottom border */}
          <div className="border-t border-[#E5E5E5]" />
        </div>

        {/* Contact note */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener"
            className="text-sm border border-[#0A0A0A] px-6 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Book a 20-min call →
          </a>
          <a
            href="mailto:hello@pragmas.io"
            className="text-sm text-gray-500 underline underline-offset-4 hover:text-gray-900 py-3"
          >
            Or email us
          </a>
        </div>
      </div>
    </section>
  );
}
