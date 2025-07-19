'use client';
import styled from 'styled-components';

const Section = styled.section`
  background: #f0f0f0;
  width: 75%;
  height: 100vh;
  min-width: 400px;
  `;

  export default function Gallery() {
    return (
        <Section>
            <h2>Gallery</h2>
            {/* Add your gallery content here */}
            <p>Check out our latest photos and videos!</p>
        </Section>
    )
  }
