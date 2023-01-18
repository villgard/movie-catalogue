import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index.vue';
import Film from '@/views/film/_id.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: Index,
  },
  {
    name: 'film',
    path: '/:film',
    component: Film,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
