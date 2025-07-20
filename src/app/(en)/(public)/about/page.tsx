'use client';
import styled from "styled-components";

const AboutSection = styled.div`
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

export default function About() {
    return (
        <>
        <AboutSection>
            <h1>About Us</h1>
            <p>Welcome to Fliring Scene, your premier destination for comedy and entertainment. We are dedicated to bringing you the best in stand-up comedy, improv, and live performances.</p>
            <p>Our mission is to create a vibrant community where laughter thrives and artists shine. Join us for an unforgettable experience!</p>
        </AboutSection>
        </>
    );
}
