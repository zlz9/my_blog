<template>
  <div class="write_article">
    <pubulish-details :body="body"></pubulish-details>
    <div class="mavonEditor">
      <mavon-editor
        @save="save"
        class="mavonEditor"
        @imgAdd="imgAdd"
        @imgDel="imgDel"
        ref="md"
        :toolbarsBackground="background"
        :previewBackground="background2"
      />
    </div>
  </div>
</template>

<script>
import PubulishDetails from "./PubulishDetails.vue";
export default {
  components: { PubulishDetails },
  name: "WriteArticle",
  data() {
    return {
      body: {
        content: "",
        contentHtml: "",
      },
      background: "#EEE8AA",
      background2: "#FDF5E6",
    };
  },
  mounted() {
    this.editor();
    console.log(this.$refs.md, "mavon-editor");
  },
  methods: {
    save(value, render) {
      this.body.content = value;
      this.body.contentHtml = render;
    },
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      this.$http({
        url: "/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        var url = response.data.data;
        this.$refs.md.$img2Url(pos, url);
      });
    },
    imgDel() {},
    editor() {
      /**
       * 先不开发修改文章功能
       */
      // let id = this.$route.query.id;
      // this.$http
      //   .post(`/editorArticles?id=${id}`)
      //   .then((res) => {
      //     this.articleInfo = res.data.data;
      //     this.$refs.md.d_value = this.articleInfo.content;
      //     this.render = this.articleInfo.contentHtml;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    change(value, render) {
      console.log(value, "value");
      console.log(render, "render");
    },
  },
};
</script>

<style lang="less" scoped>
.write_article {
  position: relative;
  width: 1600px;
  height: 800px;
  //   border: 1px solid red;
  left: 220px;
  bottom: 320px;
  .mavonEditor {
    position: absolute;
    width: 100%;
    height: 800px;
  }
}
</style>
