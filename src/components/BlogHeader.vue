<template>
  <div class="blog_header">
    <!-- 背景图 -->
    <div class="web_info" ref="nav"></div>
    <el-menu
      :default-active="this.$router.path"
      id="el-menu-demo"
      mode="horizontal"
      :class="isFixed ? 'fixed' : ''"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/"> 首页 </el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章分类</template>
        <el-menu-item
          v-for="(tag, index) in tags"
          :key="tag.id"
          :index="location"
          :route="{ path: location, query: { id: tag.id } }"
          >{{ tag.tagName }}</el-menu-item
        >
      </el-submenu>
      <el-menu-item index="/technology"> 我的技术栈 </el-menu-item>
      <el-menu-item id="write_blog" index="/write"> 写文章 </el-menu-item>
      <!-- 暂时不对外提供服务 -->
      <!-- <el-menu-item index="/login" class="login">登录</el-menu-item>
      <el-menu-item index="8" class="regist">注册</el-menu-item> -->
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
      isFixed: false,
      tags: [],
      location: "/articlebytags",
    };
  },
  mounted() {
    window.onscroll = this.handleScroll;
    this.getTags();
  },
  methods: {
    goArticleByTag(a) {
      console.log(a);
    },
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
    /**
     * 获取tags
     */
    getTags() {
      this.$http
        .get("/tags")
        .then((result) => {
          this.tags = result.data.data;
          console.log(this.tags);
        })
        .catch((err) => {
          console.log(err);
        });
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
