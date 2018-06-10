import AuthGuard from './auth-guard'
export default [
  {
    path: '/Suivi',
    component: () => import('layouts/Suivi'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard'), name: 'dashboard' },
      { path: 'planning', component: () => import('pages/Planning'), name: 'planning' },
      { path: 'performance', component: () => import('pages/Performance'), name: 'performance' },
      { path: 'addWorkout', component: () => import('pages/AddWorkout'), name: 'addWorkout' }
    ],
    name: 'suivi',
    beforeEnter: AuthGuard
  },
  {
    path: '/',
    component: () => import('layouts/Home'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ],
    name: 'home'
  },
  {
    path: '/hot',
    component: () => import('layouts/Suivi'),
    children: [
      { path: '', component: () => import('pages/FilActu') }
    ],
    name: 'hot'
  },
  {
    path: '/Auth',
    component: () => import('layouts/Auth'),
    children: [
      { path: 'profile', component: () => import('pages/Profile'), name: 'profile', beforeEnter: AuthGuard },
      { path: 'signin', component: () => import('pages/Signin'), name: 'signin' },
      { path: 'signup', component: () => import('pages/Signup'), name: 'signup' }
    ]
    // beforeEnter: AuthGuard
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
