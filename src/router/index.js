import Vue from 'vue'
import Router from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    }
  ]
})
