'use client';
import styled from 'styled-components';
import NeonText from '../headers/NeonTextFontSize';
import LightBulbFrame from './AboveFoldLightBulbFrame';

type ComedyClubSignProps = {
  dict: {
    title: string;
    subtitle: string;
  }
}

const ComedyClubSignWrapper = styled.div`
position: relative;
z-index: 1;
`;

export default function ComedyClubSign({ dict }: ComedyClubSignProps) {
  return (
    <ComedyClubSignWrapper>
      <LightBulbFrame>
        <NeonText color="#ff66cc">{dict.title}</NeonText>
        <NeonText color="#00bfff">{dict.subtitle}</NeonText>
      </LightBulbFrame>
     </ComedyClubSignWrapper>
  );
}
