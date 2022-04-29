<template>
  <div class="blog_content">
    <!-- 日历 -->
    <!-- <el-calendar v-model="value" class="calendar"> </el-calendar> -->
    <!-- user信息 -->
    <div class="userInfo">
      <div class="avator">
        <a href="https://github.com/?msclkid=9a7a3d41c6e711ecb510024c8d92cbb7"
          ><img src="../assets/avator/R-C.jpg" alt=""
        /></a>
      </div>
      <h3 class="username">zlz9</h3>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="我的爱好" name="1">
          <div>{{ favorite }}</div>
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="有趣的观点" name="2">
          <div>{{ funnyView }}</div>
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="怎样学习更有效率" name="3">
          <div>{{ efficiency }}</div>
          <div></div>
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="怎样学好前端和后端" name="4">
          <div>{{ howToStudy }}</div>
          <div></div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  data() {
    return {
      activeName: "",
      favorite:
        "喜欢各种新奇的事物，喜欢新的技术，喜欢逛各种的技术网站。比如csdn、github、zhihu",
      funnyView: "世界很大，我想去看看",
      efficiency:
        "学习的捷径就是对它感兴趣，没有兴趣的学习是枯燥的。对做一件事务怀有激情，这时的效率是最高的",
      howToStudy:
        "我学习的动力就是对他感兴趣，世界上想做的事情无非两种。一种想做，一种不想做。既然确定了就前进吧",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.blog_content {
  position: relative;
  .calendar {
    position: relative;
    font-size: 12px;
    right: 50px;
    top: 100px;
  }
  .userInfo {
    position: relative;
    width: 200px;
    height: 400px;
    top: 100px;
    img {
      position: relative;
      width: 50px;
      height: 50px;
      top: 30px;
      left: 30px;
    }
    .username {
      position: relative;
      text-align: center;
      top: 10px;
      right: 40px;
    }
  }
}
</style>
