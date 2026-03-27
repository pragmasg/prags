import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CubeLogo from '@/components/ui/CubeLogo';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Analytics & Intelligence', href: '/services/analytics' },
      { label: 'Automation & Workflows', href: '/services/automation' },
      { label: 'AI-Powered Products', href: '/services/ai' },
      { label: 'Start a project', href: '/get-started' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    legal: [
      { label: t('privacy'), href: '/privacy' },
      { label: t('terms'), href: '/terms' },
      { label: t('cookies'), href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Brand strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <CubeLogo size={32} />
            <span className="text-lg font-semibold tracking-widest uppercase text-white">
              Pragmas
            </span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            {t('description')}
          </p>
          <Link
            href="/get-started"
            className="border border-[#00D4AA] text-[#00D4AA] px-6 py-2.5 text-sm hover:bg-[#00D4AA] hover:text-[#0A0A0A] transition-colors duration-200 whitespace-nowrap"
          >
            Start a project →
          </Link>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Services column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-5">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-5">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-5">
              {t('legal')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-5">
              Follow
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/company/pragmasio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/pragmasio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pragmasio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {currentYear} Pragmas. {t('rights')}
          </p>
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            AI · Analytics · Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
