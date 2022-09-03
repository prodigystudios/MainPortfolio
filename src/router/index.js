import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import singleProjectView from '../views/SingleProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project/:id',
    name: 'project',
    component: singleProjectView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
