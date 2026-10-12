import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ConceptLabel, DoodleArrow, Flower, Smile } from "./brand";
import { ProductVisual } from "./product-visual";
import { HeroArtwork } from "./hero-artwork";
import { HeroWaves, ProductHighlights, ProductRays } from "./hero-waves";
import styles from "./hero.module.css";
import ribbonStyles from "./flavor-ribbon.module.css";

export function Hero() {
  return (
    <section className={`hero ${styles.hero}`} aria-labelledby="hero-title">
      <HeroWaves />
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-spark">✳</span> WAFFLE, KUMPİR & BOLCA
            MUTLULUK
          </p>
          <h1 id="hero-title">
            Mutluluk
            <br />
            bir <span className="hero-emphasis">ısırık</span>
            <br />
            uzağında.
          </h1>
          <p className="hero-description">
            Tatlıya da tuzluya da yer var.
            <br />
            Canın ne çekiyorsa, Nurço’da buluşalım.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="#menu">
              Menüyü keşfet <ArrowUpRight size={20} />
            </a>
            <a className="text-link" href="#subeler">
              Bize uğra <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <HeroArtwork>
          <div className="hero-sticker" aria-hidden="true">
            tatlı mı?
            <br />
            <span>tuzlu mu?</span>
            <span className="sticker-small">İKİSİ DE OLUR!</span>
          </div>
          <Smile className="hero-smile" />
          <div className={`hero-waffle ${styles.productAnchor}`}>
            <ProductVisual
              product="waffle"
              eager
              sizes="(max-width: 767px) 64vw, 34vw"
            />
            <ProductRays product="waffle" />
          </div>
          <div className={`hero-kumpir ${styles.productAnchor}`}>
            <ProductVisual
              product="kumpir"
              eager
              sizes="(max-width: 767px) 52vw, 27vw"
            />
            <ProductRays product="kumpir" />
          </div>
          <ProductHighlights />
          <Flower className="hero-flower" />
          <div className="hero-handwritten" aria-hidden="true">
            iyi ki geldin!
            <DoodleArrow />
          </div>
          <ConceptLabel className="hero-concept" />
        </HeroArtwork>
      </div>
      <div className="hero-baseline page-width">
        <span>KÜÇÜK BİR MOLA. KOCAMAN BİR GÜLÜMSEME.</span>
        <a href="#waffle">
          LEZZETLERE DAL <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

export function FlavorRibbon() {
  const messages = [
    "BOL MALZEME",
    "BOL GÜLÜMSEME",
    "TATLI & TUZLU",
    "TAM SENLİK",
  ];

  return (
    <div className={`flavor-ribbon ${ribbonStyles.ribbon}`} aria-hidden="true">
      <div className={ribbonStyles.track}>
        {/* Repeat content within this single strip; one group is the loop distance. */}
        {Array.from({ length: 6 }, (_, copy) => (
          <div className={ribbonStyles.group} key={copy}>
            {messages.map((text) => (
              <span key={text}>
                {text}
                <Flower />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
