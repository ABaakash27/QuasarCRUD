
const routes = [
  {
    path : '/',
    component: () => import('layouts/LoginPage.vue')
  },
  {
    path: '/hello',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/addhospital', 
        component: () => import('pages/addhospital.vue') ,
      },
      {
        path: '/dashboard', 
        component: () => import('pages/dashboard.vue') ,
      },
      {
        path: '/edithospital/:id/', 
        component: () => import('pages/edithospital.vue') ,
      },
      {
        path : '/detailhospital/:id/',
        component: () => import('pages/detailhospital.vue'),
      },
      {
        path: '/demoselect', 
        component: () => import('pages/demoselect.vue') ,
      },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
