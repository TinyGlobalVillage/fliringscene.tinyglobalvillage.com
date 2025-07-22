'use client';
import styled from 'styled-components';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkoWidget';
import { glowPulse } from '../../animations/glowPulse';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { media } from '@/styles/breakpoints';
// import EndlessScrollContainer from '../../../_allPageComponents/scroll-containers/endlessScrollContainer';


const UpcomingShowsSection = styled.section`
  min-height: 100%;
  scroll-margin-top: 100px; // adjust based on fixed nav height
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
  margin-bottom: 35px;
  padding: 2rem;
  padding-bottom: 6rem;
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
          {/* <EndlessScrollContainer>
            <TikkioWidget />
          </EndlessScrollContainer> */}

            <TikkioWidget />

    </UpcomingShowsSection>
  );
}
