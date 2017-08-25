import kbtHeader from './components/public/header'
import kbthome from './components/home/home'
import kbtFooter from './components/public/footer'
import '../static/css/shared.css'
import '../static/animationcss/animationcss.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('kbtheader', kbtHeader)
Vue.component('kbtHome', kbthome)
Vue.component('kbtFooter', kbtFooter)
Vue.use(VueAMap)
Vue.use(VueAxios, axios)

VueAMap.initAMapApiLoader({
  key: '7bb96595ff6b951aa9564736f5a5389d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

