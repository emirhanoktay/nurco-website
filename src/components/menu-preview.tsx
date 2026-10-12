import { Plus } from "lucide-react";
import { menuCategories } from "@/lib/content";
import { Smile } from "./brand";

export function MenuPreview() {
  return (
    <section
      id="menu"
      className="menu-section section-space"
      aria-labelledby="menu-title"
    >
      <div className="menu-layout page-width">
        <div className="menu-intro reveal">
          <p className="eyebrow">MENÜYE KÜÇÜK BİR BAKIŞ</p>
          <h2 id="menu-title">
            Canın ne
            <br />
            <span>çekiyor?</span>
          </h2>
          <p>
            Takım tatlı mı, takım tuzlu mu?
            <br />
            Karar senin, keyif hepimizin.
          </p>
          <Smile className="menu-smile" />
          <span className="menu-note">Kararsız kalmak serbest.</span>
        </div>
        <div className="menu-content reveal">
          <div className="menu-list">
            {menuCategories.map((category) => (
              <details
                id={`menu-${category.number === "01" ? "waffle" : category.number === "02" ? "kumpir" : "icecekler"}`}
                key={category.number}
              >
                <summary>
                  <span className="menu-index">{category.number}</span>
                  <span className="menu-name">
                    <strong>{category.name}</strong>
                    <small>{category.note}</small>
                  </span>
                  <span className="menu-plus">
                    <Plus size={23} />
                  </span>
                </summary>
                <div className="menu-detail">
                  {category.items.length > 0 && (
                    <ul>
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p>{category.description}</p>
                  <a href="#subeler">Güncel menü için bize ulaş ↗</a>
                </div>
              </details>
            ))}
          </div>
          <p className="menu-disclaimer">
            <span /> MENÜ ÖNİZLEMESİ{" "}
            <span className="menu-disclaimer-text">
              İçerikler ve fiyatlar yakında burada.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
