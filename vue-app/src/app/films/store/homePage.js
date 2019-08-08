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
     * @param {*} state state
     */
    getSidebarState(state) {
      return state.sidebarState;
    }
  },
  mutations: {
    /**
     * Mutation allows to invert
     * sidebar state by click
     * @param {*} state state
     */
    invertSidebarState(state) {
      state.sidebarState = !state.sidebarState;
    }
  },
  actions: {
    /**
     * Action emits mutation invertSidebarState
     * @param {*} param0 state
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
        .once("value")).val();
    },
    async loadFilm(state, filmId) {
      return (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields`)
        .once("value")).val();
    }
  }
};
