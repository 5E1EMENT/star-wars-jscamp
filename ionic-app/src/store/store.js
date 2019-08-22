import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/app/auth/store/auth.store.js'
import films from '@/app/films/store/films.store.js'
import filmDetails from '@/app/films/store/filmDetails.store.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    films,
    filmDetails
  }
})
