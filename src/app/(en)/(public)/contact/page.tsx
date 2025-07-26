'use client';
import styled from 'styled-components';
import ContactForm from '../../_allPageComponents/forms/ContactForm';
import { media } from '@/styles/breakpoints';

const ContactSection = styled.section`
  width: 100%;
  padding: 100px 2rem;           /* give top & bottom breathing room */
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* if you really want to target mobile, do it properly */
  @media ${media.mobile}, ${media.tablet} {
    padding: 50px 1rem;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export default function ContactPage() {
  return (
    <ContactSection>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </ContactSection>
  );
}
