import Image from "next/image";
import { assets, founderStory } from "@/lib/content";

export function Story() {
  return (
    <section
      id="hikaye"
      className="story-section section-space"
      aria-labelledby="story-title"
    >
      <div className="story-layout page-width">
        <figure className="owner-portrait reveal">
          <div className="portrait-frame">
            <Image
              src={assets.owner.src}
              alt={assets.owner.alt}
              fill
              sizes="(max-width: 767px) 90vw, 42vw"
            />
          </div>
          <figcaption>
            <span>NURÇO’NUN ARDINDAKİ YÜZ</span>
            <span>01 — BİZ KİMİZ</span>
          </figcaption>
        </figure>
        <div className="story-copy reveal">
          <p className="eyebrow">BİZ KİMİZ?</p>
          <h2 id="story-title">
            Bir ismin
            <br />
            ardında,
            <br />
            <em>bir hikâye.</em>
          </h2>
          <div className="story-line" />
          <div className="story-text">
            {founderStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
