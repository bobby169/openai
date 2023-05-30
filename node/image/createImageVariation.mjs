import { openai, proxy } from '../common.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import { Buffer } from 'buffer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const originalImage = path.join(__dirname, './img/1.png')
// console.log(await fs.createReadStream(originalImage))
const imageUrl =
  'https://hbimg.huabanimg.com/0f29f868a10440cdfa447c16e544ba246761827e107d91-6grxdF_fw658'

const imageBuffer = await axios
  .get(imageUrl, { responseType: 'arraybuffer' })
  .then((response) => {
    const buffer = Buffer.from(response.data)
    // @ts-ignore
    buffer.name = 'original.png'
    return buffer
  })
  .catch((error) => {
    console.error('An error occurred while downloading the file:', error)
  })

// console.log(imageBuffer)

try {
  const response = await openai.createImageVariation(
    // @ts-ignore
    // fs.createReadStream(originalImage),
    imageBuffer,
    1,
    '1024x1024',
    'url',
    '',
    {
      proxy: proxy
    }
  )
  console.log(response.data.data[0].url)
} catch (error) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data)
  } else {
    console.log(error.message)
  }
}
