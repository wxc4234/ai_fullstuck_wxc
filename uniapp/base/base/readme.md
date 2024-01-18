# 生命周期
 -vue自带的生命周期在uniapp中也可以使用
 
# 页面生命周期
 - uniapp也提供页面生命周期
	- onShow: 页面显示时触发
	- onHide: 页面隐藏时触发
	- onResize: 页面尺寸变化时触发
	- onBackPress: 监听页面返回事件
	- onNavigationBarButtonTap: 监听原生标题栏按钮点击事件
	- 等等

# 应用生命周期
 - uniapp也提供应用生命周期
 - 是整个app应用的状态变化，只能在App.vue中使用
	- onLaunch: 应用初始化完成时触发
	- onShow: 应用启动，或从后台进入前台显示时触发
	- onHide: 应用从前台进入后台时触发
	- onError: 应用发生脚本错误，或者api调用失败时触发
	- onPageNotFound: 应用要打开的页面不存在时触发
	- 等等