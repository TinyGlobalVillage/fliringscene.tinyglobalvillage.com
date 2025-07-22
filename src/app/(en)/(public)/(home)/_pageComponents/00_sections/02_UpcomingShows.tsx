'use client';
import styled from 'styled-components';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkoWidget';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { glowPulse } from '../../animations/glowPulse';
import { media } from '@/styles/breakpoints';
import EndlessScrollContainer from '../../../_allPageComponents/scroll-containers/endlessScrollContainer';
import LightBulbFrame from '../../../_allPageComponents/ui/LightBulbFrame';

const UpcomingShowsSection = styled.section`
  min-height: 70vh;
  scroll-margin-top: 100px; // adjust based on fixed nav height
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
  margin-bottom: 35px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid #f7b700;
  border-radius: 28px;
  animation: ${glowPulse} 2.5s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  background: rgba(0, 0, 0, 0.1);

  @media ${media.mobile}{
width: 90%;
min-height: 60vh;
padding: 1.5rem;

}

`;

export default function UpcomingShows() {
  return (
    <UpcomingShowsSection id="upcoming-show">
      <NeonSectionTitleFontSize>KOMMENDE SHOW</NeonSectionTitleFontSize>
      <LightBulbFrame
        positions={[
          // top-left clockwise
          { top: 3, left: 8 },      //top-left corner
          { top: 0, left: 20 },     //1 top-left-to-right
          { top: 0, left: 35 },     //2 top-left-to-right
          { top: 0, left: 50 },     //3 top-left-to-right
          { top: 0, left: 65 },     //4 top-left-to-right
          { top: 0, left: 80 },     //5 top-left-to-right
          { top: 3, left: 92 },   //top-right corner
          { top: 10, left: 98 },   //1 top-right-down
          { top: 20, left: 100 },   //2 top-right-down
          { top: 30, left: 100 },   //3 top-right-down
          { top: 40, left: 100 },   //4 top-right-down
          { top: 50, left: 100 },   //5 top-right-down
          { top: 60, left: 100 },   //6 top-right-down
          { top: 70, left: 100 },   //7 top-right-down
          { top: 80, left: 100 },   //8 top-right-down
          { top: 90, left: 98 },   //9 top-right-down
          { top: 97, left: 92 },  //bottom-right corner
          { top: 100, left: 80 },   //1 bottom-right-to-left
          { top: 100, left: 65 },   //2  bottom-right-to-left
          { top: 100, left: 50 },   //3  bottom-right-to-left
          { top: 100, left: 35 },   //4  bottom-right-to-left
          { top: 100, left: 20 },   //5  bottom-right-to-left
          { top: 97, left: 8 },   //bottom-left corner
          { top: 90, left: 2 },     //1 bottom-left-up
          { top: 80, left: 0 },     //2 bottom-left-up
          { top: 70, left: 0 },     //3 bottom-left-up
          { top: 60, left: 0 },     //4 bottom-left-up
          { top: 50, left: 0 },     //5 bottom-left-up
          { top: 40, left: 0 },     //6 bottom-left-up
          { top: 30, left: 0 },     //7 bottom-left-up
          { top: 20, left: 0 },     //8 bottom-left-up
          { top: 10, left: 2 },     //9 bottom-left-up
        ]}
      >


        <TikkioWidget />
      </LightBulbFrame>

    </UpcomingShowsSection>
  );
}
