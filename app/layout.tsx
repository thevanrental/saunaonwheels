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
  description: 'Mobile wood-fired sauna rentals delivered across Orange County and Los Angeles for private sessions, events and productions.',
  keywords: ['sauna on wheels', 'mobile sauna rental Los Angeles', 'sauna rental Orange County', 'private sauna rental', 'wood-fired sauna rental', 'mobile sauna events', 'corporate wellness sauna', 'film location rental Los Angeles'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sauna on Wheels | Ocean air. Wood fire. Deep heat.',
    description: 'Mobile wood-fired sauna rentals delivered across Orange County and Los Angeles.',
    url: '/',
    siteName: 'Sauna on Wheels',
    type: 'website',
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-85Z0LZQS16" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-85Z0LZQS16');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Sauna on Wheels',
          image: 'https://saunaonwheels.life/images/real3.jpg',
          url: 'https://saunaonwheels.life/',
          email: 'info@saunaonwheels.life',
          telephone: '+1-323-610-7634',
          priceRange: '$$',
          description: 'Mobile wood-fired sauna rentals delivered across Orange County and Los Angeles for private sessions, events and productions.',
          areaServed: [{ '@type': 'AdministrativeArea', name: 'Orange County, CA' }, { '@type': 'City', name: 'Los Angeles' }],
          address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' },
          sameAs: ['https://www.instagram.com/saunaonwheels.life'],
        }) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
