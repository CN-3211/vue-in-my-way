import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/todoList'
import FormSubmit from '@/components/formSubmit'
import RefChild from '@/components/refChild'
import RefFarther from '@/components/refFarther'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/formSubmit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/refChild',
      name: 'RefChild',
      component: RefChild
    },
    {
      path: '/refFarther',
      name: 'RefFarther',
      component: RefFarther
    }
  ]
})
