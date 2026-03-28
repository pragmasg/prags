import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import CustomCursor from '@/components/ui/CustomCursor';
import '../globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#07101F] text-[#EDE8E0] antialiased">
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
