'use client';
// import styled from 'styled-components';

import AboveTheFold from './components/01_AboveTheFold';
import UpcomingShows from './components/02_UpcomingShows';
// import NewsSection from './_pageSectionComponents/03_NewsFeed';
// import Gallery from './_pageSectionComponents/04_Gallery';
import Footer from './components/05_Footer';


export default function Home() {
  return (
    <>
      <AboveTheFold />
      <UpcomingShows />
      {/* <NewsFeed /> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </>
  );
}
