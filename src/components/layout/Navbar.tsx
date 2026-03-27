'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const lang = document.documentElement.lang;
    if (lang && locales.find((l) => l.code === lang)) {
      setCurrentLocale(lang);
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale);
    setLangOpen(false);
    router.replace(pathname, { locale });
  };

  const currentLang = locales.find((l) => l.code === currentLocale) || locales[0];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span
                className="text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)' }}
              >
                PRAGMAS
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {t('services')}
              </Link>
              <Link
                href="/#pricing"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {t('pricing')}
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </Link>
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
                >
                  {currentLang.label}
                  <span className="text-xs">↓</span>
                </button>

                {langOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setLangOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-[#E5E5E5] shadow-md z-20">
                      {locales.map((locale) => (
                        <button
                          key={locale.code}
                          onClick={() => handleLocaleChange(locale.code)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 text-left ${
                            currentLocale === locale.code
                              ? 'text-[#0A0A0A] font-medium bg-[#FAFAF8]'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-[#FAFAF8]'
                          }`}
                        >
                          <span className="font-semibold text-xs w-6">{locale.label}</span>
                          <span>{locale.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sign in link */}
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Sign in
              </Link>

              {/* Get in touch button */}
              <Link
                href="/get-started"
                className="border border-black px-4 py-2 text-sm text-[#0A0A0A] hover:bg-black hover:text-white transition-colors duration-200"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-white/80"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#E5E5E5] px-6 py-8">
            <div className="flex flex-col gap-6 mb-8">
              <Link
                href="/#services"
                onClick={() => setMobileOpen(false)}
                className="text-base text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t('services')}
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                className="text-base text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t('pricing')}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-base text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Mobile language switcher */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Language</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => handleLocaleChange(locale.code)}
                    className={`px-3 py-1.5 text-sm border transition-colors ${
                      currentLocale === locale.code
                        ? 'border-[#0A0A0A] text-[#0A0A0A]'
                        : 'border-[#E5E5E5] text-gray-500 hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {locale.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 border border-[#E5E5E5] text-gray-700 text-sm hover:border-gray-400 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-[#0A0A0A] text-white text-sm hover:bg-[#1F2937] transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
