import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Sign In — Pragmas',
  description: 'Sign in to your Pragmas client account.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-sm w-full mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-gray-400">— CLIENT PORTAL</span>
          <h1
            className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-4"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Sign in to Pragmas
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Platform access is currently invite-only. If you're a Pragmas client, check your email
            for your login link.
          </p>

          <div className="border border-[#E5E5E5] bg-[#FAFAF8] p-6 text-left mb-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">How it works</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="shrink-0">1.</span>
                <span>You start a project with Pragmas</span>
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="shrink-0">2.</span>
                <span>We send you a magic link to your client dashboard</span>
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="shrink-0">3.</span>
                <span>Track progress, review deliverables, and communicate — all in one place</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link
              href="/get-started"
              className="block bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors text-center"
            >
              Not a client yet? Start a project
            </Link>
            <a
              href="mailto:hello@pragmas.io"
              className="block border border-[#E5E5E5] px-8 py-4 text-sm text-gray-600 hover:border-gray-400 transition-colors text-center"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
