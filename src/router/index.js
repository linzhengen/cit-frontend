import Vue from 'vue'
import Router from 'vue-router'
import LayoutBase from '@/views/layout/Base'
import NotFound from '@/views/error/404'
import MainRoutes from '@/router/main-routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: LayoutBase,
      children: MainRoutes
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
