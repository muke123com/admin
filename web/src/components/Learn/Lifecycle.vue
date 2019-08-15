<!--
beforecreate : 举个栗子：可以在这加个loading事件
created ：在这结束loading，还做一些初始化，实现函数自执行
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容

DOM操作的js代码放进Vue.nextTick()的回调函数中
-->
<template>
    <div class="lifecycle">
        {{msg}}
        <br>
        <a @click="change">update</a>
        <a @click="destroy">destroy</a>
    </div>
</template>
<script>
    export default {
      name: 'lifecycle',
      data(){
        return {
          msg: 'life'
        }
      },
      beforeCreate(){
        console.log('beforeCreate=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);

      },
      created(){
        console.log('created=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      beforeMount(){
        console.log('beforeMount=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      mounted(){
        console.log('mounted=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      beforeUpdate(){
        console.log('beforeUpdate=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      updated(){
        console.log('updated=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      beforeDestroy(){
        console.log('beforeDestroy=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      destroyed(){
        console.log('destroyed=================>');
        console.log('%c%s', "color:red","el:"+this.$el);
        console.log('%c%s', "color:red","data:"+this.$data);
        console.log('%c%s', "color:red","msg:"+this.msg);
      },
      methods: {
        change(){
          console.log(1, this.$el.textContent);
          this.msg = 256;
          console.log(2, this.$el.textContent);
          this.$nextTick(function () {
            console.log(3, this.$el.textContent);
          })
        },
        destroy(){
          this.$destroy();
        }
      }
    }
</script>