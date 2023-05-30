import { openai, proxy } from '../common.mjs'

// https://api.openai.com/v1/images/generations

const response = await openai.createImage(
  {
    prompt: 'a tiger with blue eyes',
    n: 1,
    size: '1024x1024'
  },
  {
    proxy: proxy
  }
)
const image_data = response.data.data
console.info(image_data)
