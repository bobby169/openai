import { openai, proxy } from './common.mjs'
import express from 'express'

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

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
        proxy: proxy
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
