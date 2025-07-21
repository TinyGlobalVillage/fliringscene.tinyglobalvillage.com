// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';

import ComedyClubSign from '../ui/ComedyClubSign';
import NeonSVGTitle from '../ui/NeonSVGTitle';
import MicrophoneSVG from '../ui/MicrophoneSVG';
import NeonFaceSVG from '../ui/NeonFaceSVG';
import NeonArrowSVGButton from '../ui/NeonArrowSVGButton';
import { media } from '@/styles/breakpoints';


const AboveFoldWrapper = styled.section`
margin-top: 100px;
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
    <NeonSVGTitle color="#ff66cc" >
        FLIRING
      </NeonSVGTitle>
      <NeonSVGTitle color="#00bfff" >
        SCENE
      </NeonSVGTitle>
      <ComedyClubSign />
      <FaceMicArrowWrapper>
        <MicrophoneSVG />
        <NeonFaceSVG />
        <NeonArrowSVGButton onClick={() => alert('Go to shows')} />
      </FaceMicArrowWrapper>
    </AboveFoldWrapper>
  );
}
