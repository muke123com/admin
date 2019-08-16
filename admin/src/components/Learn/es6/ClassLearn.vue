<template>
    <div class="class-box">
        <div class="logs">
            <p v-for="text in logs">{{text}}</p>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testClass" title="">class</a>
            <a href="javascript:void(0)" class="btn" @click="testSuper" title="">super</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: "learnClass",
        data(){
            return {
                logs: []
            }
        },
        methods: {
            testClass(){
                class Point {
                    constructor(x, y) {
                        this._count = 0;
                        this.x = x;
                        this.y = y;
                    }

                    toString() {
                        return '(' + this.x + ',' + this.y + ')';
                    }

                    static showInfo () {
                        return "触发showInfo静态方法"
                    }
                }
                let p = new Point(10, 5);
                let text = "触发对象p的toString()方法=>"+ p.toString();
                this.addLogs(text);
                text = Point.showInfo();
                this.addLogs(text);

                //继承
                class ColorPoint extends Point {
                    constructor(x, y, color){
                        super(x, y);
                        this.color = color;
                    }

                    toString() {
                        return this.color + ' ' + super.toString();
                    }
                }
                let colorP = new ColorPoint(10, 5, "red");
                text = "ColorPoint继承Point重写toString方法=>"+ colorP.toString();
                this.addLogs(text);
                console.log(p instanceof Point);
                console.log(colorP instanceof Point);
            },
            testSuper(){
                let _this = this;
                //ES6 要求，子类的构造函数必须执行一次super函数。
                class A {
                    constructor() {
                        this.x = 1;
                    }
                    print() {
                        _this.addLogs("this.x=>" + this.x)
                    }
                }
                class B extends A {
                    constructor() {
                        super();  //子类必须
                        this.x = 2;
                    }
                    m(){
                        super.print();
                    }
                }
                let b = new B();
                b.m();
            },
            addLogs(text) {
                this.logs.push(text);
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>