<template>
  <div class="publish">
    <div :plain="true" @click="onSubmit"></div>
    <el-form ref="form" label-width="80px" size="mini" class="input">
      <el-form-item label="标题">
        <el-input v-model="title" class="input1"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要">
        <el-input type="textarea" v-model="summary"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="category" class="input2"></el-input>
      </el-form-item>
      <el-form-item label="文章标签">
        <el-checkbox-group v-model="tags">
          <el-checkbox-button
            :label="tag.tagName"
            v-for="(tag, index) in tags"
            :key="index"
            @change="handleTag(tag)"
          >
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <!-- <el-form-item size="medium" class="btn"> -->
      <el-button type="primary" @click="onSubmit" class="btn">发布</el-button>
      <!-- </el-form-item> -->
    </el-form>
    <!-- 密码确认弹框 -->
  </div>
</template>

<script>
export default {
  name: "PublishDetail",
  props: ["body"],
  data() {
    return {
      category: "",
      summary: "",
      tags: "",
      title: "",
      tag: [],
      articleInfo: "",
      password: "",
    };
  },
  mounted() {
    this.getTags();
  },
  methods: {
    handleTag(tag) {
      this.tag.push(tag);
      console.log(tag);
    },
    publish() {
      /**
       * 判断是否为空
       */
      /**
       * 整理参数发请求
       */
      let data = {
        title: this.title,
        summary: this.summary,
        body: this.body,
        category: this.category,
        tags: this.tag,
      };
      if (this.body.content) {
        this.$http
          .post("/publish", data)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        this.$message({
          showClose: true,
          message: "文章发布成功！",
          type: "success",
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } else {
        this.$message({
          showClose: true,
          message: "请完善文章信息并保存文章",
          type: "error",
        });
      }
    },
    /**
     * 获取，标签，分类等信息
     */
    getTags() {
      this.$http
        .get("/tags")
        .then((result) => {
          this.tags = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSummary() {
      this.$http
        .get("/summary")
        .then((result) => {
          this.summary = result.data.data;
          console.log(this.summary);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSubmit() {
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
          this.publish();
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
.input {
  position: relative;
  width: 600px;
}
.input1 {
  font-size: 20px;
}
.btn {
  position: relative;
  left: 500px;
  bottom: 50px;
}
</style>
