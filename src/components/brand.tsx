import { assets } from "@/lib/content";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`}>
      nurço
      <span className="wordmark-dot" aria-hidden="true">
        ✳
      </span>
    </span>
  );
}

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M50 4c13-15 29 4 23 18 17-8 33 11 19 24 19 10 8 34-10 33 3 19-22 27-32 10-10 17-35 9-32-10C0 80-11 56 8 46-6 33 10 14 27 22 21 8 37-11 50 4Z"
        transform="translate(4 5) scale(.92)"
      />
      <circle
        cx="50"
        cy="48"
        r="12"
        fill="var(--flower-center, var(--yellow))"
      />
    </svg>
  );
}

export function Smile({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="36" cy="39" rx="3.5" ry="7" fill="currentColor" />
      <ellipse cx="64" cy="39" rx="3.5" ry="7" fill="currentColor" />
      <path
        d="M28 58Q50 83 72 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 13C88-13 129 29 91 48S41 26 67 30C100 34 115 63 122 85M102 76l21 12 13-24"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConceptLabel({
  className = "",
  product,
}: {
  className?: string;
  product?: "waffle" | "kumpir";
}) {
  const isPlaceholder = product
    ? assets[product].placeholder
    : assets.waffle.placeholder || assets.kumpir.placeholder;
  if (!isPlaceholder) return null;
  return (
    <span className={`concept-label ${className}`}>
      <span /> KONSEPT ÜRÜN GÖRSELİ
    </span>
  );
}
