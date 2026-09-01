import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Events & Productions | Sauna on Wheels',
  description: 'Custom mobile sauna experiences for private events, corporate wellness, film, TV, commercial and photo production.',
  keywords: ['mobile sauna film production Los Angeles', 'sauna film location Orange County', 'private event sauna rental', 'corporate wellness sauna', 'cold plunge event rental'],
  alternates: { canonical: '/private-events/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Private Events & Productions | Sauna on Wheels',
    description: 'Custom mobile sauna experiences for private events, corporate wellness and productions.',
    url: '/private-events/',
    images: ['https://saunaonwheels.life/images/real3.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Private Events & Productions | Sauna on Wheels',
    description: 'Custom mobile sauna experiences for private events, corporate wellness and productions.',
    images: ['https://saunaonwheels.life/images/real3.jpg'],
  },
};

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
