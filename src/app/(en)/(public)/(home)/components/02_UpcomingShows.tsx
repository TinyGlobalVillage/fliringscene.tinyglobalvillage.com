//(home)/components/02_UpcomingShows.tsx

'use client';
import styled from 'styled-components';
import { glowPulse } from '../../../_allPageComponents/_nonComponentHelpers/animations/glowPulse';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { media } from '@/styles/breakpoints';

// import EndlessScrollContainer from '@/app/(en)/_allPageComponents/scroll-containers/_endlessScrollContainer copy';
// import EventCard from '@/app/(en)/_allPageComponents/cards/EventCard';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkoWidget';


const UpcomingShowsSection = styled.section`
  scroll-margin-top: 100px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 70px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid #f7b700;
  border-radius: 28px;
  animation: ${glowPulse} 2.5s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  background: rgba(0, 0, 0, 0.2);

  @media ${media.tablet}{

}
  @media ${media.mobile}{
  scroll-margin-top: 90px;
  height: 60vh;
  padding: 15px 0px 25px 0px;


}

`;
const TikkioWrapper = styled.div`
  width: 100%;

  /* nothing on desktop/tablet – the widget just renders at full size */
  @media ${media.mobile} {
    /* shrink everything inside by 20% */
    .tikkio-widget-events {
      transform: scale(0.8);
      transform-origin: top center;
    }
  }
`;
export default function UpcomingShows() {

  // const dummyEvents = Array.from({ length: 5 });
  // // ↓ define your border-color cycle
  // const colors = ['#ff4ecb', '#00bfff', '#f7b700'];

  return (
    <UpcomingShowsSection id="upcoming-show">
      <NeonSectionTitleFontSize>KOMMENDE SHOW</NeonSectionTitleFontSize>
      {/* <EndlessScrollContainer>
        {dummyEvents.map((_, idx) => (
          <EventCard key={idx} $borderColor={colors[idx % colors.length]}> */}
          <TikkioWrapper>

            <TikkioWidget />
          </TikkioWrapper>
          {/* </EventCard> */}
        {/* ))} */}
      {/* </EndlessScrollContainer> */}
    </UpcomingShowsSection>
  );
}
