(function (doc,win) {
  // 用js动态修改页面根字体大小
  var docEl = doc.documentElement //拿到页面
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    docEl.style.fontSize=20*(clientWidth/320)+'px'
  }

  doc.addEventListener('DOMContentLoaded', recalc)
  win.addEventListener('resize', recalc)
})(document,window)