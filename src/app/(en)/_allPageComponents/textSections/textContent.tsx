'use client';
import NeonGuys from '../svg/NeonGuysSVG';
import styled from 'styled-components';
import Image from 'next/image';

type TextImageSplitProps = {
  sectionData: {
    text: string;
   images: string[]; 
    alt: string[];
    imageCaptions: string[];
  };
  reverse?: boolean;
};

const SectionWrapper = styled.section`
  padding: 0rem 0rem 2rem;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 300px;
  color: white;

  p {
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -50px;

  img {
    width: 100%;
    max-width: 300px;
    min-width: 250px;
    height: auto;
    filter: drop-shadow(0 0 10px #00bfff);
    border-radius: 25px;
  }
`;
const ImageCaption = styled.p`
  font-size: 0.95rem;
  color: #00bfff;
  text-align: center;
  font-style: italic;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  display: inline-block;
  text-shadow: 0 0 6px rgba(247, 183, 0, 0.6);
`;

export default function TextImageSplit({ sectionData, reverse = false }: TextImageSplitProps) {
  return (
    <SectionWrapper>
      <Container style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <TextBlock>
          {sectionData.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </TextBlock>
  {sectionData.images[0] && (
  <ImageWrapper>
    <div style={{ textAlign: 'center' }}>
      {typeof sectionData.images[0] === 'string' && sectionData.images[0] === 'neon-guys' ? (
        <>
          <NeonGuys />
          {sectionData.imageCaptions?.[0] && (
            <ImageCaption>{sectionData.imageCaptions[0]}</ImageCaption>
          )}
        </>
      ) : typeof sectionData.images[0] === 'string' ? (
        <>
          <Image
            src={sectionData.images[0]}
            alt={sectionData.alt[0] || 'Section image'}
            width={400}
            height={400}
            priority
          />
          {sectionData.imageCaptions?.[0] && (
            <ImageCaption>{sectionData.imageCaptions[0]}</ImageCaption>
          )}
        </>
      ) : (
        <>
          {sectionData.images[0]}
          {sectionData.imageCaptions?.[0] && (
            <ImageCaption>{sectionData.imageCaptions[0]}</ImageCaption>
          )}
        </>
      )}
    </div>
  </ImageWrapper>
)}

      </Container>
    </SectionWrapper>
  );
}
