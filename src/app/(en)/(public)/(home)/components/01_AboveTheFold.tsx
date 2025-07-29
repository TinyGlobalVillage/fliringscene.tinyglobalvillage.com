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
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
margin-bottom: 100px;

@media ${media.mobileM} {
margin-top: 90px;
margin-bottom: 200px;
}

@media ${media.mobileL} {
margin-top: 160px;
}

@media ${media.tablet} {
margin-top: 180px;
margin-bottom: 300px;
}

@media ${media.laptop} {
margin-top: 110px;
margin-bottom: 300px;
}
@media ${media.laptopL} {
margin-top: 180px;
margin-bottom: 300px;
}

`;

const SubtitleWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
gap: 0.5rem;
width: 100%;
max-width: 700px;
padding: 0rem 1rem 0rem 1.5rem;
margin-bottom: -20px;

@media ${media.mobileM}{
margin-top: -15px;
gap: 0;
}
@media ${media.mobileL}{
margin-top: -10px;
margin-bottom: -20px;
}
@media ${media.tablet}{
margin-top: 5px;
margin-bottom: -10px;
}
@media ${media.laptop}{
margin-top: 15px;
margin-bottom: 0px;
}
@media ${media.laptopL}{
margin-top: 25px;
gap: 0rem;
margin-right: 50px
}

`;

const FaceMicWrapper = styled.div`
display: flex;
flex-direction: row;

@media ${media.laptop}{
margin-right: 22px;
}
@media ${media.laptopL}{
margin-right: 70px;
}
`;

const ComedyClubSignArrowWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export default function AboveTheFold() {
  return (

    <AboveFoldWrapper>

      <div>
        <NeonTitleFontSize color="#ff66cc" >FLIRING</NeonTitleFontSize>
      </div>

      <SubtitleWrapper>

        <FaceMicWrapper>
          <MicrophoneSVG />
          <NeonFaceSVG />
        </FaceMicWrapper>
        <NeonSubtitleFontSize color="#00bfff" >SCENE</NeonSubtitleFontSize>
      </SubtitleWrapper>

      <ComedyClubSignArrowWrapper>
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
      </ComedyClubSignArrowWrapper>

    </AboveFoldWrapper>
  );
}
