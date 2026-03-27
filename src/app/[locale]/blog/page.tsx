import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogSubscribeForm from './BlogSubscribeForm';

export const metadata: Metadata = {
  title: 'Blog — Pragmas',
  description:
    'Practical guides on AI, automation, and data infrastructure. We write about what we build.',
};

const articles = [
  {
    title: 'How we build a custom analytics dashboard in 4 days',
    category: 'Analytics',
    readTime: '8 min read',
    description:
      'A step-by-step breakdown of our process: from connecting the data sources to delivering a production-ready dashboard with real-time KPIs.',
  },
  {
    title: 'The 5 workflows every ops team should automate in 2026',
    category: 'Automation',
    readTime: '6 min read',
    description:
      'Lead routing, invoice processing, onboarding sequences — the specific automations that consistently deliver the highest ROI for growing teams.',
  },
  {
    title: 'Why we charge fixed prices for AI projects (and why it works)',
    category: 'Business',
    readTime: '5 min read',
    description:
      'Hourly billing creates misaligned incentives. Fixed pricing forces us to scope well, move fast, and deliver — without the ambiguity.',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-[#E5E5E5]">
        <span className="text-xs tracking-widest uppercase text-gray-500">— INSIGHTS</span>
        <h1
          className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mt-6 max-w-3xl leading-tight"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Practical guides on AI, automation, and data infrastructure.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
          We write about what we build. Real implementations, real problems, real solutions.
        </p>
      </section>

      {/* Article grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="border border-[#E5E5E5] p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500 border border-[#E5E5E5] px-2 py-1">
                  {article.category}
                </span>
                <span className="text-xs bg-[#FAFAF8] border border-[#E5E5E5] px-2 py-1 text-gray-400">
                  Coming soon
                </span>
              </div>

              <h2
                className="text-base font-semibold text-[#0A0A0A] leading-snug"
                style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
              >
                {article.title}
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">{article.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
                <span className="text-xs text-gray-400">{article.readTime}</span>
                <span className="text-xs text-gray-400 italic">Not yet published</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="border border-[#E5E5E5] bg-[#FAFAF8] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3
              className="text-xl font-semibold text-[#0A0A0A] mb-2"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              Subscribe to be notified when we publish.
            </h3>
            <p className="text-sm text-gray-500">No spam. Only articles worth reading.</p>
          </div>
          <BlogSubscribeForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
