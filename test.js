let str = `
data: {"message": {"id": "f2977227-427d-4425-b939-b30c56b03e03", "author": {"role": "system", "name": null, "metadata": {}}, "create_time": 1685931193.274806, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "finished_successfully", "end_turn": true, "weight": 1.0, "metadata": {}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "aaa2d26a-3618-467c-9c2f-1a7a3f1a8b02", "author": {"role": "user", "na
me": null, "metadata": {}}, "create_time": 1685931193.278054, "update_time": null, "content": {"content_type": "text", "parts": ["\u7ed9\u6211\u51991\u6761\u53ea\u67094\u4e2a\u5b57\u7684\u6210\u8bed"]}, "status": "finished_successfully", "end_turn": null, "weight": 1.0, "metadata": {"timestamp_": "absolute", "message_type": null}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": ["\u98ce"]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model
_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": ["\u98ce\u8c03"]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": ["\u98ce\u8c03\u96e8"]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "crea
te_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": ["\u98ce\u8c03\u96e8\u987a"]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}

data: {"message": {"id": "93b5372f-d3b2-45e5-b2c0-daaff0f18db3", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1685931193.753288, "update_time": null, "content": {"content_type": "text", "parts": ["\u98ce\u8c03\u96e8\u987a"]}, "status": "finished_successfully", "end_turn": true, "weight": 1.0, "metadata": {"finish_details": {"type": "stop", "stop": "<|diff_marker|>"}, "message_type": "next", "model_slug": "text-davinci-002-render-sha"}, "recipient": "all"}, "conversation_id": "febf4641-5177-401a-83ac-3e60a5f1a650", "error": null}


data: [DONE]
`

let jsons = str
  .replace(/\[DONE\]/g, '')
  .replace(/\n+/g, '')
  .split('data: ')
// jsons.shift()
//用换行符分割字符串，得到一个数组，每个元素是一个json对象
// let jsons = data.split('\n')
//遍历数组，将每个json对象解析为js对象，并添加到结果数组中
for (let json of jsons) {
  //如果json不为空，解析为js对象，并取出message属性
  if (json) {
    // console.info(json, 'end')
    let obj = JSON.parse(json)
    console.info(obj)
    //将message对象添加到结果数组中
  }
}
