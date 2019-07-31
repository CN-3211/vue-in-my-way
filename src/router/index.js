import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TestElementUI from '@/components/testElementUI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestElementUI',
      component: TestElementUI
    }
  ]
})
