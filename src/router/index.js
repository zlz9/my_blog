import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ArticleIndex from "../views/article/ArticleIndex.vue";
// import WriteArticle from "../views/write/WriteArticle.vue"
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: "/",
    name: "home",
    component: ArticleIndex,
    children: [],
  },
  {
    path: "/articleInfo",
    name: "articleInfo",
    component: () => import("../views/article/ArticleInfo.vue"),
  },
  {
    path: "/write",
    name: "write",
    component: () => import("../views/write/WriteArticle.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/UserLogin.vue"),
  },
  {
    path: "/technology",
    name: "technology",
    component: () => import("../views/technology/MyTechnology.vue"),
  },
  {
    path: "/articlebytags",
    name: "articlebytags",
    component: () => import("../views/article/ArticleTags.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
