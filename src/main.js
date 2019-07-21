// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwaiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import store from './store'
import 'reset-css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

Vue.config.productionTip = true
fastClick.attach(document.body)
Vue.use(VueAwesomeSwaiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
