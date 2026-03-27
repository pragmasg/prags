import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'AI-Powered Products — Pragmas',
  description:
    'Deploy Claude-powered assistants, data extractors, and content pipelines trained on your business context.',
};

export default function AiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-[#E5E5E5]">
        <span className="text-xs tracking-widest uppercase text-gray-500">— SERVICE</span>
        <h1
          className="text-4xl md:text-6xl font-semibold text-[#0A0A0A] mt-6 max-w-4xl leading-tight"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          AI-Powered Products
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
          Deploy assistants, extractors, and generators trained on your business context — not
          generic prompts.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/get-started"
            className="bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors"
          >
            Start a project
          </Link>
          <Link
            href="/#pricing"
            className="border border-[#0A0A0A] px-8 py-4 text-sm hover:bg-black hover:text-white transition-colors"
          >
            View pricing
          </Link>
        </div>
      </section>

      {/* What's included + Visual */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs tracking-widest uppercase text-gray-500">— WHAT'S INCLUDED</span>
            <h2
              className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-8"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              AI that knows your business.
            </h2>
            <ul className="space-y-4">
              {[
                'Claude-powered AI assistants',
                'Document and data extraction tools',
                'Content generation pipelines',
                'Custom prompt engineering',
                'API integration into your existing apps',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#0A0A0A] text-sm shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat interface mockup */}
          <div className="border border-[#E5E5E5] bg-white overflow-hidden">
            <div className="bg-[#FAFAF8] border-b border-[#E5E5E5] px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500 font-mono">Pragmas AI Assistant · Online</span>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex gap-3 justify-end">
                <div className="bg-[#0A0A0A] text-white text-sm px-4 py-3 max-w-xs leading-relaxed">
                  Can you summarize last week's support tickets and flag any recurring issues?
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-[#FAFAF8] border border-[#E5E5E5] shrink-0 flex items-center justify-center text-xs font-mono text-gray-500">
                  AI
                </div>
                <div className="border border-[#E5E5E5] text-sm px-4 py-3 max-w-xs leading-relaxed text-[#0A0A0A]">
                  Of 142 tickets last week, 3 patterns stand out: billing access (23%), onboarding
                  setup (19%), and API rate limits (14%). I'd recommend a self-serve article for the
                  first two.
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-[#0A0A0A] text-white text-sm px-4 py-3 max-w-xs leading-relaxed">
                  Draft the billing access article.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-[#FAFAF8] border border-[#E5E5E5] shrink-0 flex items-center justify-center text-xs font-mono text-gray-500">
                  AI
                </div>
                <div className="border border-[#E5E5E5] text-sm px-4 py-3 max-w-xs leading-relaxed text-[#0A0A0A]">
                  <span className="font-medium">Accessing Billing Settings</span>
                  <br />
                  <span className="text-gray-500 text-xs">Draft generated · 320 words</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[#E5E5E5] px-5 py-3">
              <p className="text-xs text-gray-400 italic">Illustrative — built on your data, your context</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#FAFAF8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-500">— OUR PROCESS</span>
          <h2
            className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-12"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Context → Prompt → Integrate → Deploy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#E5E5E5]">
            {[
              {
                step: '01',
                title: 'Context',
                desc: 'We map the domain — your data, terminology, edge cases, and what good output looks like.',
              },
              {
                step: '02',
                title: 'Prompt',
                desc: 'We engineer and test prompts systematically. We evaluate for accuracy, tone, and failure modes.',
              },
              {
                step: '03',
                title: 'Integrate',
                desc: 'We build the API layer connecting Claude to your data sources, internal tools, and UI.',
              },
              {
                step: '04',
                title: 'Deploy',
                desc: 'We ship to production and monitor performance. Full source code and documentation included.',
              },
            ].map((p, i) => (
              <div
                key={p.step}
                className={`p-8 bg-white ${i < 3 ? 'border-r border-[#E5E5E5]' : ''}`}
              >
                <span
                  className="text-xs text-gray-400"
                  style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                >
                  {p.step}
                </span>
                <h3
                  className="text-base font-semibold text-[#0A0A0A] mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-gray-500">— USE CASES</span>
        <h2
          className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-12"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Applied AI that solves specific problems.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Customer support assistant',
              desc: 'An AI that answers support questions using your documentation, ticket history, and product context — without hallucinating.',
            },
            {
              title: 'Document processing',
              desc: 'Extract structured data from contracts, invoices, or reports. Convert PDFs into clean JSON your systems can use.',
            },
            {
              title: 'Content generation',
              desc: 'Drafts in your brand voice. Product descriptions, email sequences, internal documentation — at scale.',
            },
            {
              title: 'Internal knowledge base',
              desc: 'An AI interface over your internal docs, SOPs, and wikis. Your team asks questions; it finds the answers.',
            },
          ].map((uc) => (
            <div key={uc.title} className="border border-[#E5E5E5] p-8">
              <h3
                className="text-base font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
              >
                {uc.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-semibold text-white mb-6"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            What would your AI tool do?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Describe the problem you want AI to solve. We'll tell you if it's buildable and what it
            would cost.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-white text-[#0A0A0A] px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
