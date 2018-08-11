import store from '@/store'
import router from '@/router'

/* eslint-disable no-unused-vars */
export default Vue => {
  // Authorize
  // Make sure that is the first hook.
  router.beforeHooks.unshift((to, from, next) => {
    // don't need authorize
    if (!to.meta.requiresAuth) return next()
    // check login state
    store.dispatch('checkToken')
      .then(valid => {
        // authorized
        if (valid) return next()
        // unauthorized
        next({name: 'LoginForm', query: {redirect: to.fullPath}})
      })
  })
}
