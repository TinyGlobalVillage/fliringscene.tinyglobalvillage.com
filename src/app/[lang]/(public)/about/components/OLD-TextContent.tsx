// // src/app/[lang]/_allPageComponents/textSections/TextImageSplit.tsx
// 'use client';
// import NeonGuys from '../../../_allPageComponents/svg/NeonGuysSVG';
// import Image from 'next/image';
// import type { AboutSectionContent } from '@/hook-utils/getAboutContent';
// import { SectionWrapper, Container, Figure, FigCaption, TextBlock } from './textContentWrapper';


// export interface TextImageSplitProps {
//   sectionData: AboutSectionContent;
// }

// /**
//  * A little registry so we can look up
//  * special SVGs by a string key,
//  * and fall back to <Image> for URLs.
//  */
// const renderers: Record<string, React.FC> = {
//   'neon-guys': () => <NeonGuys />,
// };

// export default function TextImageSplit({
//   sectionData,
// }: TextImageSplitProps) {
//   const { images, alt, imageCaptions, text } = sectionData;

//   return (
//     <SectionWrapper>
//       <Container>
//         {images.map((imgKey, i) => {
//           const Renderer = renderers[imgKey];
//           return (
//             <Figure key={i}>
//               {Renderer ? (
//                 <Renderer />
//               ) : (
//                 <Image
//                   src={imgKey}
//                   alt={alt[i] || ''}
//                   width={400}
//                   height={400}
//                   priority
//                 />
//               )}
//               {imageCaptions[i] && (
//                 <FigCaption>{imageCaptions[i]}</FigCaption>
//               )}
//             </Figure>
//           );
//         })}
//         <TextBlock>
//           {text.split('\n').map((line, i) => (
//             <p key={i}>{line}</p>
//           ))}
//         </TextBlock>

//         {/*
//           Now we loop *all* the images*, pick a renderer by key,
//           or fall back to Next.js <Image> if it’s a URL.
//         */}

//       </Container>
//     </SectionWrapper>
//   );
// }
