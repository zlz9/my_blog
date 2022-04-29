<template>
  <div class="article_tags">
    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%"
      :stripe="true"
      @cell-dblclick="goToArticleInfo"
    >
      <el-table-column label="索引" width="180" type="index"> </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="createTime" label="创作时间" width="180">
      </el-table-column>
      <el-table-column prop="summary" label="描述"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ArticleTags",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      /**
       * 整理参数发请求
       */
      const id = this.$route.query.id;
      this.$http
        .get(`tag/id=${id}`)
        .then((result) => {
          this.tableData = result.data.data;
          console.log(this.tableData, "tableData");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToArticleInfo(event) {
      let { id, title } = event;
      //如果标签的身上拥有id一定是a标签
      console.log(id);
      if (id) {
        //整理路由跳转的参数
        console.log("触发");
        let location = { name: "articleInfo" };
        let query = { id: id, title: title };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  watch: {
    $route(to, from) {
      this.getInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.article_tags {
  position: relative;
  width: 1200px;
  left: 300px;
  bottom: 260px;
  .el-table {
    font-size: 18px;
  }
}
</style>
