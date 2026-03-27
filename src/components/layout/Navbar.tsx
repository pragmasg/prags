'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Zap, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const locales = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // detect locale from document lang attribute
    const lang = document.documentElement.lang;
    if (lang && locales.find(l => l.code === lang)) {
      setCurrentLocale(lang);
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale);
    setLangOpen(false);
    router.replace(pathname, { locale });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/#services', label: t('services') },
    { href: '/#pricing', label: t('pricing') },
  ];

  const currentLang = locales.find(l => l.code === currentLocale) || locales[0];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-violet-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Pragmas
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-white/5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{currentLang.label}</span>
                  <ChevronDown className={cn(
                    'w-3 h-3 transition-transform duration-200',
                    langOpen && 'rotate-180'
                  )} />
                </button>

                {langOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setLangOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-40 bg-[#13131F] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-20">
                      {locales.map((locale) => (
                        <button
                          key={locale.code}
                          onClick={() => handleLocaleChange(locale.code)}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150',
                            currentLocale === locale.code
                              ? 'text-purple-400 bg-purple-500/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          )}
                        >
                          <span className="font-mono font-semibold text-xs w-6">{locale.label}</span>
                          <span>{locale.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Login link */}
              <Link
                href="/login"
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {t('login')}
              </Link>

              {/* Get Started button */}
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                {t('getStarted')}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-[#0D0D14] border-b border-white/8 px-4 py-6">
            <div className="flex flex-col gap-1 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile language switcher */}
            <div className="mb-6">
              <p className="text-white/30 text-xs font-semibold uppercase tracking-wider px-4 mb-2">Language</p>
              <div className="flex flex-wrap gap-2 px-4">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => handleLocaleChange(locale.code)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors',
                      currentLocale === locale.code
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {locale.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 px-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                {t('login')}
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-purple-500/20"
              >
                {t('getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
