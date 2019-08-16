<template>
    <div>
        <h5api></h5api>
    </div>
</template>
<script>
    import H5api from './H5API'
    import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
    export default {
        components: {
            H5api
        },
        data(){
            return {

            }
        },
        created() {
            this.CHANGE_TITLE({title: 'H5'})
        },
        methods: {
            ...mapMutations(['CHANGE_TITLE']),
        }
    }
</script>
<style scoped>
    @import "h5.less";
</style>