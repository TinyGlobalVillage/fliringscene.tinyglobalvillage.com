// components/HeaderPlaceholder.tsx
import Image from 'next/image';

export default function HeaderPlaceholder() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '425px',
        aspectRatio: '425 / 812',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/placeholder/fliring-scene-placeholder-image.jpg"
        alt="Loading header"
        fill
        priority
        sizes="(max-width: 425px) 100vw, 425px"
        quality={75}
      />
    </div>
  );
}
