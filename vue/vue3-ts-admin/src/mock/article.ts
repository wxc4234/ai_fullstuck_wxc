// article数据
import * as  Mock from 'mockjs'
import { IArticle } from '../models'


const list: IArticle[] = []
const count = 100

for (let i = 0; i < count; i++){
  list.push(
    Mock.mock({
      id: '@increment',
      title: '@title(5, 10)',
      author: '@first',
      'type|1': ['vue', 'laravel', 'react', 'thinkphp'],
      content: '@title(5,10)',
      'status|1': ['published', 'draft'],
      pageviews: '@integer(300, 5000)',
      created_at: '@datetime',
    })
  )
}

export const article = [
  {
    url: '/api/article/list',
    type: 'get',
    response: () => {
      return {
        // 类似状态码，0表示成功
        errcode: 0,
        errmsg: 'success',
        datas: list
      }
    }
  }
]