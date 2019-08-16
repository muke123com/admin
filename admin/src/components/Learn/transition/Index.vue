<template>
    <div class="transition-index">
        <div class="box">
            <transition name="move-block">
                <div class="move-block" v-show="show"></div>
            </transition>
            <button type="button" @click="show = !show">基础动画</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                show: false
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    @import "transition.less";
</style>