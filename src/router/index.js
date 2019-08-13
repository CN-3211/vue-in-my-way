import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/todoList'
import FormSubmit from '@/components/formSubmit'
import RefTrans from '@/components/refTrans/firstRef'

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
      path: '/refTrans',
      name: 'RefTrans',
      component: RefTrans
    }
  ]
})
