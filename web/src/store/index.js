import Vue from 'vue'
import vuex from 'vuex'

import index from './modules/index'
import common from './modules/common'
import calc from './modules/calc'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(vuex)

export default new vuex.Store({// store对象
    modules: {
        index: index,
        common: common,
        calc: calc
    },
    mutations: mutations,
    actions: actions,
    getters: getters
})
