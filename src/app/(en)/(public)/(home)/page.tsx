import HeaderLoader from '../../_allPageComponents/_placeHolder/HeaderLoader';

import UpcomingShows from './components/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';


export default function Home() {
  return (
    <>
      <HeaderLoader/>
      <UpcomingShows />
      {/* <NewsFeed /> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </>
  );
}
