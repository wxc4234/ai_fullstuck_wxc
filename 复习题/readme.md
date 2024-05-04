- vue2与vue3的区别
- vue2中Object.defineProperty对于数组的处理是如何解决的
- react与vue的区别
- react中的hooks api 有哪些
- 动态路由菜单怎么实现，如果前端普通用户直接输入URL跳转，怎么实现这个判断
怎么跟后端一起实现动态权限
  - 动态路由菜单可以通过 vue 中的 vue-router 来实现，通过后端返回的数据来动态生成路由，然后通过 router.addRoutes() 来动态添加路由
  - 判断用户是否有权限访问这个页面，可以通过路由守卫来实现，通过 router.beforeEach() 来判断用户是否有权限访问这个页面
- 如何判断一个对象为空
  - 通过Object.keys()来判断，就是通过判断对象的key是否为空来判断对象是否为空
  - 通过Onject.values()来判断，就是通过判断对象的值是否为空来判断对象是否为空
  - 可以通过遍历对象的key来判断
- 虚拟列表的实现原理
  - 首先就是要去计算出列表的高度
  - 然后通过滚动事件来计算出当前滚动的位置
  - 然后通过当前滚动的位置来计算出当前显示的数据
  - 然后通过当前显示的数据来渲染列表

- 暂时性死区
  - 在es6中，let和const声明的变量不会产生声明提升，因此在声明之前调用这个变量就会报错，这就是暂时性死区；

- cache-control的no-store和no-cache在第二次请求时有什么区别
  - no-store：意味着缓存服务器不能缓存任何形式的数据，每次请求都要重新获取资源数据，在第二次请求时，不管客户端发送什么请求，缓存服务器都不会返回任何已经存储的响应，而是发送到原服务器获取新的响应
  - no-cache：意味着允许缓存服务器缓存数据，但是会去检测数据的有效性，如果有效就返回缓存数据，如果无效了，就会向原服务器发送请求，它依靠If-Modified-Since 或 If-None-Match 来完成。在第二次请求时，缓存服务器会向原服务器发送请求，如果原服务器没有响应，会返回304状态码，缓存服务器可以使用缓存的数据

- 常见的DOM操作
  - createElement：可以创建一个元素
  - getElementById: 可以通过id来获取元素
  - getquerySelector：可以通过css选择器来获取元素
  - getElementsByClassName：可以通过类名来获取元素
  - gtElementsByTagName：可以通过标签名来获取元素
  - appendChild：可以向元素中天街子元素
  - removeChild：可以删除元素中的子元素
  - replaceChild：可以替换元素中的子元素
  - innerHtml：可以设置元素的内容
  - textContent：可以设置元素的文本内容
  - offsetWidth：可以获取元素的宽度
  - offsetHeight：可以获取元素的高度

- token为什么放在本地缓存，而不是使用cookie
  - 首先cookie它的大小史有限制的，只有5kb左右，而localStorage和sessionStorage可以存储10m以上的数据
  - 并且cookie在每次请求时都会被发送到服务器，而这两个就不会；
  - 并且cookie是不安全的，可以通过document.cookie来获取，可以通过设置httpOnly来防止，还可以通过设置secure来防止
  - 但是放在cookie中，每次请求都会携带，而放在localStorage中，只有在前端请求时才会携带

- 为什么有了Promise还需要有async/await
  - 因为Promise它引用了链式调用，因此在处理多个异步请求的时候，容易形成冗长的链式调用，导致代码难以维护，而async可以让我们像写同步代码一样写异步代码，因此更加简洁。
  - 并且async还能通过await来实现在需要的地方暂停代码的执行，能更好的去实现条件语句和循环语句等控制结构
  - 并且async还能更好的处理错误，可以通过try catch来捕获错误，而Promise只能通过then来捕获错误，因此async更加方便

- 强缓存和协商缓存
  - 强缓存是指：浏览器在请求资源时，会先判断是否命中了强缓存，如果命中了，就会从缓存中读取数据，如果没有命中，就会请求服务器
    - 它是通过设置响应头来实现的，通过设置Cache-Control和Expires来实现的，相较于Expires，Cache-Control的优点是可以设置更多的值，比如no-store、no-cache等，而Expires只能设置一个时间，并且Expires会被本地的时间影响，而Cache-Control不会，因为它是通过时间戳来判断的
  - 协商缓存是指：当强缓存的时效过期=时，浏览器在请求资源的之前会先和服务器进行‘协商’，判断该资源是否有更新，如果没有更新就会返回304状态码，告诉浏览器可以使用本地缓存，如果有更新就会返回新的资源
    - 它是通过在请求头中设置 If-Modified-Since（Last-Modified） 和 If-None-Match（Etag） 来实现的，服务器会通过判断这两个值来判断资源是否有更新，如果没有更新就会返回304状态码，如果有更新就会返回新的资源
    - 对于Last-Modified和Etag的选择，优先使用Etag，因为Etag是通过文件的内容来生成的，而Last-Modified是通过文件的修改时间来生成的，因此Etag更加准确，但是Etag会消耗服务器的性能，因此在性能要求不高的情况下，可以使用Last-Modified