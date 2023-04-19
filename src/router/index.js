import { createRouter, createWebHistory } from "vue-router";
import AsksView from "../views/AsksView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import WorldView from "../views/WorldView.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    // "/" url로 접속 시 /asks로 redirect
    // { path: "/", redirect: "/asks" },
    // { path: "/", component: null },

    {
      path: "/asks", //주소,
      component: AsksView, // 보여질 컴포넌트
    },
    {
      path: "/jobs", //주소,
      component: JobsView, // 보여질 컴포넌트
    },
    {
      path: "/news", //주소,
      component: NewsView, // 보여질 컴포넌트
    },

    {
      path: "/item", //주소,
      component: ItemView, // 보여질 컴포넌트
    },
    {
      path: "/user/:user", //주소,
      component: UserView, // 보여질 컴포넌트
    },
    {
      path: "/world",
      component: WorldView,
    },
    {
      path: "/asks/:id",
      component: ItemView,
    },
  ],
});
