const Router = require('@koa/router')
const router = new Router()
const {findNoteListByType,findNoteDetailById} = require('../controllers/mysqlControl.js')

router.post('/findNoteListByType', async (ctx) => {
  const { note_type } = ctx.request.body;
  // console.log(note_type);
  try {
    const res = await findNoteListByType(note_type)
    ctx.body = {
      code: '8000',
      data: res,
      msg: 'success'
    }
  } catch {
    ctx.body = {
      code: '8005',
      data: error,
      msg: '服务器异常'
    }
  }
})

router.get('/findNoteDetailById', async (ctx) => {
  const { id } = ctx.query;
  try {
    const res = await findNoteDetailById(id)
    console.log(res[0]);
    ctx.body = {
      code: '8000',
      data: res[0],
      msg: 'success'
    }
  } catch {
    ctx.body = {
      code: '8005',
      data: error,
      msg: '服务端异常'
    }
  }
})

module.exports = router
