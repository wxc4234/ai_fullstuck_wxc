const Router = require("@koa/router");
const {userLogin} = require('../controllers/mysqlControl.js')

const router = new Router()
// 定义接口
router.post("/user/login", async (ctx) => {
  console.log(ctx.request.body); // 获取post请求参数,前端传递的参数
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    console.log(result);
    if (result.length) { // 如果查询到数据
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      }
      ctx.body = {
        code: '8000',
        data: data,
        msg: "登录成功",
      }
    } else {
      ctx.body = {
        code: '8004',
        data: 'error',
        msg: "账号或密码错误"
      }
    }
  } catch (err) {
    ctx.body = {
      code: '8005',
      data: err,
      msg: "服务器异常"
    }
  }

});

module.exports = router;