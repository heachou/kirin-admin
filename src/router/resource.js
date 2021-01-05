import Layout from '@/layout'

const audit = {
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
      component: () => import('@/views/resource/web-user/web-user'), // Parent router-view
      name: 'WebUser',
      meta: { title: 'web用户' }
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
