export default {
  /**
   * Sidebar state
   */
  state: {
    sidebarState: true
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
    }
  }
};
