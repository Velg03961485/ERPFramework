/** When your routing table is too long, you can split it into small modules**/

import { Layout } from "../../views/layout"; // 页面整体布局

const statisticsRouter = {
  path: '/statistics',
  name: "statistics",
  component: Layout,
  redirect: '/statistics/insureOrder',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '信息流',
    icon: 'iconecharts',
    roles: ['1', '2', '3', '4', '6', '8', '9'] // you can set roles in root nav
  },
  children: [
    {
      path: 'userList',
      component: () => import('@/page/statistics/userList'),
      name: 'userList',
      meta: {
        title: '信息流用户列表',
        roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'keywordsList',
      component: () => import('@/page/statistics/keywordsList'),
      name: 'keywordsList',
      meta: {
        title: '关键词列表',
        roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'count',
      component: () => import('@/page/statistics/count'),
      name: 'count',
      meta: {
        title: '积分贷款数据统计',
        roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'detailCount',
      component: () => import('@/page/statistics/detailCount'),
      hidden: true,
      name: 'detailCount',
      meta: {
        title: '积分贷款数据统计详情',
        roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
      }
    }
  ]
}
export default statisticsRouter
