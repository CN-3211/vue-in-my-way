import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Todolist from '@/components/todoList'
import FormSubmit from '@/components/formSubmit'
import EchartV from '@/components/EchartV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/formSubmit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/echartV',
      name: 'EchartV',
      component: EchartV
    }
  ]
})
