'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

type FormData = {
  name: string;
  company: string;
  projectType: string;
  bottleneck: string;
  budget: string;
  timeline: string;
};

const initialForm: FormData = {
  name: '',
  company: '',
  projectType: '',
  bottleneck: '',
  budget: '',
  timeline: '',
};

export default function GetStartedForm() {
  const t = useTranslations('getStarted');
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRadio = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const projectTypes = [t('t1'), t('t2'), t('t3'), t('t4')];
  const budgets = [t('b1'), t('b2'), t('b3'), t('b4'), t('b5')];
  const timelines = [t('tl1'), t('tl2'), t('tl3')];

  const nextSteps = [t('ns1'), t('ns2'), t('ns3'), t('ns4')];
  const props = [t('prop1'), t('prop2'), t('prop3'), t('prop4')];

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="inline-block border border-[#00D4AA]/30 px-4 py-2 text-xs tracking-widest uppercase text-[#00D4AA] mb-8">
            {t('successLabel')}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
            {t('successTitle')}
          </h1>
          <p className="text-[#999999] mb-10 leading-relaxed">{t('successBody')}</p>
          <Link
            href="/"
            className="inline-block bg-[#00D4AA] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            {t('successCta')}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('label')}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#F5F5F5] mt-4">{t('title')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name + Company */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555555] mb-4">
                  {t('aboutLabel')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    value={form.name}
                    onChange={set('name')}
                    required
                    className="w-full border border-white/[0.08] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t('companyPlaceholder')}
                    value={form.company}
                    onChange={set('company')}
                    className="w-full border border-white/[0.08] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Project type */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555555] mb-4">
                  {t('typeLabel')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setRadio('projectType', type)}
                      className={`text-left px-4 py-3 text-sm border transition-colors ${
                        form.projectType === type
                          ? 'border-[#00D4AA] bg-[#00D4AA]/10 text-[#00D4AA]'
                          : 'border-white/[0.08] text-[#999999] hover:border-white/30 hover:text-[#F5F5F5]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottleneck */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555555] mb-4">
                  {t('bottleneckLabel')}
                </label>
                <textarea
                  placeholder={t('bottleneckPlaceholder')}
                  value={form.bottleneck}
                  onChange={set('bottleneck')}
                  required
                  rows={4}
                  className="w-full border border-white/[0.08] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors resize-none bg-transparent"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555555] mb-4">
                  {t('budgetLabel')}
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setRadio('budget', b)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.budget === b
                          ? 'border-[#00D4AA] bg-[#00D4AA]/10 text-[#00D4AA]'
                          : 'border-white/[0.08] text-[#999999] hover:border-white/30 hover:text-[#F5F5F5]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555555] mb-4">
                  {t('timelineLabel')}
                </label>
                <div className="flex flex-wrap gap-3">
                  {timelines.map((tl) => (
                    <button
                      key={tl}
                      type="button"
                      onClick={() => setRadio('timeline', tl)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.timeline === tl
                          ? 'border-[#00D4AA] bg-[#00D4AA]/10 text-[#00D4AA]'
                          : 'border-white/[0.08] text-[#999999] hover:border-white/30 hover:text-[#F5F5F5]'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-[#00D4AA] text-[#0A0A0A] px-8 py-4 text-sm font-bold hover:bg-white transition-colors w-full sm:w-auto"
                >
                  {t('submit')}
                </button>
                <p className="text-xs text-[#555555] mt-4">{t('disclaimer')}</p>
              </div>
            </form>
          </div>

          {/* Right: What happens next */}
          <div className="lg:col-span-2">
            <div className="bg-[#111111] border border-white/[0.08] p-8 sticky top-24">
              <h2 className="text-lg font-bold text-[#F5F5F5] mb-8">{t('nextTitle')}</h2>

              <ol className="space-y-6 mb-10">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-xs text-[#00D4AA] font-mono shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-[#F5F5F5] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="border-t border-white/[0.08] pt-8 space-y-3">
                {props.map((prop) => (
                  <div key={prop} className="flex items-start gap-3">
                    <span className="text-[#00D4AA] text-sm shrink-0">&#10003;</span>
                    <span className="text-sm text-[#999999]">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
