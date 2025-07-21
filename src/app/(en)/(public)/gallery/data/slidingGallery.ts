export interface Slide {
  src:   string;
  title: string;
  alt:   string;
}

export interface SlidingGalleryData {
  title: string;
  intro: string;
  slides: Slide[];
}

export const slidingGallery: SlidingGalleryData = {
  title: 'Gallery',
  intro: '',
  slides: [
    {
      src:   '/images/gallery/standup_andreas.jpg',
      title: 'Andreas Trætli',
      alt:   'Andreas Trætli'
    },
    {
      src:   '/images/gallery/standup_johan.jpg',
      title: 'Johan Halseth',
      alt:   'Johan Halseth'
    },
    {
      src:   '/images/gallery/KevinKildal.jpg',
      title: 'Kevin Kildal',
      alt:   'Kevin Kildal'
    },
        {
      src:   '/images/gallery/TommyBerntsen.jpg',
      title: 'Tommy Berntsen',
      alt:   'Tommy Berntsen'
    },
  ]
};