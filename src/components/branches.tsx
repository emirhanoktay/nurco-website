import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { branch } from "@/lib/content";
import { NeighborhoodMap } from "./neighborhood-map";

export function Branches() {
  return (
    <section
      id="subeler"
      className="branches-section section-space"
      aria-labelledby="branches-title"
    >
      <div className="page-width">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">ŞUBELER & İLETİŞİM</p>
            <h2 id="branches-title">
              Yolun bize <span>düşsün.</span>
            </h2>
          </div>
          <p>
            Ekrandan bir adım ötesi.
            <br />
            Birlikte güzel bir mola verelim.
          </p>
        </div>
        <div className="branch-layout reveal">
          <NeighborhoodMap />
          <div className="branch-info">
            <span className="eyebrow">İSTANBUL’DA BULUŞALIM</span>
            <h3>
              {branch.name}
              <ArrowUpRight size={30} />
            </h3>
            <span className="branch-neighborhood">{branch.neighborhood}</span>
            <div className="branch-details">
              <div className="branch-addresses">
                {[branch.address, ...branch.additionalAddresses].map(
                  (address) => (
                    <p key={address}>
                      <MapPin size={19} />
                      <span>{address}</span>
                    </p>
                  ),
                )}
              </div>
              <p>
                <Clock3 size={19} />
                <span>
                  {branch.hours}
                  <small>Çalışma saatleri · teyit bekliyor</small>
                </span>
              </p>
              <a href={branch.phoneHref}>
                <Phone size={19} />
                {branch.phone}
              </a>
            </div>
            <div className="branch-actions">
              <a
                className="button button-red"
                href={branch.maps}
                target="_blank"
                rel="noreferrer"
              >
                Yol tarifi al <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href={branch.phoneHref}>
                Bizi ara <Phone size={16} />
              </a>
            </div>
            <p className="branch-note">{branch.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
