'use client';

import SignWrapper from './SignWrapper';
import Nav from './Nav';
import NeonText from './NeonText';
import FramedBox from './FramedBox';
import MicrophoneSVG from './MicrophoneSVG';
import NeonFaceSVG from './NeonFaceSVG';
import NeonArrowSVGButton from './NeonArrowSVGButton';

export default function ComedyClubSign() {
  return (
    <SignWrapper>
      <Nav>
        <span>HJEM</span>
        <span>SHOW</span>
        <span>OM</span>
        <span>KONTAKT</span>
      </Nav>
      <NeonText color="#ff66cc" size="3.5rem">Fliring</NeonText>
      <NeonText color="#00bfff" size="3.5rem">Scene</NeonText>
      <FramedBox>
        <NeonText color="#ff3300" size="2rem">Comedy</NeonText>
        <NeonText color="#00bfff" size="2rem">Club</NeonText>
      </FramedBox>
      <MicrophoneSVG />
      <NeonFaceSVG />
      <NeonArrowSVGButton onClick={() => alert('Go to shows')} />
    </SignWrapper>
  );
}
