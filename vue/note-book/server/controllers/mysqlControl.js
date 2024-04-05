// 封装连接mysql的函数
const mysql = require('mysql2');
const config = require('../config/index.js');

// 创建一个线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

// 连接mysql
const allService = {
  query: function (sql,values) {
    // 连接线程池
    return new Promise((resolve, reject) => {
      pool.getConnection((err,connection) => {
        if(err) {
          reject(err)
        } else {
          // 执行sql语句
          connection.query(sql, values, (err,rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            // 释放连接
            connection.release()
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

// 查询
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

// const userRegister = (nickname, username, password) => {
//   let _sql = `insert into users set nickname="${nickname}",username="${username}",password="${password}";`
//   return allService.query(_sql)
// }
const userRegister = (values) => {
  let _sql = `insert into users set nickname=?,username=?,password=?;`
  return allService.query(_sql,values)
}

// 根据type查找日记列表
const findNoteListByType = (note_type) => {
  let _sql = `select * from note where note_type="${note_type}";`
  return allService.query(_sql)
}

// 根据id查找日记详情
const findNoteDetailById = (id) => {
  let _sql = `select * from note where id="${id}";`
  return allService.query(_sql)
}
// 发布
const notePublish = (values, id) => {
  let _sql = ''
  if (id) { // 有id就是修改
    _sql = `update note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=? where id=${id};`
  } else {
    _sql = `insert into note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=?;`
  }
}

// 删除
const deleteNoteById = (id) => {
  let _sql = `delete from note where id="${id}";`
  return allService.query(_sql)
}

// 搜索
const searchNote = (title) => {
  let _sql = `select * from note where title like "%${title}%";`
  return allService.query(_sql)
}

module.exports = {
  userLogin,
  userFind,
  userRegister,
  findNoteListByType,
  findNoteDetailById,
  notePublish,
  deleteNoteById,
  searchNote
}