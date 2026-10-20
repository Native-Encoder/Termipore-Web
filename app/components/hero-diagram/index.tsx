const holes = [160, 200, 240, 280, 320, 360, 400, 440, 480, 520];
const drops = [
  { cx: 180, delay: '0s' },
  { cx: 260, delay: '.6s' },
  { cx: 340, delay: '1.2s' },
  { cx: 420, delay: '.3s' },
  { cx: 500, delay: '.9s' },
];

/** Ground-floor cross-section: pipe at plinth level fed from a wall junction box. */
export default function HeroDiagram() {
  return (
    <figure className="m-0">
      <svg
        className="block h-auto w-full"
        viewBox="0 0 560 420"
        role="img"
        aria-labelledby="xsT"
      >
        <title id="xsT">
          Section through a ground floor: Termipore pipe laid at plinth level
          beneath the floor slab, fed from a wall-mounted junction box, with
          termiticide spreading into the surrounding soil.
        </title>
        <defs>
          <pattern
            id="soil"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="4" r="1.1" fill="#fff" opacity=".18" />
            <circle cx="10" cy="10" r=".9" fill="#fff" opacity=".12" />
          </pattern>
          <linearGradient id="zone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F26F21" stopOpacity=".75" />
            <stop offset="1" stopColor="#F26F21" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* wall */}
        <rect x="30" y="30" width="70" height="250" fill="#fff" opacity=".1" />
        <rect
          x="30"
          y="30"
          width="70"
          height="250"
          fill="none"
          stroke="#fff"
          strokeOpacity=".35"
        />
        {/* junction box */}
        <rect x="100" y="150" width="40" height="34" rx="3" fill="#F26F21" />
        <rect
          x="108"
          y="158"
          width="24"
          height="18"
          rx="2"
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
        />
        {/* injection arrow */}
        <path
          d="M190 120 L150 160"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path d="M150 160 l10 -2 l-6 -6 z" fill="#fff" />
        {/* floor finish + slab */}
        <rect x="30" y="280" width="510" height="9" fill="#EDE7DC" />
        <rect x="30" y="289" width="510" height="30" fill="#fff" opacity=".2" />
        {/* soil */}
        <rect
          x="30"
          y="319"
          width="510"
          height="90"
          fill="#161848"
          opacity=".55"
        />
        <rect x="30" y="319" width="510" height="90" fill="url(#soil)" />
        {/* treated zone */}
        <rect
          className="animate-zone motion-reduce:animate-none"
          x="100"
          y="319"
          width="440"
          height="56"
          fill="url(#zone)"
        />
        {/* pipe */}
        <path
          d="M120 184 V328 H535"
          fill="none"
          stroke="#1B1D55"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M120 184 V328 H535"
          fill="none"
          stroke="#F26F21"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <g fill="#fff">
          {holes.map((cx) => (
            <circle key={cx} cx={cx} cy="328" r="1.6" />
          ))}
        </g>
        <g fill="#FFB98E">
          {drops.map((d) => (
            <circle
              key={d.cx}
              className="animate-drop motion-reduce:animate-none"
              cx={d.cx}
              cy="336"
              r="2"
              style={{ animationDelay: d.delay }}
            />
          ))}
        </g>
        {/* labels */}
        <g
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
          fontSize="11"
          fill="#fff"
        >
          <text x="196" y="116">
            Injection point
          </text>
          <text x="146" y="206" fill="#C9CBEA">
            Junction box
          </text>
          <line
            x1="420"
            y1="268"
            x2="420"
            y2="284"
            stroke="#fff"
            strokeOpacity=".6"
          />
          <text x="372" y="262">
            Floor finish
          </text>
          <text x="440" y="308" fill="#C9CBEA">
            PCC slab
          </text>
          <line
            x1="300"
            y1="350"
            x2="300"
            y2="390"
            stroke="#fff"
            strokeOpacity=".6"
          />
          <text x="208" y="402">
            Termipore at plinth level
          </text>
          <text x="438" y="398" fill="#FFB98E">
            Treated soil
          </text>
        </g>
      </svg>
    </figure>
  );
}
