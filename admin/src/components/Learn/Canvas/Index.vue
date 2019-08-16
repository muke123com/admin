<template>
    <div class="canvas-index">
        <div class="link">
            <router-link v-for="(item, index) in list" :key="index" tag="li" :to="item['href']">
                {{item['title']}}
            </router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    { title: '图片闪烁动画', href: '/canvas' },
                    { title: '图片粒子动画', href: '/canvas/particle' },
                    { title: '音乐动画', href: '/canvas/music' }
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
    @import "canvas.less";
</style>