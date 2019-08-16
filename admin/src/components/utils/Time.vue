<template>
    <div class="time-box">
        <span><slot></slot>{{time}}</span>
    </div>
</template>

<script>
    export default {
        name: 'time-box',
        props: ['ids'],
        data() {
            return {
                time: '00:00:00'
            }
        },
        created() {
            let _this = this;
            let t = setInterval(_this.setTime, 1000);
        },
        methods: {
            setTime: function () {
                let date = new Date();
                let h = ('00' + date.getHours()).slice(-2);
                let m = ('00' + date.getMinutes()).slice(-2);
                let s = ('00' + date.getSeconds()).slice(-2);
                this.time = h + ':' + m + ':' + s;
                this.vm.$emit('test', this.time);
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "utils.css";
</style>
