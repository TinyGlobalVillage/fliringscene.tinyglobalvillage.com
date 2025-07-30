// src/app/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Fliring Scene',
    template: '%s | Fliring Scene',
  },
  description:
    'Steinkjer’s intimate stage for stand-up, music & culture. Discover upcoming shows, open mics & community events.',
  keywords: [
    'Fliring Scene',
    'comedy Steinkjer',
    'music venue',
    'open mic',
  ],
  alternates: {
    languages: {
      'en-US': 'https://fliringscene.tinyglobalvillage.com/',
      'no-NO': 'https://fliringscene.tinyglobalvillage.com/no',
    },
  },
  openGraph: {
    title:
      'Fliring Scene | Steinkjer’s Stage for Laughter and Culture',
    description:
      'Join us at Fliring Scene – an inclusive stage for standup, music, and creative expression in Steinkjer.',
    url: 'https://fliringscene.tinyglobalvillage.com',
    siteName: 'Fliring Scene',
    images: [
      {
        url: 'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
        width: 1000,
        height: 1000,
        alt: 'Fliring Scene logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Fliring Scene | Steinkjer’s Stage for Laughter and Culture',
    description:
      'Comedy, music, and culture in Steinkjer – discover Fliring Scene’s upcoming shows and community events.',
    images: [
      'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    // Optional: add rules for Googlebot
  },
};
