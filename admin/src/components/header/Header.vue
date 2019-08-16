<template>
    <div class="header">
        <router-link tag="h1" to="/">
            M
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'header-box',
        data() {
            return {
                msg: ''
            }
        },
        computed: {
            title(){
                return this.$store.state.common.title;
            }
        },
        watch: {
            title(){
                document.title = this.title?this.title:'练习';
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "header.css";
</style>
