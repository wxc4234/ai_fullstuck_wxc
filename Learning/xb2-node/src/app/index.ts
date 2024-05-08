import express from 'express'
const app = express;

app.use(express.json()) //post
// 解析当前用户
app.use(currentUser);
// 跨域资源共享
app.use(cors({

}))
// 路由中间件
app.use(
  postRouter,
  userRouter,
  ...
)
// 默认异常处理
app.use(defaultErrorHandler)

app.listen(3000)