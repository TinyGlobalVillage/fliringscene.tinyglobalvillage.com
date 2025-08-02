// data/i18n/no.ts
import { Dictionary } from './types';

export const dictionary: Dictionary = {
  // ALL PAGES SECTIONS (SEO & SECTION DICT)
  home: {
    // SEO METADATA
    meta: {
      title: 'Velkommen til Fliring Scene',
      description:
        'Steinkjers intime scene for stand-up, musikk og kultur. Oppdag kommende show, open mics og community-arrangementer.',
      keywords: [
        'Fliring Scene',
        'komedie Steinkjer',
        'musikkarena',
        'open mic',
      ],

      ogTitle:
        'Fliring Scene | Steinkjers scene for latter og kultur',

      ogDescription:
        'Bli med på Fliring Scene – en inkluderende scene for standup, musikk og kreativ utfoldelse i Steinkjer.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Fliring Scene | Steinkjers scene for latter og kultur',
      description:
        'komedie, musikk og kultur i Steinkjer – oppdag Fliring Scenes kommende show og community-arrangementer.',
      images: [
        {
          url: 'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
          alt: 'Alt tekst for skjermlesere',
          width: 1200,
          height: 630,
        },
      ],
    },
    // SECTIONS
    aboveTheFold: {
      title: 'FLIRING',
      subtitle: 'SCENE',
      ctaLabel: 'Se arrangementer',
      comedySign: {
        title: 'KOMEDIE',
        subtitle: 'KLUBB'
      }
    },
    upcomingShows: {
      title: 'kommende show',
      ctaLabel: 'Se arrangementer',
    },
  },
  about: {
    meta: {
      title:
        'Om oss | Fliring Scene – komedie, kultur og fellesskap',
      description:
        'Bli kjent med teamet bak Fliring Scene – Steinkjers livlige scene for standup, musikk og lokale stemmer.',
      keywords: [
        'om Fliring Scene',
        'Steinkjer kultur',
        'lokal komediscene',
        'møt teamet',
        'fellesskapssted Norge',
      ],
      ogTitle:
        'Om oss | Fliring Scene – komedie, kultur og fellesskap',
      ogDescription:
        'Fliring Scene drives av lokal lidenskap. Lær om vår misjon, våre grunnleggere og vår drøm om å bygge Steinkjers kreative scene.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Om oss | Fliring Scene – komedie, kultur og fellesskap',
      description:
        'Møt folkene bak Fliring Scene – et lokale for latter, fortellinger og Steinkjers kreative ånd.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
  },
  contact: {
    meta: {
      title: 'kontakt oss | Fliring Scene – ta kontakt',
      description:
        'Ønsker du å opptre, lei en komiker, lei lokale eller stille et spørsmål? kontakt oss – Steinkjers hjem for komedie og kreativitet.',
      keywords: [
        'kontakt Fliring Scene',
        'lokalleie Steinkjer',
        'komedie henvendelser',
        'Fliring Scene adresse',
        'Steinkjer kulturscene',
      ],
      ogTitle: 'kontakt oss | Fliring Scene – ta kontakt',
      ogDescription:
        'Kontakt oss for bookinger, spørsmål eller for å bli en del av vårt community av utøvere i Steinkjer.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'kontakt oss | Fliring Scene – ta kontakt',
      description:
        'Send oss en melding eller spør om opptreden. Fliring Scene ønsker nytt talent og nysgjerrige sinn velkommen.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
  },
  gallery: {
    meta: {
      title:
        'Galleri | Fliring Scene – øyeblikk av latter og live opptredener',
      description:
        'Utforsk bilder fra Fliring Scenes livlige arrangementer – standup-kvelder, musikkshow og community-øyeblikk i Steinkjer.',
      keywords: [
        'Fliring Scene galleri',
        'Steinkjer arrangementbilder',
        'komediekveld bilder',
        'lokale utøvere',
        'scene fotografering',
        'høydepunkter fra arrangement',
      ],
      ogTitle:
        'Galleri | Fliring Scene – øyeblikk av latter og live opptredener',
      ogDescription:
        'Se ansiktene, latteren og magien fra våre siste arrangementer på Fliring Scene – Steinkjers scene for kreativ utfoldelse.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Galleri | Fliring Scene – øyeblikk av latter og live opptredener',
      description:
        'Gjenopplev energien fra våre komedikvelder og opptredener – sjekk ut Fliring Scene-galleriet.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
  },
  shows: {
    meta: {
      title:
        'show | Fliring Scene – kommende arrangementer og opptredener',
      description:
        'Sjekk ut kommende standup show, musikkinnslag og live opptredener på Fliring Scene i Steinkjer. Ditt sete venter!',
      keywords: [
        'Fliring Scene show',
        'Steinkjer live arrangementer',
        'komedieshow',
        'kommende opptredener',
        'standupbilletter',
        'lokale opptredener Steinkjer',
      ],
      ogTitle:
        'show | Fliring Scene – kommende arrangementer og opptredener',
      ogDescription:
        'Oppdag hva som skjer på Fliring Scene – fra standup og musikk til community-opptredener. Ikke gå glipp av neste show!',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'show | Fliring Scene – kommende arrangementer og opptredener',
      description:
        'Utforsk listen over show på Fliring Scene – komedie, musikk og mer i hjertet av Steinkjer.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    showsAboveFold: {
      sectionTitle: "kommende show"
    }
  },
  // ALL COMPONENTS SECTION
  navigation: {
    logoAlt: 'Fliring Scene-logo',
    links: {
      home: {
        label: 'HJEM',
        ariaLabel: 'Gå til startsiden',
        href: '/',
      },
      shows: {
        label: 'SHOW',
        ariaLabel: 'Se kommende show',
        href: '/shows',
      },
      about: {
        label: 'OM OSS',
        ariaLabel: 'Lær mer om oss',
        href: '/about',
      },
      gallery: {
        label: 'GALLERI',
        ariaLabel: 'Se galleri',
        href: '/gallery',
      },
      contact: {
        label: 'KONTAKT',
        ariaLabel: 'kontakt oss',
        href: '/contact',
      },
    },
    socialMedia: [
      {
        platform: 'facebook',
        label: 'Facebook',
        ariaLabel: 'Besøk oss på Facebook',
        href: 'https://www.facebook.com/profile.php?id=61577337325283',
        altText: 'Facebook-ikon',
      },
    ],
    langToggle: {
      toggleLabel: 'Språkvalg',
      enAlt: 'Engelsk',
      noAlt: 'Norsk',
    },
  },
  footer: {
    newsletter: {
      title: 'Abonner på nyhetsbrev',
      formAriaLabelledBy: 'newsletter-header',
      subscribe: 'abonner',
    },
    input: {
      name: 'newsletterEmail',
      ariaLabel: 'E-postadresse',
      placeholder: 'skriv e-post her',
    },
    statusMessage: {
      success: 'takk for at du abonnerer',
      error: 'Noe gikk feil. Prøv igjen.',
      duplicate: 'du er allerede abonnent',
    },
    linksColumn: {
      title: 'hurtiglinker',
      links: {
        shows: {
          label: 'SHOW',
          ariaLabel: 'Se kommende show',
          href: '/shows',
        },
        contact: {
          label: 'KONTAKT',
          ariaLabel: 'kontakt oss',
          href: '/contact',
        },
      },
    },
    contactColumn: {
      title: 'ta kontakt',
      buttonTitle: 'kontakt oss',
      buttonAriaLabel: 'Gå til kontaktsiden',
    },
    socialMedia: [
      {
        platform: 'facebook',
        label: 'Facebook',
        ariaLabel: 'Besøk oss på Facebook',
        href: 'https://www.facebook.com/profile.php?id=61577337325283',
        altText: 'Facebook-ikon',
      },
    ],
    trademark: {
      title:
        '© 2025 Fliring Scene. Alt innhold er opphavsrettslig beskyttet',
    },
    advert: {
      message: 'drevet av Tiny Global Village LLC™',
    },
  },
};
