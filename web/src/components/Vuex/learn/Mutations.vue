<template>
    <div class="box mutations-box">
        <a href="javascript:void(0)" @click="changeState">$store.commit</a>
        <a href="javascript:void(0)" @click="changeStateByMapMutations">mapMutations</a>
        <a href="javascript:void(0)" @click="testAction">$store.dispatch</a>
        <a href="javascript:void(0)" @click="changeLogs">$store.getters</a>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {
                msg: "computed"
            }
        },
        computed: {
            newLogs(){
                return this.$store.getters['CHANGE_LOGS_NUM']
            }
        },
        methods: {
            // mutation
            changeState(){
                this.$store.commit('ADD_LOGS', '通过this.$store.commit触发mutation改变state，mutation` 修改store中状态的唯一方法')
            },
            //getter
            changeLogs(){
                this.ADD_LOGS('通过getter, computed整理数组数据');
                this.CHANGE_LOGS(this.newLogs);
            },
            changeStateByMapMutations(){
                this.ADD_LOGS('通过mapMutations触发mutation改变state')
            },
            //action
            testAction() {
                this.ADD_LOGS("通过this.$store.dispatch触发action");
                this.$store.dispatch('ADD_TWICE_LOG');
            },
            ...mapMutations(['ADD_LOGS','CHANGE_LOGS'])
        }
    }
</script>
<style scoped>
    @import "../index.less";
</style>