'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-t border-[rgba(148,163,184,0.07)] transition-colors duration-300 ${
        isOpen ? 'bg-[rgba(201,168,76,0.03)]' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 px-0 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[15px] font-medium leading-snug transition-colors duration-200 ${
            isOpen ? 'text-[#EDE8E0]' : 'text-[#8A9BB5] group-hover:text-[#EDE8E0]'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 border border-[rgba(201,168,76,0.2)] flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-[#C9A84C] border-[#C9A84C] rotate-45'
              : 'text-[#4A5B72] group-hover:border-[rgba(201,168,76,0.4)] group-hover:text-[#C9A84C]'
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1v8M1 5h8"
              stroke={isOpen ? '#07101F' : 'currentColor'}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-[#8A9BB5] leading-[1.8] pb-6 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
    <section className="bg-[#07101F] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-5">{t('label')}</p>
          <h2
            className="text-[36px] lg:text-[48px] font-extrabold text-[#EDE8E0] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('title')}
          </h2>
        </motion.div>

        {/* Items */}
        <div>
          {items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
          <div className="border-t border-[rgba(148,163,184,0.07)]" />
        </div>

        {/* Contact */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="https://calendly.com/pragmas/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[rgba(201,168,76,0.25)] text-[13px] text-[#C9A84C] hover:bg-[rgba(201,168,76,0.08)] transition-all duration-200"
          >
            Book a 20-min call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:hello@pragmas.io"
            className="text-[13px] text-[#4A5B72] hover:text-[#8A9BB5] transition-colors py-3.5"
          >
            Or email us →
          </a>
        </div>
      </div>
    </section>
  );
}
