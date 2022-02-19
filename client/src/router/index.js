import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

router.beforeEach((to, _, next) => {
     document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
     next();
});

export default router;
