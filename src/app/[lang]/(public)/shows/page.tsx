
import { getDictionary } from '@/data/i18n/getDictionary';
import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";
import { ShowsSection, HeadingWrapper, WidgetWrapper } from "./ShowsPageWrapper";
// import type { ShowsPage } from "@/data/i18n/types";

import { buildPageMetadata } from '@/hook-utils/buildPageMetadata';
import { LangParams } from '@/data/i18n/types';


type ShowPageProps = {
  params: LangParams;
};

export async function generateMetadata(
  { params }: { params: LangParams }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return buildPageMetadata({ dictPage: dict.shows, lang, route: '/shows' });
}




export default async function HomePage({ params }: ShowPageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <ShowsSection>
      <HeadingWrapper>
        <h1>
          <NeonSectionTitleFontSize>{dict.shows.showsAboveFold.sectionTitle}</NeonSectionTitleFontSize>
        </h1>
      </HeadingWrapper>
      <WidgetWrapper>
        <TikkioWidget strategy="afterInteractive" />
        {/* <TikkioWidget strategy="afterInteractive" /> */}
      </WidgetWrapper>
    </ShowsSection>
  );
}
