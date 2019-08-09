import Vue from "vue";
import Vuex from "vuex";
import auth from "@/app/auth/store/auth.js";
import homePage from "@/app/films/store/homePage.js";
import filmCharacters from "@/app/films/store/filmCharacters.js"
Vue.use(Vuex);

/**
 * Vuex decomposed into 2 modules
 * @param auth - auth module
 * @param homePage - Home page module
 */
export default new Vuex.Store({
  modules: {
    auth,
    homePage,
    filmCharacters
  }
});
