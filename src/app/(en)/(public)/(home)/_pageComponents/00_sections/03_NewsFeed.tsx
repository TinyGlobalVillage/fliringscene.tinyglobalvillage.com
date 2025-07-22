'use client';
import styled from 'styled-components';
import { glowPulse } from '../../animations/glowPulse';
import { media } from '@/styles/breakpoints';


const NewsFeedSection = styled.section`
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
import FacebookFeed from '../facebook/FacebookFeed';

export default function NewsSection() {
  return (
    <NewsFeedSection>
      <h2>Latest News</h2>
      <FacebookFeed />
    </NewsFeedSection>
  );
}
