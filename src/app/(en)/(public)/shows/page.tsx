'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../(home)/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
  min-height: 70vh;
//   scroll-margin-top: 100px;
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
//   margin-top: 100px;
  margin-bottom: 35px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid #f7b700;
  border-radius: 28px;
  animation: ${glowPulse} 2.5s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  background: rgba(0, 0, 0, 0.1);

  @media ${media.mobile}{
width: 90%;

}

`;

export default function ShowsPage() {
    return (
        <ShowsSection>
            <NeonSectionTitleFontSize>
                KOMMENDE SHOW
            </NeonSectionTitleFontSize>
            <TikkioWidget />
        </ShowsSection>
    );
}
