/**
 * 吉祥物占位标记：黄色圆脸 + 两只角。
 * 正式图放到 public/brand/bull.png 后再换成 next/image。
 */
export function BullMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="雅思牛"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9c-1.8 2.6-1.4 6 1 8.2"
        stroke="#5C5C5C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M33 9c1.8 2.6 1.4 6-1 8.2"
        stroke="#5C5C5C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="23" r="13" fill="#F5C542" />
      <ellipse cx="20" cy="27.5" rx="6" ry="4.5" fill="#EBD3C4" />
      <circle cx="15.5" cy="19.5" r="1.8" fill="#2B2B2B" />
      <circle cx="24.5" cy="19.5" r="1.8" fill="#2B2B2B" />
      <circle cx="17.8" cy="27" r="0.9" fill="#2B2B2B" opacity="0.55" />
      <circle cx="22.2" cy="27" r="0.9" fill="#2B2B2B" opacity="0.55" />
    </svg>
  );
}
