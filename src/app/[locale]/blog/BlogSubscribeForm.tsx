'use client';

import { useState } from 'react';

export default function BlogSubscribeForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className="text-sm text-[#0A0A0A] font-medium">
        You're on the list. We'll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#0A0A0A] w-full md:w-64 bg-white"
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-900 transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
