/* ============================================================
   ON THIS DAY — Category Illustrations (SVG)
   Stylized, isolated-figure illustrations per category.
   No backgrounds — just figures with drop shadows.
   ============================================================ */

const CATEGORY_ILLUSTRATIONS = {

  war: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="ws"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#ws)">
      <!-- Crossed swords -->
      <line x1="25" y1="75" x2="65" y2="20" stroke="#8B2500" stroke-width="3" stroke-linecap="round"/>
      <line x1="75" y1="75" x2="35" y2="20" stroke="#8B2500" stroke-width="3" stroke-linecap="round"/>
      <!-- Guards -->
      <ellipse cx="43" cy="33" rx="10" ry="3" fill="#8B2500" opacity="0.7" transform="rotate(-50 43 33)"/>
      <ellipse cx="57" cy="33" rx="10" ry="3" fill="#8B2500" opacity="0.7" transform="rotate(50 57 33)"/>
      <!-- Shield -->
      <path d="M50 50 Q50 70 50 78 Q40 72 35 62 Q30 52 35 45 Q42 40 50 42 Q58 40 65 45 Q70 52 65 62 Q60 72 50 78Z" fill="#8B2500" opacity="0.15" stroke="#8B2500" stroke-width="1.5"/>
      <circle cx="50" cy="58" r="5" fill="none" stroke="#8B2500" stroke-width="1" opacity="0.5"/>
    </g>
  </svg>`,

  birth: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="bs"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#bs)">
      <!-- Star/sparkle -->
      <path d="M50 15 L53 40 L75 35 L58 50 L78 65 L53 58 L50 85 L47 58 L22 65 L42 50 L25 35 L47 40Z" fill="#2D6A4F" opacity="0.2"/>
      <path d="M50 25 L52 42 L68 39 L55 48 L70 58 L52 54 L50 72 L48 54 L30 58 L45 48 L32 39 L48 42Z" fill="#2D6A4F" opacity="0.5"/>
      <circle cx="50" cy="48" r="6" fill="#2D6A4F" opacity="0.7"/>
    </g>
  </svg>`,

  death: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="ds"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#ds)">
      <!-- Hourglass -->
      <rect x="33" y="22" width="34" height="4" rx="2" fill="#4A4A4A" opacity="0.7"/>
      <rect x="33" y="74" width="34" height="4" rx="2" fill="#4A4A4A" opacity="0.7"/>
      <path d="M37 26 L50 50 L63 26" fill="none" stroke="#4A4A4A" stroke-width="2"/>
      <path d="M37 74 L50 50 L63 74" fill="none" stroke="#4A4A4A" stroke-width="2"/>
      <!-- Sand -->
      <path d="M44 32 L50 44 L56 32Z" fill="#4A4A4A" opacity="0.2"/>
      <path d="M44 68 L50 58 L56 68Z" fill="#4A4A4A" opacity="0.35"/>
      <!-- Falling grains -->
      <circle cx="50" cy="51" r="1" fill="#4A4A4A" opacity="0.6"/>
      <circle cx="50" cy="54" r="0.8" fill="#4A4A4A" opacity="0.4"/>
    </g>
  </svg>`,

  invention: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="is"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#is)">
      <!-- Lightbulb -->
      <path d="M50 20 Q35 20 32 38 Q30 50 40 58 L40 68 L60 68 L60 58 Q70 50 68 38 Q65 20 50 20Z" fill="#2563EB" opacity="0.12" stroke="#2563EB" stroke-width="1.5"/>
      <rect x="42" y="68" width="16" height="4" rx="2" fill="#2563EB" opacity="0.5"/>
      <rect x="44" y="73" width="12" height="3" rx="1.5" fill="#2563EB" opacity="0.4"/>
      <!-- Filament -->
      <path d="M46 40 Q50 52 54 40" fill="none" stroke="#2563EB" stroke-width="1.5" opacity="0.6"/>
      <!-- Rays -->
      <line x1="50" y1="8" x2="50" y2="14" stroke="#2563EB" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
      <line x1="30" y1="15" x2="34" y2="20" stroke="#2563EB" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
      <line x1="70" y1="15" x2="66" y2="20" stroke="#2563EB" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
      <line x1="22" y1="30" x2="28" y2="33" stroke="#2563EB" stroke-width="1.5" opacity="0.25" stroke-linecap="round"/>
      <line x1="78" y1="30" x2="72" y2="33" stroke="#2563EB" stroke-width="1.5" opacity="0.25" stroke-linecap="round"/>
    </g>
  </svg>`,

  political: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="ps"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#ps)">
      <!-- Pillar / column -->
      <rect x="40" y="30" width="20" height="40" fill="#7C3AED" opacity="0.15"/>
      <!-- Capital -->
      <path d="M35 30 L65 30 L62 24 L38 24Z" fill="#7C3AED" opacity="0.4"/>
      <rect x="34" y="22" width="32" height="3" rx="1.5" fill="#7C3AED" opacity="0.5"/>
      <!-- Base -->
      <rect x="34" y="70" width="32" height="3" rx="1.5" fill="#7C3AED" opacity="0.5"/>
      <path d="M35 70 L65 70 L68 76 L32 76Z" fill="#7C3AED" opacity="0.4"/>
      <!-- Flutes -->
      <line x1="45" y1="32" x2="45" y2="68" stroke="#7C3AED" stroke-width="1" opacity="0.3"/>
      <line x1="50" y1="32" x2="50" y2="68" stroke="#7C3AED" stroke-width="1" opacity="0.3"/>
      <line x1="55" y1="32" x2="55" y2="68" stroke="#7C3AED" stroke-width="1" opacity="0.3"/>
      <!-- Laurel hints -->
      <path d="M28 48 Q22 40 28 32" fill="none" stroke="#7C3AED" stroke-width="1.5" opacity="0.3"/>
      <path d="M72 48 Q78 40 72 32" fill="none" stroke="#7C3AED" stroke-width="1.5" opacity="0.3"/>
    </g>
  </svg>`,

  disaster: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="dds"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#dds)">
      <!-- Lightning bolt -->
      <path d="M55 12 L40 48 L50 48 L38 88 L65 44 L52 44Z" fill="#B91C1C" opacity="0.25" stroke="#B91C1C" stroke-width="1.5" stroke-linejoin="round"/>
      <!-- Cracks -->
      <line x1="50" y1="78" x2="38" y2="90" stroke="#B91C1C" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
      <line x1="50" y1="78" x2="62" y2="92" stroke="#B91C1C" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
      <line x1="50" y1="78" x2="50" y2="95" stroke="#B91C1C" stroke-width="1" opacity="0.2" stroke-linecap="round"/>
    </g>
  </svg>`,

  exploration: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="es"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#es)">
      <!-- Compass rose -->
      <circle cx="50" cy="50" r="28" fill="none" stroke="#D97706" stroke-width="1.5" opacity="0.4"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#D97706" stroke-width="1" opacity="0.2"/>
      <!-- N pointer -->
      <path d="M50 22 L46 46 L50 42 L54 46Z" fill="#D97706" opacity="0.6"/>
      <!-- S pointer -->
      <path d="M50 78 L54 54 L50 58 L46 54Z" fill="#D97706" opacity="0.3"/>
      <!-- E/W pointers -->
      <path d="M78 50 L54 46 L58 50 L54 54Z" fill="#D97706" opacity="0.25"/>
      <path d="M22 50 L46 54 L42 50 L46 46Z" fill="#D97706" opacity="0.25"/>
      <!-- Center -->
      <circle cx="50" cy="50" r="3" fill="#D97706" opacity="0.6"/>
    </g>
  </svg>`,

  cultural: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="cs"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#cs)">
      <!-- Lyre / harp shape -->
      <path d="M35 75 Q35 30 50 20 Q65 30 65 75" fill="none" stroke="#DB2777" stroke-width="2" opacity="0.5"/>
      <path d="M40 72 Q40 38 50 28 Q60 38 60 72" fill="none" stroke="#DB2777" stroke-width="1.5" opacity="0.3"/>
      <!-- Strings -->
      <line x1="44" y1="40" x2="44" y2="72" stroke="#DB2777" stroke-width="0.8" opacity="0.3"/>
      <line x1="50" y1="34" x2="50" y2="72" stroke="#DB2777" stroke-width="0.8" opacity="0.4"/>
      <line x1="56" y1="40" x2="56" y2="72" stroke="#DB2777" stroke-width="0.8" opacity="0.3"/>
      <!-- Base bar -->
      <rect x="33" y="72" width="34" height="4" rx="2" fill="#DB2777" opacity="0.5"/>
      <!-- Notes -->
      <circle cx="28" cy="28" r="3" fill="#DB2777" opacity="0.3"/>
      <line x1="31" y1="28" x2="31" y2="18" stroke="#DB2777" stroke-width="1" opacity="0.3"/>
      <circle cx="72" cy="35" r="2.5" fill="#DB2777" opacity="0.2"/>
      <line x1="74.5" y1="35" x2="74.5" y2="26" stroke="#DB2777" stroke-width="1" opacity="0.2"/>
    </g>
  </svg>`,

  // Default / unknown
  default: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="dfs"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#dfs)">
      <circle cx="50" cy="45" r="18" fill="none" stroke="#A89B84" stroke-width="2" opacity="0.4"/>
      <circle cx="50" cy="45" r="5" fill="#A89B84" opacity="0.3"/>
      <line x1="50" y1="27" x2="50" y2="20" stroke="#A89B84" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
      <line x1="50" y1="63" x2="50" y2="70" stroke="#A89B84" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
      <line x1="32" y1="45" x2="25" y2="45" stroke="#A89B84" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
      <line x1="68" y1="45" x2="75" y2="45" stroke="#A89B84" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
    </g>
  </svg>`,
};

function getIllustration(category) {
  return CATEGORY_ILLUSTRATIONS[category] || CATEGORY_ILLUSTRATIONS.default;
}
