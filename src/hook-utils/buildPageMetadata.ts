// src/lib/seo/buildMetadata.ts
import type { Metadata } from 'next';

type DictPage = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'player' | 'app';
    title?: string;
    description?: string;
    images?: string | URL | TwitterImage | (string | URL | TwitterImage)[];
  };
};

interface TwitterImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function buildPageMetadata({
  dictPage,
  lang,
  route, // e.g. '/', '/about'
  base = 'https://fliringscene.tinyglobalvillage.com',
  ogImage = `${'https://fliringscene.tinyglobalvillage.com'}/images/icons/fliring-scene-logo-square.jpeg`,
}: {
  dictPage: DictPage;
  lang: 'en' | 'no';
  route: string;
  base?: string;
  ogImage?: string;
}): Metadata {
  const url = `${base}/${lang}${route === '/' ? '' : route}`;
  return {
    title: dictPage.meta.title,
    description: dictPage.meta.description,
    keywords: dictPage.meta.keywords,
    alternates: {
      canonical: url,
      languages: { 'en-US': `${base}/en${route === '/' ? '' : route}`, 'no-NO': `${base}/no${route === '/' ? '' : route}` },
    },
    openGraph: {
      title: dictPage.meta.ogTitle ?? dictPage.meta.title,
      description: dictPage.meta.ogDescription ?? dictPage.meta.description,
      url,
      siteName: 'Fliring Scene',
      images: [{ url: ogImage, width: 1000, height: 1000, alt: 'Fliring Scene logo' }],
      locale: lang === 'no' ? 'no_NO' : 'en_US',
      type: 'website',
    },
    twitter: dictPage.twitter && {
      card: dictPage.twitter.card ?? 'summary_large_image',
      title: dictPage.twitter.title ?? dictPage.meta.title,
      description: dictPage.twitter.description ?? dictPage.meta.description,
      images: dictPage.twitter.images,
    },
    robots: { index: true, follow: true },
  };
}
