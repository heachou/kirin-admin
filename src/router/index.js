import Vue from 'vue'
import Router from 'vue-router'
import audit from './audit'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    // meta: { title: '首页', icon: 'dashboard' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { title: '首页', icon: 'dashboard' }
        // redirect: 'home/service',
        // children: [
        //   {
        //     path: 'service',
        //     name: 'service',
        //     component: () => import('@/views/home/service')
        //     // meta: { title: '服务状态', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'sys',
        //     name: 'sys',
        //     component: () => import('@/views/home/sys')
        //     // meta: { title: '系统状态', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'dbMashine',
        //     name: 'dbMashine',
        //     component: () => import('@/views/home/dbMashine')
        //     // meta: { title: '双机配置', icon: 'dashboard' },
        //   },

        //   {
        //     path: 'setCopy',
        //     name: 'setCopy',
        //     component: () => import('@/views/home/setCopy')
        //     // meta: { title: '配置备份', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'dataSync',
        //     name: 'dataSync',
        //     component: () => import('@/views/home/dataSync')
        //     // meta: { title: '数据同步', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'swUpgrade',
        //     name: 'swUpgrade',
        //     component: () => import('@/views/home/swUpgrade')
        //     // meta: { title: '软件升级', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'timedTask',
        //     name: 'timedTask',
        //     component: () => import('@/views/home/timedTask')
        //     // meta: { title: '定时任务', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'iconUpload',
        //     name: 'iconUpload',
        //     component: () => import('@/views/home/iconUpload')
        //     // meta: { title: '图标上传', icon: 'dashboard' },
        //   },
        //   {
        //     path: 'sysNotice',
        //     name: 'sysNotice',
        //     component: () => import('@/views/home/sysNotice')
        //     // meta: { title: '系统通知', icon: 'dashboard' },
        //   }

        // ]
      }
    ]
  },
  audit,
  {
    path: '/report',
    component: Layout,
    redirect: '/audit/systemAuth',
    meta: { title: '报表统计', icon: 'el-icon-document' },
    children: [
      {
        path: 'systemAuth',
        name: 'SystemAuth',
        component: () => import('@/views/form/systemAuth/systemAuth'),
        meta: { title: '系统权限' }
      },
      {
        path: 'loginReport',
        name: 'LoginReport',
        component: () => import('@/views/form/loginForm/loginForm'),
        meta: { title: '登录报表' }
      },
      {
        path: 'operate',
        name: 'Operator',
        component: () => import('@/views/form/index'),
        meta: { title: '操作报表' }
      },
      {
        path: 'warning',
        name: 'Warning',
        component: () => import('@/views/form/index'),
        meta: { title: '告警报表' }
      },
      {
        path: 'pic',
        name: 'Pic',
        component: () => import('@/views/form/index'),
        meta: { title: '图形输出' }
      },
      {
        path: 'setting',
        name: 'SettingReport',
        component: () => import('@/views/form/index'),
        meta: { title: '报表配置' }
      },
      {
        path: 'regular',
        name: 'Regular',
        component: () => import('@/views/form/index'),
        meta: { title: '定期报表' }
      },
      {
        path: 'status',
        name: 'Status',
        component: () => import('@/views/form/index'),
        meta: { title: '系统状态' }
      }
    ]
  },
  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/webUser',
    name: 'Resource',
    meta: {
      title: '资源管理',
      icon: 'el-icon-box'
    },
    children: [
      {
        path: 'webUser',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'WebUser',
        meta: { title: 'web用户' }
      },
      {
        path: 'equipmentManage',
        component: () => import('@/views/nested/menu2/index'),
        name: 'EquipmentManage',
        meta: { title: '设备管理' }
      },
      {
        path: 'authManage',
        component: () => import('@/views/nested/menu2/index'),
        name: 'AuthManage',
        meta: { title: '授权管理' }
      },
      {
        path: 'appManage',
        component: () => import('@/views/nested/menu2/index'),
        name: 'AppManage',
        meta: { title: '应用管理' }
      },
      {
        path: 'strategyManage',
        component: () => import('@/views/nested/menu2/index'),
        name: 'strategyManage',
        meta: { title: '策略管理' }
      }
    ]
  },
  {
    path: '/config',
    component: Layout,
    redirect: '/config/vars',
    name: 'Config',
    meta: {
      title: '系统配置',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'vars',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Vars',
        meta: { title: '参数配置' }
      },
      {
        path: 'net',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Net',
        meta: { title: '网络配置' }
      },
      {
        path: 'sys',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Sys',
        meta: { title: '系统管理' }
      }
    ]
  },
  {
    path: '/vpn',
    component: Layout,
    redirect: '/vpn/vars',
    name: 'VPN',
    meta: {
      title: 'VPN',
      icon: 'el-icon-s-promotion'
    },
    children: [
      {
        path: 'vars',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Vars',
        meta: { title: 'VPN配置' }
      },
      {
        path: 'route',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Route',
        meta: { title: 'VPN路由' }
      },
      {
        path: 'online',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Online',
        meta: { title: '在线用户' }
      },
      {
        path: 'log',
        component: () => import('@/views/nested/menu2/index'),
        name: 'VPNLog',
        meta: { title: 'VPN LOG' }
      }
    ]
  },
  {
    path: '/else',
    component: Layout,
    redirect: '/else/token',
    name: 'Else',
    meta: {
      title: '其他',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: 'token',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Token',
        meta: { title: '动态令牌' }
      },
      {
        path: 'userInfo',
        component: () => import('@/views/nested/menu2/index'),
        name: 'UserInfo',
        meta: { title: '个人信息' }
      },
      {
        path: 'license',
        component: () => import('@/views/nested/menu2/index'),
        name: 'License',
        meta: { title: 'License' }
      },
      {
        path: 'tools',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Tools',
        meta: { title: '工具下载' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
