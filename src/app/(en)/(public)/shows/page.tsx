'use client';
import styled from "styled-components";

import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import { glowPulse } from "../../_allPageComponents/animations/glowPulse";
import { media } from "@/styles/breakpoints";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";

const ShowsSection = styled.div`
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
margin-top: 150px;
margin-bottom: 200px;
}

@media ${media.laptop}{
height: 650px;
margin-top: 110px;
margin-bottom: 200px;
padding: .25rem 11rem 35px;
}

@media ${media.laptopL}{
height: 700px;
margin-top: 150px;
padding: 1rem 9rem 3rem;
}

@media ${media.fourK}{
height: auto;
margin-top: 210px;
padding: 3rem;
}
`;

const HeadingWrapper = styled.div`
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
}

@media ${media.laptopL}{
padding-top: 0px;
padding-bottom: 0px;
}

@media ${media.fourK}{
padding-top: 0px;
padding-bottom: 25px;
}

`;

const WidgetWrapper = styled.div`
box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
border-radius: 25px;

`;

export default function ShowsPage() {
  return (
    <ShowsSection>
      <HeadingWrapper>
        <NeonSectionTitleFontSize>UPCOMING SHOWS</NeonSectionTitleFontSize>
      </HeadingWrapper>
      <WidgetWrapper>
        <TikkioWidget strategy="afterInteractive" className="pageTikkio"/>
      </WidgetWrapper>
    </ShowsSection>
  );
}
