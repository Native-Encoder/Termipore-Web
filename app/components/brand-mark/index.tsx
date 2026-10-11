export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" aria-hidden="true">
      <rect width="30" height="30" rx="5" fill="#F26F21" />
      <rect x="6" y="8" width="18" height="4" fill="#fff" />
      <rect x="13" y="12" width="4" height="12" fill="#fff" />
      <circle cx="9" cy="20" r="1.4" fill="#fff" />
      <circle cx="21" cy="20" r="1.4" fill="#fff" />
      <circle cx="9" cy="24" r="1.4" fill="#fff" opacity=".6" />
      <circle cx="21" cy="24" r="1.4" fill="#fff" opacity=".6" />
    </svg>
  );
}
