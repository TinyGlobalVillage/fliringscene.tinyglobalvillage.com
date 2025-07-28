'use client';
// import styled from 'styled-components';
import NeonText from '../headers/NeonTextFontSize';
import LightBulbFrame from './AboveFoldLightBulbFrame';


// const ComedyClubSignWrapper = styled.div`
// z-index: 10;
// `;

export default function ComedyClubSign() {
  return (
    // <ComedyClubSignWrapper>
      <LightBulbFrame>
        <NeonText color="#ff66cc">COMEDY</NeonText>
        <NeonText color="#00bfff">CLUB</NeonText>
      </LightBulbFrame>
    // </ComedyClubSignWrapper>
  );
}
