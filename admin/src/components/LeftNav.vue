<template>
  <el-aside width="200px">
    <el-menu v-for="(first, key1) in leftMenus" :key="key1" :default-openeds="['0']">
      <el-submenu :index="key1.toString()">
        <template slot="title">{{first['name']}}</template>
        <el-menu-item
          v-for="(second, key2) in first['list']"
          :index="key1 + '-' + key2"
          :key="key1 + '-' + key2"
        >{{second['name']}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "left-box",
  data() {
    return {
      leftMenus: [
        {
          icon: "",
          name: "导航一",
          list: [
            {
              name: "选项一",
              href: ""
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>