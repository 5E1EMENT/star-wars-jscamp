import Vue from 'vue';
import firebase from 'firebase/app'
import {default as auth} from '@/app/auth/routes.js'
import {default as films} from '@/app/films/routes.js'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...auth,
    ...films
  ]
});

/**
 * Router guard
 */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentUser) {
    next("/login");
  } else {
    next()
  }
  
});

export default router