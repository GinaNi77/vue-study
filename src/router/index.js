import { createRouter, createWebHashHistory } from 'vue-router'
import vCart from '../components/v-cart.vue'
import vCatalog from '../components/v-catalog.vue'

const routes = [
  {
    name:"catalog",
    path:'/',
    component: vCatalog
  },
  {
    name:"cart",
    path:'/cart',
    component: vCart,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
