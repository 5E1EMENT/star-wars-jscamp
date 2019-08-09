import firebase from "firebase/app";

export default {
  state: {
    uid: null
  },
  getters: {
    getUserId: state => state.uid
  },
  mutations: {
    setUid: (state, uid) => (state.uid = uid)
  },
  actions: {
    /**
     * Login action allows to login user with email and password.
     *
     * @param {Object} context vuex context.
     * @param {Function} context.dispatch action dispatcher.
     * @param {Function} context.commit mutation initiation.
     * @param {Object} payload action payload.
     * @param {string} payload.email user email.
     * @param {string} payload.password user password.
     */
    async login({ commit }, { email, password }) {
      try {
        const user = await firebase.auth().currentUser;
        await commit("setUid", user);
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        throw err;
      }
    },
    /**
     * Register action allows to register user with name, email and password.
     *
     * @param {Object} store vuex context.
     * @param {Object} payload action payload.
     * @param {string} payload.email user email.
     * @param {string} payload.password user password.
     * @param {string} payload.name user name.
     */
    async register(store, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await store.getters.getUid;
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({ name });
      } catch (err) {
        throw err;
      }
    },
    /**
     * Action allows to
     * get current user uid
     */
    async getUid() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    /**
     * Action allows to
     * get current user email
     */
    async getUserEmail() {
      const user = await firebase.auth().currentUser;
      return user ? user.email : null;
    },
    /**
     * Acton allows to logout current user
     */
    async logout() {
      await firebase.auth().signOut();
    }
  }
};
