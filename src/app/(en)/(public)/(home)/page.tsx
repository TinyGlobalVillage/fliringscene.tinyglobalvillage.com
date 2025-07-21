'use client';
// import styled from 'styled-components';

import AboveTheFold from './_pageComponents/00_sections/01_AboveTheFold';
import UpcomingShows from './_pageComponents/00_sections/02_UpcomingShows';
import NewsFeed from './_pageComponents/00_sections/03_NewsFeed';
import Footer from './_pageComponents/00_sections/05_Footer';
import Gallery from './_pageComponents/00_sections/04_Gallery';


export default function Home() {
  return (
    <>
      <AboveTheFold />
      <UpcomingShows />
      <NewsFeed />
      <Gallery />
      <Footer />
    </>
  );
}
