import { createRouter, createWebHistory } from 'vue-router'
import page1 from '@/components/Page1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/components/Page2.vue'),
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('@/components/Page3.vue'),
    },
    {
      path: '/pageDetail',
      name: 'pageDetail',
      component: () => import('@/views/PageDetail.vue'),
    },
  ],
})

export default router
