// src/app/[lang]/(public)/about/page.tsx

import GoogleMapEmbed from '../../_allPageComponents/google/GoogleMapEmbed';
import TextContent from './components/TextContent';

import { AboutSection, HeadingWrapper } from './components/AboutWrapper';

import { getDictionary } from '@/data/i18n/getDictionary';
import type { AboutContent } from '@/data/i18n/types';

import NeonSectionTitleFontSize from '../../_allPageComponents/headers/NeonSectionTitleFontSize';
import NeonGuys from '../../_allPageComponents/svg/NeonGuysSVG';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  const content: AboutContent = dict.about.aboutAboveFold;

  return (
    <AboutSection>

      <HeadingWrapper>
        <NeonSectionTitleFontSize>
          {content.aboutTitle}
        </NeonSectionTitleFontSize>
      </HeadingWrapper>

      <NeonGuys />

      <TextContent textArray={content.textArray} />

      <GoogleMapEmbed />

    </AboutSection>
  );
}
