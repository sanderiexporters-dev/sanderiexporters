/**
 * Run once from project root:
 *   npm install sharp
 *   node compress-images.mjs
 *
 * Compresses every image in src/assets/ that is over 200 KB.
 * Originals are overwritten (run from git so you can revert if needed).
 */

import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, basename } from "path";

const ASSETS_DIR = "./src/assets";
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;
const SKIP_BELOW_KB = 200;

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const images = walk(ASSETS_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
let totalSaved = 0;

for (const file of images) {
  const sizeBefore = statSync(file).size;
  if (sizeBefore < SKIP_BELOW_KB * 1024) {
    console.log(`SKIP  ${basename(file).padEnd(42)} ${(sizeBefore / 1024).toFixed(0)} KB`);
    continue;
  }

  const ext = extname(file).toLowerCase();
  const tmp = file + ".tmp";

  try {
    let pipeline = sharp(file).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    pipeline = ext === ".png"
      ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    await pipeline.toFile(tmp);
    const sizeAfter = statSync(tmp).size;
    const saved = sizeBefore - sizeAfter;
    totalSaved += saved;
    renameSync(tmp, file);
    console.log(
      `OK    ${basename(file).padEnd(42)} ${(sizeBefore / 1024 / 1024).toFixed(2)} MB → ${(sizeAfter / 1024 / 1024).toFixed(2)} MB  (saved ${(saved / 1024).toFixed(0)} KB)`
    );
  } catch (err) {
    console.error(`FAIL  ${file}: ${err.message}`);
  }
}

console.log(`\nDone. Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
