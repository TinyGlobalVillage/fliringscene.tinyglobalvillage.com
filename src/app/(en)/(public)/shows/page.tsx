'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../../_allPageComponents/_nonComponentHelpers/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 110px;
  margin-bottom: 100px;
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
    padding: 15px 0px 25px 0px;
  height: 60vh;

   max-height: 550px;
  }
`;

const WidgetWrapper = styled.div`
    overflow: visible;
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff !important;
  border-radius: 25px;

  @media ${media.mobile} {

    transform-origin: top center;
    transform: scale(0.8);
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
