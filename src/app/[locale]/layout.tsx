import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Pragmas — AI-Powered Tools for Startups & SMEs',
    template: '%s | Pragmas',
  },
  description:
    'Skip the agency. Get analytics dashboards, automation workflows, and AI tools — built for you, priced for startups.',
  keywords: ['AI tools', 'automation', 'analytics', 'startup', 'SME', 'dashboard', 'workflow'],
  authors: [{ name: 'Pragmas' }],
  creator: 'Pragmas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pragmas.io',
    siteName: 'Pragmas',
    title: 'Pragmas — AI-Powered Tools for Startups & SMEs',
    description:
      'Skip the agency. Get analytics dashboards, automation workflows, and AI tools — built for you, priced for startups.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragmas — AI-Powered Tools for Startups & SMEs',
    description:
      'Skip the agency. Get analytics dashboards, automation workflows, and AI tools — built for you, priced for startups.',
    creator: '@pragmasio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-[#0D0D14] text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
