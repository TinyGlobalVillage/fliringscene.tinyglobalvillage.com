interface TwitterImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface PageMeta {
  title: string;
  description: string;
  meta: {
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  twitter: {
    card: 'summary' | 'summary_large_image' | 'player' | 'app';
    title: string;
    description: string;
    images:
      | string
      | URL
      | TwitterImage
      | (string | URL | TwitterImage)[];
  };
}

// 🆕 New interface for Above the Fold section
interface AboveTheFoldContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
}
interface UpcomingShowsContent {
  title: string;
  ctaLabel: string;
}

// 🆕 Full home structure
interface HomePage extends PageMeta {
  aboveTheFold: AboveTheFoldContent;
  upcomingShows: UpcomingShowsContent;
  // Add other homepage sections like `upcomingShows`, `footer`, etc.
}

// Final dictionary interface
export interface Dictionary {
  home: HomePage;
  shows: PageMeta;
  about: PageMeta;
  gallery: PageMeta;
  contact: PageMeta;
  // Extend with more routes as needed
}
