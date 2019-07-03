import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home';
import Main from '../views/Main';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/home',
    component: Home,
  }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router
