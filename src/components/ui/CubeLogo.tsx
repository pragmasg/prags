export default function CubeLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5L35 13L20 21L5 13L20 5Z" fill="currentColor" opacity="1"/>
      <path d="M5 13L20 21V35L5 27V13Z" fill="currentColor" opacity="0.5"/>
      <path d="M35 13L20 21V35L35 27V13Z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}
