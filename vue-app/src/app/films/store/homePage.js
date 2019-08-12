import firebase from "firebase/app";

export default {
  /**
   * Sidebar state
   */
  state: {
    sidebarState: false,
    filmsData: null
  },
  getters: {
    /**
     * Getter allows to get current
     * sidebar state
     * @param {Object} state vuex state
     */
    getSidebarState(state) {
      return state.sidebarState;
    }
  },
  mutations: {
    /**
     * Mutation allows to invert
     * sidebar state by click
     * @param {Object} state vuex state
     */
    invertSidebarState(state) {
      state.sidebarState = !state.sidebarState;
    }
  },
  actions: {
    /**
     * Action emits mutation invertSidebarState
     * @param {Object} context vuex context
     * @param {Function} context.commit mutation initiation.
     */
    changeSidebarState({ commit }) {
      commit("invertSidebarState");
    },
    /**
     * Fetching films data from firebase database
     */
    async loadFilms() {
      return (await firebase
        .database()
        .ref("swapi/films")
        .once("value")).val().map(item => item.fields);
    },
    /**
     * 
     * @param {Object} state vuex state
     * @param {Number} filmId current film id
     */
    async loadFilm(state, filmId) {
      return (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields`)
        .once("value")).val();
    }
  }
};
