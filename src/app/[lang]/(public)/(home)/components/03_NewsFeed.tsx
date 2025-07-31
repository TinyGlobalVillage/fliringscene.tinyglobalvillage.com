'use client';
import styled from 'styled-components';
import { glowPulse } from '../../../_allPageComponents/animations/glowPulse';
import { media } from '@/styles/breakpoints';
import FacebookIframe from '../../../_allPageComponents/facebook/FacebookIframe';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';


const NewsFeedSection = styled.section`
 min-height: 70vh;
  width: 80%;
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

  @media ${media.mobileM}{
width: 90%;
min-height: 60vh;
padding: 1rem;

}
`;


export default function NewsSection() {
  return (
    <NewsFeedSection id="news-feed">
      <NeonSectionTitleFontSize>
        LATEST NEWS
      </NeonSectionTitleFontSize>
      <FacebookIframe />
    </NewsFeedSection>
  );
}
