import axios from 'axios'
import { proxy } from './common.mjs'

axios
  .post(
    'https://chat.openai.com/backend-api/conversation',
    {
      action: 'next',
      messages: [
        {
          id: 'dbeb2fc5-dc7a-4f50-982a-532b9f119251',
          role: 'user',
          content: { content_type: 'text', parts: ['Hello World!'] }
        }
      ],
      model: 'text-davinci-002-render-sha',
      parent_message_id: 'ae5f3826-c101-40c6-a942-81a69a459489'
    },
    {
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ4aWFvaHVwaUBpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXIteW1GOVJzNlVjZHd0VkZFbFFaQlloOXU2In0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2UxYjY0ZWNkZTdlZTBkNjQwNTQ2MTEiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg1MTg1OTQ2LCJleHAiOjE2ODYzOTU1NDYsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.NTNYde6FxE6rcldB7_knlDCQAG60GifnCTcZL2Eu-ZF0vTP3z7xRZzslWfhDO-_IVfNVfvdKTzoUGcTFv4PisufQsPqXJ4XOPRMZVyjnfVR4w_eGj7SMaPgiCnXlmuWhIdqifYwFxxW0jzL0NBkklQ5VCDc3K6VgW-ap_qb8pIxN-rfFIgy3D3N_wyTXL74JepG7JAWo1JHX5CTdEybHpx51osMHq67ZYgQKwIEqWrA-nO9qMVR50_5VLpvHtYguh9GQwyrNo_ONYZBTiNBww65PZz7kHL_3c8scfu9-bKMIr22ls7VR9HqF5JB69ZTK2b80tgw-1xUVk-6GJ1YGYQ'
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
