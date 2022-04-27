<template>
  <div class="login">
    <el-avatar
      shape="square"
      :size="200"
      :src="squareUrl"
      class="avatar"
    ></el-avatar>
    <el-input
      placeholder="请输入用户名"
      v-model="account"
      clearable
      class="username"
    >
    </el-input>
    <el-input
      placeholder="请输入密码"
      v-model="password"
      show-password
      class="password"
    ></el-input>
    <el-button type="primary" class="btn1" @click="login">登录</el-button>
    <el-button type="primary" class="btn2">注册</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserLogin",
  data() {
    return {
      account: "",
      password: "",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  mounted() {},
  methods: {
    login() {
      console.log("触发了");
      let { account, password } = this;
      if (account && password) {
        this.$http
          .post("/login", { account, password })
          .then((result) => {
            if (result.data.success == true) {
              this.$router.push("/");
              axios.interceptors.request.use(
                function (config) {
                  // 在发送请求之前做些什么
                  // 进度条开始
                  // console.log(login.state.token);
                  //需要携带token带给服务器
                  if (result.data.data) {
                    config.headers.token = result.data.data;
                    const TOKEN = result.data.data;
                    window.localStorage.setItem("TOKEN", TOKEN);
                  }
                  return config;
                },
                function (error) {
                  // 对请求错误做些什么
                  return Promise.reject(error);
                }
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 600px;
  left: 400px;
  height: 400px;
  bottom: 280px;
  //   border: 1px solid red;
  background-color: rgb(135, 191, 240);
  .avatar {
    position: relative;
    left: 30%;
    margin-top: 10px;
  }
  .username {
    position: relative;
    margin-top: 5px;
    width: 300px;
    top: 40px;
    right: 60px;
  }
  .password {
    position: relative;
    margin-top: 20px;
    width: 300px;
    top: 40px;
    left: 140px;
  }
  .btn1 {
    margin-top: 20px;
    position: relative;
    top: 100px;
    right: 140px;
  }
  .btn2 {
    margin-top: 20px;
    position: relative;
    top: 100px;
    right: 90px;
  }
}
</style>
