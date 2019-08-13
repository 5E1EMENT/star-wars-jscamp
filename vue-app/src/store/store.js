import Vue from "vue";
import Vuex from "vuex";
import auth from "@/app/auth/store/auth.js";
import homePage from "@/app/films/store/homePage.js";
import filmData from "@/app/films/store/filmData.js"
import admin from '@/app/admin/store/admin.js'
Vue.use(Vuex);

/**
 * Vuex decomposed into 2 modules
 * @param auth - auth module
 * @param homePage - Home page module
 * @param filmData - Film data module
 * @param admin - Admin module
 */
export default new Vuex.Store({
  modules: {
    auth,
    homePage,
    filmData,
    admin
  }
});
