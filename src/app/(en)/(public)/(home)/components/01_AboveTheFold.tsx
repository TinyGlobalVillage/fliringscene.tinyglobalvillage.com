// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';
import ComedyClubSign from '@/app/(en)/_allPageComponents/ui/ComedyClubSign';
import NeonTitleFontSize from '@/app/(en)/_allPageComponents/headers/NeonTitleFontSize';
import NeonSubtitleFontSize from '@/app/(en)/_allPageComponents/headers/NeonSubtitleFontSize';
import MicrophoneSVG from '@/app/(en)/_allPageComponents/svg/MicrophoneSVG';
import NeonFaceSVG from '@/app/(en)/_allPageComponents/svg/NeonFaceSVG';
import NeonArrowSVGButton from '@/app/(en)/_allPageComponents/buttons/NeonArrowSVGButton';
import { media } from '@/styles/breakpoints';
import { PulsingWrapper } from '@/app/(en)/_allPageComponents/animations/pulseEffect';

const AboveFoldWrapper = styled.section`
width: 100%;
// height: 100dvh;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
margin-bottom: 100px;

@media ${media.mobileM} {
  margin-top: 80px;
  }
@media ${media.tablet} {
  margin-top: 120px;
  padding-top: 0;
  }
`;

const Heading = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2px;

  @media ${media.mobileM}{
  margin-bottom: 5px;
  }

`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: .75rem;

  @media ${media.tablet}{

  }

`;

const FaceMicWrapper = styled.div`
display: flex;
flex-direction: row;

 @media ${media.tablet} {
  margin-right: -20px;
  }

  @media ${media.mobileM} {
    margin-right: 0px;
    }
`;


export default function AboveTheFold() {
  return (

    <AboveFoldWrapper>
      <Heading>

      <NeonTitleFontSize color="#ff66cc" >FLIRING</NeonTitleFontSize>

      <TitleWrapper>
        <FaceMicWrapper>
          <MicrophoneSVG />
          <NeonFaceSVG />
        </FaceMicWrapper>

        <NeonSubtitleFontSize color="#00bfff" >SCENE</NeonSubtitleFontSize>
      </TitleWrapper>
      </Heading>

      <ComedyClubSign />
      <PulsingWrapper
        $color="#fe9e17"
        $scale={1.02}
        $duration="3s"
        $easing="ease-in"
        $iterationCount="infinite"
      >
        <NeonArrowSVGButton />
      </PulsingWrapper>
    </AboveFoldWrapper>
  );
}
