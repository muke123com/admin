<template>
    <div class="h5-api">
        <input type="text" v-model="text" @input="getDownloadUrl" />
        <a :href="downloadUrl" :download="downloadName">下载</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: "",
                downloadUrl: "",
                downloadName: ""
            }
        },
        methods: {
            getDownloadUrl() {
                let text = this.text;
                let blob = new Blob([text], {type: "application/json;charset=utf-8"})
                this.downloadUrl = URL.createObjectURL(blob);
                this.downloadName = new Date().getTime() + ".txt";
            }
        }
    }
</script>