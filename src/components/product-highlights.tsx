import { ArrowUpRight } from "lucide-react";
import { ConceptLabel, DoodleArrow, Flower } from "./brand";
import { ProductVisual } from "./product-visual";

export function WaffleHighlight() {
  return (
    <section
      id="waffle"
      className="waffle-section"
      aria-labelledby="waffle-title"
    >
      <div className="waffle-layout page-width">
        <div className="waffle-art reveal">
          <span className="waffle-background-type" aria-hidden="true">
            waffle!
          </span>
          <div className="waffle-halo" aria-hidden="true" />
          <ProductVisual product="waffle" className="waffle-feature" />
          <span className="round-note" aria-hidden="true">
            bir kova
            <br />
            <strong>iyi his.</strong>
            <span>♡</span>
          </span>
          <ConceptLabel product="waffle" />
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">01 / TATLI BİR MESELE</p>
          <h2 id="waffle-title">
            Tatlı tarafını
            <br />
            <span>serbest bırak.</span>
          </h2>
          <p>
            Biraz çikolata, biraz meyve, bolca keyif.
            <br />
            Günün en tatlı molasına yer aç.
          </p>
          <a href="#menu-waffle" className="button button-cream">
            Waffle’ları keşfet <ArrowUpRight size={20} />
          </a>
          <div className="feature-tags">
            <span>ÇITIR ÇITIR</span>
            <span>ÇİKOLATALI</span>
            <span>TAM SENLİK</span>
          </div>
          <Flower className="waffle-flower" />
        </div>
      </div>
      <div className="waffle-checker checker" aria-hidden="true" />
    </section>
  );
}

export function KumpirHighlight() {
  return (
    <section
      id="kumpir"
      className="kumpir-section"
      aria-labelledby="kumpir-title"
    >
      <div className="kumpir-layout page-width">
        <div className="feature-copy reveal">
          <p className="eyebrow">02 / TUZLU BİR KAÇAMAK</p>
          <h2 id="kumpir-title">
            İçi dolu.
            <br />
            <span>Keyfi büyük.</span>
          </h2>
          <p>
            Bugün canın tuzlu mu çekti?
            <br />O zaman başrol kumpirin. Dolu dolu bir
            <br className="desktop-break" /> mola için masada sana da yer var.
          </p>
          <a href="#menu-kumpir" className="button button-yellow">
            Kumpiri keşfet <ArrowUpRight size={20} />
          </a>
          <span className="kumpir-handwritten" aria-hidden="true">
            bu da bizim tuzlu tarafımız
            <DoodleArrow />
          </span>
        </div>
        <div className="kumpir-art reveal">
          <div className="kumpir-burst" aria-hidden="true" />
          <span className="kumpir-background-type" aria-hidden="true">
            kumpir
          </span>
          <ProductVisual product="kumpir" className="kumpir-feature" />
          <span className="kumpir-sticker" aria-hidden="true">
            BOL BOL
            <br />
            <strong>OH!</strong>
          </span>
          <span className="kumpir-spark" aria-hidden="true">
            ✳
          </span>
          <ConceptLabel product="kumpir" />
        </div>
      </div>
    </section>
  );
}
