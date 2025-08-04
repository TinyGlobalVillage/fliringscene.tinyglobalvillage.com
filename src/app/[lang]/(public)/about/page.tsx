// src/app/[lang]/(public)/about/page.tsx

import TextImageSplit from '../../_allPageComponents/textSections/textContent';
import GoogleMapEmbed from '../../_allPageComponents/google/GoogleMapEmbed';
import NeonSectionTitle from '../../_allPageComponents/headers/NeonSectionTitleFontSize';
import { AboutSection, HeadingWrapper } from './AboutWrapper';

import { getDictionary } from '@/data/i18n/getDictionary';
import { getAboutContent, type AboutSectionContent } from '@/hook-utils/getAboutContent';
import type { AboutContent } from '@/data/i18n/types';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const content: AboutContent = dict.about.aboutAboveFold;

  // merge static images + localized text
  const sections: AboutSectionContent[] = getAboutContent(content);

  return (
    <AboutSection>
      <HeadingWrapper>
        <NeonSectionTitle>{content.aboutTitle}</NeonSectionTitle>
      </HeadingWrapper>

      {sections.map((section, idx) => (
        <TextImageSplit
          key={section.id}
          sectionData={section}
          reverse={idx % 2 === 1}
        />
      ))}

      <GoogleMapEmbed />
    </AboutSection>
  );
}
