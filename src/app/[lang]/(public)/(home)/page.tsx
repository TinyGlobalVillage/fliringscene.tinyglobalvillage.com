// src/app/[lang](public)/(home)/page.tsx

import { getDictionary } from '@/data/i18n/getDictionary';
import HeaderLoader from '../../_allPageComponents/_placeHolder/HeaderLoader';
import UpcomingShows from './components/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';
  interface HomePageProps {
      params: Promise<{ lang: string }>; // params is now a Promise
      // other props if any
    }

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <>
      <HeaderLoader dict={dict.home.aboveTheFold} />
      {/* <UpcomingShows  /> */}
      <UpcomingShows dict={dict.home.upcomingShows} />
      {/* <NewsFeed /> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </>
  );
}
