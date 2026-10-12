import { Wordmark } from "./brand";

// Schematic coordinates traced from the supplied reference, not verified addresses.
// The padded viewBox keeps all three pins visible at every container width.
const mapFrame = { x: -70, y: -35, width: 1140, height: 1020 };
const locations = [
  { x: 245, y: 305, tilt: -7 },
  { x: 220, y: 435, tilt: 6 },
  { x: 980, y: 520, tilt: -5 },
];

const mainStreets = [
  "M435-90 230 196Q204 228 212 328T255 492L358 688 535 1020",
  "M-100 148 208 210 470 250Q692 310 830 378L1080 570",
  "M105-90 408 83 706 282 1050 560",
  "M-90 838 142 738 294 650Q326 633 374 641L568 624 651 610 807 644 1100 622",
  "M-100 1030 196 938 559 892Q737 851 1100 796",
];

const sideStreets = [
  // Diagonal blocks above the cross street.
  "M-80 167 175-70M99 189 351-70M328 230 593-70",
  "M400 240 664-45M485 254 770-45M580 286 880-45",
  "M673 320 997-15M755 350 1060 55M835 387 1080 161",
  // Narrow blocks through the middle of the reference.
  "M-70 260 210 303M85 183 75 290 121 507",
  "M-50 377 25 576M-70 582 250 455 362 459 458 456 610 414",
  "M280 225 278 453M313 234 308 452M343 238 337 451",
  "M428 246 421 454 455 568M467 252 454 449 508 648",
  "M510 262 538 445 574 626M579 287 606 421 647 610",
  "M646 310 646 610M695 330 680 622M743 353 734 628",
  "M800 371 766 503 756 637M857 405 830 505 824 641",
  "M914 450 902 512 895 637M979 511 968 635",
  "M343 303 426 305M340 353 424 357M338 402 421 405",
  "M611 415 763 489 997 520M456 568 540 557",
  "M-50 725 311 552M134 505 210 691M181 482 265 667",
  "M285 461 368 641M356 459 397 637",
  // The lower east–west road and long blocks below it.
  "M-75 870 198 938M26 792 110 965M143 738 274 921",
  "M294 650 446 916M368 641 510 903M433 637 578 887",
  "M568 624 657 872M651 610 735 855M740 633 807 842",
  "M824 641 888 823M903 635 962 809M977 633 1043 795",
  "M-20 934 281 810 341 796M202 937 180 883 242 841 346 815",
  "M351 855 559 770M562 808 649 775M959 706 1100 684",
  "M180 946 213 1030M337 910 401 1030M554 891 601 1030",
  "M725 857 770 1030M840 831 899 1030M927 816 980 1030",
];

export function NeighborhoodMap() {
  return (
    <div
      className="neighborhood-art"
      role="img"
      aria-label="Referanstaki yaklaşık sokak düzeni ve üç kırmızı Nurço konum pini; temsili mahalle çizimi."
    >
      <svg
        className="map-roads"
        viewBox={`${mapFrame.x} ${mapFrame.y} ${mapFrame.width} ${mapFrame.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="var(--pink-light)">
          <path d="M-80-70H175L-80 190ZM351-70H594L328 230 208 210Z" />
          <path d="m485 254 172-181 97 68-174 145Z" />
          <path d="m755 350 166-182 104 85-190 134Z" />
          <path d="m280 225 63 13-6 213-59 2ZM467 252l43 10 28 183-84 4Z" />
          <path d="m743 353 57 18-34 132-80-38Z" />
          <path d="m143 738 122-71 103 172-94 82Z" />
          <path d="m433 637 135-13 89 248-79 15Z" />
          <path d="m824 641 79-6 59 174-74 14Z" />
          <path d="m180 883 62-42 104-26 48 96-192 60Z" />
        </g>
        <g
          fill="none"
          stroke="var(--cream)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g strokeWidth="12">
            {sideStreets.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g strokeWidth="27">
            {mainStreets.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </g>
        <g
          fill="none"
          stroke="var(--red)"
          strokeWidth="2"
          strokeDasharray="4 12"
          strokeLinecap="round"
          opacity="0.24"
        >
          {mainStreets.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
      {locations.map(({ x, y, tilt }) => (
        <div
          key={`${x}-${y}`}
          className="map-pin"
          aria-hidden="true"
          style={{
            left: `${((x - mapFrame.x) / mapFrame.width) * 100}%`,
            top: `${((y - mapFrame.y) / mapFrame.height) * 100}%`,
            rotate: `${tilt}deg`,
          }}
        >
          <svg viewBox="0 0 106 90" fill="currentColor">
            <path
              d="M53 3C24 3 4 17 4 39c0 22 25 30 49 47 24-17 49-25 49-47C102 17 82 3 53 3Z"
              stroke="var(--cream)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
          <Wordmark />
        </div>
      ))}
    </div>
  );
}
