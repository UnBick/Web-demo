import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const optimizeImages = async (inputDir) => {
  const files = fs.readdirSync(inputDir)
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file)
      const outputPath = path.join(inputDir, `optimized-${file}`)
      
      await sharp(inputPath)
        .resize(3840, 2160, { // 4K resolution
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 90, effort: 6 }) // High quality WebP
        .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
    }
  }
}

optimizeImages('./Dashboard')
