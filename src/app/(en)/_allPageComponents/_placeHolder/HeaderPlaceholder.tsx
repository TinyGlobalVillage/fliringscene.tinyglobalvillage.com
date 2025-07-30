// components/HeaderPlaceholder.tsx
export default function HeaderPlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '700px',
        height: '200px',              // match approx height of your real header
        background: 'radial-gradient(circle, #333, #111)',
        margin: '0 auto',
      }}
    >
      {/* you can also inline a low-res JPEG/PNP here */}
    </div>
  );
}
