'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import CubeLogo from '@/components/ui/CubeLogo';

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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale);
    setLangOpen(false);
    setMobileOpen(false);
    router.replace(pathname, { locale });
  };

  const currentLang = locales.find((l) => l.code === currentLocale) || locales[0];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity">
              <CubeLogo size={22} />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-sans, "Inter", sans-serif)' }}
              >
                Pragmas
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-sm text-[#8892AA] hover:text-white transition-colors duration-200"
              >
                {t('services')}
              </Link>
              <Link
                href="/#pricing"
                className="text-sm text-[#8892AA] hover:text-white transition-colors duration-200"
              >
                {t('pricing')}
              </Link>
              <Link
                href="/about"
                className="text-sm text-[#8892AA] hover:text-white transition-colors duration-200"
              >
                {t('about')}
              </Link>
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="text-sm text-[#8892AA] hover:text-white transition-colors duration-200 flex items-center gap-1"
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
                    <div className="absolute right-0 top-full mt-2 w-40 bg-[#0D0D1A] border border-white/[0.08] shadow-md z-20">
                      {locales.map((locale) => (
                        <button
                          key={locale.code}
                          onClick={() => handleLocaleChange(locale.code)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 text-left ${
                            currentLocale === locale.code
                              ? 'text-white font-medium bg-white/[0.06]'
                              : 'text-[#8892AA] hover:text-white hover:bg-white/[0.04]'
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
                className="text-sm text-[#8892AA] hover:text-white transition-colors duration-200"
              >
                {t('login')}
              </Link>

              {/* Get in touch button */}
              <Link
                href="/get-started"
                className="bg-[#00FF9D] text-[#050510] font-semibold text-sm px-4 py-2 hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all duration-200"
              >
                {t('getStarted')}
              </Link>
            </div>

            {/* Mobile hamburger trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-white"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <>
                  <span className="block w-5 h-px bg-current rotate-45 translate-y-[5px] transition-all duration-200" />
                  <span className="block w-5 h-px bg-current opacity-0 transition-all duration-200" />
                  <span className="block w-5 h-px bg-current -rotate-45 -translate-y-[5px] transition-all duration-200" />
                </>
              ) : (
                <>
                  <span className="block w-5 h-px bg-current transition-all duration-200" />
                  <span className="block w-5 h-px bg-current transition-all duration-200" />
                  <span className="block w-5 h-px bg-current transition-all duration-200" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="absolute top-16 left-0 right-0 bg-[#0D0D1A] border-b border-white/[0.08] px-6 py-8 shadow-lg"
          >
            <div className="flex flex-col gap-6 mb-8">
              <Link
                href="/#services"
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#8892AA] hover:text-white transition-colors"
              >
                {t('services')}
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#8892AA] hover:text-white transition-colors"
              >
                {t('pricing')}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#8892AA] hover:text-white transition-colors"
              >
                {t('about')}
              </Link>
            </div>

            {/* Mobile language switcher */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-[#8892AA] mb-3">Language</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => handleLocaleChange(locale.code)}
                    className={`px-3 py-1.5 text-sm border transition-colors ${
                      currentLocale === locale.code
                        ? 'border-[#00FF9D] text-[#00FF9D]'
                        : 'border-white/[0.08] text-[#8892AA] hover:border-white/[0.16] hover:text-white'
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
                className="text-center py-3 border border-white/[0.08] text-[#8892AA] text-sm hover:border-white/[0.16] hover:text-white transition-colors"
              >
                {t('login')}
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-[#00FF9D] text-[#050510] font-semibold text-sm hover:bg-white transition-colors"
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
