import dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

// 在本地创建一个.env文件，里面写上OPENAI_API_KEY=你的key
dotenv.config()

const configuration = new Configuration({
  organization: 'org-WxyDKC81e4qGlGNdcfrP0emW',
  apiKey: process.env.OPENAI_API_KEY
})
export const openai = new OpenAIApi(configuration)

// 需要设置代理，梯子生效 https://github.com/fuergaosi233/wechat-chatgpt/issues/823
export const proxy = {
  host: '127.0.0.1',
  port: 7890
  // protocol: 'https'
}
