'use client';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const GalleryWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff66cc;
  // z-index: 20;
  // min-height: 100vh;
  gap: 1rem;
  box-sizing: border-box;

  @media ${media.tablet}{
  margin-top: 75px;
}

  @media ${media.laptop}{

}

`;
