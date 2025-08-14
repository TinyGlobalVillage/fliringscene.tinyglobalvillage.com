// src/app/[lang](public)/(home)/page.tsx

import HeaderLoader from '../../_allPageComponents/_placeHolder/HeaderLoader';
import UpcomingShows from './components/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';

import { getDictionary } from '@/data/i18n/getDictionary';

interface HomePageProps {
  params: Promise<{ lang: string }>; // params is now a Promise
  // params: { lang: string }; // params is now a Promise
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  // const dict = await getDictionary(params.lang);

  return (
    <>
      <HeaderLoader dict={dict.home.aboveTheFold} />
      <UpcomingShows dict={dict.home.upcomingShows} />
      {/* <NewsFeed /> */}
      {/* <Gallery /> */}
    </>
  );
}
