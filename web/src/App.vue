<template>
    <div id="app">
        <header-box></header-box>
        <router-view/>
        <!-- <keep-alive>
            <footer-box></footer-box>
        </keep-alive> -->
    </div>
</template>

<script>
    import headerBox from './components/header/Header'
    import footerBox from './components/footer/Footer'

    export default {
        components: {
            headerBox,
            footerBox
        },
        name: 'App'
    }
</script>
<style>
    @import "common.less";
</style>
