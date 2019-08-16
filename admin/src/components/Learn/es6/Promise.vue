<template>
    <div class="promise-box">
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testTimeout">{{timeoutmsg}}</a>
            <a href="javascript:void(0)" class="btn" @click="testPromiseAll">Promise.all</a>
            <a href="javascript:void(0)" class="btn" @click="testPromiseRace">Promise.race</a>
        </div>
        <div class="files">
            <div class="image-box">
                <img :src="fileInfo['src']" />
                <input type="file" class="file" @change="uploadImage" />
            </div>
            <div class="images-info">
                <p>name：{{fileInfo['name']}}</p>
                <p>size：{{fileInfo['size']/1000}}kb</p>
            </div>
        </div>
        <div class="timemsg">
            <span v-for="value in timeList">{{value}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'promise',
        data() {
            return {
                msg: 'promise',
                timeoutmsg: '延时',
                fileInfo: {
                    name: '',
                    size: '0',
                    src: ''
                },
                timeList: []
            }
        },
        methods: {
            testTimeout(){
                let startTime = new Date().getTime();
                let s = setInterval(() => {
                    this.timeoutmsg = (new Date().getTime() - startTime);
                }, 10);
                this.timeout(3000).then(() => {
                    clearInterval(s);
                    this.timeoutmsg = "执行完成";
                });
            },
            // promise.all, 同时执行异步方法
            testPromiseAll(){
                this.timeList = [];

                Promise.all([this.timeout(2000), this.timeout(5000), this.timeout(3000)]).then((value) => {
                    console.log(value);
                })
            },
            // promise.race
            testPromiseRace(){
                Promise.race([this.timeout(2000), this.timeout(5000), this.timeout(3000)]).then((value) => {
                    console.log(value);
                })
            },
            // 异步延时执行方法
            timeout(ms){
                return new Promise((resolve, reject)=>{
                    let num = this.timeList.length;
                    let startTime = new Date().getTime();
                    this.timeList[num] = 0;
                    let s = setInterval(() => {
                        this.$set(this.timeList, num, new Date().getTime() - startTime);
                    },10);
                    setTimeout(() => {
                        clearInterval(s);
                        resolve(ms);
                    }, ms)
                })
            },
            uploadImage(e){
                let file = e.target.files[0];
                this.fileInfo['name'] = file['name'];
                this.fileInfo['size'] = file['size'];
                this.loadFileAsync(file).then((imgcode)=>{
                    this.$set(this.fileInfo, 'src', imgcode);
                })
            },
            loadFileAsync(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function (e) {
                        let imgcode = e.target.result;
                        resolve(imgcode);
                    };
                })
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>