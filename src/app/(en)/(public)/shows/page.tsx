'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../../_allPageComponents/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
width: 90%;
margin: 0 auto;
margin-top: 90px;
margin-bottom: 100px;
padding: 1.25rem;

display: flex;
flex-direction: column;
align-items: center;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.1);

@media ${media.mobileM}{

}
`;

const WidgetWrapper = styled.div`

box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
border-radius: 25px;

/* target the injected widget container and its cards */

.tikkio-widget-events {
display: flex !important;
width: 100% !important;
max-width: 100% !important;
height: 100% !important;
flex-direction: column;
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
font-size: 1.5rem;
color: #ff4ecb !important;
}

.tikkio-widget-buy-ticket {
cursor: pointer !important;
border-radius: 0 0 15px 15px !important;
border: 1px solid #cc00aa !important;
color: #fff !important;
background:rgba(204, 0, 170, .9) !important;
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
        UPCOMING SHOW
      </NeonSectionTitleFontSize>
      <WidgetWrapper>
        <TikkioWidget strategy="afterInteractive" />
      </WidgetWrapper>
    </ShowsSection>
  );
}
