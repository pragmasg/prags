import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Zap } from 'lucide-react';

// Inline SVG social icons (lucide-react dropped Twitter/LinkedIn/Github in newer versions)
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

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
      { label: navT('pricing'), href: '/#pricing' },
      { label: navT('blog'), href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    legal: [
      { label: t('privacy'), href: '/privacy' },
      { label: t('terms'), href: '/terms' },
      { label: t('cookies'), href: '/cookies' },
    ],
  };

  const socialLinks = [
    {
      label: 'Twitter / X',
      href: 'https://twitter.com/pragmasio',
      icon: <XIcon />,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/pragmasio',
      icon: <LinkedinIcon />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/pragmasio',
      icon: <GithubIcon />,
    },
  ];

  return (
    <footer className="relative border-t border-white/6 bg-[#09090F]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-violet-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Pragmas
              </span>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              {t('description')}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Pragmas. {t('rights')}
          </p>

          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/30 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
