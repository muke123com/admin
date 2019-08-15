<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    export default {
        components:{
            headerBox
        },
        name: 'Layout',
        data() {
            return {
                msg: 'header'
            }
        },
        created() {
            console.log(this.$route)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
