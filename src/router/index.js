import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo1 from '@/components/demo1.vue'
import Login from '../components/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo1',
      name:'demo1',
      component:demo1
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    }
  ]
})
