'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div
      className={cn(
        'border rounded-2xl overflow-hidden transition-all duration-300',
        isOpen
          ? 'border-purple-500/30 bg-purple-500/5'
          : 'border-white/8 bg-[#13131F]/40 hover:border-white/15'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="text-purple-500/50 text-sm font-mono font-bold flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={cn(
            'font-semibold text-base transition-colors duration-200',
            isOpen ? 'text-white' : 'text-white/80'
          )}>
            {question}
          </span>
        </div>

        <div className={cn(
          'w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300',
          isOpen
            ? 'bg-purple-500/20 text-purple-400 rotate-0'
            : 'bg-white/5 text-white/40'
        )}>
          {isOpen
            ? <Minus className="w-3.5 h-3.5" />
            : <Plus className="w-3.5 h-3.5" />
          }
        </div>
      </button>

      {/* Answer with smooth reveal */}
      <div
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 pl-16">
          <p className="text-white/55 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
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
    <section className="relative py-24 lg:py-32 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
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
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-white/6 bg-[#13131F]/40">
          <p className="text-white/60 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:hello@pragmas.io"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
          >
            hello@pragmas.io
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
