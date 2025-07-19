// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';

const HeroSection = styled.section`
width: 50%;
margin: 0 auto;
height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #ff4ecb;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow:
    0 0 5px #ff4ecb,
    0 0 10px #ff4ecb,
    0 0 20px #ff4ecb,
    0 0 40px #ff0066,
    0 0 60px #ff0066,
    0 0 80px #ff0066;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
// animation: flicker 2s infinite;

// @keyframes flicker {
//   0%, 100% { opacity: 1; }
//   45% { opacity: 0.9; }
//   50% { opacity: 0.5; }
//   55% { opacity: 0.95; }
// }


const Subtitle = styled.h2`
  font-size: 3rem;
  color: #33c6ff;
  margin: 0.5rem 0;
  text-shadow: 0 0 5px #33c6ff, 0 0 10px #33c6ff;
`;

const NeonBox = styled.div`
  border: 3px solid #ffbd4a;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin: 1rem 0;
  font-size: 2rem;
  color: #ff4ecb;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 8px #ffbd4a;
`;

const CTAButton = styled.button`
  margin-top: 2rem;
  font-size: 1.3rem;
  padding: 0.75rem 2rem;
  background: #ffbd4a;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 10px #ffbd4a;

  &:hover {
    background: #ffd86b;
    box-shadow: 0 0 15px #ffd86b;
  }
`;

export default function AboveTheFold() {
  return (

    <HeroSection>
      <Title>FLIRING</Title>
      <Subtitle>SCENE</Subtitle>
      <NeonBox>COMEDY CLUB</NeonBox>
      <CTAButton>🎤 Upcoming Shows</CTAButton>
    </HeroSection>

  );
}
