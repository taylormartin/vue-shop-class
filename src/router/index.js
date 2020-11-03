import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Example1 from '@/views/Example1.vue'
import Example2 from '@/views/Example2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/ex-1', component: Example1 },
  { path: '/ex-2', component: Example2 },
]

const router = new VueRouter({
    routes
})

export default router
