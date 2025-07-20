'use client'
import styled from "styled-components";

const ContactSection = styled.div`
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



export default function ContactPage() {
    return (
        <>
        <ContactSection>
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Please reach out with any questions or feedback.</p>

        </ContactSection>
        </>
    )
}
