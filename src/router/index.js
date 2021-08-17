import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home'), // 동적 import
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});