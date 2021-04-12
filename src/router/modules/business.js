/** When your routing table is too long, you can split it into small modules**/

import { Layout } from "../../views/layout"; // 页面整体布局

const businessRouter = {
  path: '/business',
  name: "business",
  component: Layout,
  redirect: '/business/insureOrder',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '业务管理',
    icon: 'iconpermission',
    roles: ['1', '2', '3', '4', '6', '8', '9'] // you can set roles in root nav
  },
  children: [
    // {
    //   path: 'channel',
    //   component: () => import('@/page/business/channel'),
    //   name: 'channel',
    //   meta: {
    //     title: '渠道配置',
    //     roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'addChannel',
    //   component: () => import('@/page/business/addChannel'),
    //   name: 'addChannel',
    //   hidden: true,
    //   meta: {
    //     title: '新增',
    //     roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'addChannel02',
    //   component: () => import('@/page/business/addChannel02'),
    //   name: 'addChannel02',
    //   hidden: true,
    //   meta: {
    //     title: '批量修改',
    //     roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'xieyi',
    //   component: () => import('@/page/business/xieyi'),
    //   name: 'xieyi',
    //   meta: {
    //     title: '协议管理',
    //     roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'addXieyi',
    //   component: () => import('@/page/business/addXieyi'),
    //   hidden: true,
    //   name: 'addXieyi',
    //   meta: {
    //     title: '新增',
    //     roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'project',
    //   component: () => import('@/page/business/project'),
    //   name: 'project',
    //   meta: {
    //     title: '项目管理',
    //     roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'addProject',
    //   component: () => import('@/page/business/addProject'),
    //   hidden: true,
    //   name: 'addProject',
    //   meta: {
    //     title: '新增',
    //     roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'pack',
    //   component: () => import('@/page/business/pack'),
    //   name: 'pack',
    //   meta: {
    //     title: '包配置',
    //     roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
    //   }
    // },
    // {
    //   path: 'addPack',
    //   component: () => import('@/page/business/addPack'),
    //   hidden: true,
    //   name: 'addPack',
    //   meta: {
    //     title: '新增',
    //     roles: ['1', '2', '3', '4', '6'] // or you can only set roles in sub nav
    //   }
    // }
    // ,
    {
      path: 'parameter',
      component: () => import('@/views/business/parameter'),
      name: 'parameter',
      meta: {
        title: '上报公众号参数',
        roles: ['1', '2', '3', '4', '6', '8'] // or you can only set roles in sub nav
      }
    }
  ]
}
export default businessRouter
