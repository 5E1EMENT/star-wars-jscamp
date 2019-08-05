import Vue from "vue";
import Vuex from "vuex";
import auth from "@/app/auth/store/auth.js";
import homePage from "@/app/films/store/homePage.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    homePage
  }
});
