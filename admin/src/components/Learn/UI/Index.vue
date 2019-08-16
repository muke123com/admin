<template>
  <div>
  <button type="button" @click="getData">data</button>
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="funcId"
      ref="tree"
      highlight-current
      :props="defaultProps"
      :default-checked-keys="[101, 1011, 1012, 1022, 201, 2011, 2013, 2014]"
    ></el-tree>
  </div>
</template>
 
<script>
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);
export default {
    data() {
    return {
      data: [{"childMenu":[{"childMenu":[{"childMenu":[],"code":"system:auth:userlist","color":"","funcId":1011,"funcName":"用户管理","funcType":1,"funcUrl":"/setings/AuserManagement","icon":"","iconActive":"","isDisplay":"1","parentId":101,"seqNum":1},{"childMenu":[],"code":"system:auth:rolelist","color":"","funcId":1012,"funcName":"角色管理","funcType":1,"funcUrl":"/setings/roleManagement","icon":"","iconActive":"","isDisplay":"1","parentId":101,"seqNum":2}],"code":"system:auth","color":"","funcId":101,"funcName":"权限","funcType":1,"funcUrl":"/","icon":"icon2.png","iconActive":"icon2_1.png","isDisplay":"1","parentId":1,"seqNum":1},{"childMenu":[{"childMenu":[],"code":"system:log:loginlist","color":"","funcId":1021,"funcName":"登录日志","funcType":1,"funcUrl":"/setings/logJournal","icon":"","iconActive":"","isDisplay":"1","parentId":102,"seqNum":1},{"childMenu":[],"code":"system:log:operlist","color":"","funcId":1022,"funcName":"操作日志","funcType":1,"funcUrl":"/setings/operationJournal","icon":"","iconActive":"","isDisplay":"1","parentId":102,"seqNum":2}],"code":"system:log","color":"","funcId":102,"funcName":"日志","funcType":1,"funcUrl":"/","icon":"icon9.png","iconActive":"icon9_1.png","isDisplay":"1","parentId":1,"seqNum":2}],"code":"system","color":"","funcId":1,"funcName":"系统设置","funcType":1,"funcUrl":"/","icon":"1.jpg","iconActive":"","isDisplay":"1","parentId":0,"seqNum":1},{"childMenu":[{"childMenu":[],"code":"light:homepage","color":"","funcId":200,"funcName":"首页","funcType":1,"funcUrl":"/index","icon":"daizhifu.png","iconActive":"","isDisplay":"1","parentId":2,"seqNum":0},{"childMenu":[{"childMenu":[],"code":"business:user:userlist","color":"","funcId":2011,"funcName":"用户管理","funcType":1,"funcUrl":"/user","icon":"daizhifu.png","iconActive":"","isDisplay":"1","parentId":201,"seqNum":1},{"childMenu":[],"code":"business:user:perlist","color":"","funcId":2013,"funcName":"个人认证","funcType":1,"funcUrl":"/personal","icon":"daizhifu.png","iconActive":"","isDisplay":"1","parentId":201,"seqNum":3},{"childMenu":[],"code":"business:user:comlist","color":"","funcId":2014,"funcName":"企业认证","funcType":1,"funcUrl":"/enterprise","icon":"daizhifu.png","iconActive":"","isDisplay":"1","parentId":201,"seqNum":4}],"code":"business:user","color":"","funcId":201,"funcName":"用户中心","funcType":1,"funcUrl":"/userManagement","icon":"daizhifu.png","iconActive":"icon3_1.png","isDisplay":"1","parentId":2,"seqNum":1},{"childMenu":[{"childMenu":[],"code":"light:order:orderlist","color":"","funcId":2021,"funcName":"订单管理","funcType":1,"funcUrl":"/order","icon":"","iconActive":"","isDisplay":"1","parentId":202,"seqNum":1}],"code":"light:order","color":"","funcId":202,"funcName":"订单管理","funcType":1,"funcUrl":"/orderManagement","icon":"","iconActive":"","isDisplay":"1","parentId":2,"seqNum":2},{"childMenu":[{"childMenu":[],"code":"light:goods:goodslist","funcId":2031,"funcName":"商品管理","funcType":1,"funcUrl":"/goodsList","isDisplay":"1","parentId":203,"seqNum":1},{"childMenu":[],"code":"light:goods:cataloglist","color":"","funcId":2032,"funcName":"分类管理","funcType":1,"funcUrl":"/classManage","icon":"","iconActive":"","isDisplay":"1","parentId":203,"seqNum":2},{"childMenu":[],"code":"light:goods:goodadd","color":"","funcId":2033,"funcName":"商品发布","funcType":1,"funcUrl":"/releaseGoods","icon":"","iconActive":"","isDisplay":"1","parentId":203,"seqNum":3}],"code":"light:goods","color":"","funcId":203,"funcName":"商品管理","funcType":1,"funcUrl":"/goodsManagement","icon":"","iconActive":"","isDisplay":"1","parentId":2,"seqNum":3},{"childMenu":[{"childMenu":[],"code":"subsystem:manager:add","funcId":2041,"funcName":"新增子系统","funcType":1,"funcUrl":"/addChild","isDisplay":"1","parentId":204,"seqNum":2},{"childMenu":[],"code":"subsystem:manager:busfunc","funcId":2042,"funcName":"商户菜单","funcType":1,"funcUrl":"/businessMenu","isDisplay":"1","parentId":204,"seqNum":3},{"childMenu":[],"code":"subsystem:manager:operfunc","funcId":2043,"funcName":"运营菜单","funcType":1,"funcUrl":"/MerchantMenu","isDisplay":"1","parentId":204,"seqNum":5},{"childMenu":[],"code":"subsystem:manager:syssupp","color":"","funcId":2044,"funcName":"子系统管理","funcType":1,"funcUrl":"/SetList","icon":"","iconActive":"","isDisplay":"1","parentId":204,"seqNum":1},{"childMenu":[],"code":"subsystem:manager:sbusversion","color":"","funcId":2045,"funcName":"商户版本管理","funcType":1,"funcUrl":"/businessVersionMenu","icon":"","iconActive":"","isDisplay":"1","parentId":204,"seqNum":4}],"code":"subsystem:manager","color":"","funcId":204,"funcName":"子系统管理","funcType":1,"funcUrl":"/SetUp","icon":"","iconActive":"","isDisplay":"1","parentId":2,"seqNum":4},{"childMenu":[{"childMenu":[],"code":"light:goods:supp:list","color":"","funcId":2051,"funcName":"供应商管理","funcType":1,"funcUrl":"/supplier","icon":"","iconActive":"","isDisplay":"1","parentId":205,"seqNum":1}],"code":"light:goods:supp","color":"","funcId":205,"funcName":"供应商管理","funcType":1,"funcUrl":"","icon":"","iconActive":"","isDisplay":"1","parentId":2,"seqNum":5},{"childMenu":[{"childMenu":[],"code":"light:marketing:agent","color":"","funcId":2061,"funcName":"代理商管理","funcType":1,"funcUrl":"/agentManagement","icon":"","iconActive":"","isDisplay":"1","parentId":206,"seqNum":1}],"code":"light:marketing","color":"","funcId":206,"funcName":"代理商管理","funcType":1,"funcUrl":"/","icon":"","iconActive":"","isDisplay":"1","parentId":2,"seqNum":6},{"childMenu":[{"childMenu":[],"code":"light:marketing:demand:list","funcId":2071,"funcName":"需求管理","funcType":1,"funcUrl":"/demandList","isDisplay":"1","parentId":207,"seqNum":1}],"code":"light:marketing:demand","color":"","funcId":207,"funcName":"需求管理","funcType":1,"funcUrl":"/","icon":"2_207.png","iconActive":"2_207actie.png","isDisplay":"1","parentId":2,"seqNum":7}],"code":"business","color":"#7960FF","funcId":2,"funcName":"运营平台","funcType":1,"funcUrl":"","icon":"list1.png","iconActive":"list1_1.png","isDisplay":"1","parentId":0,"seqNum":2}],
      defaultProps: {
        children: "childMenu",
        label: "funcId",
        id: "funcId"
      }
    };
  },
  methods: {
    getData() {
        let data = this.data;
        let checkedKeys = this.$refs.tree.getCheckedKeys();
        let halfKeys = [];
        function getIds(list,parentId) {
            list.map(function(item){
                if(item['childMenu'] && item['childMenu'].length > 0) {
                    getIds(item['childMenu'], item['funcId'])
                }else {
                    if(checkedKeys.indexOf(item['funcId']) != -1) {
                        halfKeys.push(parentId);
                    }
                }
            })
        }
        getIds(data);
        halfKeys = Array.from(new Set(halfKeys))   //

        console.log(checkedKeys);
        console.log(halfKeys);
    }
  },

  
};
</script>
