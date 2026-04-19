import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'


import PortfolioList from '@/views/portfolio/PortfolioList.vue'
import PortfolioDetail from '@/views/portfolio/PortfolioDetail.vue'

import { isLogin } from '@/services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/portafolios',
      name: 'portafolios',
      component: PortfolioList,
      meta: { requiresAuth: true },
    },
    {
      path: '/portafolio/:id',
      name: 'portfolioDetail',
      component: PortfolioDetail,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = isLogin();
  if (to.path === '/login' && loggedIn) {
    next('/')
  } else if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
});

export default router