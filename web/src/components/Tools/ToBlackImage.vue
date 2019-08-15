<template>
    <div class="item">
        <h2>转为黑白图片</h2>
        <div class="btn upload">
            <input type="file" id="image" name="" @change="getFileUrl" />
            上传彩色图片
        </div>
        <a :href="blackPicUrl" :download="fileName" class="" v-if="blackPicUrl != ''">
            <div id="canvas-box" class="canvas-box"></div>
            <p class="tip">点击下载</p>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileName: '',
                blackPicUrl: ''
            }
        },
        methods: {
            getFileUrl() {
                let _this = this;
                this.$nextTick(() => {
                    let file = document.getElementById("image").files[0];
                    if(!file) return;
                    console.log(file);
                    _this.fileName = '黑白_' + file.name;
                    if(!/image\/\w+/.test(file.type)){
                        alert("请上传图片");
                        return false;
                    }
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        _this.blackPic(this.result);
                    }
                })
            },
            blackPic(url) {
                let _this = this;
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let img = new Image();
                img.src = url;
                img.onload = function () {
                    let n = this.width/this.height;
                    canvas.width = this.width;
                    canvas.height = this.height;
                    ctx.drawImage(img,0,0,this.width,this.height);
                    let imgData = ctx.getImageData(0,0,this.width,this.height);
                    let data = imgData['data'];
                    for(let i=0;i<this.width;i+=1) {
                        for (let j = 0; j < this.height; j += 1) {
                            let pos = (j * this.width + i) * 4;
                            let r = data[pos];
                            let g = data[pos + 1];
                            let b = data[pos + 2];
                            data[pos] = data[pos + 1] = data[pos + 2] = (r+g+b)/3;
                        }
                    }
                    ctx.putImageData(imgData,0,0);
                    _this.blackPicUrl = canvas.toDataURL('image/png', 1);
                    _this.$nextTick(()=>{
                        canvas.style.width = "200px";
                        canvas.style.height = 200/n + "px";
                        document.getElementById("canvas-box").innerHTML = "";
                        document.getElementById("canvas-box").appendChild(canvas);
                    });

                }
            },

        }
    }
</script>
<style scoped>
    @import "tools.less";
</style>