//(home)/components/02_UpcomingShows.tsx

'use client';
import styled from 'styled-components';
import { glowPulse } from '../../../_allPageComponents/animations/glowPulse';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { media } from '@/styles/breakpoints';

// import EndlessScrollContainer from '@/app/(en)/_allPageComponents/scroll-containers/_endlessScrollContainer copy';
// import EventCard from '@/app/(en)/_allPageComponents/cards/EventCard';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkoWidget';


const UpcomingShowsSection = styled.section`
scroll-margin-top: 80px;
width: 90%;
height: auto;
margin: 0 auto;
margin-bottom: 100px;
padding: .25rem 1rem;

display: flex;
flex-direction: column;
align-items: center;
border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.2);

@media ${media.mobileM}{
  margin-top: 10px;
  scroll-margin-top: 90px;
  padding: 1.25rem 1rem;
  }
@media ${media.mobileL}{
  scroll-margin-top: 100px;

  }

@media ${media.tablet}{
scroll-margin-top: 115px;
padding-bottom: 0;
padding: 1.8rem;
}
`;

const TikkioWrapper = styled.div`
box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
border-radius: 25px;


/* target the injected widget container and its cards */

.tikkio-widget-events {
display: flex !important;
width: 100% !important;
max-width: 100% !important;
height: 100% !important;
flex-direction: column;
}

.tikkio-widget-events > * {
flex: 1 1 auto !important;
width: 100% !important;
height: 100% !important;
}

.tikkio-widget-event-image {
border-radius: 15px 15px 0px 0px;
}

.tikkio-widget-event-inner-content {
background-color: rgba(0, 0, 0, 0.9)!important;
color: #fff !important;
font-size: 1.5rem !important;
height: auto !important;
}

.tikkio-widget-event-title {
font-size: 1rem !important;
line-height: 1.7rem !important;
height: auto !important;
}

.location {
font-size: 1.5rem;
color: #ff4ecb !important;
}

.tikkio-widget-buy-ticket {
cursor: pointer !important;
border-radius: 0 0 15px 15px !important;
border: 1px solid #cc00aa !important;
color: #fff !important;
background:rgba(204, 0, 170, .9) !important;
}

.tikkio-widget-buy-ticket:hover {
background:
color: #fff !important;
background: #00bfff !important;
border: 1px solid #00bfff !important;
transform: scaleY(1.1) !important;
filter: drop-shadow(0 0 8px #00bfff) !important;
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

        <TikkioWidget strategy="lazyOnload" />
      </TikkioWrapper>
      {/* </EventCard> */}
      {/* ))} */}
      {/* </EndlessScrollContainer> */}
      <div></div>
    </UpcomingShowsSection>
  );
}
