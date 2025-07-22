'use client'
import styled from "styled-components";
import ContactForm from "../_allPageComponents/forms/ContactForm";
import { media } from "@/styles/breakpoints";


const ContactSection = styled.div`
  width: 100%;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media ${media.mobile}, ${media.tablet}

  }

  `;

  const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;         /* desktop cap */
  transform-origin: top center;

  @media ${media.mobile} {
    /* Option A: just let it shrink via width */
    width: 90%;
  }

  /* Option B: if you really want to scale instead:
  @media ${media.mobile} {
    transform: scale(0.9);
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
