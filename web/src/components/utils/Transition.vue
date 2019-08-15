<template>
    <div class="transition-box">
        <a href="javascript:void(0)" @click="move">transition</a>
        <transition name="move">
            <p v-show="show">{{msg}}</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'transition-box',
        data() {
            return {
                msg: '222222222',
                show: false
            }
        },
        created() {
            let _this = this;
        },
        methods: {
            move: function () {
                this.show = !this.show;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "utils.css";
</style>
