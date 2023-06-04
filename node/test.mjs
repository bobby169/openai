import axios from 'axios'
import { proxy } from './common.mjs'

const accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ4aWFvaHVwaUBpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXIteW1GOVJzNlVjZHd0VkZFbFFaQlloOXU2In0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2UxYjY0ZWNkZTdlZTBkNjQwNTQ2MTEiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg0NjgxMzI4LCJleHAiOjE2ODU4OTA5MjgsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.GNGanI-oTBUcFLg4wWkSWiFC-66JxoBdZpAnHccvFaS7VIMMHWFzYptlms-0zSY0dcxpELyYA9wEjGfaQtgFB-L9_NgmUt0fx_fWW4eULdvwJVkEztfrqhV9TBfpKVi84CoUKQZAo0gDFjqsUoRwBXl5s3P9lCKSl_VLDAqTOsyJn8WHqD-1pio0XKET47yOMK0Bwi7L7G8ryJ3ahWVEpO85QdcZ-x27AHtFekkZoGy4M7pL_H8SBEBzR1-_kEX7Rb5txE17upgjt4fb7f2h1MW-oXtvDx2QcNeEXOefqJqZmfUhah3GWKAogSw9dXwC3Vl4_BfRLbl333cMLRXEaQ'
axios
  .post(
    // 'https://chat.openai.com/backend-api/conversation',
    'https://proxy.fakegpt.org/api/conversation',
    {
      action: 'next',
      messages: [
        {
          id: 'aaa2d26a-3618-467c-9c2f-1a7a3f1a8b02',
          author: { role: 'user' },
          content: { content_type: 'text', parts: ['你好'] }
        }
      ],
      parent_message_id: 'aaa13f8d-d14b-4db1-919c-62de470c5613',
      model: 'text-davinci-002-render-sha',
      timezone_offset_min: -480,
      history_and_training_disabled: false
    },
    {
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
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
