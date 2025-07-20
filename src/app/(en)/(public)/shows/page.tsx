'use client';
import styled from "styled-components";

const ShowsSection = styled.div`
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

export default function ShowsPage() {
    return (
        <>
        <ShowsSection>
            <h1>Our Shows</h1>
            <p>Explore our diverse range of shows that cater to all interests and tastes.</p>
        </ShowsSection>
        </>
    );
}
