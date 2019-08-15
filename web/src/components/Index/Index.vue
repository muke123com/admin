<template>
    <div class="index-box">
        <div id="canvas" class="canvas"></div>
        <ul class="link">
            <router-link v-for="(item, index) in list" :key="index" tag="li" :to="item['href']">
                {{item['title']}}
            </router-link>
        </ul>
    </div>
</template>
<script>
    import * as THREE from 'three'

    export default {
        data() {
            return {
                list: [
                    { title: 'Vuex', href: '/vuex' },
                    { title: 'css3', href: '/learn/css3' },
                    { title: 'h5', href: '/learn/h5' },
                    { title: 'canvas动画', href: '/canvas' },
                    { title: 'interview', href: '/learn/interview' },
                    { title: 'vue路由', href: '/router' },
                    { title: 'vue生命周期', href: '/learn/lifecycle' },
                    { title: '工具', href: '/tools' },
//                    { title: '字符收集', href: '/learn/character' },
                ]
            }
        },
        created(){

        },
        mounted(){
        },
        methods: {
            init(){

            },
        }
    }
</script>
<style>
    @import "index.less";
</style>