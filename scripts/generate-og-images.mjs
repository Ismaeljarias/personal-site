// Generates the OG/Twitter share images used by every page (src/assets/og/*.png).
// Re-run with `node scripts/generate-og-images.mjs` whenever a page title or the
// entries list below changes. Uses the site's own dark theme tokens — keep these
// in sync with src/styles/global.css if the palette ever changes.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  bg: '#0b0a09',
  border: '#262019',
  ink: '#efe7d8',
  inkMuted: '#a89f8f',
  accent: '#7c1626',
  brass: '#b8935a',
};

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapText(text, maxCharsPerLine, maxLines) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  if (lines.length > maxLines) {
    const truncated = lines.slice(0, maxLines);
    truncated[maxLines - 1] = `${truncated[maxLines - 1]}…`;
    return truncated;
  }
  return lines;
}

function buildSvg({ eyebrow, title }) {
  const titleLines = wrapText(title, 26, 3);
  const titleFontSize = 56;
  const lineHeight = 68;
  const titleStartY = 315 - ((titleLines.length - 1) * lineHeight) / 2;

  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="80" y="${titleStartY + i * lineHeight}">${escapeXml(line)}</tspan>`,
    )
    .join('');

  return `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${COLORS.bg}"/>
  <rect x="1" y="1" width="${WIDTH - 2}" height="${HEIGHT - 2}" fill="none" stroke="${COLORS.border}" stroke-width="2"/>

  <rect x="80" y="80" width="40" height="3" fill="${COLORS.brass}"/>
  <text x="80" y="65" font-family="'Courier New', monospace" font-weight="700" font-size="20" letter-spacing="1" fill="${COLORS.brass}">${escapeXml(eyebrow.toUpperCase())}</text>

  <text font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="${titleFontSize}" fill="${COLORS.ink}">${titleTspans}</text>

  <text x="80" y="560" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="26" fill="${COLORS.ink}">Ismael Arias</text>
  <text x="1120" y="560" font-family="'Courier New', monospace" font-size="18" fill="${COLORS.inkMuted}" text-anchor="end">ismaeljarias.com</text>
</svg>
`;
}

const entries = [
  { key: 'home-en', eyebrow: 'ismaeljarias.com', title: 'Senior Shopify Developer — Hydrogen & Performance' },
  { key: 'home-es', eyebrow: 'ismaeljarias.com', title: 'Senior Shopify Developer — Hydrogen y Rendimiento' },
  { key: 'shopify-en', eyebrow: 'Line A · Shopify Plus & Hydrogen', title: 'Shopify Plus & Hydrogen Development' },
  { key: 'shopify-es', eyebrow: 'Línea A · Shopify Plus & Hydrogen', title: 'Desarrollo Shopify Plus & Hydrogen' },
  { key: 'wordpress-en', eyebrow: 'Line B · WordPress & Dynamic Sites', title: 'WordPress & Dynamic Sites' },
  { key: 'wordpress-es', eyebrow: 'Línea B · WordPress & Sitios Dinámicos', title: 'WordPress & Sitios Dinámicos' },
  { key: 'work-en', eyebrow: 'Selected work', title: 'Case Studies' },
  { key: 'work-es', eyebrow: 'Trabajo seleccionado', title: 'Casos de Éxito' },
  { key: 'contact-en', eyebrow: 'Contact', title: "Let's talk about your store or site" },
  { key: 'contact-es', eyebrow: 'Contacto', title: 'Hablemos de tu tienda o sitio' },
  { key: 'work-shopify-app-en', eyebrow: 'Case study · Independent product', title: 'Building and shipping Easy Upsell' },
  { key: 'work-shopify-app-es', eyebrow: 'Caso de éxito · Producto independiente', title: 'Diseñar y publicar Easy Upsell' },
  { key: 'work-amazon-en', eyebrow: 'Case study · Amazon', title: 'Rendering & playback performance under hard constraints' },
  { key: 'work-amazon-es', eyebrow: 'Caso de éxito · Amazon', title: 'Rendimiento y reproducción bajo restricciones extremas' },
  { key: 'work-kritik-en', eyebrow: 'Case study · Kritik', title: 'Untangling a coupled React/Redux codebase' },
  { key: 'work-kritik-es', eyebrow: 'Caso de éxito · Kritik', title: 'Desenredando un codebase de React/Redux acoplado' },
];

const outDir = fileURLToPath(new URL('../src/assets/og', import.meta.url));
await mkdir(outDir, { recursive: true });

for (const entry of entries) {
  const svg = buildSvg(entry);
  const outPath = `${outDir}/${entry.key}.png`;
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log('Wrote', outPath);
}
