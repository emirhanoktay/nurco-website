import { ArrowUpRight, Instagram } from "lucide-react";
import { social } from "@/lib/content";
import { ConceptLabel, Flower, Smile, Wordmark } from "./brand";
import { ProductVisual } from "./product-visual";

export function SocialGallery() {
  return (
    <section
      id="galeri"
      className="gallery-section section-space"
      aria-labelledby="gallery-title"
    >
      <div className="page-width">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">AKIŞINA BİRAZ RENK KAT</p>
            <h2 id="gallery-title">
              Güzel anlar,
              <br />
              <span>bolca Nurço.</span>
            </h2>
          </div>
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <Instagram size={22} />
            <span>{social.handle}</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="gallery-grid reveal">
          <a
            className="gallery-tile gallery-waffle"
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Nurço Instagram profilini aç; waffle konsept posteri"
          >
            <span className="gallery-tile-heading">
              tatlı bir
              <br />
              şeyler.
            </span>
            <ProductVisual
              product="waffle"
              sizes="(max-width: 767px) 50vw, 25vw"
            />
            <ConceptLabel product="waffle" />
            <span className="gallery-corner">
              <ArrowUpRight size={19} />
            </span>
          </a>
          <a
            className="gallery-tile gallery-mood"
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Nurço Instagram profilini aç; iyi ki varsın konsept grafiği"
          >
            <Flower />
            <span>
              iyi ki
              <br />
              varsın<span className="mood-heart">♡</span>
            </span>
            <Wordmark />
            <span className="graphic-label">KONSEPT GRAFİK</span>
          </a>
          <a
            className="gallery-tile gallery-kumpir"
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Nurço Instagram profilini aç; kumpir konsept posteri"
          >
            <span className="gallery-tile-heading">
              keyfin
              <br />
              yerinde.
            </span>
            <ProductVisual
              product="kumpir"
              sizes="(max-width: 767px) 50vw, 25vw"
            />
            <ConceptLabel product="kumpir" />
            <span className="gallery-corner">
              <ArrowUpRight size={19} />
            </span>
          </a>
          <a
            className="gallery-tile gallery-pattern"
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Nurço Instagram profilini aç; mutluluk konsept grafiği"
          >
            <div className="checker" />
            <Smile />
            <span>
              biraz
              <br />
              mutluluk.
            </span>
            <span className="graphic-label">KONSEPT GRAFİK</span>
          </a>
        </div>
        <p className="gallery-disclaimer">
          Şimdilik hayal kuruyoruz. Bu konsept görseller yakında gerçek Nurço
          anlarıyla değişecek.
        </p>
      </div>
    </section>
  );
}
