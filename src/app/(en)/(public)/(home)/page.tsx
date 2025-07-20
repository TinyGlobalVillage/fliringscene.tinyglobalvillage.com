'use client';
import styled from 'styled-components';

import Navbar from '../_allPageComponents/NavBar';

import AboveTheFold from './_pageComponents/sections/01_AboveTheFold';
import UpcomingShows from './_pageComponents/sections/02_UpcomingShows';
import NewsFeed from './_pageComponents/sections/03_NewsFeed';
import Footer from './_pageComponents/sections/05_Footer';
import Gallery from './_pageComponents/sections/04_Gallery';


const HomePage = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export default function Home() {
  return (
    <HomePage>
        <Navbar />
        <AboveTheFold/>
        <UpcomingShows/>
        <NewsFeed/>
        <Gallery/>
        <Footer/>
    </HomePage>
  );
}
