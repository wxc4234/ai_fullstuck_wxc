import {getPosts} from './post.service'
export const index = async () => {
  try {
    // 这是一个model的方法，获取数据库中的文章
    const posts = await getPosts({

    })
    Response.send(posts)
  } catch (err) {

  }
}