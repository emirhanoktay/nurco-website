import { ArrowUpRight, Instagram } from "lucide-react";
import { social } from "@/lib/content";
import { Flower, Smile, Wordmark } from "./brand";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="page-width reveal">
        <Flower className="cta-flower" />
        <Smile className="cta-smile" />
        <p className="eyebrow">BİR SONRAKİ MOLANIN ADI BELLİ</p>
        <h2 id="cta-title">
          Hadi, bir
          <br />
          <span>Nurço yapalım.</span>
        </h2>
        <a className="button button-yellow" href="#subeler">
          En tatlı buluşma noktası <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-top">
          <a href="#" className="home-link" aria-label="Nurço ana sayfaya dön">
            <Wordmark />
          </a>
          <p>
            Tatlısıyla, tuzlusuyla.
            <br />
            Hayatın keyifli tarafında.
          </p>
          <nav aria-label="Alt menü">
            <a href="#menu">Menü</a>
            <a href="#hikaye">Biz Kimiz</a>
            <a href="#subeler">İletişim</a>
          </nav>
          <a
            className="footer-instagram"
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Nurço Instagram profili"
          >
            <Instagram size={24} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nurço · Waffle & Kumpir</span>
          <span>Konsept önizleme · Ürün görselleri temsilidir.</span>
          <a href="#">Yukarı dön ↑</a>
        </div>
      </div>
    </footer>
  );
}
