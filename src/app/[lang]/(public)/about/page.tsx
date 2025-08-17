// src/app/[lang]/(public)/about/page.tsx

import GoogleMapEmbed from '../../_allPageComponents/google/GoogleMapEmbed';
import TextContent from './components/TextContent';

import { AboutSection, HeadingWrapper } from './components/AboutWrapper';

import type { AboutContent } from '@/data/i18n/types';

import NeonSectionTitleFontSize from '../../_allPageComponents/headers/NeonSectionTitleFontSize';
import NeonGuys from '../../_allPageComponents/svg/NeonGuysSVG';
import { buildPageMetadata } from '@/hook-utils/buildPageMetadata';
import { getDictionary } from '@/data/i18n/getDictionary';

type LangParams = Promise<{ lang: 'en' | 'no' }>;

interface AboutPageProps {
  params: LangParams;
  // params: Promise<{ lang: string }>
  // params: { lang: string }; // params is now a Promise
}


export async function generateMetadata(
  { params }: { params: LangParams }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return buildPageMetadata({ dictPage: dict.about, lang, route: '/about' });
}


export default async function AboutPage({ params }: AboutPageProps) {

  const { lang } = await params;
  // const { lang } = params;
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
