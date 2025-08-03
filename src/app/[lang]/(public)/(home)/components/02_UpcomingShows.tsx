//(home)/components/02_UpcomingShows.tsx

'use client';

import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkoWidget';
import { UpcomingShowsSection, HeadingWrapper, TikkioWrapper } from './02_Wrapper';
import type { Dictionary } from '@/data/i18n/types';
// import EndlessScrollContainer from '@/app/(en)/_allPageComponents/scroll-containers/_endlessScrollContainer copy';
// import EventCard from '@/app/(en)/_allPageComponents/cards/EventCard';

type UpcomingShowProps = {
  dict:
  Dictionary['home']['upcomingShows'];
};

export default function UpcomingShows({ dict }: UpcomingShowProps) {

  return (
    <UpcomingShowsSection id="upcoming-show">

      <HeadingWrapper>
        <NeonSectionTitleFontSize>{dict.title}</NeonSectionTitleFontSize>
      </HeadingWrapper>
      {/* <EndlessScrollContainer>
{dummyEvents.map((_, idx) => (
<EventCard key={idx} $borderColor={colors[idx % colors.length]}> */}

      <TikkioWrapper>
        <TikkioWidget strategy="lazyOnload" />
      </TikkioWrapper>

      {/* </EventCard> */}
      {/* ))} */}
      {/* </EndlessScrollContainer> */}
    </UpcomingShowsSection>
  );
}
