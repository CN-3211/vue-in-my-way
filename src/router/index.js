import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/todoList'
import FormSubmit from '@/components/FormSubmit'
import Test from '@/test/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/formSubmit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
