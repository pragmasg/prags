import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Analytics & Intelligence — Pragmas',
  description:
    'We build real-time dashboards and data pipelines that answer your questions before you ask them. Fixed price, source code included.',
};

export default function AnalyticsPage() {
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
          Analytics &amp; Intelligence
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
          Stop pulling reports manually. We build real-time dashboards that answer your questions
          before you ask them.
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

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs tracking-widest uppercase text-gray-500">— WHAT'S INCLUDED</span>
            <h2
              className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-8"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              Everything you need to see your data clearly.
            </h2>
            <ul className="space-y-4">
              {[
                'Real-time data pipelines',
                'Custom KPI dashboards',
                'Multi-source integrations (databases, APIs, spreadsheets)',
                'Mobile-responsive design',
                'Source code + documentation included',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#0A0A0A] text-sm shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal / dashboard visual */}
          <div className="bg-[#0A0A0A] p-6 font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/40 text-xs">dashboard.pragmas.io</span>
            </div>
            <div className="text-green-400 mb-3">REVENUE OVERVIEW — Last 30 days</div>
            <div className="text-white/60 mb-4">
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span>Total Revenue</span>
                <span className="text-white">$142,830</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span>New MRR</span>
                <span className="text-green-400">+$12,400  ↑ 18%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span>Active Customers</span>
                <span className="text-white">847</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Avg. Order Value</span>
                <span className="text-white">$168.63</span>
              </div>
            </div>
            <div className="text-yellow-400 mb-2">TOP CHANNELS</div>
            <div className="text-white/60 space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Organic Search</span>
                <span className="text-white">42%</span>
              </div>
              <div className="flex justify-between">
                <span>Direct</span>
                <span className="text-white">28%</span>
              </div>
              <div className="flex justify-between">
                <span>Referral</span>
                <span className="text-white">18%</span>
              </div>
              <div className="flex justify-between">
                <span>Paid</span>
                <span className="text-white">12%</span>
              </div>
            </div>
            <div className="text-white/30 text-xs">Updated 2 min ago · Live</div>
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
            We connect → We model → We visualize → We hand over
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#E5E5E5]">
            {[
              {
                step: '01',
                title: 'Connect',
                desc: 'We identify your data sources: databases, CRMs, spreadsheets, APIs. We build the pipelines.',
              },
              {
                step: '02',
                title: 'Model',
                desc: 'We define your KPIs, clean the data, and structure it for fast querying.',
              },
              {
                step: '03',
                title: 'Visualize',
                desc: 'We build the dashboard — responsive, real-time, and tailored to how your team thinks.',
              },
              {
                step: '04',
                title: 'Hand over',
                desc: 'Full source code, documentation, and a walkthrough. The dashboard is yours to run.',
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
          Built for real business problems.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'E-commerce revenue tracking',
              desc: 'Real-time sales dashboards pulling from Shopify, Stripe, and your warehouse. Know your numbers before your standup.',
            },
            {
              title: 'SaaS product analytics',
              desc: 'Activation rates, churn signals, feature adoption. The metrics your product team actually needs — in one place.',
            },
            {
              title: 'Operations reporting',
              desc: 'Consolidate data from your ops tools into a single view. Delivery performance, capacity, cost per unit — all live.',
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
            Ready to see your data clearly?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tell us what you need to measure. We'll scope a dashboard and deliver it in days.
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
