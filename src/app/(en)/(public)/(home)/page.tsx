'use client';
// import styled from 'styled-components';

import AboveTheFold from './_pageComponents/sections/01_AboveTheFold';
import UpcomingShows from './_pageComponents/sections/02_UpcomingShows';
import NewsFeed from './_pageComponents/sections/03_NewsFeed';
import Footer from './_pageComponents/sections/05_Footer';
import Gallery from './_pageComponents/sections/04_Gallery';


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
