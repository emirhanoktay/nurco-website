import Image from "next/image";
import { assets } from "@/lib/content";
import { Wordmark } from "./brand";

type ProductVisualProps = {
  product: "waffle" | "kumpir";
  className?: string;
  eager?: boolean;
  sizes?: string;
};

/** One replaceable image per product; no masks or scroll-synchronized layers. */
export function ProductVisual({
  product,
  className = "",
  eager = false,
  sizes = "(max-width: 767px) 90vw, 45vw",
}: ProductVisualProps) {
  const asset = assets[product];
  return (
    <div className={`product-visual product-visual--${product} ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
      {product === "waffle" && asset.placeholder && (
        <div className="concept-cup-brand" aria-hidden="true">
          <Wordmark />
          <span>biraz mutluluk.</span>
          <span className="cup-flower">✳</span>
        </div>
      )}
    </div>
  );
}
