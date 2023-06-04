import { openai, proxy } from './common.mjs'
// import { v4 as uuidv4 } from 'uuid'

const prompt = '讲个笑话'
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
  const res = {
    success: true,
    message: completion
    // messageId: uuidv4()
  }
  console.info(res)
} catch (error) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data)
  } else {
    console.log(error.message)
  }
}
