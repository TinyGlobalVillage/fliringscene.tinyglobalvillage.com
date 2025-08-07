// // src/app/[lang]/(public)/about/page.tsx

// import TextImageSplit from './components/TextContent';
// import GoogleMapEmbed from '../../_allPageComponents/google/GoogleMapEmbed';


// import { AboutSection, HeadingWrapper, AboutTextWrapper } from './components/AboutWrapper';

// import { getDictionary } from '@/data/i18n/getDictionary';
// import { getAboutContent, type AboutSectionContent } from '@/hook-utils/getAboutContent';
// import type { AboutContent } from '@/data/i18n/types';

// import NeonSectionTitleFontSize from '../../_allPageComponents/headers/NeonSectionTitleFontSize';

// interface AboutPageProps {
//   params: Promise<{ lang: string }>;
// }

// export default async function AboutPage({ params }: AboutPageProps) {

//   const { lang } = await params;
//   const dict = await getDictionary(lang);

//   const content: AboutContent = dict.about.aboutAboveFold;

//   // merge static images + localized text
//   const sections: AboutSectionContent[] = getAboutContent(content);

//   return (
//     <AboutSection>
//       <HeadingWrapper>
//         <h1>
//           <NeonSectionTitleFontSize>{content.aboutTitle}</NeonSectionTitleFontSize>
//         </h1>
//       </HeadingWrapper>

//       <AboutTextWrapper>
//         {sections.map((section) => (
//           <TextImageSplit
//             key={section.id}
//             sectionData={section}
//           />
//         ))}
//       </AboutTextWrapper>

//       <GoogleMapEmbed />
//     </AboutSection>
//   );
// }
