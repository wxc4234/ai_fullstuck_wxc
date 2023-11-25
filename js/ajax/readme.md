# ajax(async javascript and xml)

## XMLHttpRequest

- readyState:
  - 0: UNSENT //xhr刚创建，请求还没有发送
  - 1: OPENED //xhr请求已经发送,open准备完成
  - 2: HEADERS_RECEIVED //xhr请求已经发送,send准备完成
  - 3: LOADING //xhr正在接收服务器返回的数据
  - 4: DONE //数据接收完成