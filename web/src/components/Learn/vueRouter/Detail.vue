<template>

    <div class="detail-box">
        <transition appear v-if="show">
            <div class="">
                <h2 class="title">
                    <a class="color" :href="baikeUrl + movie['title']" target="_blank">{{movie['title']}}</a>
                    ({{movie['original_title']}})
                    ({{movie['year']}})
                    <strong>{{movie['rating']['average']}}</strong>
                </h2>
                <div class="content">
                    <img :src="movie['images']['small']" />
                    <div class="movie-detail">
                        <p class="movie-type">类型：
                            <span v-for="type in movie['genres']">{{type}}</span>
                        </p>
                        <p class="movie-actors">导演：
                            <span v-for="actor in movie['directors']">
                                <img :src="actor['avatars']['small']"/>
                                <a :href="baikeUrl + actor['name']" target="_blank">{{actor['name']}}</a>
                            </span>
                        </p>
                        <p class="movie-actors">主演：
                            <span v-for="actor in movie['casts']">
                                <img :src="actor['avatars']['small']"/>
                                <a :href="baikeUrl + actor['name']" target="_blank">{{actor['name']}}</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import movieList from './data'
    export default {
        data(){
            return {
                show: false,
                baikeUrl: 'https://baike.baidu.com/item/',
                movie: {}
            }
        },
        computed: {
            id(){
                return this.$route.params.id;
            }
        },
        watch: {
            id(){
                this.getData();
            },
            movie(){
                this.show = false;
                setTimeout(()=>{
                    this.show = true;
                },500)
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                let id = this.id;
                let list = movieList['subjects'];
                if(id === "") {
                    id = list[0]['id'];
                }
                let item = list.filter((item)=>{
                    return item['id'] === id;
                });
                this.movie = item[0];
            }
        }
    }
</script>
<style scoped>
    @import "router.less";
    .v-enter,.v-leave-to{
        position: absolute;
        opacity: 0;
        transform: translateX(80px);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.6s ease;
    }
</style>