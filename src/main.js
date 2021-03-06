// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bg from './components/Bg.vue'
require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div><Bg/> <App/></div>',
  components: {
    App,
    Bg
  }
})
