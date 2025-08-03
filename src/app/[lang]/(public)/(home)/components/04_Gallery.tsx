'use client';
import styled from 'styled-components';
import Button from '../../../_allPageComponents/buttons/Button';
import { media } from '@/styles/breakpoints';
import { glowPulse } from '../../../_allPageComponents/animations/glowPulse';

const GallerySection = styled.section`
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

  @media ${media.mobileM}{
width: 90%;
min-height: 60vh;
padding: 1.5rem;

}
`;

export default function Gallery() {
  return (
    <GallerySection id='gallery'>
      <h2>Gallery</h2>
      <Button />
      <p>Check out our latest photos and videos!</p>
    </GallerySection>
  )
}
