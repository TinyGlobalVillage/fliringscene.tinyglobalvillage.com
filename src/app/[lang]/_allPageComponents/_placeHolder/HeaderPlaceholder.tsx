// components/HeaderPlaceholder.tsx
import Image from 'next/image';

export default function HeaderPlaceholder() {
  return (
    <div
      className="header-skeleton"
      aria-busy="true"
      aria-label="Loading header"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '425px',
        aspectRatio: '425 / 812',
        margin: '0 auto',
        overflow: 'hidden',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.15) 37%, rgba(255,255,255,0.06) 63%)',
        backgroundSize: '400% 100%',
        animation: 'headerShimmer 1.2s linear infinite',
      }}
    >
      <style jsx>{`
        @keyframes headerShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .header-skeleton { animation: none; }
        }
      `}</style>

      {/* Optional: faint skeleton artwork to match final layout */}
      <Image
        src="/images/placeholder/fliring-scene-placeholder-image.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 425px) 100vw, 425px"
        quality={40}
        style={{ opacity: 0.35, objectFit: 'cover' }}
      />
    </div>
  );
}
