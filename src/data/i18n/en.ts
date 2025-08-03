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
      ctaLabel: 'See Events',
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
      sectionTitle: 'some',
      para1: 'some',
      para2: 'some',
      para3: 'some',
      para4: 'some',
      para5: 'some',
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
      sectionTitle: 'some',
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
      sectionTitle: 'kommende show',
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
          otherMessage: 'Please describe your request.',
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
        href: '/shows',
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
          href: '/shows',
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
