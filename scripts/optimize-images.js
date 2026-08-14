import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcDir = path.resolve('./src/assets')
const input = path.join(srcDir, 'Backgroundimage.png')
const outBase = path.join(srcDir, 'Backgroundimage')

if (!fs.existsSync(input)) {
  console.error('Input image not found:', input)
  process.exit(1)
}

const sizes = [800, 1200, 1920]

async function build() {
  try {
    // full-size webp
    await sharp(input).webp({ quality: 80 }).toFile(`${outBase}.webp`)

    // resized variants
    for (const w of sizes) {
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(`${outBase}-${w}.webp`)
    }

    // tiny placeholder
    await sharp(input).resize({ width: 20 }).blur().webp({ quality: 30 }).toFile(`${outBase}-tiny.webp`)

    console.log('Images optimized in', srcDir)
  } catch (err) {
    console.error('Image optimization failed', err)
    process.exit(1)
  }
}

build()
