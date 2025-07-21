// src/components/AboveTheFold.tsx
'use client';
import styled from 'styled-components';

import ComedyClubSign from '../ui/ComedyClubSign';
import NeonSVGTitle from '../ui/NeonSVGTitle';
import MicrophoneSVG from '../ui/MicrophoneSVG';
import NeonFaceSVG from '../ui/NeonFaceSVG';
import NeonArrowSVGButton from '../ui/NeonArrowSVGButton';
import useResponsiveFontSize from '@/hook-utils/useResponsiveResize';


const AboveFoldWrapper = styled.section`
margin-top: 100px;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
`;

const FaceMicArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export default function AboveTheFold() {

  const { fontSize, viewBoxHeight} = useResponsiveFontSize();
  return (

    <AboveFoldWrapper>
    <NeonSVGTitle color="#ff66cc" fontSize={fontSize} viewBoxHeight={viewBoxHeight}>
        FLIRING
      </NeonSVGTitle>
      <NeonSVGTitle color="#00bfff" fontSize={fontSize} viewBoxHeight={viewBoxHeight}>
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
