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
            <p>Welcome to Fliring Scene – Steinkjer’s new, intimate, and inclusive cultural stage in Breidablikkgården!</p>
            <p>Here, local stand‑up, speeches, revues, improv, singing, and music will have room to flourish, whether you’re a seasoned pro or a complete beginner. This is the place where laughter, stories, and great experiences take center stage.</p>
            <p>Behind Fliring Scene are the passionate founders Johan Halseth and Andreas Trætli, who have joined forces to create an arena for the full breadth of cultural life. Are you from Steinkjer or the surrounding area and eager to try your hand on stage?</p>
            <p>Send us a short video clip at hei@fliring.no – we can’t wait to discover new faces and hear fresh jokes!</p>
            <p>For only NOK 200 you can become a member of Fliring Scene, support the city’s new cultural hub, enjoy discounts on all our events – and maybe a surprise or two. Sign up by sending NOK 200 via Vipps to 961768. See you at Breidablikkgården!</p>
        </AboutSection>
        </>
    );
}
