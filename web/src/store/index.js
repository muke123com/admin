import Vue from 'vue'
import vuex from 'vuex'

import index from './modules/index'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(vuex)

export default new vuex.Store({// store对象
    modules: {
        index: index
    },
    mutations: mutations,
    actions: actions,
    getters: getters
})
