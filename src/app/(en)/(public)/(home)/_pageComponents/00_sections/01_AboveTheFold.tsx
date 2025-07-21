// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';

import ComedyClubSign from '../ui/ComedyClubSign';
import NeonTitleFontSize from '../../../_allPageComponents/headers/NeonTitleFontSize';
import MicrophoneSVG from '../svg/MicrophoneSVG';
import NeonFaceSVG from '../svg/NeonFaceSVG';
import NeonArrowSVGButton from '../svg/NeonArrowSVGButton';
import { media } from '@/styles/breakpoints';


const AboveFoldWrapper = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;

   @media ${media.mobile} {
  margin-top: 75px;
  }
`;

const FaceMicArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export default function AboveTheFold() {
  return (

    <AboveFoldWrapper>
      <NeonTitleFontSize color="#ff66cc" >
        FLIRING
      </NeonTitleFontSize>
      <NeonTitleFontSize color="#00bfff" >
        SCENE
      </NeonTitleFontSize>
      <ComedyClubSign />
      <FaceMicArrowWrapper>
        <MicrophoneSVG />
        <NeonFaceSVG />
        <NeonArrowSVGButton onClick={() => alert('Go to shows')} />
      </FaceMicArrowWrapper>
    </AboveFoldWrapper>
  );
}
