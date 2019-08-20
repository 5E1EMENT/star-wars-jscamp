import Vue from 'vue';
import {default as auth} from '@/app/auth/routes.js'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...auth
  ]
});