import firebase from "firebase/app";

export default {
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
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        throw err;
      }
    },
    /**
     * Register action allows to register user with name, email and password.
     *
     * @param {Object} context vuex context.
     * @param {Function} context.dispatch action dispatcher.
     * @param {Object} payload action payload.
     * @param {string} payload.email user email.
     * @param {string} payload.password user password.
     * @param {string} payload.name user name.
     */
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
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
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    /**
     * Acton allows to logout current user
     */
    async logout() {
      await firebase.auth().signOut();
    }
  }
};
