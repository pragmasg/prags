import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogSubscribeForm from './BlogSubscribeForm';

export const metadata: Metadata = {
  title: 'Blog — Pragmas',
  description:
    'Practical guides on AI, automation, and data infrastructure. We write about what we build.',
};

export default async function BlogPage() {
  const t = await getTranslations('blog');

  const articles = [
    {
      title: t('a1title'),
      category: t('a1category'),
      readTime: t('a1readTime'),
      description: t('a1desc'),
    },
    {
      title: t('a2title'),
      category: t('a2category'),
      readTime: t('a2readTime'),
      description: t('a2desc'),
    },
    {
      title: t('a3title'),
      category: t('a3category'),
      readTime: t('a3readTime'),
      description: t('a3desc'),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/[0.08]">
        <span className="text-xs tracking-widest uppercase text-[#00D4AA]">{t('label')}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mt-6 max-w-3xl leading-tight">
          {t('title')}
        </h1>
        <p className="mt-6 text-lg text-[#999999] max-w-2xl">{t('subtitle')}</p>
      </section>

      {/* Article grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.08]">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className={`p-8 flex flex-col gap-4 hover:bg-white/[0.03] transition-colors ${
                i < 2 ? 'border-r border-white/[0.08]' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#00D4AA] border border-[#00D4AA]/30 px-2 py-1">
                  {article.category}
                </span>
                <span className="text-xs border border-white/[0.08] px-2 py-1 text-[#555555]">
                  {t('comingSoon')}
                </span>
              </div>

              <h2 className="text-base font-bold text-[#F5F5F5] leading-snug">{article.title}</h2>

              <p className="text-sm text-[#999999] leading-relaxed flex-1">{article.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <span className="text-xs text-[#555555]">{article.readTime}</span>
                <span className="text-xs text-[#555555] italic">{t('notPublished')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="border border-white/[0.08] bg-[#111111] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">{t('subscribeTitle')}</h3>
            <p className="text-sm text-[#999999]">{t('subscribeSubtitle')}</p>
          </div>
          <BlogSubscribeForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
