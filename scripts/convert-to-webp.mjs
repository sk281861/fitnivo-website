/**
 * Batch JPEG → WebP Converter
 * Uses sharp (bundled with Next.js) to convert all JPEG images to WebP
 * Run: node scripts/convert-to-webp.mjs
 */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, "../public/images");
const QUALITY = 82;

async function findJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await findJpegs(fullPath);
      files.push(...nested);
    } else if ([".jpg", ".jpeg"].includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebp(filePath) {
  const dir = dirname(filePath);
  const base = basename(filePath, extname(filePath));
  const outPath = join(dir, `${base}.webp`);

  const beforeStat = await stat(filePath);
  await sharp(filePath)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outPath);
  const afterStat = await stat(outPath);

  const reduction = (((beforeStat.size - afterStat.size) / beforeStat.size) * 100).toFixed(1);
  const beforeKB = (beforeStat.size / 1024).toFixed(0);
  const afterKB = (afterStat.size / 1024).toFixed(0);

  console.log(`✅ ${base}.jpeg → ${base}.webp  |  ${beforeKB}KB → ${afterKB}KB  (−${reduction}%)`);
  return { filePath, outPath, beforeSize: beforeStat.size, afterSize: afterStat.size };
}

async function main() {
  console.log("🔍 Scanning for JPEG files in public/images/...\n");
  const jpegs = await findJpegs(PUBLIC_DIR);

  if (jpegs.length === 0) {
    console.log("No JPEG files found.");
    return;
  }

  console.log(`📦 Found ${jpegs.length} JPEG file(s). Converting to WebP at quality ${QUALITY}...\n`);

  const results = [];
  for (const file of jpegs) {
    try {
      const result = await convertToWebp(file);
      results.push(result);
    } catch (err) {
      console.error(`❌ Failed: ${file} — ${err.message}`);
    }
  }

  const totalBefore = results.reduce((s, r) => s + r.beforeSize, 0);
  const totalAfter = results.reduce((s, r) => s + r.afterSize, 0);
  const totalReduction = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

  console.log(`\n🎉 Done! ${results.length}/${jpegs.length} files converted.`);
  console.log(`📊 Total: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (−${totalReduction}%)`);
}

main().catch(console.error);
