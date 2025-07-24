'use client'
import styled from "styled-components";
import ContactForm from "../../_allPageComponents/forms/ContactForm";
import { media } from "@/styles/breakpoints";


const ContactSection = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media ${media.mobile}, ${media.tablet}
  height: 60vh;
  max-height: 300px;
  }

  `;

  const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  transform-origin: top center;


  @media ${media.mobile} {
    transform: scale(0.8);
  }
  */
`;


export default function ContactPage() {
  return (
     <ContactSection>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </ContactSection>

  )
}
