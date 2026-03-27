import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Pragmas',
  description: 'Privacy policy for Pragmas. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-gray-500">— LEGAL</span>
        <h1
          className="text-4xl font-semibold text-[#0A0A0A] mt-6 mb-4"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: March 2026</p>

        <div className="space-y-12 text-sm text-[#0A0A0A] leading-relaxed">
          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us when you submit a project brief,
              create an account, or contact us. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name, email address, and company name</li>
              <li>Project requirements and descriptions you submit through our intake form</li>
              <li>Billing information (processed securely via Stripe — we do not store card details)</li>
              <li>Communications you send to us</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We also collect limited usage data automatically, including IP addresses, browser type,
              pages visited, and referral URLs, to help us understand how visitors use our site.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              2. How We Use Information
            </h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Respond to your project inquiries and deliver scope documents</li>
              <li>Process payments and send transactional emails</li>
              <li>Provide access to client project dashboards</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal data. We do not use your information for advertising
              purposes. We will never share your project details with third parties without your
              explicit consent.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              3. Data Storage
            </h2>
            <p className="text-gray-600">
              Your data is stored securely using Supabase, an open-source database platform. Data
              is hosted on infrastructure in the United States. We use industry-standard encryption
              in transit (TLS) and at rest. Our website is hosted on Vercel. Transactional emails
              are delivered via Resend.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              4. Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We use a limited number of trusted third-party services to operate our business:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong className="text-[#0A0A0A]">Supabase</strong> — database and authentication
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Stripe</strong> — payment processing (subject to
                Stripe's own privacy policy)
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Resend</strong> — transactional email delivery
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Vercel</strong> — website hosting and edge
                delivery
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Each of these providers has their own privacy policy governing their data handling
              practices.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              5. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Request a copy of the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>
                Lodge a complaint with your local data protection authority (for EU/UK residents)
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              6. Contact
            </h2>
            <p className="text-gray-600">
              For any privacy-related questions or to exercise your rights, please contact us at{' '}
              <a
                href="mailto:privacy@pragmas.io"
                className="text-[#0A0A0A] underline hover:no-underline"
              >
                privacy@pragmas.io
              </a>
              . We will respond within 5 business days.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
