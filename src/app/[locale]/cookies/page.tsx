import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy — Pragmas',
  description: 'Cookie policy for Pragmas. We use minimal cookies — no advertising or tracking.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-gray-500">— LEGAL</span>
        <h1
          className="text-4xl font-semibold text-[#0A0A0A] mt-6 mb-4"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Cookie Policy.
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: March 2025</p>

        <div className="space-y-12 text-sm text-[#0A0A0A] leading-relaxed">
          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              1. What are cookies
            </h2>
            <p className="text-gray-600">
              Cookies are small text files that a website stores on your device when you visit.
              They serve a range of purposes: keeping you signed in, remembering your preferences,
              or helping site owners understand how visitors use their site. Cookies are not
              programs — they cannot execute code or carry viruses. They are simply data files
              stored by your browser.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              2. Cookies we use
            </h2>
            <p className="text-gray-600 mb-6">
              We keep our cookie use to the minimum required for the site to function correctly.
              We do not use advertising cookies. We do not build tracking profiles.
            </p>

            <div className="border border-[#E5E5E5]">
              <div className="grid grid-cols-3 border-b border-[#E5E5E5] bg-[#FAFAF8]">
                <div className="px-5 py-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    Category
                  </span>
                </div>
                <div className="px-5 py-3 border-l border-[#E5E5E5]">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    Examples
                  </span>
                </div>
                <div className="px-5 py-3 border-l border-[#E5E5E5]">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]"
                    style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                  >
                    Purpose
                  </span>
                </div>
              </div>

              {[
                {
                  category: 'Essential',
                  examples: 'Auth session token, CSRF protection token',
                  purpose:
                    'Required for the site to function. These allow you to stay signed in and protect form submissions from cross-site request forgery attacks. Cannot be disabled without breaking the site.',
                },
                {
                  category: 'Analytics',
                  examples: 'None currently',
                  purpose:
                    'We do not run analytics cookies at this time. We do not use Google Analytics, Meta Pixel, or any third-party behavioural tracking tools.',
                },
                {
                  category: 'Preferences',
                  examples: 'Locale / language setting',
                  purpose:
                    'Stores your chosen language so you see the correct version of the site on your next visit. Contains no personally identifiable information.',
                },
              ].map((row, i) => (
                <div
                  key={row.category}
                  className={`grid grid-cols-3 ${i < 2 ? 'border-b border-[#E5E5E5]' : ''}`}
                >
                  <div className="px-5 py-4">
                    <span
                      className="text-sm font-medium text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                    >
                      {row.category}
                    </span>
                  </div>
                  <div className="px-5 py-4 border-l border-[#E5E5E5]">
                    <span className="text-sm text-gray-600">{row.examples}</span>
                  </div>
                  <div className="px-5 py-4 border-l border-[#E5E5E5]">
                    <span className="text-sm text-gray-600">{row.purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              3. Third-party cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Our website is hosted on Vercel. As part of their infrastructure, Vercel may set
              cookies related to edge delivery, bot protection, and their own platform analytics.
              These are governed by Vercel's own privacy and cookie policies, which you can review
              on the Vercel website.
            </p>
            <p className="text-gray-600">
              We do not embed third-party advertising networks, social media widgets, or analytics
              scripts that would set their own cookies on your device.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              4. Managing cookies
            </h2>
            <p className="text-gray-600 mb-4">
              You can control and delete cookies through your browser settings. Most browsers
              allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>View and delete individual cookies stored by specific sites</li>
              <li>Block all cookies by default, or block cookies from specific domains</li>
              <li>Set your browser to notify you before a cookie is stored</li>
            </ul>
            <p className="text-gray-600">
              Note that disabling essential cookies will prevent the authenticated areas of the
              site (such as your project dashboard) from working correctly. Preference cookies
              can be disabled without affecting core functionality, though your language setting
              will not be remembered between visits.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-4 text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              5. Contact
            </h2>
            <p className="text-gray-600">
              If you have questions about how we use cookies, please contact us at{' '}
              <a
                href="mailto:hello@pragmas.io"
                className="text-[#0A0A0A] underline hover:no-underline"
              >
                hello@pragmas.io
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
