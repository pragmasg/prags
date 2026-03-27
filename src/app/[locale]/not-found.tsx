import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D14] flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center max-w-lg mx-auto">
        {/* 404 number */}
        <div className="text-[120px] font-black leading-none mb-4 bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
          404
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Page not found
        </h1>

        <p className="text-white/50 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Back to Home
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            View Services
          </Link>
        </div>

        {/* Decorative dots */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-purple-500/40"
              style={{ opacity: 1 - i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
