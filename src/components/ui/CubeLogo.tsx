export default function CubeLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top face — teal brand accent */}
      <path d="M20 5L35 13L20 21L5 13L20 5Z" fill="#00D4AA"/>
      {/* Left face — dark */}
      <path d="M5 13L20 21V35L5 27V13Z" fill="#0A0A0A"/>
      {/* Right face — mid-dark */}
      <path d="M35 13L20 21V35L35 27V13Z" fill="#2A2A2A"/>
    </svg>
  );
}
