import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CubeLogo from '@/components/ui/CubeLogo';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Analytics & Intelligence', href: '/services/analytics' },
      { label: 'Automation & Workflows',   href: '/services/automation' },
      { label: 'AI-Powered Products',      href: '/services/ai' },
      { label: 'Start a project',          href: '/get-started' },
    ],
    company: [
      { label: 'About',    href: '/about' },
      { label: 'Pricing',  href: '/#pricing' },
      { label: 'Blog',     href: '/blog' },
      { label: 'Careers',  href: '/careers' },
    ],
    legal: [
      { label: t('privacy'), href: '/privacy' },
      { label: t('terms'),   href: '/terms' },
      { label: t('cookies'), href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-[#050D1A] text-[#EDE8E0]">

      {/* Top brand strip */}
      <div className="border-b border-[rgba(148,163,184,0.07)]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          <Link href="/" className="flex items-center gap-3 group">
            <CubeLogo size={28} />
            <span
              className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#EDE8E0] group-hover:text-[#C9A84C] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pragmas
            </span>
          </Link>

          <p className="text-[13px] text-[#4A5B72] max-w-sm leading-relaxed">
            {t('description')}
          </p>

          <Link
            href="/get-started"
            className="flex-shrink-0 border border-[rgba(201,168,76,0.3)] text-[#C9A84C] px-6 py-2.5 text-[12px] font-medium tracking-wide hover:bg-[rgba(201,168,76,0.08)] transition-all duration-200"
          >
            Start a project →
          </Link>
        </div>
      </div>

      {/* Main links */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-12">

          {/* Services */}
          <div>
            <h4
              className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono mb-6"
            >
              {t('services')}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#4A5B72] hover:text-[#EDE8E0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono mb-6">
              {t('company')}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#4A5B72] hover:text-[#EDE8E0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono mb-6">
              {t('legal')}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#4A5B72] hover:text-[#EDE8E0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono mb-6">
              Connect
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/company/pragmasio' },
                { label: 'X (Twitter)', href: 'https://twitter.com/pragmasio' },
                { label: 'GitHub', href: 'https://github.com/pragmasio' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#4A5B72] hover:text-[#EDE8E0] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="opacity-0 group-hover:opacity-60 transition-opacity -translate-y-0.5">
                      <path d="M1 8L8 1M8 1H3M8 1v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(148,163,184,0.07)] py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#2A3B52] font-mono">
            © {currentYear} Pragmas. {t('rights')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-40" />
            <p className="text-[10px] text-[#2A3B52] tracking-[0.2em] uppercase font-mono">
              AI · Analytics · Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
