import { openai, proxy } from '../common.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const originalImage = path.join(__dirname, './img/2.png')
const maskImage = path.join(__dirname, './img/mask.png')

try {
  const response = await openai.createImageEdit(
    // @ts-ignore
    fs.createReadStream(originalImage),
    'a boat',
    fs.createReadStream(maskImage),
    1,
    '1024x1024',
    'url',
    '',
    {
      proxy: proxy
    }
  )
  const image_data = response.data.data
  console.info(image_data)
} catch (error) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data)
  } else {
    console.log(error.message)
  }
}
