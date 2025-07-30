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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

scroll-margin-top: 75px;
width: 90%;
max-width: 900px;
height: auto;
margin: 0 auto;
margin-bottom: 100px;
padding: .25rem 1.3rem 20px;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.2);

@media ${media.mobileM}{
scroll-margin-top: 85px;
padding: .25rem 2rem 50px;
}

@media ${media.mobileL}{
padding: .25rem 2rem 45px;
scroll-margin-top: 100px;
}

@media ${media.tablet}{
scroll-margin-top: 110px;
padding: .25rem 8rem 35px;
margin-bottom: 150px;
}

@media ${media.laptop}{
height: 650px;
padding: .25rem 11rem 35px;
}
@media ${media.laptopL}{
height: 700px;
scroll-margin-top: 150px;
padding: 1rem 8rem 3rem;
}
@media ${media.fourK}{
height: auto;
scroll-margin-top: 250px;
padding: 3rem;
}
`;

const HeadingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
margin-bottom: 10px;

@media ${media.mobileM}{
padding-top: 15px;
padding-bottom: 5px;
}
@media ${media.laptop}{
padding-top: 15px;
padding-bottom: 15px;
}
@media ${media.laptopL}{
padding-top: 10px;
padding-bottom: 0px;
}

@media ${media.fourK}{
padding-top: 0px;
padding-bottom: 25px;
}

`;

const TikkioWrapper = styled.div`
box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
border-radius: 25px;

@media ${media.laptopL}{
max-height: 600px;
}

`;
export default function UpcomingShows() {

  // const dummyEvents = Array.from({ length: 5 });
  // // ↓ define your border-color cycle
  // const colors = ['#ff4ecb', '#00bfff', '#f7b700'];

  return (
    <UpcomingShowsSection id="upcoming-show">

      <HeadingWrapper>
        <NeonSectionTitleFontSize>UPCOMING SHOWS</NeonSectionTitleFontSize>
      </HeadingWrapper>
      {/* <EndlessScrollContainer>
{dummyEvents.map((_, idx) => (
<EventCard key={idx} $borderColor={colors[idx % colors.length]}> */}

      <TikkioWrapper>
        <TikkioWidget strategy="lazyOnload" className="sectionTikkio" />
      </TikkioWrapper>

      {/* </EventCard> */}
      {/* ))} */}
      {/* </EndlessScrollContainer> */}
    </UpcomingShowsSection>
  );
}
