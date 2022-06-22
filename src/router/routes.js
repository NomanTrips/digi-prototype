
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignupPage.vue') }
    ]
  },
  {
    path: '/resetpassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ResetPassword.vue') }
    ]
  },
  {
    path: '/users/:user_id/changepassword/:token',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ChangePassword.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
