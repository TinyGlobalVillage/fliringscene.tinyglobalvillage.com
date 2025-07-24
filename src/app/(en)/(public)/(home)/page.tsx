'use client';
// import styled from 'styled-components';

import AboveTheFold from './_pageSectionComponents/01_AboveTheFold';
import UpcomingShows from './_pageSectionComponents/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';
import Footer from './_pageSectionComponents/05_Footer';


export default function Home() {
  return (
    <>
      <AboveTheFold />
      <UpcomingShows />
      {/* <NewsFeed /> */}
      {/* <Gallery /> */}
      <Footer />
    </>
  );
}
