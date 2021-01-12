import Layout from '@/layout'

const audit = {
  path: '/resource',
  component: Layout,
  redirect: '/resource/webUser',
  name: 'Resource',
  breadcrumb: false,
  meta: {
    title: '资源管理',
    icon: 'el-icon-box'
  },
  children: [
    {
      path: 'webUser',
      component: () => import('@/views/resource/web-user/web-user-router'), // Parent router-view
      name: 'WebUserContainer',
      meta: { title: 'web用户' },
      breadcrumb: false,
      children: [
        {
          path: '',
          component: () => import('@/views/resource/web-user/web-user'), // Parent router-view
          name: 'WebUser',
          meta: { title: '查看' }
        },
        {
          path: 'add',
          component: () => import('@/views/resource/web-user/add/add'),
          name: 'WebUserAdd',
          meta: { title: '添加Web用户' },
          hidden: true
        }
      ]
    },
    {
      path: 'equipmentManage',
      component: () => import('@/views/resource/web-user/web-user'),
      name: 'EquipmentManage',
      meta: { title: '设备管理' }
    },
    {
      path: 'authManage',
      component: () => import('@/views/resource/web-user/web-user'),
      name: 'AuthManage',
      meta: { title: '授权管理' }
    },
    {
      path: 'appManage',
      component: () => import('@/views/resource/web-user/web-user'),
      name: 'AppManage',
      meta: { title: '应用管理' }
    },
    {
      path: 'strategyManage',
      component: () => import('@/views/resource/web-user/web-user'),
      name: 'strategyManage',
      meta: { title: '策略管理' }
    }
  ]
}

export default audit
