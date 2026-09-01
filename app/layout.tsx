import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saunaonwheels.life'),
  title: 'Sauna on Wheels | Mobile Wood-Fired Sauna',
  description: 'A private wood-fired sauna delivered across Los Angeles and Orange County.',
  openGraph: {
    title: 'Sauna on Wheels | Ocean air. Wood fire. Deep heat.',
    description: 'A private wood-fired sauna delivered across Los Angeles and Orange County.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Sauna on Wheels by the Pacific at blue hour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sauna on Wheels | Ocean air. Wood fire. Deep heat.',
    description: 'A private wood-fired sauna delivered across Los Angeles and Orange County.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
