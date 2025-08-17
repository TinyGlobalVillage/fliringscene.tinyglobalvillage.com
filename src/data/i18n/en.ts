// data/i18n/en.ts
import { Dictionary } from './types';

export const dictionary: Dictionary = {
  // ALL PAGES SECTIONS (SEO & SECTION DICT)
  home: {
    // SEO METADATA
    meta: {
      title: 'Welcome to Fliring Scene',
      description:
        'Steinkjer’s intimate stage for stand-up, music & culture. Discover upcoming shows, open mics & community events.',
      keywords: [
        'Fliring Scene',
        'comedy Steinkjer',
        'music venue',
        'open mic',
      ],

      ogTitle:
        'Fliring Scene | Steinkjer’s Stage for Laughter and Culture',

      ogDescription:
        'Join us at Fliring Scene – an inclusive stage for standup, music, and creative expression in Steinkjer.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Fliring Scene | Steinkjer’s Stage for Laughter and Culture',
      description:
        'Comedy, music, and culture in Steinkjer – discover Fliring Scene’s upcoming shows and community events.',
      images: [
        {
          url: 'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
          alt: 'Alt text for screen readers',
          width: 1200,
          height: 630,
        },
      ],
    },
    // SECTIONS
    aboveTheFold: {
      title: 'FLIRING',
      subtitle: 'SCENE',
      ctaLabel: 'See Events',
      comedySign: {
        title: 'COMEDY',
        subtitle: 'CLUB',
      },
    },
      upcomingShows: {
      title: 'Upcoming Shows',
      loadingEvents: 'Loading events…',
      noShowsTitle: 'No shows right now',
      noShowsBody: 'Join the newsletter to hear about the next date.',

    },
  },
  about: {
    meta: {
      title:
        'About Us | Fliring Scene – Comedy, Culture & Community',
      description:
        'Get to know the team behind Fliring Scene – Steinkjer’s vibrant stage for standup, music, and local voices.',
      keywords: [
        'about Fliring Scene',
        'Steinkjer culture',
        'local comedy scene',
        'meet the team',
        'community venue Norway',
      ],
      ogTitle:
        'About Us | Fliring Scene – Comedy, Culture & Community',
      ogDescription:
        'Fliring Scene is powered by local passion. Learn about our mission, our founders, and our dream to build Steinkjer’s creative stage.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'About Us | Fliring Scene – Comedy, Culture & Community',
      description:
        'Meet the people behind Fliring Scene – a local venue for laughter, stories, and Steinkjer’s creative spirit.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    aboutAboveFold: {
      aboutTitle: 'About Us',
      textArray: [
        {
          id: 1,
          text: `Welcome to Fliring Scene – Steinkjer’s new, intimate, and inclusive cultural stage in Breidablikkgården!
          Here, local stand‑up, speeches, revues, improv, singing, and music will have room to flourish, whether you’re a seasoned pro or a complete beginner.
          This is the place where laughter, stories, and great experiences take center stage.`,
          alt: 'Image of Neon Guys',
          // captions: 'Johan Halseth & Andreas Trætli',
        },
        {
          id: 2,
          text: `Are you from Steinkjer or the surrounding area and eager to try your hand on stage?
          Send us a short video clip at hei@fliring.no – we can’t wait to discover new faces and hear fresh jokes!
          For just NOK 200 you can become a member of Fliring Scene, support the city’s new cultural hub, enjoy discounts on all our events – and perhaps receive a surprise or two.
          Sign up by sending NOK 200 via Vipps to 961768. See you at Breidablikkgården!`,
        },
      ],
    },
  },
  gallery: {
    meta: {
      title:
        'Gallery | Fliring Scene – Moments of Laughter & Live Acts',
      description:
        'Explore snapshots from Fliring Scene’s vibrant events – standup nights, music gigs, and community moments in Steinkjer.',
      keywords: [
        'Fliring Scene gallery',
        'Steinkjer events photos',
        'comedy night pictures',
        'local performers',
        'stage photography',
        'event highlights',
      ],
      ogTitle:
        'Gallery | Fliring Scene – Moments of Laughter & Live Acts',
      ogDescription:
        'See the faces, laughter, and magic from our recent events at Fliring Scene – Steinkjer’s stage for creative expression.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Gallery | Fliring Scene – Moments of Laughter & Live Acts',
      description:
        'Relive the energy of our comedy nights and performances – check out the Fliring Scene gallery.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    galleryAboveFold: {
      sectionTitle: 'Gallery',
      prevLabel: 'Previous slide',
      nextLabel: 'Next slide',
      thumbPrefix: 'Go to slide',
      gallery: [
        {
          id: 1,
          caption: 'Kevin Kildal',
          alt: 'Comedian Kevin Kildal standing against a grey background',
        },
        {
          id: 2,
          caption: 'Andreas on stage',
          alt: 'Andreas performing stand-up on stage.',
        },
        {
          id: 3,
          caption: '',
          alt: 'Johan performing standup on stage',
        },
        {
          id: 4,
          caption: '',
          alt: 'Standup comedian on a purple-lit stage',
        },
        {
          id: 5,
          caption: '',
          alt: 'Standup comedian speaking into microphone on stage',
        },
        {
          id: 6,
          caption: '',
          alt: 'Performer entertaining crowd on standup stage',
        },
        {
          id: 7,
          caption: '',
          alt: 'Comedian mid-sentence during live standup event',
        },
        {
          id: 8,
          caption: '',
          alt: 'Tommy Berntsen performing',
        },
        {
          id: 9,
          caption: '',
          alt: 'Tommy Berntsen on stage in spotlight',
        },
        {
          id: 10,
          caption: '',
          alt: 'Kevin Kildal performing standup, with audience in foreground',
        },
      ],
    },
  },
  shows: {
    meta: {
      title:
        'Shows | Fliring Scene – Upcoming Events & Performances',
      description:
        'Check out upcoming standup shows, music acts, and live events at Fliring Scene in Steinkjer. Your seat is waiting!',
      keywords: [
        'Fliring Scene shows',
        'Steinkjer live events',
        'comedy lineup',
        'upcoming performances',
        'standup tickets',
        'local acts Steinkjer',
      ],
      ogTitle:
        'Shows | Fliring Scene – Upcoming Events & Performances',
      ogDescription:
        'Discover what’s on at Fliring Scene – from standup and music to community performances. Don’t miss the next show!',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Shows | Fliring Scene – Upcoming Events & Performances',
      description:
        'Explore the lineup of shows at Fliring Scene – comedy, music, and more in the heart of Steinkjer.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    showsAboveFold: {
      sectionTitle: 'Upcoming Shows',
    },
  },
  contact: {
    meta: {
      title: 'Contact Us | Fliring Scene – Get in Touch',
      description:
        'Want to perform, book the venue, or ask a question? Contact Fliring Scene – Steinkjer’s home for comedy and creativity.',
      keywords: [
        'contact Fliring Scene',
        'venue booking Steinkjer',
        'comedy inquiries',
        'Fliring Scene address',
        'Steinkjer cultural scene',
      ],
      ogTitle: 'Contact Us | Fliring Scene – Get in Touch',
      ogDescription:
        'Reach out to Fliring Scene for bookings, questions, or to join our community of performers in Steinkjer.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Fliring Scene – Get in Touch',
      description:
        'Send us a message or ask about performing. Fliring Scene welcomes fresh talent and curious minds.',
      images:
        'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
    },
    contentAboveFold: {
      form: {
        title: 'Contact Us',
        fields: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone Number',
          topic: 'Topic',
          dropdown: {
            placeholder: '— select one —',
            option1: 'Rent a comedian',
            option2: 'Rent the venue',
            option3: 'Arrange something on Fliring',
            option4: 'Sponsor',
            option5: 'Become a part of us',
            option6: 'Volunteer or join staff',
            variableOption: 'Other',
          },
          videoPrompt: 'Send Us A Performance Video',
          otherMessage: 'Please describe your request.',
        },
        button: 'Send Message',
        statusMessage: {
          success: 'Thank you! We’ll be in touch.',
          error: 'Something went wrong. Please try again.',
        },
        errors: {
          name: 'Please enter your name.',
          email: 'Please enter a valid email address.',
          topic: 'Please select a topic.',
          otherMessage: 'Please provide a description.',
        },
      },
    },
  },
  // ALL COMPONENTS SECTION
  navigation: {
    logoAlt: 'Fliring Scene Logo',
    links: {
      home: {
        label: 'HOME',
        ariaLabel: 'Go to homepage',
        href: '/',
      },
      shows: {
        label: 'SHOWS',
        ariaLabel: 'View upcoming shows',
        href: '/#upcoming-show',
      },
      about: {
        label: 'ABOUT',
        ariaLabel: 'Learn more about us',
        href: '/about',
      },
      gallery: {
        label: 'GALLERY',
        ariaLabel: 'View our gallery',
        href: '/gallery',
      },
      contact: {
        label: 'CONTACT',
        ariaLabel: 'Get in contact with us',
        href: '/contact',
      },
    },
    socialMedia: [
      {
        platform: 'facebook',
        label: 'Facebook',
        ariaLabel: 'Visit us on Facebook',
        href: 'https://www.facebook.com/profile.php?id=61577337325283',
        altText: 'Facebook icon',
      },
    ],
    langToggle: {
      toggleLabel: 'Language Toggle',
      enAlt: 'English',
      noAlt: 'Norwegian',
    },
  },
  footer: {
    newsletter: {
      title: 'Signup for Our Newsletter',
      formAriaLabelledBy: 'newsletter-header',
      subscribe: 'Subscribe',
    },
    input: {
      name: 'newsletterEmail',
      ariaLabel: 'Email address',
      placeholder: 'Enter Email In Here',
    },
    statusMessage: {
      success: 'Thanks for subscribing!',
      error: 'Oops! Try again.',
      duplicate: 'You’re already on the list!',
    },
    linksColumn: {
      title: 'Quick Links',
      links: {
        shows: {
          label: 'SHOWS',
          ariaLabel: 'View upcoming shows',
          href: '/#upcoming-show',
        },
        about: {
          label: 'ABOUT',
          ariaLabel: 'Learn more about us',
          href: '/about',
        },
        gallery: {
          label: 'GALLERY',
          ariaLabel: 'View our gallery',
          href: '/gallery',
        },
        contact: {
          label: 'CONTACT',
          ariaLabel: 'Get in contact with us',
          href: '/contact',
        },
      },
    },
    contactColumn: {
      title: 'Get in Touch',
      buttonTitle: 'Contact Us',
      buttonAriaLabel: 'Go to contact page',
    },
    socialMedia: [
      {
        platform: 'facebook',
        label: 'Facebook',
        ariaLabel: 'Visit us on Facebook',
        href: 'https://www.facebook.com/profile.php?id=61577337325283',
        altText: 'Facebook icon',
      },
    ],
    trademark: {
      title: '© 2025 Fliring Scene. All rights reserved.',
    },
    advert: {
      message: 'Powered by Tiny Global Village LLC™',
    },
  },
};
