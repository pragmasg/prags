import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-white text-[#0A0A0A] antialiased" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
        <nav
          style={{ borderBottom: '1px solid #E5E5E5' }}
          className="sticky top-0 z-50 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-sm font-semibold tracking-widest uppercase text-[#0A0A0A] hover:opacity-80 transition-opacity"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                PRAGMAS
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
                <Link href="/#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <Link
                  href="/get-started"
                  className="border border-[#0A0A0A] px-4 py-2 text-sm text-[#0A0A0A] hover:bg-black hover:text-white transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <p
            className="text-8xl font-semibold text-[#E5E5E5] mb-4"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            404
          </p>
          <h1
            className="text-3xl font-semibold text-[#0A0A0A] mb-4"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            Page not found
          </h1>
          <p className="text-gray-500 text-base mb-12 max-w-md mx-auto leading-relaxed">
            This page doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="bg-black text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/#services"
              className="border border-[#0A0A0A] px-8 py-4 text-sm hover:bg-black hover:text-white transition-colors"
            >
              View services
            </Link>
            <Link
              href="/#pricing"
              className="border border-[#E5E5E5] px-8 py-4 text-sm text-gray-600 hover:border-gray-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/get-started"
              className="border border-[#E5E5E5] px-8 py-4 text-sm text-gray-600 hover:border-gray-400 transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>

        <footer style={{ borderTop: '1px solid #E5E5E5' }} className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Pragmas. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
