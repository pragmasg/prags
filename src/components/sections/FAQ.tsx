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
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            — FAQ
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#0A0A0A] leading-tight"
            style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
          >
            Common questions.
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
        <div className="mt-10">
          <p className="text-sm text-gray-500">
            Still have questions?{' '}
            <a
              href="mailto:hello@pragmas.io"
              className="text-[#2563EB] hover:underline transition-colors"
            >
              hello@pragmas.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
