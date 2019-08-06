import firebase from "firebase/app";

export default {
  actions: {
    /**
     * Login action allows to
     * login user with email and password
     * @param {dispatch, commit} param0 context
     * @param {*} param1 user login form data
     */
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        throw err;
      }
    },
    /**
     * Register action allows to
     * register new user with payload data
     * @param {*} param0 context
     * @param {*} param1 user registration form data
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
