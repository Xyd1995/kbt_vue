import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: require('../components/home/home.vue'),
      alias: '/',
      children: [
        {
          path: 'kbt-show',
          component: require('../components/home/homeShow'),
          alias: '/'
        }
      ]
    }
  ]
})

export default router
