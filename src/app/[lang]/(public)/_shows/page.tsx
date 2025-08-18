import { getDictionary } from '@/data/i18n/getDictionary';
import NeonSectionTitleFontSize from '../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { ShowsSection, HeadingWrapper } from './ShowsPageWrapper';
import ShowsWidgetClient from './ShowsWidgetClient';
import { buildPageMetadata } from '@/hook-utils/buildPageMetadata';
import type { LangParams } from '@/data/i18n/types';

type ShowPageProps = { params: LangParams };

export async function generateMetadata({ params }: { params: LangParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return buildPageMetadata({ dictPage: dict.shows, lang, route: '/shows' });
}

export default async function ShowsPage({ params }: ShowPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.shows.showsAboveFold.sectionTitle;
  const loadingText = dict.home.upcomingShows.loadingEvents ?? 'Loading events…';
  const emptyTitle = dict.home.upcomingShows.noShowsTitle ?? 'No shows right now';
  const emptyBody = dict.home.upcomingShows.noShowsBody ?? 'Join the newsletter to hear about the next date.';

  return (
    <ShowsSection>
      <HeadingWrapper>
        <h1>
          <NeonSectionTitleFontSize>{title}</NeonSectionTitleFontSize>
        </h1>
      </HeadingWrapper>

      <ShowsWidgetClient
        loadingText={loadingText}
        emptyTitle={emptyTitle}
        emptyBody={emptyBody}
      />
    </ShowsSection>
  
  );
}
