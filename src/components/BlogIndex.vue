<template>
  <div class="index">
    <blog-header></blog-header>
    <blog-content></blog-content>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogContent from "./BlogContent.vue";
import BlogFooter from "./BlogFooter.vue";
import BlogHeader from "./BlogHeader.vue";
export default {
  components: { BlogHeader, BlogContent, BlogFooter },
  name: "BlogIndex",
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="less" scoped>
.index {
  margin: 20px;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: rgb(81, 21, 21);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
