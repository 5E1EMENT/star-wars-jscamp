import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home'
import Login from './../auth/Login'
import Register from './../auth/Register'
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
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