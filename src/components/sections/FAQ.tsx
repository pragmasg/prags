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
    <div className={`border-t border-white/[0.08] transition-colors duration-200 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 px-0 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-[#F5F5F5] leading-snug group-hover:text-[#00D4AA] transition-colors duration-200">
          {question}
        </span>
        <span
          className={`text-[#00D4AA] flex-shrink-0 text-lg leading-none transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-[#999999] leading-relaxed">{answer}</p>
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
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#00D4AA] mb-4">
            {t('label')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F5F5F5]">
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
          <div className="border-t border-white/[0.08]" />
        </div>

        {/* Contact note */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] border border-white/[0.12] text-sm text-[#F5F5F5] hover:border-[#00D4AA]/50 hover:text-[#00D4AA] transition-all"
          >
            Book a 20-min call →
          </a>
          <a
            href="mailto:hello@pragmas.io"
            className="text-sm text-[#999999] hover:text-[#F5F5F5] transition-colors py-3"
          >
            Or email us
          </a>
        </div>
      </div>
    </section>
  );
}
