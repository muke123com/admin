<template>
  <div id="app">
    <el-container>
      <header-box></header-box>
      <el-container>
        <left-box></left-box>
        <router-view />
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import headerBox from "./components/Header";
import leftBox from "./components/LeftNav";
export default {
  components: {
    headerBox,
    leftBox
  },
  name: "App"
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
ul,
ol,
li,
span,
a,
form,
img,
dl,
dt,
dd,
table,
th,
td,
blockquote,
fieldset,
div,
strong,
label,
em,
i,
b,
strong,
pre,
legend,
button,
input,
textarea,
select,
address,
cite,
dfn,
var,
code,
kbd,
samp,
small,
sup,
sub article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-style: normal;
  box-sizing: border-box;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
