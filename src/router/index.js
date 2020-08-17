import Vue from 'vue'
import VueRouter from 'vue-router'

import Skill from "../views/Skill";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'skill',
    component: Skill,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(`@/views/About.vue`),
  },
  {
    path: '/link',
    name: 'link',
    component: () => import(`@/views/Link.vue`),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
