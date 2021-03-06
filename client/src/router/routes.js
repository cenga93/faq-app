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
                    component: () => import('../views/Post/Posts.vue'),
               },
               {
                    path: '/profile',
                    name: 'Profile',
                    component: () => import('../views/Profile.vue'),
               },
               {
                    path: '/profile/:id',
                    name: 'ProfileInfo',
                    component: () => import('../views/ProfileInfo.vue'),
               },
               {
                    path: '/post/:id',
                    name: 'Post',
                    component: () => import('../views/Post/SinglePost.vue'),
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
