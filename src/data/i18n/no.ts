// data/i18n/no.ts
import { Dictionary } from './types';

export const dictionary: Dictionary = {
  // ALL PAGES SECTIONS (SEO & SECTION DICT)
  home: {
    // SEO METADATA
    meta: {
      title: 'Velkommen til Fliring Scene',
      description:
        'Steinkjers intime scene for stand-up, musikk og kultur. Oppdag kommende show, open mics og lokale arrangement.',
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
        'komedie, musikk og kultur i Steinkjer – oppdag Fliring Scenes kommende show og lokale arrangement.',
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
        title: 'HUMOR',
        subtitle: 'KLUBB',
      },
    },
    upcomingShows: {
      title: 'Kommende Show',
      loadingEvents: 'Laster arrangementer…',
      noShowsTitle: 'Ingen show akkurat nå',
      noShowsBody: 'Meld deg på nyhetsbrevet for å få beskjed om neste dato.',

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
    aboutAboveFold: {
      aboutTitle: 'Om Oss',
      textArray: [
        {
          id: 1,
          text: ``,
          alt: 'Illustrasjon av Johan Halseth og Andreas Trætli som et neon skilt',
          // captions: 'Johan Halseth & Andreas Trætli',
        },
        {
          id: 2,
          text: `Velkommen til Fliring Scene – Steinkjer sitt nye, intime og inkluderende kulturhus i Breidablikkgården!
Her vil lokal stand-up, taler, revyer, impro, sang og musikk få rom til å blomstre, enten du er en erfaren proff eller helt fersk.
Dette er stedet der latter, historier og gode opplevelser står i sentrum.

          Er du fra Steinkjer og omegn, og har lyst til å prøve deg på scenen?
Send oss en kort videosnutt til hei@fliring.no – vi gleder oss til å oppdage nye fjes og høre nye vitser!
For kun 200 NOK kan du bli medlem i Fliring Scene, støtte byens nye kulturscene, få rabatter på alle våre arrangementer – og kanskje en overraskelse eller to.
Meld deg på ved å sende 200 NOK via Vipps til 961768. Vi ses i Breidablikkgården!`,
        },
      ],
    },
  },
  contact: {
    meta: {
      title: 'Kontakt Oss | Fliring Scene – Kom i Kontakt',
      description:
        'Vil du opptre, leie lokalet eller har du et spørsmål? Kontakt Fliring Scene – Steinkjers hjem for humor og kreativitet.',
      keywords: [
        'kontakt Fliring Scene',
        'leie lokale Steinkjer',
        'henvendelser humor',
        'adresse Fliring Scene',
        'kulturscene Steinkjer',
      ],
      ogTitle:
        'Kontakt Oss | Fliring Scene – Ta Kontakt',
      ogDescription:
        'Ta kontakt med Fliring Scene for booking, spørsmål eller for å bli med i vårt fellesskap av artister i Steinkjer.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kontakt Oss | Fliring Scene – Kom i Kontakt',
      description:
        'Send oss en melding eller spør om å opptre. Fliring Scene ønsker nye talenter og nysgjerrige sjeler velkommen.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    contentAboveFold: {
      form: {
        title: 'Kontakt Oss',
        fields: {
          name: 'Navn',
          email: 'E-post',
          phone: 'Telefonnummer',
          topic: 'Emne',
          dropdown: {
            placeholder: '— velg ett —',
            option1: 'Lei en komiker',
            option2: 'Lei lokalet',
            option3: 'Arranger noe på Fliring',
            option4: 'Sponsor',
            option5: 'Bli medlem',
            option6: 'Frivillig eller jobb hos oss',
            variableOption: 'Annet',
          },
          videoPrompt: 'Send oss en video',
          otherMessage: 'Vennligst beskriv nærmere.',
        },
        button: 'Send Melding',
        statusMessage: {
          success: 'Takk! Vi tar kontakt.',
          error: 'Noe gikk galt. Vennligst prøv igjen.',
        },
        errors: {
          name: 'Vennligst fyll inn navnet ditt.',
          email:
          'Vennligst bruk en gyldig e-postadresse.',
          topic: 'Vennligst velg et emne.',
          otherMessage: 'Vennligst beskriv',
        },
      },
    },
  },
  gallery: {
    meta: {
      title:
        'Galleri | Fliring Scene – øyeblikk av latter og live opptredener',
      description:
        'Utforsk bilder fra Fliring Scenes livlige arrangementer – standup-kvelder, musikkshow og lokale øyeblikk i Steinkjer.',
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
    galleryAboveFold: {
      sectionTitle: 'Galleri',
      prevLabel: 'Forrige bilde',
      nextLabel: 'Neste bilde',
      thumbPrefix: 'Gå til bilde',
      gallery: [
        {
          id: 1,
          caption: 'Kevin Kildal',
          alt: 'Komiker Kevin Kildal står foran en grå bakgrunn',
        },
        {
          id: 2,
          caption: 'Andreas på scenen',
          alt: 'Andreas fremfører standup på scenen',
        },
        {
          id: 3,
          caption: '',
          alt: 'Johan fremfører standup på scenen',
        },
        {
          id: 4,
          caption: '',
          alt: 'Standup-komiker på en lilla-opplyst scene',
        },
        {
          id: 5,
          caption: '',
          alt: 'Standup-komiker som snakker i mikrofonen på scenen',
        },
        {
          id: 6,
          caption: '',
          alt: 'Artist som underholder publikum på standup-scenen',
        },
        {
          id: 7,
          caption: '',
          alt: 'Komiker midt i en setning under en live standup-opptreden',
        },
        {
          id: 8,
          caption: '',
          alt: 'Tommy Berntsen fremfører',
        },
        {
          id: 9,
          caption: '',
          alt: 'Tommy Berntsen på scenen',
        },
        {
          id: 10,
          caption: '',
          alt: 'Kevin Kildal fremfører standup med publikum i forgrunnen',
        },
      ],
    },
  },
  shows: {
    meta: {
      title:
        'show | Fliring Scene – kommende arrangementer og opptredener',
      description:
        'Sjekk ut kommende standup show, musikkinnslag og live opptredener på Fliring Scene i Steinkjer.',
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
        'Oppdag hva som skjer på Fliring Scene – fra standup og musikk til andre opptredener. Ikke gå glipp av neste show!',
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
      sectionTitle: 'Kommende Show',
    },
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
        href: '/#upcoming-show',
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
        ariaLabel: 'Kontakt oss',
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
      subscribe: 'Abonner',
    },
    input: {
      name: 'newsletterEmail',
      ariaLabel: 'E-postadresse',
      placeholder: 'Skriv e-post her',
    },
    statusMessage: {
      success: 'takk for at du abonnerer',
      error: 'Noe gikk galt. Prøv igjen.',
      duplicate: 'Du er allerede abonnent!',
    },
    linksColumn: {
      title: 'Hurtiglinker',
      links: {
        shows: {
          label: 'SHOW',
          ariaLabel: 'Se kommende arrangement',
          href: '/#upcoming-show',
        },
        about: {
          label: 'OM OSS',
          ariaLabel: 'Lær mer om oss',
          href: '/about',
        },
        gallery: {
          label: 'GALLERI',
          ariaLabel: 'Se vårt galleri',
          href: '/gallery',
        },
        contact: {
          label: 'KONTAKT',
          ariaLabel: 'Ta kontakt',
          href: '/contact',
        },
      },
    },
    contactColumn: {
      title: 'Ta kontakt',
      buttonTitle: 'Kontakt Oss',
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
        '© 2025 Fliring Scene. Alt innhold er opphavsrettslig beskyttet.',
    },
    advert: {
      message: 'Drevet av Tiny Global Village LLC™',
    },
  },
};
