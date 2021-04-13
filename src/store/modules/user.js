// import * as mUtils from '@/utils/mUtils'
// import { loginByuserName, logout, getUserInfo } from '@/api/user' // 导入用户信息相关接口
import { getToken, setToken, removeToken, setUserId, getUserId } from '@/utils/auth'
import { ElMessage } from 'element-plus'

const user = {
	state: {
		user: '',
		status: '',
		code: '',
		token: getToken(),
		name: '',
		avatar: '',
		id: getUserId(),
		introduction: '',
		roles: [],
		setting: {
			articlePlatform: []
		}
	},

	mutations: {
		SET_CODE: (state, code) => {
			state.code = code
		},
		SET_ID: (state, id) => {
			console.log(id)
			state.id = id
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_INTRODUCTION: (state, introduction) => {
			state.introduction = introduction
		},
		SET_SETTING: (state, setting) => {
			state.setting = setting
		},
		SET_STATUS: (state, status) => {
			state.status = status
		},
		SET_NAME: (state, name) => {
			state.name = name
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles
		}
	},
	actions: {
		// 用户名登录
		LoginByuserName({ commit }, userInfo) {
			console.log(userInfo)
			console.log(userInfo.userName)
			const userName = userInfo.userName.trim()
			console.log(userName)
			if (userName=='admin') {
				// console.log(response.data.data.token)
				// const data = response.data.data
				// console.log(data)
				setUserId(1)
				// const ids = getUserId()
				commit('SET_TOKEN', 'data.token')
				localStorage.setItem('adminUser',userName)
				commit('SET_ID', 'ids')
				setToken('data.token')

			} else {

				ElMessage.warning('请输入正确的信息')
				// reject('请输入正确的信息')
			}

			// return new Promise((resolve, reject) => {
			// 	loginByuserName(userName, userInfo.phone, userInfo.code)
			// 		.then(response => {
			// 			console.log(response)
			//
			// 		})
			// 		.catch(error => {
			// 			reject(error)
			// 		})
			// })
		},
		// 获取用户信息
		// GetUserInfo({ commit, state }) {
		// 	// return new Promise((resolve, reject) => {
		// 	// 	console.log(state.id)
		// 	// 	getUserInfo(state.id)
		// 	// 		.then(response => {
		// 	// 			const data = response.data.data
		// 	// 			console.log(data)
		// 	// 			const roles=data.id.toString().split(',')
		// 	// 			if (roles && roles.length > 0) {
		// 	// 				commit('SET_ROLES', roles)
		// 	// 			} else {
		// 	// 				reject('getInfo: roles must be a non-null array !')
		// 	// 			}
		// 	// 			commit('SET_AVATAR', data.avatar)
		// 	// 			commit('SET_INTRODUCTION', data.introduction)
		// 	// 			resolve(response)
		// 	// 		})
		// 	// 		.catch(error => {
		// 	// 			reject(error)
		// 	// 		})
		// 	// })
		// },
		//登出
		LogOut({ commit }) {
			// return new Promise((resolve, reject) => {
			// 	logout(state.token)
			// 		.then(() => {
			// 			commit('SET_TOKEN', '')
			// 			commit('SET_ROLES', [])
			//
			// 			resolve()
			// 		})
			// 		.catch(error => {
			// 			reject(error)
			// 		})
			// })
			commit('SET_TOKEN', '')
			commit('SET_ROLES', [])
			removeToken()
		},
		// 前端 登出
		FedLogOut({ commit }) {
			// return new Promise(resolve => {
			// 	commit('SET_TOKEN', '')
			// 	resolve()
			// })
			commit('SET_TOKEN', '')
		},
		// 动态修改权限;本实例中,role和token是相同的;
		// 动态修改权限
		// ChangeRoles({ commit, dispatch }, role) {
		// 	// return new Promise(resolve => {
		// 	// 	commit('SET_TOKEN', role)
		// 	// 	setToken(role)
		// 	// 	getUserInfo(role).then(response => {
		// 	// 		const data = response.data.data
		// 	// 		const roles=data.id.toString().split(',')
		// 	// 		console.log(roles)
		// 	// 		commit('SET_ROLES', roles)
		// 	// 		commit('SET_AVATAR', data.avatar)
		// 	// 		commit('SET_INTRODUCTION', data.introduction)
		// 	// 		dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
		// 	// 		resolve()
		// 	// 	})
		// 	// })
		// }
	}
}

export default user

/**
 * 1、用户退出,需要调取后台接口吗？后台具体的业务逻辑是什么？
 *
 *
 */
