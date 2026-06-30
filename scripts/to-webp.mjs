import { readdir, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const dir = new URL("../public/figma/", import.meta.url).pathname;

const files = await readdir(dir);
const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

for (const file of pngs) {
  const input = join(dir, file);
  const output = input.replace(/\.png$/i, ".webp");
  await sharp(input)
    .webp({ quality: 82, effort: 6, alphaQuality: 90 })
    .toFile(output);
  await unlink(input);
  console.log(`✓ ${file} → ${file.replace(/\.png$/i, ".webp")}`);
}

console.log(`\nConverted ${pngs.length} images to WebP.`);
