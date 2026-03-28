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

  const [mobileOpen, setMobileOpen]   = useState(false);
  const [langOpen, setLangOpen]       = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');
  const [scrolled, setScrolled]       = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lang = document.documentElement.lang;
    if (lang && locales.find((l) => l.code === lang)) setCurrentLocale(lang);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#07101F]/95 backdrop-blur-2xl border-b border-[rgba(148,163,184,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <CubeLogo size={20} />
              <span
                className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#EDE8E0] group-hover:text-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Pragmas
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: t('services'), href: '/#services' },
                { label: t('pricing'),  href: '/#pricing' },
                { label: t('about'),    href: '/about' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-[#8A9BB5] hover:text-[#EDE8E0] transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-5">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="text-[12px] font-medium text-[#8A9BB5] hover:text-[#EDE8E0] transition-colors flex items-center gap-1.5 tracking-widest"
                >
                  {currentLang.label}
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <div className="absolute right-0 top-full mt-3 w-44 bg-[#0B1828] border border-[rgba(148,163,184,0.12)] shadow-[0_16px_48px_rgba(0,0,0,0.4)] z-20 overflow-hidden">
                      {locales.map((locale) => (
                        <button
                          key={locale.code}
                          onClick={() => handleLocaleChange(locale.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-[12px] transition-colors text-left ${
                            currentLocale === locale.code
                              ? 'text-[#C9A84C] bg-[rgba(201,168,76,0.06)]'
                              : 'text-[#8A9BB5] hover:text-[#EDE8E0] hover:bg-white/[0.03]'
                          }`}
                        >
                          <span className="font-mono font-semibold w-6 text-[11px]">{locale.label}</span>
                          <span>{locale.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/login"
                className="text-[13px] font-medium text-[#8A9BB5] hover:text-[#EDE8E0] transition-colors"
              >
                {t('login')}
              </Link>

              {/* Premium CTA */}
              <Link
                href="/get-started"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold tracking-wide text-[#07101F] bg-[#C9A84C] hover:bg-[#E0C270] transition-all duration-300 overflow-hidden"
                style={{ boxShadow: '0 0 20px rgba(201,168,76,0.25)' }}
              >
                <span className="relative z-10">{t('getStarted')}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-[#EDE8E0]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div
            ref={mobileMenuRef}
            className="absolute top-[68px] left-0 right-0 bg-[#0B1828] border-b border-[rgba(148,163,184,0.1)] px-6 py-8 shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-6 mb-8">
              {[
                { label: t('services'), href: '/#services' },
                { label: t('pricing'),  href: '/#pricing' },
                { label: t('about'),    href: '/about' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#8A9BB5] hover:text-[#EDE8E0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-[#4A5B72] mb-3 font-mono">Language</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => handleLocaleChange(locale.code)}
                    className={`px-3 py-1.5 text-[11px] font-mono font-medium border transition-all ${
                      currentLocale === locale.code
                        ? 'border-[#C9A84C] text-[#C9A84C] bg-[rgba(201,168,76,0.06)]'
                        : 'border-[rgba(148,163,184,0.1)] text-[#8A9BB5] hover:border-[rgba(148,163,184,0.2)] hover:text-[#EDE8E0]'
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
                className="text-center py-3 border border-[rgba(148,163,184,0.1)] text-[#8A9BB5] text-[13px] hover:border-[rgba(148,163,184,0.2)] hover:text-[#EDE8E0] transition-all"
              >
                {t('login')}
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-[#C9A84C] text-[#07101F] font-semibold text-[13px] hover:bg-[#E0C270] transition-all"
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
