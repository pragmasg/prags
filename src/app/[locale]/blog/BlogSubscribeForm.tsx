'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function BlogSubscribeForm() {
  const t = useTranslations('blog');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className="text-sm text-[#00D4AA] font-medium">{t('subscribeSuccess')}</p>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto">
      <input
        type="email"
        required
        placeholder={t('subscribePlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-white/[0.08] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors w-full md:w-64 bg-[#0A0A0A]"
      />
      <button
        type="submit"
        className="bg-[#00D4AA] text-[#0A0A0A] px-6 py-3 text-sm font-bold hover:bg-white transition-colors shrink-0"
      >
        {t('subscribeCta')}
      </button>
    </form>
  );
}
