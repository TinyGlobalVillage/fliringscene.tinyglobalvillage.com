'use client';
import styled from 'styled-components';

const GallerySection = styled.section`
   background-color: rgba(170, 167, 167, 0.5); // semi-transparent black
  height: 100vh;
  width: 75%;
  min-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  export default function Gallery() {
    return (
        <GallerySection>
            <h2>Gallery</h2>
            {/* Add your gallery content here */}
            <p>Check out our latest photos and videos!</p>
        </GallerySection>
    )
  }
