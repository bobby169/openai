import axios from 'axios'
import dotenv from 'dotenv'
import { proxy } from './common.mjs'
dotenv.config()

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
    'content-type': 'application/json'
  }
})

const params = {
  prompt: 'How are you?',
  model: 'text-davinci-003',
  max_tokens: 10,
  temperature: 0
}
const prompt = '讲个笑话'

try {
  const res = client.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      temperature: 1,
      stream: true,
      messages: [
        {
          role: 'user',
          content: '写一首七言绝句的诗'
        }
      ]
    }
    // { proxy }
  )
  // console.info(res)
} catch (error) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data)
  } else {
    console.log(error.message)
  }
}
