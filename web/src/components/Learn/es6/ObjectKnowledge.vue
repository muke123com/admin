<template>
    <div class="object-box">
        <div class="logs">
            <p v-for="text in logs">{{text}}</p>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testApply" title="参数为数组">apply</a>
            <a href="javascript:void(0)" class="btn" @click="testCall" >call</a>
            <a href="javascript:void(0)" class="btn" @click="testBind">bind</a>
            <a href="javascript:void(0)" class="btn" @click="getArrayValue">apply使用例子</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: "objectKnowledge",
        data(){
            return {
                logs: []
            }
        },
        methods: {
            testApply(){
                function fn(a, b) {
                    return a * b;
                }
                let obj = {};
                obj = fn.apply(obj, [2, 5]);
                let text = "fn.apply(obj, [2, 5])方法的结果是" + obj;
                this.addLogs(text);
            },
            testCall(){
                function fn(a, b) {
                    return a * b;
                }
                let obj = {};
                obj = fn.call(obj, 2, 6);
                let text = "fn.call(obj, 2, 6)方法的结果是" + obj;
                this.addLogs(text);
            },
            testBind(){
                let obj = {
                    name: 'abc'
                };
                function fn() {
                    return this.name;
                }
                let f = fn.bind(obj);
                let text = "fn.bind(obj)方法的结果是" + f();
                this.addLogs(text);
            },
            // 使用例子
            getArrayValue(){
                let arr = [];
                let i = 0;
                while (i<10){
                    arr[i] = parseInt(Math.random()*10);
                    i++;
                }
                // Math.max(2,1,3)
                let max = Math.max.apply(null, arr);
                let min = Math.min.apply(null, arr);
                let text = "数组" + arr.toString() + "的最大值为" + max + ",最小值为" + min;
                this.addLogs(text);
                let text2 = "类型是" + this.isArray(arr);
                this.addLogs(text2);
            },
            isArray(arr){
                return Object.prototype.toString.call(arr);
            },
            addLogs(text) {
                this.logs.push(text);
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>