import dotenv from 'dotenv'
import express from 'express'
import { Configuration, OpenAIApi } from 'openai'

// 在本地创建一个.env文件，里面写上OPENAI_API_KEY=你的key
dotenv.config()

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

const configuration = new Configuration({
  organization: 'org-WxyDKC81e4qGlGNdcfrP0emW',
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

// POST request endpoint
app.post('/ask', async (req, res) => {
  const prompt = req.body.prompt
  try {
    if (prompt == null) {
      throw new Error('Uh oh, no prompt was provided')
    }
    const response = await openai.createChatCompletion(
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      },
      {
        // 需要设置代理，梯子生效 https://github.com/fuergaosi233/wechat-chatgpt/issues/823
        proxy: {
          host: '127.0.0.1',
          port: 7890
        }
      }
    )
    const completion = response.data.choices[0].message
    return res.status(200).json({
      success: true,
      message: completion
    })
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(port, () => console.log(`Server is running on port ${port}!!`))
