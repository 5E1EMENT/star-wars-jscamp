import Vue from 'vue';
import Router from 'vue-router'
import firebase from 'firebase/app'

import {default as auth} from '@/app/auth/routes.js'
import {default as home} from '@/app/films/routes.js'
const PageNotFound = () => import('@/pages/PageNotFound')

Vue.use(Router);

/**
 * Router - application routes functional
 */
global.router =  new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: PageNotFound
    },
    ...auth,
    ...home
  ]
});

/**
 * Router guard
 */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login')
  }else {
    next()
  }
})

export default router;