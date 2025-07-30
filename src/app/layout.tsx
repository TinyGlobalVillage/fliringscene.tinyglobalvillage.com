import Script from 'next/script';
import LayoutClient from './layout.client';
import { metadata } from './metadata';
export { metadata };


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fliring Scene',
            url: 'https://fliringscene.tinyglobalvillage.com',
            logo: 'https://…/logo-square.jpg',
          })}
        </Script>
        <link
          rel="preload"
          href="/fonts/JosefinSans-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* <link
          rel="stylesheet"
          href="/widgets/tikkio/widgets.min.css"
          media="print"
          onLoad={({ currentTarget }) => { currentTarget.media = 'all' }}
        /> */}
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
