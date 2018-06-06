
export default [
  {
    path: '/Suivi',
    component: () => import('layouts/Suivi'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard') },
      { path: 'planning', component: () => import('pages/Planning') },
      { path: 'performance', component: () => import('pages/Performance') },
      { path: 'addWorkout', component: () => import('pages/AddWorkout') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Home'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/hot',
    component: () => import('layouts/Suivi'),
    children: [
      { path: '', component: () => import('pages/FilActu') }
    ]
  },
  {
    path: '/Auth',
    component: () => import('layouts/Auth'),
    children: [
      { path: 'profile', component: () => import('pages/Profile') },
      { path: 'signin', component: () => import('pages/Signin') },
      { path: 'signup', component: () => import('pages/Signup') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
