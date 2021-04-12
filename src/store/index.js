import { createStore } from 'vuex'

import getters from './getters'

import user from './modules/user'
import permission from './modules/permission'
import money from './modules/money'
import menu from './modules/menu'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    permission,
    money,
    menu
  },
  getters
})
