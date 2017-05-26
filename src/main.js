import kbtHeader from './components/public/header'
import '../static/css/shared.css'
import '../static/animationcss/animationcss.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('kbtheader', kbtHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
