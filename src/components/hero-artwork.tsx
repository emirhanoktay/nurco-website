"use client";

import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import styles from "./hero.module.css";

/** Only the decorative hero motion is interactive; products stay server-rendered. */
export function HeroArtwork({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className={`hero-art ${styles.artwork}`} data-motion-paused={paused}>
      {children}
      <button
        type="button"
        className={styles.motionToggle}
        aria-pressed={paused}
        aria-label={
          paused ? "Hero hareketini devam ettir" : "Hero hareketini durdur"
        }
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play size={12} /> : <Pause size={12} />}
        <span>{paused ? "Hareketi başlat" : "Hareketi durdur"}</span>
      </button>
    </div>
  );
}
