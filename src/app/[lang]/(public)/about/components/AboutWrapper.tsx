'use client';
import styled from "styled-components";
import { media } from "@/styles/breakpoints";
import { glowPulse } from '../../../_allPageComponents/animations/glowPulse';

export const AboutSection = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);

  width: min(90vw, 900px);
  margin: 70px auto 100px;

  padding: 0.25rem 1.3rem 0px;

  border: 8px solid #f7b700;
  border-radius: 50px;
  animation: ${glowPulse} 2s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;

  @media ${media.mobileM} {
    padding: 0.25rem 2rem 40px;
    margin: 90px auto 80px;
  }

  @media ${media.mobileL} {
    scroll-margin-top: 65px;
    padding: 0.25rem 2rem 50px;
    margin: 90px auto 90px;
  }

  @media ${media.tablet} {
    margin-top: 150px;
    margin-bottom: 200px;
  }

  @media ${media.laptop} {
    height: auto;
    margin-top: 150px;
    margin-bottom: 200px;
    padding: 0.25rem 5rem 35px;
  }

  @media ${media.laptopL} {
    margin-top: 150px;
    padding: 1rem 5rem 3rem;
  }

  @media ${media.fourK} {
    margin-top: 210px;
    padding: 3rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;

  @media ${media.mobileM} {
    padding-top: 15px;
    margin-bottom: 15px;
  }

  @media ${media.laptop} {
    padding-top: 15px;
    padding-bottom: 10px;
  }

  @media ${media.laptopL} {
    padding-top: 15px;
    padding-bottom: 10px;
  }

  @media ${media.fourK} {
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;

export const AboutTextWrapper = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;

// @media ${media.mobileM}{
// max-width: 100%;
// }


`;
