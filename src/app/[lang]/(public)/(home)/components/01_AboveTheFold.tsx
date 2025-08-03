// src/components/AboveTheFold.tsx
'use client';

import { AboveFoldWrapper, SubtitleWrapper, FaceMicWrapper, ComedyClubSignArrowWrapper } from './01_Wrapper';
import ComedyClubSign from '@/app/[lang]/_allPageComponents/ui/ComedyClubSign';
import NeonTitleFontSize from '@/app/[lang]/_allPageComponents/headers/NeonTitleFontSize';
import NeonSubtitleFontSize from '@/app/[lang]/_allPageComponents/headers/NeonSubtitleFontSize';
import MicrophoneSVG from '@/app/[lang]/_allPageComponents/svg/MicrophoneSVG';
import NeonFaceSVG from '@/app/[lang]/_allPageComponents/svg/NeonFaceSVG';
import NeonArrowSVGButton from '@/app/[lang]/_allPageComponents/buttons/NeonArrowSVGButton';
import { PulsingWrapper } from '@/app/[lang]/_allPageComponents/animations/pulseEffect';

import type { Dictionary } from '@/data/i18n/types';

type AboveTheFoldProps = {
  dict: Dictionary['home']['aboveTheFold'];
};

export default function AboveTheFold({ dict }: AboveTheFoldProps) {
  return (

    <AboveFoldWrapper>

      <div>
        <NeonTitleFontSize color="#ff66cc" >{dict.title}</NeonTitleFontSize>
      </div>

      <SubtitleWrapper>

        <FaceMicWrapper>
          <MicrophoneSVG />
          <NeonFaceSVG />
        </FaceMicWrapper>

        <NeonSubtitleFontSize color="#00bfff" >{dict.subtitle}</NeonSubtitleFontSize>

      </SubtitleWrapper>

      <ComedyClubSignArrowWrapper>

        <ComedyClubSign dict={dict.comedySign} />

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
