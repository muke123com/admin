<template>
    <div class="child-box">
        <div>子组件2：
            <p class="info">{{title}}</p>
            <p class="info">{{child1Data}}</p>
        </div>
        <a href="javascript:void(0)" @click="sendChildData">子组件2向父组件传值</a>
    </div>
</template>
<script>
    export default {
        name: 'child2',
        props: ['title', 'child1Data'],
        data() {
            return {
                msg: 'child2',
            }
        },
        methods: {
            sendChildData(){
                this.$emit('childValue', '子组件2传递到父组件数据')
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>