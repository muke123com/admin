import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/components/Index/Index'
import IndexDb from '@/components/IndexDb/Index'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/IndexDb', component: IndexDb }
  ]
})
