// Generates a placeholder for src/assets/proof-pagespeed.png.
//
// TODO(owner): replace this file with a real PageSpeed Insights / web.dev
// screenshot of https://ismaeljarias.com once it's captured. Keep the same
// filename and roughly the same 1200x750 aspect ratio so PerformanceProof.astro
// doesn't need any changes — only this file needs to be swapped.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const WIDTH = 1200;
const HEIGHT = 750;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#08090b"/>
  <rect x="24" y="24" width="${WIDTH - 48}" height="${HEIGHT - 48}" rx="16" fill="none" stroke="#1e222a" stroke-width="2"/>
  <rect x="24" y="24" width="${WIDTH - 48}" height="64" rx="16" fill="#12151b"/>
  <circle cx="56" cy="56" r="6" fill="#2dd4bf" opacity="0.5"/>
  <circle cx="76" cy="56" r="6" fill="#9aa1ad" opacity="0.3"/>
  <circle cx="96" cy="56" r="6" fill="#9aa1ad" opacity="0.3"/>
  <text x="600" y="62" font-family="Inter, sans-serif" font-size="15" fill="#7a8290" text-anchor="middle">PageSpeed Insights — placeholder</text>

  <text x="600" y="360" font-family="Inter, sans-serif" font-weight="700" font-size="34" fill="#e9ebef" text-anchor="middle">TODO: replace with a real</text>
  <text x="600" y="406" font-family="Inter, sans-serif" font-weight="700" font-size="34" fill="#e9ebef" text-anchor="middle">PageSpeed Insights screenshot</text>
  <text x="600" y="450" font-family="Inter, sans-serif" font-size="17" fill="#9aa1ad" text-anchor="middle">Swap src/assets/proof-pagespeed.png — no component changes needed</text>
</svg>
`;

const outPath = fileURLToPath(new URL('../src/assets/proof-pagespeed.png', import.meta.url));

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log('Wrote', outPath);
