import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const UserHome = { template: '<div>13123123</div>' }

const router = new Router({
  routes: [
    {
      path: '/home',
      component: require('../components/home/home.vue'),
      alias: '/',
      children: [
        {path: '', component: require('../components/home/news')},
        {path: 'news', component: require('../components/home/news')},
        {path: 'products', component: require('../components/home/products')}
      ]
    }
  ]
})

export default router
