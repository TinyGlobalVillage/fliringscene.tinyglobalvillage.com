'use client';
import styled from 'styled-components';
import NeonText from '../../../_allPageComponents/headers/NeonTextFontSize';
import LightBulbFrame from './AboveFoldLightBulbFrame';


const ComedyClubSignWrapper = styled.div`
`;

export default function ComedyClubSign() {
  return (
    <ComedyClubSignWrapper>
      <LightBulbFrame>
        <NeonText color="#ff66cc">COMEDY</NeonText>
        <NeonText color="#00bfff">CLUB</NeonText>
      </LightBulbFrame>
    </ComedyClubSignWrapper>
  );
}
