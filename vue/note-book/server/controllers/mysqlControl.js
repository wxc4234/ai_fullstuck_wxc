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

const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

module.exports = {
  userLogin
}