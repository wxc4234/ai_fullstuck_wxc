// 提供一个适配所有机型的rem工具
    // 1. 计算出当前屏幕的宽度
    // 2. html
    // 3. 计算font-size
    // 立即执行函数
    // ipad 
    (function(){
      var htmlElement = document.documentElement;
      // DRY don't repeat yourself
      function getFontSize(){
          var width = window.innerWidth;
          var fontSize = width / 10;
          return fontSize;
      }

      htmlElement.style.fontSize = getFontSize() + 'px'
      window.addEventListener('resize',function(){
          htmlElement.style.fontSize = getFontSize() + 'px'
      })
  })()
     // html 动态设置font-size
      // 函数局部作用域
      // 变量不会污染外面的作用域