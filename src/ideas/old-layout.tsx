// import { ReactNode } from 'react';
// import Script from 'next/script';
// // import LayoutClient from './layout.client';
// // import { metadata } from './metadata';
// // export { metadata };

// // import { getDictionary } from '@/data/i18n';

// export default function RootLayout({
//   children,
// }: {
//   children: ReactNode;

// }) {

//   // const dict = getDictionary(params.lang); // ✅ fetch dictionary

//   return (
//     <html>
//       <head>
//         <Script id="org-jsonld" type="application/ld+json">
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'Organization',
//             name: 'Fliring Scene',
//             url: 'https://fliringscene.tinyglobalvillage.com',
//             logo: 'https://…/logo-square.jpg',
//           })}
//         </Script>
//         <link
//           rel="preload"
//           href="/fonts/JosefinSans-VariableFont_wght.ttf"
//           as="font"
//           type="font/ttf"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           as="image"
//           href="/images/placeholder/fliring-scene-placeholder-image.jpg"
//         />
//       </head>
//       <body>
//        {children}
//       </body>
//     </html>
//   );
// }


// // export default function LangLayout({ children, params }: { children: ReactNode, params: { lang: string } }) {
// //   return (
// //     <html lang={params.lang}>
// //       <body>{children}</body>
// //     </html>
// //   );
// // }
