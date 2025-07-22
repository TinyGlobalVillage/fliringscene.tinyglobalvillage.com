'use client'
import styled from "styled-components";
import ContactForm from "../_allPageComponents/forms/ContactForm";


const ContactSection = styled.div`
  width: 100%;
  margin: 0 auto;
  // padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  z-index: 20;
  height: auto;
  gap: 1rem;
  `;


export default function ContactPage() {
  return (
    <ContactSection>
      <ContactForm />
    </ContactSection>

  )
}
