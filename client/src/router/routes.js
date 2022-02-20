import Dashboard from '@/views/Dashboard';

export const routes = [
     {
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          children: [
               {
                    path: '/',
                    name: 'Posts',
                    component: () => import('../views/Post/Posts'),
               },
               {
                    path: '/profile',
                    name: 'Profile',
                    component: () => import('../views/Profile'),
               },
               {
                    path: '/post/:id',
                    name: 'Post',
                    component: () => import('../views/Post/SinglePost'),
               },
          ],
     },

     {
          path: '/login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue'),
     },
     {
          path: '/register',
          name: 'Register',
          component: () => import('../views/auth/Register.vue'),
     },
     {
          path: '/reset-password',
          name: 'ResetPassword',
          component: () => import('../views/auth/ResetPassword.vue'),
     },
     {
          path: '/verify',
          name: 'Verify',
          component: () => import('../views/auth/Verify.vue'),
     },
];
