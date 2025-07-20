'use client';
import styled from "styled-components";
import Navbar from "../_allPageComponents/NavBar";

const GallerySection = styled.div`
 width: 500px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 300px;
  color: white;
  z-index: 20;
  height: 100vh;
  gap: 1rem;
`;

export default function GalleryPage() {
    return (
        <GallerySection>
            <Navbar />
            <h1>Gallery</h1>
            <p>This is the gallery page.</p>
        </GallerySection>
    )
}
