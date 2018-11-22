import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/Head'
import Tabbar from '@/components/Tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: Tabbar
    }
  ]
})

// var router = new Router({
//   routes
// })
// export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
