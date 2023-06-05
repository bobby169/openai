import axios from 'axios'
import { proxy } from './common.mjs'
import * as parse from '@fortaine/fetch-event-source/parse'

// https://github.com/openai/openai-node/issues/18

const accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ4aWFvaHVwaUBpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXIteW1GOVJzNlVjZHd0VkZFbFFaQlloOXU2In0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2UxYjY0ZWNkZTdlZTBkNjQwNTQ2MTEiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg1MTg1OTQ2LCJleHAiOjE2ODYzOTU1NDYsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.NTNYde6FxE6rcldB7_knlDCQAG60GifnCTcZL2Eu-ZF0vTP3z7xRZzslWfhDO-_IVfNVfvdKTzoUGcTFv4PisufQsPqXJ4XOPRMZVyjnfVR4w_eGj7SMaPgiCnXlmuWhIdqifYwFxxW0jzL0NBkklQ5VCDc3K6VgW-ap_qb8pIxN-rfFIgy3D3N_wyTXL74JepG7JAWo1JHX5CTdEybHpx51osMHq67ZYgQKwIEqWrA-nO9qMVR50_5VLpvHtYguh9GQwyrNo_ONYZBTiNBww65PZz7kHL_3c8scfu9-bKMIr22ls7VR9HqF5JB69ZTK2b80tgw-1xUVk-6GJ1YGYQ'
try {
  const res = await axios.post(
    // 'https://chat.openai.com/backend-api/conversation',
    'https://proxy.fakegpt.org/api/conversation',
    {
      action: 'next',
      messages: [
        {
          id: 'aaa2d26a-3618-467c-9c2f-1a7a3f1a8b02',
          author: { role: 'user' },
          content: { content_type: 'text', parts: ['给我写4个字的成语'] }
        }
      ],
      parent_message_id: 'aaa13f8d-d14b-4db1-919c-62de470c5613',
      model: 'text-davinci-002-render-sha',
      timezone_offset_min: -480,
      history_and_training_disabled: false
    },
    {
      responseType: 'stream',
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
        'x-authorization': 'Bearer ' + accessToken,
        referer: 'https://chat.zhile.io/',
        authority: 'proxy.fakegpt.org',
        'accept-language': 'zh-CN,zh;q=0.9',
        origin: 'https://chat.zhile.io'
      }
      // proxy: proxy
    }
  )
  res.data.on('data', (resp) => {
    console.info(resp)
  })
  // res.data.on(
  //   'data',
  //   parse.getLines(
  //     parse.getMessages((event) => {
  //       const { data } = event

  //       // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
  //       if (data === '[DONE]') {
  //         process.stdout.write('\n')
  //         console.info('done')
  //         return
  //       }
  //       const parsed = JSON.parse(data)
  //       const text = parsed.message.content.parts[0]
  //       process.stdout.write(text)
  //     })
  //   )
  // )
} catch (error) {
  console.info(error)
}
