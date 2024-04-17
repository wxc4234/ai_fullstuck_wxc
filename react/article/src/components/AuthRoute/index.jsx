// 判断token是否存在，存在则允许跳转到首页，不存在则重定向到登录页

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

// 高阶组件
function AuthRoute({children}) {
  const isToken = getToken()
  if (isToken) {
    return <>{ children }</>
  } else {
    return <Navigate to='/login' replace></Navigate>
  }
}

export { AuthRoute }