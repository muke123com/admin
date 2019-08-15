<template>
    <div class="canvas-box" id="canvas-box">
        <div class="file-box">
            <audio id="audio" src="/static/xxs.mp3" autoplay="autoplay">您的浏览器不支持audio</audio>
            <button type="button" @click="start()" class="btn">开始</button>
        </div>
        <canvas id="canvas">您的浏览器不支持canvas</canvas>
    </div>
</template>
<script>
    let canvas, ctx, audio, audioContext, analyser;
    export default {
        data() {
            return {
                anime: ''
            }
        },
        mounted() {
            canvas = document.getElementById("canvas");
            audio = document.getElementById("audio");
            canvas.width = 800;
            canvas.height = 640;
            ctx = canvas.getContext("2d");
            this.start();
        },
        methods: {
            start() {
                let _this = this;
                this.$nextTick(() => {
                    audioContext = new (window.AudioContext || window.webkitAudioContext);
                    analyser = audioContext.createAnalyser();
                    window.addEventListener("load", function(e){
                        let audio = document.getElementById("audio");
                        let source = audioContext.createMediaElementSource(audio);
                        source.connect(analyser);
                        analyser.connect(audioContext.destination);

                        window.cancelAnimationFrame(this.anime);
                        _this.draw();
                    }, false);
                    audioContext.resume().then(() => {
                        console.log('Playback resumed successfully');
                    });
                });
            },
            draw() {
                let _this = this;
                let w = canvas.width;
                let h = canvas.height;
                let array =  new Uint8Array(128);
                analyser.getByteFrequencyData(array);
                this.anima = window.requestAnimationFrame(_this.draw);
                ctx.clearRect(0,0,w,h);

                for(let i=0;i<array.length;i++){
                    ctx.beginPath();
                    if(i === 0) {
                        ctx.moveTo(i*10, h - array[i]);
                    }
                    let colorh = i/128*270;
                    ctx.fillStyle = "hsl(" + colorh + ", 100%, 50%)";
                    ctx.rect(i*(w/128), h - array[i], (w/128)-1, array[i]);
                    ctx.fill();
                    ctx.closePath();
                }

            }
        }
    }
</script>