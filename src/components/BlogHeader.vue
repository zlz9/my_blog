<template>
  <div class="blog_header">
    <!-- 背景图 -->
    <div class="web_info" ref="nav"></div>
    <el-menu
      :default-active="activeIndex"
      id="el-menu-demo"
      mode="horizontal"
      :class="isFixed ? 'fixed' : ''"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章分类</template>
        <el-menu-item index="2-1">java</el-menu-item>
        <el-menu-item index="2-2">vue</el-menu-item>
        <el-menu-item index="2-3">js</el-menu-item>
        <el-menu-item index="2-3">python</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <router-link to="/technology">我的技术栈</router-link>
      </el-menu-item>
      <el-menu-item id="write_blog" index="6">
        <router-link to="/write">写文章</router-link>
      </el-menu-item>
      <el-menu-item index="7" class="login"
        ><router-link to="/login">登录</router-link></el-menu-item
      >
      <el-menu-item index="8" class="regist">注册</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isFixed: false,
    };
  },
  mounted() {
    window.onscroll = this.handleScroll;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleScroll() {
      // console.log(document.documentElement.scrollTop, this.$refs);
      if (document.documentElement.scrollTop >= 600) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog_header {
  .web_info {
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url("../assets/bj/bj.jpeg");
  }
  .fixed {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 10000;
  }
  #el-menu-demo {
    background-color: rgb(94, 112, 126);
    color: #fff;
    .regist {
      position: absolute;
      right: 20px;
    }
    .login {
      position: absolute;
      right: 80px;
    }
  }
}
</style>
