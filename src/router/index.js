import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRouter from './staticRouter'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: staticRouter
})

export default router
