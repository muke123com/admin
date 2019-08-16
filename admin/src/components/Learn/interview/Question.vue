<template>
    <div class="question-box">
        <div class="list">
            <div class="top clearfix">
                <div class="left">
                    {{inputArr}}
                </div>
                <div class="right">{{resultArr}}</div>
            </div>
            <div class="btns">
                <a href="javascript:void(0)" class="btn" @click="flatArr">扁平化数组</a>
            </div>
        </div>
        <div class="list">
            <div class="top clearfix">
                <div class="left">
                    <pre>
                        {{inputJson}}
                    </pre>
                </div>
                <div class="right">查询路径：{{pathStr}}</div>
            </div>
            <div class="btns">
                <input type="text" class="input" v-model="inputText" />
                <a href="javascript:void(0)" class="btn" @click="getJsonPath">查询JSON</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                inputArr: "[1,2,3,[1,4,5,[2,'b'],2,'a']]",
                inputJson: inputJson,
                resultArr: "",
                inputText: "javascript",
                pathStr: ""
            }
        },
        created(){
            this.$store.commit('CHANGE_TITLE', {title: '问 题'});
        },
        methods: {
            //扁平化数组
            flatArr(){
                let arr = this.inputArr.replace(/[\[|\]]/g, '');
                this.resultArr = arr.toString().split(",");
            },
            //查询json路径
            getJsonPath(){
                let name = this.inputText;
                let arr = this.inputJson;
                let path = [];
                let hasKey = false;
                let _this = this;
                function getPath(arr) {
                    if(!arr || arr.length === 0) {
                        path.pop();
                        return;
                    }
                    for(let i=0;i<arr.length;i++){
                        path.push(arr[i]['name']);
                        if(arr[i]['name'] === name){
                            _this.pathStr = path.join("/");
                            path = [];
                            hasKey = true;
                            break;
                        }else {
                            getPath(arr[i]['children']);
                        }
                    }
                }
                getPath(arr);
                if(!hasKey) {
                    _this.pathStr = '未找到' + name;
                }
            }
        }
    }
    let inputJson = [
        {
            'name': 'a1',
            'children': [
                {
                    'name': 'a1b1',
                    'children': [
                        {
                            'name': 'a1b1c1',
                            'children': [
                                {'name': 'javascript'},
                                {'name': 'java'},
                                {'name': 'python'},
                                {'name': 'c++'},
                                {'name': 'go'},
                            ]
                        },
                        {
                            'name': 'abc2',
                            'children': []
                        }
                    ]
                }
            ]
        },
        {
            'name': 'a2',
            'children': [
                {
                    'name': 'b1',
                    'children': [
                        {
                            'name': 'c1',
                            'children': []
                        },
                        {
                            'name': 'c2',
                            'children': [
                                {'name': 'd1'},
                                {'name': 'd2'},
                                {'name': 'd3'},
                                {'name': 'd4'},
                                {'name': 'd5'},
                            ]
                        }
                    ]
                }
            ]
        }
    ]
</script>
<style scoped>
    @import "interview.less";
</style>