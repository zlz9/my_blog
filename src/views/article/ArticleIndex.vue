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
          <div class="time">{{ item.createTime }}</div>
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
        let location = { name: "articleInfo" };
        let query = { id: id, title: title };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.articles ul li {
  cursor: pointer;
  bottom: 300px;
  position: relative;
  left: 160px;
  list-style: none;
  margin: 20px;
  width: 1200px;
  background-color: aqua;
  &:hover {
    box-shadow: 10px 10px 5px #888888;
  }
  // list-style: none;
}
</style>
