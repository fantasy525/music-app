import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
// Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(
    VueLazyLoad, {
      loading: require('common/image/default.png')
    })
  /* eslint-disable no-new */
console.log(store)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})