'use client';
import styled from "styled-components";
import { glowPulse } from "../../_allPageComponents/animations/glowPulse";
import { media } from "@/styles/breakpoints";



export const ShowsSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 90%;
max-width: 900px;
margin: 70px auto 100px;

padding: .25rem 1.3rem 20px;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.1);

@media ${media.mobileM}{
padding: .25rem 2rem 40px;
margin: 90px auto 80px;
  }

@media ${media.mobileL}{
scroll-margin-top: 65px;
padding: .25rem 2rem 50px;
margin: 90px auto 90px;
}

@media ${media.tablet}{
margin-top: 120px;
padding: .25rem 2rem 30px;
margin-bottom: 200px;
}

@media ${media.laptop}{
height: 650px;
margin-top: 150px;
margin-bottom: 200px;
padding: .25rem 11rem 35px;
}

@media ${media.laptopL}{
height: 700px;
padding: 1rem 9rem 35px;
}
`;

export const HeadingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
padding-bottom: 5px;
margin-bottom: 10px;

@media ${media.mobileM}{
padding-top: 15px;
margin-bottom: 15px;
  }

@media ${media.laptop}{
padding-top: 15px;
padding-bottom: 10px;
margin-top: -10px;
margin-bottom: -10px;
}

@media ${media.laptopL}{
margin-bottom: 0;
margin-top: -15px;
}

`;

export const WidgetWrapper = styled.div`

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
font-size: 1.25rem !important;
height: auto !important;
}

.tikkio-widget-event-title {
font-size: 1rem !important;
line-height: 1.25rem !important;
height: auto !important;
}

.location {
font-size: 1.5rem;
color: #ff4ecb !important;
}

.tikkio-widget-buy-ticket {
cursor: pointer !important;
padding: 7px 20px !important;
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
