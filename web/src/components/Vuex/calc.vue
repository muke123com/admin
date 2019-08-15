<template>
    <div class="calc">
        <div class="calc-top">
            <div class="calc-formula">{{formula}}</div>
            <div class="calc-result">{{result}}</div>
        </div>
        <div class="calc-keyboard">
            <div class="line" v-for="l in keys">
                <a class="btn" v-for="key in l" @click="click_calc_btn(key)">{{key}}</a>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                keys: [
                    [7,8,9,'/','%'],
                    [4,5,6,'*','1/x'],
                    [1,2,3,'-','+'],
                    [0,'00','.','='],
                ]
            }
        },
        created(){
            this.$store.commit('change_title', {title: '计算器'})
        },
        computed: {
            ...mapState({
                formula: state=>state.calc.formula,
                result: state=>state.calc.result
            })
        },
        methods: {
            ...mapActions(['click_calc_btn'])
        }
    }
</script>
<style scoped>
    @import "vuex.css";
</style>