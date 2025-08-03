'use client';
import styled from 'styled-components';
import ImageGallery from '../../_allPageComponents/gallery/imageGallery';

const GallerySection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 20;
  min-height: 100vh;
  gap: 2rem;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  text-align: center;
`;

export default function GalleryPage(): React.ReactElement {
  return (
    <GallerySection>
      <Heading>Gallery</Heading>
      <Description>This is the gallery page. Explore our images below.</Description>
      <ImageGallery />
    </GallerySection>
  );
}
