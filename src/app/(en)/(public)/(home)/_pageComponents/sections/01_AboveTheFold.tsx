// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';


import ComedyClubSign from '../ui/ComedyClubSign';
import NeonSVGTitle from '../ui/NeonSVGTitle';
import MicrophoneSVG from '../ui/MicrophoneSVG';
import NeonFaceSVG from '../ui/NeonFaceSVG';
import NeonArrowSVGButton from '../ui/NeonArrowSVGButton';


const AboveFoldWrapper = styled.section`
margin-top: 75px;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FaceMicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function AboveTheFold() {
  return (

    <AboveFoldWrapper>
      <NeonSVGTitle color="#ff66cc" size="7.5rem">FLIRING</NeonSVGTitle>
      <NeonSVGTitle color="#00bfff" size="7.5rem">SCENE</NeonSVGTitle>
      <ComedyClubSign />
      <FaceMicWrapper>
        <MicrophoneSVG />
        <NeonFaceSVG />
      <NeonArrowSVGButton onClick={() => alert('Go to shows')} />
      </FaceMicWrapper>
    </AboveFoldWrapper>

  );
}
