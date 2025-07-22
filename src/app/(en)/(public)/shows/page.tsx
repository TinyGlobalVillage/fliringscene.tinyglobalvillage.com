'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../(home)/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
  min-height: 70vh;
  min-width: 300px;
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 30px;
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
   margin-top: 100px;
   max-height: 550px;
  }
`;

const WidgetWrapper = styled.div`
  padding: 1rem;
  overflow: visible;

  @media ${media.mobile} {
    transform-origin: top center;
    transform: scale(0.9);
  }

  /* ensure the inner widget fills this container */
  & > div {
    width: 100% !important;
  }
    `;

export default function ShowsPage() {
    return (
        <ShowsSection>
            <NeonSectionTitleFontSize>
                KOMMENDE SHOW
            </NeonSectionTitleFontSize>
            <WidgetWrapper>
                <TikkioWidget />
            </WidgetWrapper>
        </ShowsSection>
    );
}
