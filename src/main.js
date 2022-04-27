import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081/";

Vue.prototype.$http = axios;
Vue.use(mavonEditor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
