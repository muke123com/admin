<template>
    <div class="vuex-box">
        <div class="logs" v-if="logs.length != 0">
            <p v-for="item in logs">{{item}}</p>
        </div>
        <div class="vuex-modules">
            <mutations-box></mutations-box>
        </div>
    </div>
</template>
<script>
    import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
    import MutationsBox from './learn/Mutations'
    export default {
        components: {
            MutationsBox
        },
        data(){
            return {
            }
        },
        computed: {
            ...mapState({
                msg: state=>state.index.msg,
                logs: state=>state.index.logs
            }),
//            msg() {
//                return this.$store.state.test.msg
//            },
//            test_arr() {
//                return this.$store.getters.test_arr
//            }
        },
        created(){
            this.init()
        },
        methods: {
            init(){
                this.CHANGE_TITLE({title: 'vuex'})
            },
            ...mapMutations(['CHANGE_TITLE', 'ADD_LOGS']),
            ...mapActions(['test_actions']),
//            test_mutations(){
//                this.$store.commit('test_mutations');
//            },
//            test_actions(){
//                this.$store.dispatch('test_actions');
//            },
        }
    }
</script>
<style scoped>
    @import "index.less";
</style>