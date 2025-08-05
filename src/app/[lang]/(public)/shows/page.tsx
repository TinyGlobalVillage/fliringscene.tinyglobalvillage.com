
import { getDictionary } from '@/data/i18n/getDictionary';
import NeonSectionTitleFontSize from "../../_allPageComponents/headers/NeonSectionTitleFontSize";
import TikkioWidget from "../../_allPageComponents/tikkio/TikkoWidget";
import { ShowsSection, HeadingWrapper, WidgetWrapper } from "./ShowsPageWrapper";
// import type { ShowsPage } from "@/data/i18n/types";

type ShowPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: ShowPageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <ShowsSection>
      <HeadingWrapper>
        <NeonSectionTitleFontSize>{dict.shows.showsAboveFold.sectionTitle}</NeonSectionTitleFontSize>
      </HeadingWrapper>
      <WidgetWrapper>
        <TikkioWidget strategy="afterInteractive" />
        {/* <TikkioWidget strategy="afterInteractive" /> */}
      </WidgetWrapper>
    </ShowsSection>
  );
}
