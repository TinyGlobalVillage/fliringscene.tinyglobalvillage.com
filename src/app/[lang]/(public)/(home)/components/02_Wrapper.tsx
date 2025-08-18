'use client';

import styled, { keyframes } from "styled-components";
import { media } from "@/styles/breakpoints";

import { glowPulse } from "@/app/[lang]/_allPageComponents/animations/glowPulse";


/* ---- Loading placeholder (shimmer) ---- */
const upcomingShimmer = keyframes`
0% { background-position: 200% 0; }
100% { background-position: -200% 0; }
`;

export const LoadingPlaceholder = styled.div`
min-height: 260px;
border-radius: 16px;
overflow: hidden;
background: linear-gradient(
90deg,
rgba(255,255,255,0.06) 25%,
rgba(255,255,255,0.15) 37%,
rgba(255,255,255,0.06) 63%
);
background-size: 400% 100%;
animation: ${upcomingShimmer} 1.2s linear infinite;

@media (prefers-reduced-motion: reduce) {
animation: none;
}
`;

/* ---- If you prefer simple text-only loading ---- */
const pulse = keyframes`
0%   { transform: scale(1);   opacity: .75; }
50%  { transform: scale(1.06); opacity: 1;   }
100% { transform: scale(1);   opacity: .75; }
`;

export const LoadingText = styled.p`
text-align: center;
margin: 14px 0 12px;
padding: 2rem;

 /* readable pill */
  color: #ffffff;                         /* readable on dark */
  background: rgba(0, 0, 0, 0.72);        /* darken behind text */
//   border: 1px solid #ff4ecb;              /* keep brand accent */
  border-radius: 16px;                   /* pill */
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;       /* soft cyan halo (subtle) */
    inset 0 0 0 1px rgba(255,255,255,0.05);

  font-weight: 700;
  letter-spacing: .02em;

animation: ${pulse} 1.1s ease-in-out infinite;
will-change: transform;

    @media (prefers-reduced-motion: reduce) {
    animation: none;
    }

    /* accessibility: boost contrast when requested */
    @media (prefers-contrast: more) {
    background: #000;                     /* solid */
    box-shadow: none;
    border-color: #fff;
    color: #fff;
    }
`;

/* ---- Empty state wrapper ---- */
export const EmptyState = styled.div`
  text-align: center;
  padding: 18px 16px;
  border-radius: 16px;

  /* readable panel */
  color: #ffffff;
  background: rgba(0, 0, 0, 0.72);

border-radius: 25px;
//   border: 1px solid rgba(255, 78, 203, 0.6);
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;

    h3 {
    margin: 0 0 .5rem;
    }
    p {
    margin: 0 0 1rem;
    opacity: 0.95;
    }
`;


export const UpcomingShowsSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
scroll-margin-top: 120px;

// border: 2px solid red;
width: 100%;
margin-bottom: 110px;

`;

export const ShowsWrapper = styled.div`
// width: 100%;
border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.2);

padding: 0rem 2rem 25px;
// scroll-margin-top: 75px;

@media ${media.mobileM}{

// padding: .25rem 2rem 50px;
}

@media ${media.mobileL}{
// padding: .25rem 2rem 45px;
scroll-margin-top: 100px;
}

@media ${media.tablet}{
scroll-margin-top: 110px;
// padding: 0rem 8rem 40px;
// margin-bottom: 150px;
}

@media ${media.laptop}{
// height: 650px;
// margin-top: 110px;
// margin-bottom: 200px;
// padding: .25rem 11rem 35px;
}

@media ${media.laptopL}{
// height: 700px;
// padding: 1rem 9rem 35px;
}

`;

export const HeadingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
margin-bottom: 10px;


`;

export const TikkioWrapper = styled.div`
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
  border-radius: 25px;

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
