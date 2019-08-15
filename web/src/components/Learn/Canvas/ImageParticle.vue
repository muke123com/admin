<template>
    <div class="canvas-box" id="canvas-box">
        <div class="file-box">
            <input type="file" id="image" />
            <button type="button" @click="start()" class="btn">开始</button>
        </div>
        <canvas id="canvas">您的浏览器不支持canvas</canvas>
    </div>
</template>
<script>
    let canvas, ctx, showCanvas, showCtx, c_left, c_top;
    let canvas_width = 1000;
    let canvas_height = 640;
    export default {
        data(){
            return {
                text: "1",
                points: [],
                anime: ''
            }
        },
        watch: {
            text(){
//                this.textToImage();
            }
        },
        mounted(){
            canvas = document.createElement("canvas");
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            ctx = canvas.getContext("2d");

            showCanvas = document.getElementById("canvas");
            showCanvas.width = canvas_width;
            showCanvas.height = canvas_height;
            showCtx = showCanvas.getContext("2d");
//            this.start();
        },
        methods: {
            start(){
                let _this = this;
                this.points = [];
                this.getFileUrl();
                window.cancelAnimationFrame(_this.anime);
                this.drawFrame();
            },
            drawFrame(){
                let _this = this;
                this.anime = window.requestAnimationFrame(_this.drawFrame, canvas);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                this.points.map((p)=>{
                    p.update(ctx);
                });
                showCtx.clearRect(0,0,canvas.width,canvas.height);
                showCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
            },
            getFileUrl() {
                let _this = this;
                this.$nextTick(() => {
                    let file = document.getElementById("image").files[0];
                    if(!/image\/\w+/.test(file.type)){
                        alert("请上传图片");
                        return false;
                    }
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        _this.imageToCanvas(this.result);
                    }
                })
            },
            imageToCanvas(url) {
                let _this = this;
                let c_canvas = document.createElement('canvas');
                let c_ctx = c_canvas.getContext("2d");
                let img = new Image();
                img.src = url;
                img.onload = function () {
                    let n = img.width/img.height;
                    let width = img.width > 180 ? 180 : img.width;
                    let height = width/n;
                    c_canvas.width = width;
                    c_canvas.height = height;

                    c_left = canvas.width/2 - width/2;
                    console.log(c_left);
                    c_top = 20;

                    c_ctx.drawImage(img,0, 0, width, height);
                    let imgData = c_ctx.getImageData(0,0,this.width,this.height);
                    _this.getImagedata(img, imgData);
                    console.log(_this.points.length);
                };

            },
            // 获取imageData
            getImagedata(img, imgData) {
                let _this = this;
                let data = imgData.data;

                for(let i=0;i<img.width;i+=2){
                    for(let j=0;j<img.height;j+=2){
                        let pos = (j * img.width + i)*4;
                            let r = data[pos];
                            let g = data[pos + 1];
                            let b = data[pos + 2];
                            let color = "rgba(" + r + "," + g + "," + b + ")";
                            if(!(r < 10 && g < 10 && b < 10)){
                                let o = {
                                    x1: i * 2 + c_left,
                                    y1: j * 2 + c_top,
//                                    x1: i * 2 + (Math.random() - 0.5)*10 + c_left,
//                                    y1: j * 2 + (Math.random() - 0.5)*10 + c_top,
                                    x0: _this.getInitPoint()['x'],
                                    y0: _this.getInitPoint()['y'],
                                    color: color
                                };
                                let p = new Particle(o);
                                _this.points.push(p);
                            }
                    }
                }
            },
            // 获取初始坐标
            getInitPoint(){
                let x = 30;
                let y = canvas.height - 30;
                return {
                    x: x,
                    y: y
                }
            }
        }
    }

    import Particle from './Particle';
</script>