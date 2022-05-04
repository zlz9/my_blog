<template>
  <div class="article_info">
    <h2>{{ title }}</h2>
    <div class="content" v-html="contentHtml">
      {{ contentHtml }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleInfo",
  data() {
    return {
      title: "",
      content: "",
      contentHtml: "",
    };
  },
  mounted() {
    this.getArticleInfo();
    this.title = this.$route.query.title;
  },
  methods: {
    getArticleInfo() {
      let id = this.$route.query.id;
      this.$http
        .get(`/articleInfo?id=${id}`)
        .then((result) => {
          this.content = result.data.data.content;
          this.contentHtml = result.data.data.contentHtml;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.article_info {
  position: relative;
  margin: 0 auto;
  width: 1200px;
  min-height: 300px;
  max-height: 1200px;
  bottom: 300px;
  h2 {
    text-align: center;
  }
  .content {
    font-size: 18px;
    border-radius: 10px;
    color: #fff;
    background-color: rgb(8, 54, 54);
    min-height: 400px;
    padding: 10px;
  }
}
</style>
