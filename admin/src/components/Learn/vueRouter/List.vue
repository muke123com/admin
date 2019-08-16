<template>
    <div class="router-box">
        <router-view></router-view>
        <ul class="list scroll">
            <router-link tag="li" v-for="(item, key) in list" :key="item['id']" :to="{name: 'routerDetail', params: { id: item['id'] }}">
                <img :src="item['images']['small']">
                <p>
                    <i class="color">{{item['title']}}</i><br>
                    ({{item['original_title']}})<br>
                    ({{item['year']}})
                </p>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import movieList from './data'
    export default {
        data(){
            return {
                list: []
            }
        },
        created(){
            this.getList();
            this.$store.state.common.title = "vue-router"
        },
        methods: {
            getList(){
                this.list = movieList['subjects'];
            },
            beforeEnter: function (el) {
                el.style.opacity = 0;
                el.style.transformOrigin = 'left';
            },
            enter: function (el, done) {

            },
            leave: function (el, done) {

            }
        }
    }
</script>
<style scoped>
    @import "router.less";
</style>