import Vue from 'vue';
import Router from 'vue-router'
import firebase from 'firebase/app'
import Home from '@/app/films/components/home/Home.vue';
import Login from '@/app/auth/Login.vue';
import Register from '@/app/auth/Register.vue';
Vue.use(Router);

/**
 * Router - application routes functional
 */
const router =  new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/home",
      name: "Home",
      meta: {auth: true},
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
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
  } else if (!requireAuth && currentUser) {
    next('/home')
  } else {
    next()
  }
})

export default router;