<template>
    <div class="parent-box">
        <a class="reset" href="javascript:void(0)" @click="resetAllData">重置</a>
        <div>父组件：
            <p class="info">{{childMsg}}</p>
        </div>
        <a href="javascript:void(0)" @click="sendChildData">父组件向子组件传值</a>
        <div class="child-boxes">
            <child1-box :title="title" @childValue="getChildData"></child1-box>
            <child2-box :title="title" :child1Data="child1Data" @childValue="getChildData"></child2-box>
        </div>
    </div>
</template>
<script>
    import Child1Box from './Child1';
    import Child2Box from './Child2';
    export default {
        components: {
            Child1Box,
            Child2Box
        },
        name: 'parent',
        data() {
            return {
                msg: 'parent',
                title: '',
                childMsg: '',
                child1Data: ''
            }
        },
        methods: {
            //父组件向子组件传值
            sendChildData(){
                this.title = "父组件传递到子组件数据";
            },
            //获取子组件数据
            getChildData(childValue, type){
                if(!type) { this.childMsg = childValue; }
                if(type == 'toChild2'){
                    this.child1Data = childValue;
                }
            },
            //重置数据
            resetAllData(){
                this.title = "";
                this.childMsg = "";
                this.child1Data = "";
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>