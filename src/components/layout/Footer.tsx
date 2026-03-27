import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Analytics Dashboards', href: '/#services' },
      { label: 'Automation Workflows', href: '/#services' },
      { label: 'AI-Powered Tools', href: '/#services' },
      { label: 'Custom Solutions', href: '/contact' },
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
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0A0A0A]">
                PRAGMAS
              </span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A] font-medium mb-5">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A] font-medium mb-5">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A] font-medium mb-5">
              {t('legal')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E5E5] mt-0 pt-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Pragmas. {t('rights')}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/pragmasio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/pragmasio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com/pragmasio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
