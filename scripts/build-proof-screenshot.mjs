// Builds src/assets/proof-pagespeed.png from the two real PageSpeed Insights
// screenshots (Mobile + Desktop) of the live production site. Re-run whenever
// new screenshots are captured — pass their paths as argv[2] and argv[3].
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const [, , mobileSrc, desktopSrc] = process.argv;
if (!mobileSrc || !desktopSrc) {
  console.error('Usage: node build-proof-screenshot.mjs <mobile.png> <desktop.png>');
  process.exit(1);
}

const PANEL_WIDTH = 784;
const GAP = 32;
const CROP = { left: 0, top: 0, width: 2632, height: 2420 };

const [mobileBuf, desktopBuf] = await Promise.all([
  sharp(mobileSrc).extract(CROP).resize(PANEL_WIDTH).toBuffer(),
  sharp(desktopSrc).extract(CROP).resize(PANEL_WIDTH).toBuffer(),
]);

const panelMeta = await sharp(mobileBuf).metadata();
const panelHeight = panelMeta.height;
const canvasWidth = PANEL_WIDTH * 2 + GAP;

const outPath = fileURLToPath(new URL('../src/assets/proof-pagespeed.png', import.meta.url));

await sharp({
  create: {
    width: canvasWidth,
    height: panelHeight,
    channels: 3,
    background: '#ffffff',
  },
})
  .composite([
    { input: mobileBuf, left: 0, top: 0 },
    { input: desktopBuf, left: PANEL_WIDTH + GAP, top: 0 },
  ])
  .png()
  .toFile(outPath);

console.log('Wrote', outPath, `${canvasWidth}x${panelHeight}`);
