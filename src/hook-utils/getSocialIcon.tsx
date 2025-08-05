// src/utils/getSocialIcon.ts
import FacebookIcon from '@/app/[lang]/_allPageComponents/facebook/FacebookIcon';
// import other icons...


export function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case 'facebook':
      return <FacebookIcon 
      />;
    default:
      return null;
  }
}
