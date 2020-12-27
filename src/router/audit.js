import Layout from '@/layout'

const audit = {
  path: '/audit',
  component: Layout,
  redirect: '/audit/operate',
  name: 'Audit',
  meta: { title: '运维审计', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'operate',
      name: 'Operate',
      component: () => import('@/views/audit/operate/operate'),
      meta: { title: '操作审计' }
    },
    {
      path: 'application',
      name: 'Application',
      component: () => import('@/views/audit/application/application'),
      meta: { title: '应用审计' }
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/audit/monitor/monitor'),
      meta: { title: '实时监控' }
    },
    {
      path: 'lookup',
      name: 'Lookup',
      component: () => import('@/views/audit/lookup/lookup'),
      meta: { title: '审计查询' }
    }
  ]
}

export default audit
