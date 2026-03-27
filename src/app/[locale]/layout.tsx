import type { Metadata } from 'next';
import { JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Pragmas — AI Infrastructure for Growing Businesses',
    template: '%s | Pragmas',
  },
  description:
    'We build AI infrastructure, analytics systems, and automation workflows for growing businesses. Premium consultancy, startup-friendly pricing.',
  keywords: ['AI infrastructure', 'automation', 'analytics', 'consultancy', 'SME', 'workflow'],
  authors: [{ name: 'Pragmas' }],
  creator: 'Pragmas',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pragmas.io',
    siteName: 'Pragmas',
    title: 'Pragmas — AI Infrastructure for Growing Businesses',
    description:
      'We build AI infrastructure, analytics systems, and automation workflows for growing businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragmas — AI Infrastructure for Growing Businesses',
    description:
      'We build AI infrastructure, analytics systems, and automation workflows for growing businesses.',
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
    <html lang={locale} className={`${jetbrainsMono.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
