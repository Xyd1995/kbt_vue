import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    },
    {
      path: '/cnas',
      component: require('../components/column/cnas')
    },
    {
      path: '/news',
      component: require('../components/news/news')
    },
    {
      path: '/qa',
      component: require('../components/column/qa')
    },
    {
      path: '/newsList',
      component: require('../components/news/newsList')
    },
    {
      path: '/connect',
      component: require('../components/column/connect')
    },
    {
      path: '/products',
      component: require('../components/column/products')
    },
    {
      path: '/productsList',
      component: require('../components/products/productsCloumnList')
    },
    {
      path: '/FilterHousing',
      component: require('../components/products/filterHousing')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  }
})

export default router
