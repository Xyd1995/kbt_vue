import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: require('../components/home/home'),
      alias: '/',
      children: [
        {
          path: 'kbt-show',
          component: require('../components/home/homeShow'),
          alias: '/'
        }
      ]
    },
    {
      path: '/column',
      name: 'column',
      component: require('../components/column/column')
    },
    {
      path: '/about',
      name: 'about',
      component: require('../components/column/abouts')
    },
    {
      path: '/columnProducts',
      component: require('../components/products/columnProducts')
    }
  ]
})

export default router
