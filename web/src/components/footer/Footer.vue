<template>
    <div class="footer">
        <audio :src="API_URL + '/www/xxs.mp3'" id="audio" controls="controls" loop="loop" style="margin-top: 5px; width: 100%"></audio>
    </div>
</template>

<script>
    export default {
        name: 'footer-box',
        data() {
            return {
                msg: ''
            }
        },
        created() {

        },
        mounted(){
            document.getElementById("audio").volume = 0.3;
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "footer.css";
</style>
