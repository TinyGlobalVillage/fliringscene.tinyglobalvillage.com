'use client';
import styled from 'styled-components';
import TikkioWidget from '../tikkio/TikkoNextShowWidget';
import { glowPulse } from '../../animations/glowPulse';
import NeonText from '../ui/NeonText';


const UpcomingShowsSection = styled.section`
  background-color: rgba(170, 167, 167, 0.5); // semi-transparent black
  height: auto;
  width: 75%;
  min-width: 300px;
  margin: 0 auto;
  margin-bottom: 25px;
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

export default function UpcomingShows() {
  return (
    <UpcomingShowsSection>
      <NeonText>KOMMENDE SHOW</NeonText>
      <TikkioWidget />
    </UpcomingShowsSection>
  );
}
