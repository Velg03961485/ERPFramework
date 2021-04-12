

import { createRouter, createWebHistory } from 'vue-router'
//Content
import { Layout,  } from "../views/layout"; // 页面整体布局
// import { topRouterMap } from "./topRouter";
import businessRouter from './modules/business'
// import statisticsRouter from './modules/statistics'

// function filterTopRouterMap(name) {
//   let router = topRouterMap.find((item) => {
//     return item.parentName === name;
//   });
//   return router.data; // arr
// }



const routes = [

  {
    path: '',
    component: Layout,
    redirect: '/index/index',
    hidden: true
  },
  { path: '/login', name: 'login', component: () => import('@/views/login/login'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'icondashboard',
    },
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页',
          icon: 'icondashboard',
          routerType: 'leftmenu'
        },
        component: () => import('../views/index/index'),
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [
  businessRouter,
  // statisticsRouter
];

export default router


