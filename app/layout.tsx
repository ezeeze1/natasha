import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sen. Natasha Akpoti-Uduaghan | Kogi Central Public Portal',
  description: 'Official public information portal for Senator Natasha Akpoti-Uduaghan (Kogi Central Senatorial District, PDP). Biography, legislative records, constituency projects, and 2027 election informational updates.',
  keywords: [
    'Natasha Akpoti-Uduaghan',
    'Kogi Central Senator',
    'PDP Nigeria',
    'National Assembly',
    'Senate Nigeria',
    'Ajaokuta Steel',
    '2027 Kogi Central PDP',
    'Public Information Portal',
  ],
  authors: [{ name: 'Kogi Central Public Information Bureau' }],
  openGraph: {
    title: 'Sen. Natasha Akpoti-Uduaghan | Kogi Central Public Portal',
    description: 'Official public information portal for Senator Natasha Akpoti-Uduaghan. Public service records, legislative achievements, and 2027 election updates.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Natasha Akpoti-Uduaghan Public Portal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sen. Natasha Akpoti-Uduaghan | Kogi Central Public Portal',
    description: 'Public information portal for Senator Natasha Akpoti-Uduaghan (Kogi Central Senatorial District).',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900 antialiased selection:bg-emerald-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
