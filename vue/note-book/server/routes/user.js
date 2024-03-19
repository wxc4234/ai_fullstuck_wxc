const Router = require("@koa/router");
const { userLogin,userFind,userRegister } = require("../controllers/mysqlControl.js");

const router = new Router();
router.prefix("/user");

// 定义接口
router.post("/login", async (ctx) => {
  console.log(ctx.request.body); // 获取post请求参数,前端传递的参数
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    console.log(result);
    if (result.length) {
      // 如果查询到数据
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      };
      ctx.body = {
        code: "8000",
        data: data,
        msg: "登录成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

// 注册接口
router.post("/register", async (ctx) => {
  // console.log(ctx.request.body); // 获取post请求参数,前端传递的参数
  const { nickname, username, password } = ctx.request.body;
  if (!nickname || !username || !password) {
    ctx.body = {
      code: '8001',
      msg: '账号密码或昵称不能为空'
    }
    return
  }



  try {
    // 校验数据库是否存在该用户
  const findRes = await userFind(username)
  console.log(findRes);
  if (findRes.length) {
    ctx.body = {
      code: '8003',
      data: 'error',
      msg: '用户已存在'
    }
    return
  }

  // 数据库写入数据
  const registerRes = await userRegister([nickname, username, password] );
    console.log(registerRes);
  if (registerRes.affectedRows !== 0) {
    ctx.body = {
      code: '8000',
      data: 'success',
      msg: '注册成功'
    }
  } else {
    ctx.body = {
      code: '8004',
      data: 'failed',
      msg: '注册失败'
    }
  }
  } catch (err) {
    ctx.body = {
      code: '8005',
      data: err,
      msg: '服务器异常'
    }
  }

});
module.exports = router;
