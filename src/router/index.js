import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewBrothers from '../views/HomeViewBrothers.vue'
import MenuView from '../views/MenuView.vue'
import KontaktView from '../views/KontaktView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewBrothers
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/contact',
    name: 'contact',
    component : KontaktView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
