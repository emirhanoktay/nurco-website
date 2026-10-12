import styles from "./hero.module.css";

type Point = { x: number; y: number };

// Both edges use the same radial bend, so neighboring ribbons cannot pinch or cross.
function ribbonEdge(angle: number, bend: number): Point[] {
  return Array.from({ length: 31 }, (_, index) => {
    const radius = index * 60;
    const sway =
      (42 * Math.sin(radius / 52) + bend * 22 * Math.sin(radius / 63 + 0.7)) *
      Math.min(1, radius / 140);
    const theta = angle + Math.atan2(sway, radius || 1);
    return { x: radius * Math.sin(theta), y: -radius * Math.cos(theta) };
  });
}

function smoothEdge(points: Point[]): string {
  const coordinate = (value: number) => value.toFixed(2);
  return points
    .slice(1)
    .map((point, index) => {
      const start = points[index];
      const before = points[Math.max(0, index - 1)];
      const after = points[Math.min(points.length - 1, index + 2)];
      return `C${coordinate(start.x + (point.x - before.x) / 6)} ${coordinate(start.y + (point.y - before.y) / 6)} ${coordinate(point.x - (after.x - start.x) / 6)} ${coordinate(point.y - (after.y - start.y) / 6)} ${coordinate(point.x)} ${coordinate(point.y)}`;
    })
    .join(" ");
}

function makeRibbon(bend: number): string {
  const halfWidth = (5.2 * Math.PI) / 180;
  const left = ribbonEdge(-halfWidth, bend);
  const right = ribbonEdge(halfWidth, bend).reverse();
  return `M0 0 ${smoothEdge(left)} L${right[0].x.toFixed(2)} ${right[0].y.toFixed(2)} ${smoothEdge(right)} Z`;
}

const ribbonRest = makeRibbon(-1);
const rotations = Array.from({ length: 18 }, (_, index) => index * 20);

export function HeroWaves() {
  return (
    <div className={styles.waveField} aria-hidden="true">
      <svg
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
        className={styles.wavePoster}
      >
        {/* Keep the same origin and framing, with rotation in local coordinates. */}
        <g transform="translate(1000 600)">
          <g className={styles.waveRotation}>
            {rotations.map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path d={ribbonRest} />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}

/** Product-local coordinates keep the yellow marks close at every breakpoint. */
export function ProductRays({ product }: { product: "waffle" | "kumpir" }) {
  return (
    <svg
      className={styles.productRays}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {product === "waffle" ? (
        <g className={styles.waffleHighlights}>
          <path d="M19 18 15 14M25 12 22 7M33 8 32 3" />
          <path d="M3 31Q-1 38 3 46" />
        </g>
      ) : (
        <g className={styles.kumpirHighlights}>
          <path d="M60 13 59 9M72 12 74 8M83 17 87 14" />
          <path d="M98 29Q102 35 100 41" />
        </g>
      )}
    </svg>
  );
}

export function ProductHighlights() {
  return (
    <svg
      className={styles.productHighlights}
      viewBox="0 0 700 600"
      fill="none"
      aria-hidden="true"
    >
      <g className={styles.waffleHighlights}>
        <path
          className={styles.pinkHighlight}
          d="M267 29 284 8M285 44 311 34"
        />
      </g>
      <g className={styles.kumpirHighlights}>
        <path
          className={styles.berryHighlight}
          d="M405 506 394 529M427 517 425 546"
        />
      </g>
      <path
        className={styles.twinkle}
        d="m504 66 5 13 13 5-13 5-5 13-5-13-13-5 13-5Z"
      />
    </svg>
  );
}
