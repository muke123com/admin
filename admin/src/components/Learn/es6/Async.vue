<template>
    <div class="async-box">
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testAsync">测试异步</a>
            <a href="javascript:void(0)" class="btn" @click="testAsyncAwait">async/await</a>
        </div>
        <div class="logs">
            <p v-for="log in logs">{{log}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'async',
        data(){
            return {
                msg: '',
                logs: []
            }
        },
        methods: {
            testAsync() {
                // async 用于表示函数是一个异步函数
                async function afn() {
                    return "后执行";
                }
                console.log(afn());
                afn().then((value) => {
                    this.log(value)
                });
                this.log("在后面但先执行");
            },
            testAsyncAwait() {
                let _this = this;
                async function afn() {
                    let a = await new Promise((resolve,reject) => {
                        setTimeout(() => {
                            _this.log('2秒');
                            console.log(this);
                            resolve('done')
                        },2000)
                    });
                    _this.log(a);
                }
                afn();
            },
            log(msg) {
                this.logs.push(msg)
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>