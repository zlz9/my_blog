<template>
  <div class="index">
    <div class="articles">
      <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          @click="goToInfo"
          :data-id="item.bodyId"
          :data-title="item.title"
        >
          <h3>{{ item.title }}</h3>
          <el-button type="primary" class="btn1" size="mini" @click="editer"
            >修改</el-button
          >

          <el-button
            slot="reference"
            type="danger"
            class="btn2"
            size="mini"
            @click="del(item.id)"
            >删除</el-button
          >
          <div class="time">
            {{ dayjs(item.createTime).format("YYYY-MM-DD HH:mm") }}
          </div>
          <div class="content">
            <p>
              {{ item.summary }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <el-card shadow="always" class="notice">
      <h3 class="title">网站公告</h3>
      <div class="info">{{ info }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleIndex",
  data() {
    return {
      data: [],
      time: "",
      info: "创建该网站的目的是为了springboot，和方便自身的学习，未来的ui界面会大改。暂时不对外提供服务。需要源码可以Q我。只能作为学习和交流用途，不得商用",
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      this.$http
        .get("/articles")
        .then((result) => {
          this.data = result.data.data;
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToInfo(event) {
      let element = event.target;
      let { id, title } = element.dataset;
      //如果标签的身上拥有id一定是a标签
      if (id) {
        //整理路由跳转的参数
        console.log("触发");
        let location = { name: "articleInfo" };
        let query = { id: id, title: title };
        location.query = query;
        this.$router.push(location);
      }
    },
    deleteArticle(id) {
      /**
       * 整理参数发请求
       */
      console.log("触发了");
      this.$http
        .delete(`deleteArticle?id=${id}`)
        .then((result) => {
          if (result.status == 200) {
            this.$message({
              showClose: true,
              message: "文章已删除",
              type: "success",
            });
            setTimeout(() => {
              this.getArticle();
            }, 1000);
          } else {
            this.$message({
              showClose: true,
              message: "删除文章失败",
              type: "error",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editer() {
      this.$message({
        showClose: true,
        message: "暂时不提供修改文章功能",
        type: "error",
      });
    },
    del(id) {
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator: (value) => {
          if (value == "admin123") {
            return true;
          }
          return false;
        },
        inputErrorMessage: "密码错误",
      })
        .then(({ value }) => {
          this.deleteArticle(id);
          this.$message({
            type: "success",
            message: "密码正确 ",
          });
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.articles ul li {
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  bottom: 300px;
  position: relative;
  left: 160px;
  list-style: none;
  margin: 20px;
  width: 1200px;
  background-color: aqua;
  .btn1 {
    position: absolute;
    right: 120px;
    top: 20px;
  }
  .btn2 {
    position: absolute;
    right: 30px;
    top: 20px;
  }
  &:hover {
    box-shadow: 10px 10px 5px #888888;
  }
  // list-style: none;
  p {
    position: relative;
    font-size: 18px;
    bottom: 5px;
  }
}
.notice {
  position: absolute;
  width: 350px;
  height: 300px;
  right: 10px;
  top: 200px;
}
</style>
