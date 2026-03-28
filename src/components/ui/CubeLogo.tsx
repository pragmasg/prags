export default function CubeLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Top face — champagne gold */}
      <path d="M20 5L35 13L20 21L5 13L20 5Z" fill="#C9A84C"/>
      {/* Left face — deep navy */}
      <path d="M5 13L20 21V35L5 27V13Z" fill="#0B1828"/>
      {/* Right face — mid navy */}
      <path d="M35 13L20 21V35L35 27V13Z" fill="#1A3054"/>
    </svg>
  );
}
