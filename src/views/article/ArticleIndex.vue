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
          <el-button type="primary" class="btn1" size="mini" @click="editor"
            >修改</el-button
          >
          <el-button
            type="danger"
            class="btn2"
            size="mini"
            @click="deleteArticle(item.id)"
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
  </div>
</template>

<script>
export default {
  name: "ArticleIndex",
  data() {
    return {
      data: [],
      time: "",
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
    editor() {},
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
}
</style>
