'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../../_allPageComponents/_nonComponentHelpers/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 110px;
  margin-bottom: 50px;
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
width: 100%;
  max-width: 670px;
  // height: 110%;               /* fill its parent’s height */
  display: flex;
  /* center content if you like: */
  justify-content: center;
  align-items: stretch;       /* stretch children to full height */

  /* neon border / shadow: */
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
  border-radius: 25px;


  /* target the injected widget container and its cards */
  .tikkio-widget-events {
    display: flex !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;        /* now they have real height */
    flex-direction: column;         /* or row, depending on layout */
  }
  .tikkio-widget-events > * {
    flex: 1 1 auto !important;
    width: 100% !important;
    height: 100% !important;
  }
            .tikkio-widget-event-image {
              border-radius: 15px 15px 0px 0px;
            }
            .tikkio-widget-event-inner-content {
              background-color: rgba(0, 0, 0, 0.9)!important;
              color: #fff !important;
              font-size: 1.5rem !important;
              height: auto !important;
            }
            .tikkio-widget-event-title {
              font-size: 1rem !important;
              line-height: 1.7rem !important;
              height: auto !important;
            }
            .location {
              font-size: 2rem;
              color: #ff4ecb !important;
            }

            .tikkio-widget-buy-ticket {
              cursor: pointer !important;
              border-radius: 0 0 15px 15px !important;
              border: 1px solid #cc00aa !important;
              color: #fff !important;
              background:rgba(204, 0, 170, .9) !important;
              // transition: transform 0.2s ease, filter 0.2s ease !important;
              // transform-origin: bottom center !important;
            }
            .tikkio-widget-buy-ticket:hover {
            background:
              color: #fff !important;
              background: #00bfff !important;
              border: 1px solid #00bfff !important;
              transform: scaleY(1.1) !important;
              filter: drop-shadow(0 0 8px #00bfff) !important;
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
