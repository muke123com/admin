<template>

</template>

<script>
    import axios from 'axios';
    let common = {
        getData: function (url, data, callback) {
            axios.get(url, {
                params: data
            }).then(function (res) {
                callback(res);
            })
        },
        postData: function (url, data, callback) {
            axios.post(url, {
                params: data
            }).then(function (res) {
                callback(res);
            })
        }
    };

    export default {
        common
    }
</script>
