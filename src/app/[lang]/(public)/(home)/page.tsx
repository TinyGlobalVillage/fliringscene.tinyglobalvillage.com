// src/app/[lang](public)/(home)/page.tsx

import { getDictionary } from '@/data/i18n';
import HeaderLoader from '../../_allPageComponents/_placeHolder/HeaderLoader';
import UpcomingShows from './components/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';


export default function Home({params}: {params: {lang: string}}) {
  const dict = getDictionary(params.lang);

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
