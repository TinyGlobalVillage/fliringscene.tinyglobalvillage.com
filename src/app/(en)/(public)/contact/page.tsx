'use client';
import styled from 'styled-components';
import ContactForm from '../../_allPageComponents/forms/ContactForm';

const ContactSection = styled.section`
width: 100%;
margin: 0 auto;
margin-top: 90px;
margin-bottom: 100px;
padding: 1.25rem;

display: flex;
flex-direction: column;
align-items: center;

`;


export default function ContactPage() {
  return (
    <ContactSection>
        <ContactForm />
    </ContactSection>
  );
}
