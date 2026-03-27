import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Automation & Workflows — Pragmas',
  description:
    'We build n8n automation workflows that eliminate manual work. Self-hostable infrastructure — you own it.',
};

export default function AutomationPage() {
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
          Automation &amp; Workflows
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
          Every hour your team spends on repetitive work is an hour not spent on growth. We
          eliminate the former.
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
              Built to run without you watching.
            </h2>
            <ul className="space-y-4">
              {[
                'n8n workflow builds',
                'CRM and app integrations',
                'Scheduled automations',
                'Error handling and monitoring',
                'Self-hostable — you own the infrastructure',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#0A0A0A] text-sm shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CSS workflow diagram */}
          <div className="border border-[#E5E5E5] p-8 bg-[#FAFAF8]">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              Example workflow
            </p>
            <div className="flex flex-col gap-0">
              {[
                {
                  label: 'TRIGGER',
                  desc: 'New form submission',
                  color: 'border-blue-300 bg-blue-50',
                  textColor: 'text-blue-700',
                },
                null,
                {
                  label: 'PROCESS',
                  desc: 'Enrich data + score lead',
                  color: 'border-yellow-300 bg-yellow-50',
                  textColor: 'text-yellow-700',
                },
                null,
                {
                  label: 'BRANCH',
                  desc: 'Score > 70?',
                  color: 'border-purple-300 bg-purple-50',
                  textColor: 'text-purple-700',
                },
                null,
                {
                  label: 'ACTION',
                  desc: 'Notify sales + add to CRM',
                  color: 'border-green-300 bg-green-50',
                  textColor: 'text-green-700',
                },
              ].map((node, i) => {
                if (node === null) {
                  return (
                    <div key={i} className="flex justify-center py-1">
                      <div className="w-px h-6 bg-[#E5E5E5]" />
                    </div>
                  );
                }
                return (
                  <div
                    key={node.label}
                    className={`border ${node.color} px-5 py-3 flex items-center justify-between`}
                  >
                    <span
                      className={`text-xs font-semibold ${node.textColor}`}
                      style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                    >
                      {node.label}
                    </span>
                    <span className="text-xs text-gray-500">{node.desc}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-400 mt-6">
              Built with n8n · Runs 24/7 · Self-hostable
            </p>
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
            Audit → Map → Build → Monitor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#E5E5E5]">
            {[
              {
                step: '01',
                title: 'Audit',
                desc: "We document your current manual processes and identify what's worth automating first.",
              },
              {
                step: '02',
                title: 'Map',
                desc: 'We design the workflow logic: triggers, conditions, actions, and error paths.',
              },
              {
                step: '03',
                title: 'Build',
                desc: 'We build and test the workflow in n8n. Staging environment before touching production.',
              },
              {
                step: '04',
                title: 'Monitor',
                desc: "We set up error alerts and hand over a runbook. You're in control from day one.",
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
          Real workflows for real teams.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Lead routing',
              desc: 'Automatically score, enrich, and route leads from your website to the right rep in your CRM — in under 30 seconds.',
            },
            {
              title: 'Invoice processing',
              desc: 'Extract line items from PDF invoices, match to purchase orders, and update your accounting system. Zero manual entry.',
            },
            {
              title: 'Data sync',
              desc: 'Keep your CRM, project tracker, and billing platform in sync. No more copy-paste between tools.',
            },
            {
              title: 'Customer onboarding sequences',
              desc: 'Trigger personalized email sequences, Slack messages, and task creation the moment a new customer signs.',
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
            Which process should you automate first?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tell us what your team does manually. We'll tell you whether it's worth automating —
            and what it would cost.
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
