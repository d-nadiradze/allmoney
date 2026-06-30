import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appDir = join(__dirname, "..", "src", "app");

// "M" mark silhouette traced from the Figma logo (viewBox 0 0 54 28).
const MARK =
  "M13.7147 1.92278C15.6874 -0.416258 19.4373 -0.634101 21.745 1.33977C22.2813 1.79852 22.5145 2.19648 22.9013 2.72844L24.1669 4.50481C25.0479 5.74154 25.9356 6.93819 26.8153 8.18841L27.1522 8.64251C27.2684 8.80188 27.3806 8.96282 27.4657 9.10442C27.8148 8.5457 28.2501 8.04221 28.6366 7.51262C29.127 6.84076 29.6215 6.17856 30.1181 5.51165L31.7216 3.33782C32.1212 2.79707 32.6142 2.08144 33.1083 1.64446C33.8229 1.02465 34.6769 0.585581 35.5966 0.365163C37.1698 0.013007 38.8193 0.295485 40.1854 1.1513C41.0983 1.72371 41.4466 2.34953 42.0438 3.1845L43.3778 5.01751L47.3075 10.5575L50.8837 15.6796L52.3358 17.7743C52.4627 17.9583 52.6024 18.1597 52.7382 18.3368C54.144 20.1724 54.1644 22.8406 52.9452 24.7714C52.1643 25.9949 50.9322 26.8614 49.5165 27.1816C47.6554 27.6004 45.3164 27.1342 44.1122 25.5995C43.1696 24.3983 42.2771 23.0123 41.3808 21.7675L38.9892 18.4003C38.8503 18.2043 38.1366 17.2489 38.0565 17.0751C37.6804 16.575 37.3239 16.0459 36.9374 15.5322C36.587 16.1157 36.0958 16.6701 35.6845 17.2294C34.5086 18.8176 33.319 20.3961 32.1161 21.9638L30.412 24.2626C30.0703 24.7287 29.5752 25.4564 29.1708 25.8349C28.4922 26.4655 27.6624 26.9107 26.7616 27.1269C22.5387 28.1823 18.775 24.801 19.6171 20.4267C19.7414 19.7809 20.0543 19.1673 20.3944 18.6074C20.1742 18.3202 18.4323 16.0181 18.3544 15.8075C18.3092 15.7658 18.2324 15.6703 18.1561 15.5712L17.9608 15.3124C17.4104 16.0959 16.8597 16.7904 16.2938 17.5546L12.9833 22.0087L11.2811 24.2851C11.0603 24.581 10.7851 25.0039 10.5536 25.2695C10.2952 25.5628 10.0033 25.8254 9.68446 26.0517C9.21511 26.3886 8.63937 26.6846 8.08388 26.8427C3.87494 28.0399 0.223622 24.6686 0.937393 20.4101C1.0628 19.7036 1.32204 19.0275 1.70204 18.4189C2.10281 17.7677 2.79455 16.937 3.25673 16.2822C4.85698 14.0427 6.47552 11.8164 8.1122 9.60344C9.62746 7.55411 11.0936 5.4589 12.62 3.41887C13.0078 2.95716 13.3304 2.37861 13.7147 1.92278Z";

const MARK_W = 54;
const MARK_H = 28;

const grad = (id) => `
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9A5BFF" />
      <stop offset="1" stop-color="#561EB2" />
    </linearGradient>`;

/** Center the mark within a square of `size`, occupying `coverage` of the width. */
function markGroup(size, coverage) {
  const w = size * coverage;
  const scale = w / MARK_W;
  const h = MARK_H * scale;
  const x = (size - w) / 2;
  const y = (size - h) / 2;
  return `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${scale.toFixed(4)})"><path fill="url(#g)" d="${MARK}" /></g>`;
}

// Transparent icon (browser tab / PWA) — the mark on its own.
const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs>${grad("g")}</defs>${markGroup(512, 0.66)}</svg>`;

// Apple touch icon — needs an opaque background (iOS ignores transparency).
const appleSvg = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><defs>${grad("g")}<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15121F" /><stop offset="1" stop-color="#030303" /></linearGradient></defs><rect width="180" height="180" rx="40" fill="url(#bg)" />${markGroup(180, 0.62)}</svg>`;

async function run() {
  await sharp(Buffer.from(iconSvg)).png().toFile(join(appDir, "icon.png"));
  await sharp(Buffer.from(appleSvg)).png().toFile(join(appDir, "apple-icon.png"));

  // Multi-size favicon.ico from the transparent mark for broad browser support.
  const pngs = await Promise.all(
    [16, 32, 48].map((s) => sharp(Buffer.from(iconSvg)).resize(s, s).png().toBuffer()),
  );
  await writeFile(join(appDir, "favicon.ico"), await pngToIco(pngs));

  console.log("Generated icon.png, apple-icon.png, favicon.ico");
}

run();
