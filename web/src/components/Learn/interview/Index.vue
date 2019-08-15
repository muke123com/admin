<template>
    <div class="interview-box">
        <div class="item">
            <question-box></question-box>
        </div>
    </div>
</template>
<script>
    import QuestionBox from './Question'
    export default {
        components: {
            QuestionBox
        },
        data(){
            return {
                inputArr: '',
                resultArr: ''
            }
        },
        methods: {
            flatArr(){
                let arr = this.inputArr.replace(/[\[|\]]/g, '');
                this.resultArr = arr.toString().split(",").toString();
            }
        }
    }
</script>
<style scoped>
    @import "interview.less";
</style>