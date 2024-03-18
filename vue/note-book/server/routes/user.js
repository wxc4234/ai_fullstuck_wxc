const Router = require("@koa/router");

const router = new Router()
// 定义接口
router.post("/user/login", (ctx) => {
  console.log(ctx.request.body); // 获取post请求参数,前端传递的参数
});

module.exports = router;