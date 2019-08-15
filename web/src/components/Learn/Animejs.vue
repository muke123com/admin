<template>
    <div class="anime">
        <div id="keyframes">
            <div class="square el"></div>
        </div>
        <a @click="demo">动画</a>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'anime',
        data() {
            return {
                msg: '111',
                myObject: {
                    prop1: 0,
                }
            }
        },
        created() {
        },
        methods: {
            demo: function () {
                var keyframes = anime({
                    targets: '#keyframes .el',
                    translateX: [
                        { value: 250, duration: 1000, delay: 500, elasticity: 0 },
                        { value: 0, duration: 1000, delay: 500, elasticity: 0 }
                    ],
                    translateY: [
                        { value: -40, duration: 500, elasticity: 100 },
                        { value: 40, duration: 500, delay: 1000, elasticity: 100 },
                        { value: 0, duration: 500, delay: 1000, elasticity: 100 }
                    ],
                    scaleX: [
                        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                        { value: 1, duration: 900, elasticity: 300 },
                        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                        { value: 1, duration: 900, elasticity: 300 }
                    ],
                    scaleY: [
                        { value: [1.75, 1], duration: 500 },
                        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                        { value: 1, duration: 450 },
                        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                        { value: 1, duration: 450 }
                    ],
                    loop: true
                });
            },
            demo2: function () {
                anime({
                    targets: 'polygon',
                    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
                    complete: function () {
                        anime({
                            targets: 'polygon',
                            points: '64 68.73508918222262 8.574 99.9935923731656 63.35810017508558 67.62284396863708 64 3.993592373165592 64.64189982491442 67.62284396863708 119.426 99.9935923731656',
                        });
                    }
                });
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "learn.css";
</style>
