const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'assets-img');
const outputDir = path.join(__dirname, '..', 'public', 'sequence');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertAll() {
  const files = fs.readdirSync(inputDir)
    .filter(f => f.endsWith('.png'))
    .sort();

  console.log(`Found ${files.length} frames to convert...`);
  const startTime = Date.now();

  // Process in batches of 12 for concurrency
  const batchSize = 12;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(batch.map(async (file) => {
      const match = file.match(/frame-(\d+)\.png/);
      if (!match) return;
      const num = parseInt(match[1], 10);
      const inputPath = path.join(inputDir, file);
      
      const buffer = await sharp(inputPath)
        .resize(1920, 1080, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toBuffer();

      // Write standard names
      // 1. frame-0001.webp
      fs.writeFileSync(path.join(outputDir, `frame-${String(num).padStart(4, '0')}.webp`), buffer);
      // 2. frame_001.webp (for 3-digit requests)
      fs.writeFileSync(path.join(outputDir, `frame_${String(num).padStart(3, '0')}.webp`), buffer);
      // 3. frame-1.webp (for unpadded requests)
      fs.writeFileSync(path.join(outputDir, `frame-${num}.webp`), buffer);
      // 4. frame_0001.webp (4-digit underscore)
      fs.writeFileSync(path.join(outputDir, `frame_${String(num).padStart(4, '0')}.webp`), buffer);
    }));
    console.log(`Processed ${Math.min(i + batchSize, files.length)} / ${files.length} frames`);
  }

  console.log(`All frames converted successfully in ${(Date.now() - startTime) / 1000}s!`);
}

convertAll().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
