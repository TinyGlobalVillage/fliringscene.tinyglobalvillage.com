'use client';
import styled from 'styled-components';
import { glowPulse } from '../../animations/glowPulse';



const NewsFeedSection = styled.section`
  background-color: rgba(170, 167, 167, 0.5); // semi-transparent black
  height: 100vh;
  width: 75%;
  margin-bottom: 25px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid #f7b700;
    border-radius: 28px;
    animation: ${glowPulse} 2.5s infinite;
    box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
    background: rgba(0, 0, 0, 0.1);
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
