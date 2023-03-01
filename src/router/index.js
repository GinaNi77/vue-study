import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name:"catalog",
    path:'/',
    component: ()=>import('../components/v-catalog.vue')
  },
  {
    name:"cart",
    path:'/cart',
    component: ()=>import('../components/v-cart.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
