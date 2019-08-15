<template>
    <div class="child-box">
        <div>子组件1：
            <p class="info">{{title}}</p>
        </div>
        <a href="javascript:void(0)" @click="sendChildData()">子组件1向父组件传值</a>
        <a href="javascript:void(0)" @click="sendChildData('toChild2')">子组件1向子组件2传值</a>
    </div>
</template>
<script>
    export default {
        name: 'child1',
        props: ['title'],
        data() {
            return {
                msg: 'child1',
            }
        },
        methods: {
            sendChildData(type){
                if(type){
                    this.$emit('childValue', '子组件1传递到子组件2数据', type)
                }else{
                    this.$emit('childValue', '子组件1传递到父组件数据')
                }

            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>