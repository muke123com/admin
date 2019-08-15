import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/components/Index/Index'
import HomeIndex from '@/components/home/Home'
import Css3 from '@/components/Learn/Css3'
import H5 from '@/components/Learn/h5/index'
import AnimeJs from '@/components/Learn/Animejs'
import Interview from '@/components/Learn/interview/Index'
import Lifecycle from '@/components/Learn/Lifecycle'
import Vuex from '@/components/Vuex/index'
import VuexCalc from '@/components/Vuex/calc'
import VueRouterList from '@/components/Learn/vueRouter/List'
import VueRouterDetail from '@/components/Learn/vueRouter/Detail'
import Transition from '@/components/Learn/transition/Index'
import Canvas from '@/components/Learn/Canvas/Index'
import ImagePoint from '@/components/Learn/Canvas/Image'
import ImageParticle from '@/components/Learn/Canvas/ImageParticle'
import Music from '@/components/Learn/Canvas/Music'
import Tools from '@/components/Tools/Index'
import UI from '@/components/Learn/UI/Index'
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/home', component: HomeIndex },
    { path: '/learn/css3', component: Css3 },
    { path: '/learn/h5', component: H5 },
    { path: '/learn/anime', component: AnimeJs },
    { path: '/learn/interview', component: Interview },
    { path: '/learn/lifecycle', component: Lifecycle },
    { path: '/vuex', component: Vuex },
    { path: '/vuex/calc', component: VuexCalc },
    { path: '/transition', component: Transition },
    { path: '/router/', component: VueRouterList ,children: [
        { name: 'routerDetail', path: ':id', component: VueRouterDetail }
    ]},
    { path: '/canvas', component: Canvas, children: [
        { name: 'ImagePoint', path: "", component: ImagePoint},
        { name: 'imageParticle', path: "particle", component: ImageParticle},
        { name: 'Music', path: "music", component: Music},
    ] },
    { path: '/tools', component: Tools },
    { path: '/ui', component: UI },
  ]
})
