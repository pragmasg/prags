import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'About — Pragmas',
  description:
    'Pragmas exists because most growing businesses are sitting on data they can\'t read and running processes they can\'t automate. We fix that.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-gray-500">— ABOUT</span>
        <h1
          className="text-4xl md:text-6xl font-semibold text-[#0A0A0A] mt-6 max-w-4xl leading-tight"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Built for the teams that can't wait for a 3-month agency project.
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
          Pragmas started from a simple observation: most growing businesses are sitting on data
          they can't read, running processes they can't automate, and paying agencies that move too
          slow. We fix that — with infrastructure that ships in days and code you own forever.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[#FAFAF8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
            {[
              {
                title: 'Fixed price, always',
                body: "Every project has a clear scope, a clear price, and a clear deadline. We don\u2019t do retainers with hourly overruns.",
              },
              {
                title: 'You own everything',
                body: 'Every line of code, every workflow, every dashboard we build is yours. No lock-in. No dependency on us to keep your systems running.',
              },
              {
                title: 'Speed is a feature',
                body: 'We deliver staging links on day one. Most projects ship in 3–5 days. We believe fast iteration beats long planning sprints.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-[#FAFAF8] p-10">
                <h3
                  className="text-lg font-semibold text-[#0A0A0A] mb-4"
                  style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The stack we use */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-500">— OUR STACK</span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] mt-6 mb-12"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Modern tools. Open source where it counts.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E5]">
            {[
              {
                name: 'Next.js',
                note: 'The framework behind the fastest apps on the web',
              },
              {
                name: 'Supabase',
                note: 'Open-source Firebase alternative — your data, your infra',
              },
              {
                name: 'n8n',
                note: 'Self-hostable automation — you can run it yourself',
              },
              {
                name: 'Anthropic Claude',
                note: 'The AI that powers our intelligent tools',
              },
              {
                name: 'Vercel',
                note: 'Edge-optimized deployment, zero config',
              },
              {
                name: 'TypeScript',
                note: 'Type-safe code means fewer bugs in production',
              },
            ].map((tech, i) => (
              <div
                key={tech.name}
                className={`flex items-start gap-6 px-8 py-6 border-b border-[#E5E5E5] ${
                  i % 2 === 0 ? 'md:border-r' : ''
                } last:border-b-0`}
              >
                <div>
                  <p
                    className="font-semibold text-[#0A0A0A] text-sm mb-1"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    {tech.name}
                  </p>
                  <p className="text-sm text-gray-500">{tech.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-400">— HOW WE'RE DIFFERENT</span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mt-6 mb-12"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Pragmas vs. the alternatives.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-gray-400 font-normal w-1/4"></th>
                  <th className="text-left py-4 pr-8 text-white font-semibold">Pragmas</th>
                  <th className="text-left py-4 pr-8 text-gray-400 font-normal">Traditional Agency</th>
                  <th className="text-left py-4 text-gray-400 font-normal">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    row: 'Timeline',
                    us: '3–5 days to staging',
                    agency: '6–12 weeks',
                    freelancer: 'Varies widely',
                  },
                  {
                    row: 'Pricing model',
                    us: 'Fixed price, always',
                    agency: 'Hourly or vague estimate',
                    freelancer: 'Hourly, scope drift common',
                  },
                  {
                    row: 'Code ownership',
                    us: 'Full transfer on delivery',
                    agency: 'Often retained or licensed',
                    freelancer: 'Usually yours, but unclear',
                  },
                  {
                    row: 'Communication',
                    us: 'Async, documented, fast',
                    agency: 'Meetings, account managers',
                    freelancer: 'Varies by person',
                  },
                  {
                    row: 'Post-delivery support',
                    us: '2 weeks included',
                    agency: 'Paid retainer required',
                    freelancer: 'Ad-hoc, unreliable',
                  },
                ].map((r) => (
                  <tr key={r.row} className="border-b border-white/10">
                    <td className="py-5 pr-8 text-gray-400">{r.row}</td>
                    <td className="py-5 pr-8 text-white font-medium">{r.us}</td>
                    <td className="py-5 pr-8 text-gray-500">{r.agency}</td>
                    <td className="py-5 text-gray-500">{r.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl font-semibold text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              Ready to start?
            </h2>
            <p className="text-gray-500 mt-2">Tell us what you need. We'll scope it in 24 hours.</p>
          </div>
          <Link
            href="/get-started"
            className="shrink-0 bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
