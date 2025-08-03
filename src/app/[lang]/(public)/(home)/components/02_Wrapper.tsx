'use client';

import styled from "styled-components";
import { media } from "@/styles/breakpoints";

import { glowPulse } from "@/app/[lang]/_allPageComponents/animations/glowPulse";

export const UpcomingShowsSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

scroll-margin-top: 75px;
width: 90%;
max-width: 900px;
height: auto;
margin: 0 auto;
margin-bottom: 100px;
padding: .25rem 1.3rem 20px;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.2);

@media ${media.mobileM}{
scroll-margin-top: 85px;
padding: .25rem 2rem 50px;
}

@media ${media.mobileL}{
padding: .25rem 2rem 45px;
scroll-margin-top: 100px;
}

@media ${media.tablet}{
scroll-margin-top: 110px;
padding: .25rem 8rem 35px;
margin-bottom: 150px;
}

@media ${media.laptop}{
height: 650px;
padding: .25rem 11rem 35px;
}
@media ${media.laptopL}{
height: 700px;
scroll-margin-top: 150px;
padding: 1rem 8rem 3rem;
}
@media ${media.fourK}{
height: auto;
scroll-margin-top: 250px;
padding: 3rem;
}
`;

export const HeadingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
margin-bottom: 10px;

@media ${media.mobileM}{
padding-top: 15px;
padding-bottom: 5px;
}
@media ${media.laptop}{
padding-top: 15px;
padding-bottom: 15px;
}
@media ${media.laptopL}{
padding-top: 10px;
padding-bottom: 0px;
}

@media ${media.fourK}{
padding-top: 0px;
padding-bottom: 25px;
}

`;

export const TikkioWrapper = styled.div`
box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
border-radius: 25px;

@media ${media.laptopL}{
max-height: 600px;
}

/* target the injected widget container and its cards */

.tikkio-widget-events {
display: flex !important;
width: 100% !important;
max-width: 100% !important;
height: 80% !important;
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
font-size: 1.25rem;
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
