import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/app/films/components/home/Home.vue'
import Login from '@/app/auth/Login.vue'
import Register from '@/app/auth/Register.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/home",
      name: "Home",
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