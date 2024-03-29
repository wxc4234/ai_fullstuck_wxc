import { createStore } from 'vuex'

export default createStore({
	state: {
		isShowMenu: false,  // 控制菜单显示隐藏
		loginState: false,  // 是否登录
		userInfo: { // 用户信息
			nickname: '',
			userId: null,
			avatar: ''
		},
    isShowPlayer: false, // 是否显示播放器
    currentPlayId: null, // 当前播放歌曲id
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag
		},
		changeLoginState(state, val) {
			state.loginState = val
		},
		getUserInfo(state, opt) {
			state.userInfo = opt
		},
    changeCurrentPlayId(state, id) {
      state.currentPlayId = id
    },
    changeIsShowPlayer(state, flag) {
      state.isShowPlayer = flag
    }
	}
})