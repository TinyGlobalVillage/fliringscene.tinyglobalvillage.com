// components/HeaderPlaceholder.tsx
import Image from 'next/image';

export default function HeaderPlaceholder() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '425px',   // CSS width on mobile S
        height: '812px',     // CSS height on mobile S
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/placeholder/fliring-scene-placeholder-image.jpg"
        alt="Loading header"
        fill
        priority
      />
    </div>
  );
}
