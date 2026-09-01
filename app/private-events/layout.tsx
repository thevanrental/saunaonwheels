import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Events & Productions | Sauna on Wheels',
  description: 'Custom mobile sauna experiences for private events, corporate wellness, film, TV, commercial and photo production.',
  openGraph: {
    title: 'Private Events & Productions | Sauna on Wheels',
    description: 'Custom mobile sauna experiences for private events, corporate wellness and productions.',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Private Events & Productions | Sauna on Wheels',
    description: 'Custom mobile sauna experiences for private events, corporate wellness and productions.',
    images: [],
  },
};

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
