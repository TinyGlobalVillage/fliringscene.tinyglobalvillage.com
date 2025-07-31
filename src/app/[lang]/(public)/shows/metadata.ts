import { Metadata } from 'next';
import { getDictionary } from '@/data/i18n';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  const page = dict.shows;

  const baseUrl =
    'https://fliringscene.tinyglobalvillage.com';
  const image = `${baseUrl}/images/fliring-scene-logo-square.jpg`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        'en-US': `${baseUrl}/en`,
        'no-NO': `${baseUrl}/no`,
      },
    },
    openGraph: {
      title: page.meta.ogTitle,
      description: page.meta.ogDescription,
      url: `${baseUrl}/${params.lang}`,
      siteName: 'Fliring Scene',
      images: [
        {
          url: image,
          width: 1000,
          height: 1000,
          alt: 'Fliring Scene logo',
        },
      ],
      locale: params.lang === 'no' ? 'no_NO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: page.twitter.card,
      title: page.twitter.title,
      description: page.twitter.description,
      images: page.twitter.images
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
